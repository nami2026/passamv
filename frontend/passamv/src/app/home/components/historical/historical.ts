import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Historical } from '../../dto/historical';
import { HistoricalService } from '../../services/historical-service';

@Component({
  selector: 'app-historical',
  imports: [Navbar, CommonModule],
  templateUrl: './historical.html',
  styleUrl: './historical.scss',
})
export class HistoricalComponent implements OnInit {

  historical: Historical[];
  dataLoaded = signal(false);

  constructor(
        private historicalService: HistoricalService
    ) {}

  async ngOnInit() {
    const userId = Number(sessionStorage.getItem("idUser"));
    this.historical = await this.historicalService.getByUserId(userId);
    this.historical = [...this.historical].sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateB.getTime() - dateA.getTime();
    });

    this.dataLoaded.set(true);
  }


}
