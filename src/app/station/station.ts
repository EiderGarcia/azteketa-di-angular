import { CommonModule } from '@angular/common';
import { Component, inject, OnInit,  signal } from '@angular/core';
import { Opendata } from '../services/opendata';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-station',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './station.html',
  styleUrl: './station.css',
})
export class Station  implements OnInit {
  private opendata = inject(Opendata);
  private route = inject(ActivatedRoute);

  station = signal<any | null>(null);
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    console.log('EVENT ID FROM ROUTE:', id);

    if (!id) return; 

    this.station.set(null); 

    this.opendata.station_info(id).subscribe(data => {
      console.log('STATIONS RESPONSE:', data);
    this.station.set(data.features);
    });
  });
  }
}
