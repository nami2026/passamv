import { Component, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { AreaService } from '../../services/area-service';
import { Area } from '../../dto/area';
import { DataService } from '../../services/data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  
  areas: Area[];
  idAreaDirective: number = 2;
  idAreaCommercialAdvisor: number = 1;

  constructor(
    private areaService: AreaService,
    private dataService: DataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAllAreas();
  }

  getAllAreas(){
    this.areaService.getAreas()
      .subscribe((res: Area[]) => {
         this.areas = res;
      })
  }
  
  sendAreas(areaId: number) {
    const area = this.areas.filter((area) => area.id === areaId)[0];
    this.dataService.changeMessageArea(area);
    areaId === this.idAreaDirective ? this.router.navigate(["/directivo"]) : this.router.navigate(["/asesor-financiero"]);
  }

}
