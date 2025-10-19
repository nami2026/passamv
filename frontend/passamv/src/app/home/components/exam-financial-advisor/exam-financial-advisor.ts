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

  constructor(
      private itemService: ItemService,
      private componentAmvService: ComponentAmvService,
      private areaService: AreaService
  ) {}

  async ngOnInit() {
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

  getPrevious() {
    this.defaultPosition = this.defaultPosition - 1;
    if(this.defaultPosition < 0) {
      this.defaultPosition = this.modules.length - 1;
    }
    this.examsPart = [this.exams[this.defaultPosition]]
  }

  getColor(index: number): string {
    if(this.defaultPosition === index)
      return "active"
    return ""
  }

  onItemChange(value: any, optionId: number, itemId: number) {
    let item: Item[];

    item = this.examsPart.flatMap(exam => exam.items.filter(item=> item.id === itemId))
    item.forEach(it => it.options.forEach(opt => {
      if(opt.id === optionId) 
        opt.isSelected = true
      else
        opt.isSelected = false}))

    this.examsPart.forEach(exam => exam.items.forEach((itemExam:Item) => {
      if(itemExam.id === itemId)
        itemExam = item[0]
      }))
  }


}
