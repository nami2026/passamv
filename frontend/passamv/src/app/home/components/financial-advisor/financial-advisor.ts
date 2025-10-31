import { Component, OnInit, signal } from '@angular/core';
import { MaterialStudyService } from '../../services/material-study.service';
import { Content } from '../../dto/content';
import { Navbar } from '../navbar/navbar';
import { AreaService } from '../../services/area-service';
import { Area } from '../../dto/area';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial-advisor',
  imports: [Navbar, CommonModule],
  templateUrl: './financial-advisor.html',
  styleUrl: './financial-advisor.scss'
})
export class FinancialAdvisor implements OnInit {

  private contents: Content[];
  area: Area;
  FinancialAdvisor: number = 1;
  contentsFinal: Content[];
  dataLoaded = signal(false);

  constructor(
      private materialService: MaterialStudyService,
      private areaService: AreaService,
      private router: Router
  ) {
    this.getArea();
  }

  async ngOnInit() {
    await this.getAllContents();
  }

  async getAllContents(){
    this.contents = await this.materialService.getDocuments();
    this.contentsFinal = this.contents.filter(content => 
              this.area.areaPerModules.some(areaModule => 
                content.module.id === areaModule.module));
    this.dataLoaded.set(true);
  }

  getArea() {
    this.areaService.getAreaById(this.FinancialAdvisor)
      .subscribe((res: Area) => {
         this.area = res;
      })
  }

  showFile(name: string, file: string) {
    window.open(file, '_blank');
  }

  makeExam() {
    this.router.navigate(["/examen-asesor-financiero"])
  }

  getHistorical() {
    this.router.navigate(["/historico"])
  }

}
