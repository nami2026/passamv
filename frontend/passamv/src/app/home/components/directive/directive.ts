import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { Content } from '../../dto/content';
import { MaterialStudyService } from '../../services/material-study.service';
import { Area } from '../../dto/area';
import { Subscription } from 'rxjs';
import { Navbar } from '../navbar/navbar';
import { AreaService } from '../../services/area-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directive',
  imports: [Navbar, CommonModule],
  templateUrl: './directive.html',
  styleUrl: './directive.scss'
})
export class Directive implements OnInit {

  private contents: Content[];
  areas: Area[];
  area: Area;
  dataLoaded = signal(false);
  idAreaDirective: number = 2;
  contentsFinal: Content[];
  
  constructor(
    private materialService: MaterialStudyService,
    //private dataService: DataService,
    private areaService: AreaService,
    private router: Router
  ) {
    this.getArea();
  }

  async ngOnInit() {
    //setTimeout(() => {this.getAllContents()}, 1000);
    await this.getAllContents();
    //this.getAreas();
  }

  async getAllContents(){
    this.contents = await this.materialService.getDocuments();
    this.contentsFinal = this.contents.filter(content => 
              this.area.areaPerModules.some(areaModule => 
                content.module.id === areaModule.module));
    this.dataLoaded.set(true);
  }

  /*getAllContents(){
    this.materialService.getDocuments()
      .subscribe((res: Content[]) => {
          this.contents = res;
          this.contentsFinal = this.contents.filter(content => 
              this.area.areaPerModules.some(areaModule => 
                content.module.id === areaModule.module));
          console.log(this.contentsFinal)
      })
  }*/

  getArea() {
    this.areaService.getAreaById(this.idAreaDirective)
      .subscribe((res: Area) => {
         this.area = res;
      })
  }

  /*getAreas() {
    console.log("rrrrrrrrrrrrrrr")
    this.subscription = this.dataService.currentMessage.subscribe(message => {
      console.log("--------------", message);
      if (!!message){
        sessionStorage.setItem("areas", JSON.stringify(message));
        this.area = message;
      } else {
        this.area = JSON.parse(sessionStorage.getItem("areas") || '{}');
      }
    });

  }*/

  /*ngOnDestroy() {
    this.subscription.unsubscribe();
  }*/

  showFile(name: string, file: string) {
    window.open(file, '_blank');
  }

  makeExam() {
    this.router.navigate(["/examen-directivo"])
  }

  getHistorical() {
    this.router.navigate(["/historico"])
  }

}
