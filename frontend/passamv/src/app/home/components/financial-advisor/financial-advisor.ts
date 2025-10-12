import { Component, OnInit, signal } from '@angular/core';
import { MaterialStudyService } from '../../services/material-study.service';
import { Content } from '../../dto/content';
import { Navbar } from '../navbar/navbar';
import { AreaService } from '../../services/area-service';
import { Area } from '../../dto/area';
import { CommonModule } from '@angular/common';
import { FileService } from '../../services/file-service';

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
      private fileService: FileService
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

  /*downloadFile(name: string, file: Blob) {
    const link = document.createElement('a');
     link.href = `data:${"application/pdf"};base64,${file}`;
     link.download = name;
     document.body.appendChild(link); // Append to body temporarily
     link.click();
     document.body.removeChild(link); // Remove after click
  }*/

  showFile(name: string, file: string) {
    /*const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = file;
    link.download = name;
    link.click();
    document.body.removeChild(link);*/

    window.open(file, '_blank');

    /* this.fileService.downloadFile(file, name).subscribe(blob => {
      this.fileService.saveFile(blob, name);
    }); */

  }

}
