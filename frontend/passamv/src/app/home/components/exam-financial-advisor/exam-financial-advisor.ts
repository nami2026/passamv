import { Component, OnInit, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';
import { Item } from '../../dto/item';
import { ItemService } from '../../services/item-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentAmvService } from '../../services/componentamv';
import { ComponentAmv } from '../../dto/componentamv';
import { Exam } from '../../dto/exam';
import { AreaService } from '../../services/area-service';
import { Area } from '../../dto/area';
import { Module } from '../../dto/module';
import { ExamService } from '../../services/exam';
import { ExamItem } from '../../dto/exam-item';
import { HistoricalService } from '../../services/historical-service';
import { Historical } from '../../dto/historical';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam-financial-advisor',
  imports: [Navbar, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './exam-financial-advisor.html',
  styleUrl: './exam-financial-advisor.scss'
})
export class ExamFinancialAdvisor implements OnInit {

  
  public items: Item[];
  itemsFinal: Item[];
  public componentsAmv: ComponentAmv[];
  public componentsAmvFiltered: ComponentAmv[] = [];
  dataLoaded = signal(false);
  exams: Exam[] = [];
  areaId: number = 1;
  area: Area;
  modules: Module[] = [];
  modulesId: number[] = []
  defaultPosition: number = 0;
  examsPart: Exam[] = [];
  successAnswersId: number[] = [];
  answersIdSelected: number[] = [];
  examItem: ExamItem;
  activeButtonFinish: boolean = false;

  rightAnswersIdSelected: number[] = [];
  wrongAnswersIdSelected: number[] = [];

  constructor(
      private itemService: ItemService,
      private componentAmvService: ComponentAmvService,
      private areaService: AreaService,
      private examService: ExamService,
      private historicalService: HistoricalService
  ) {}

  async ngOnInit() {
    this.examItem = await this.examService.saveExam();
    await this.getAllItems();
  }

  async getAllItems() {
    this.itemService.getItems().subscribe((response: Item[]) => {
      this.items = response;
      this.items.forEach(item => item.options.forEach(option => option.isSelected = false))
      this.getComponentsAmv();
    })
  }

  getComponentsAmv() {
    this.componentAmvService.getComponentsAmv().subscribe ((response: ComponentAmv[]) => {
      this.componentsAmv = response;
      this.getAreaById();
    })
  }

  getAreaById() {
    this.areaService.getAreaById(this.areaId).subscribe((res: Area) => {
      this.area = res;

      this.itemsFinal = this.items.filter(item =>
        this.area.areaPerModules.some(areaPerModule => 
          item.module === areaPerModule.module
      ))

      this.modulesId = this.area.areaPerModules.map(am => am.module)
      this.modulesId = [...new Set(this.modulesId)]

      this.componentsAmv.forEach(compAmv => {
        const module: any = compAmv.modules.filter(mod => this.modulesId.includes(mod.id))
        this.modules = this.modules.concat(module)
      })

      this.modules.forEach(mod => {
        const itemFinal: Item[] = this.itemsFinal.filter(item => item.module === mod.id)
        if(itemFinal.length > 0)
          this.exams = this.exams.concat({items: itemFinal, type: mod.name})
      })

      this.examsPart = [this.exams[this.defaultPosition]]

      this.itemsFinal.map(item => {
        item.options.map(opt => {
          if(opt.rightAnswer === true) {
            this.successAnswersId.push(opt.id)
          }
        })
      })

      this.dataLoaded.set(true);
    })
  }

  selectItems(index: number) {
    this.examsPart = [this.exams[index]]
    this.defaultPosition = index;
  }

  getNext() {
    this.defaultPosition = this.defaultPosition + 1;
    if(this.defaultPosition > (this.modules.length - 1)) {
      this.defaultPosition = 0;
    }
    this.examsPart = [this.exams[this.defaultPosition]]
  }

  async sendHistorical() {
    this.activeButtonFinish = true;
    const historical: Historical = {
      ids: {
        userId: Number(sessionStorage.getItem("idUser")),
        areaId: this.areaId,
        examId: this.examItem.id
      },
      endDate: this.subtractHours(new Date(), 5),
      startDate: this.examItem.date,
      rightAnswersId: this.rightAnswersIdSelected.toString(),
      wrongAnswersId: this.wrongAnswersIdSelected.toString(),
      score: this.rightAnswersIdSelected.length,
      status: this.answersIdSelected.length === this.exams.length ? "FINISHED" : "PENDING",
      totalScore: (5/this.successAnswersId.length) * this.rightAnswersIdSelected.length
    }
    await this.historicalService.saveHistorical(historical);
    Swal.fire({
      title: "Felicidades, ha finalizado el examen",
      text: "Tu nota ha sido de " + ((Math.floor(((5/this.successAnswersId.length) * this.rightAnswersIdSelected.length)*1000)/1000).toFixed(2)).toString() + "/" + 5,
      icon: "success",
      footer: '<a href="/asesor-financiero">Regresar al material de estudio</a> <a href="/examen-asesor-financiero">Repetir el examen</a>'
    });

  }

  subtractHours(date: Date, hours: number) {
    date.setHours(date.getHours() - hours);
    return date;
  }

  getPrevious() {
    this.defaultPosition = this.defaultPosition - 1;
    if(this.defaultPosition < 0) {
      this.defaultPosition = this.modules.length - 1;
    }
    this.examsPart = [this.exams[this.defaultPosition]]
  }

  onItemChange(optionId: number, itemId: number) {
    let item: Item[];

    item = this.examsPart.flatMap(exam => exam.items.filter(item=> item.id === itemId))

    item.forEach(it => it.options.forEach(opt => {
      if(opt.id === optionId) 
        opt.isSelected = true
      else
        opt.isSelected = false}))

    const selectedId = item[0].options.filter(opt => opt.isSelected === true).map(opt => opt.id)
    const noSelectedIds = item[0].options.filter(opt => opt.isSelected === false).map(opt => opt.id)
    this.answersIdSelected.push(selectedId[0])
    this.answersIdSelected = this.answersIdSelected.filter(item => !noSelectedIds.includes(item));

    this.rightAnswersIdSelected = this.successAnswersId.filter(item => this.answersIdSelected.includes(item));
    this.wrongAnswersIdSelected = this.successAnswersId.filter(item => !this.answersIdSelected.includes(item));

    this.examsPart.forEach(exam => exam.items.forEach((itemExam:Item) => {
      if(itemExam.id === itemId)
        itemExam = item[0]
      }))
  }


}
