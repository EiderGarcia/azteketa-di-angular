import {Component, inject, signal } from '@angular/core';
import { Opendata } from '../services/opendata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-air-stations',
  imports: [],
  templateUrl: './air_stations.html',
  styleUrl: './air_stations.css',
})
export class AirStations { 
  private opendata = inject(Opendata);
private router = inject(Router);
  stations = signal<any[]>([]);
  ngOnInit(){
    this.opendata.stations().subscribe(response => {
      console.log('API response:', response);
      this.stations.set(response.features);
    });
  }
  public goToStation(station_id: number): void { 
  this.router.navigate(['/station', station_id]);
  }
}
