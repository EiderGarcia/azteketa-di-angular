import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Opendata {
 private http = inject(HttpClient);
  private baseUrl = "https://api.euskadi.eus/air-quality/stations?lang=BASQUE";
 
  stations(){
    return this.http.get<any>(`${this.baseUrl}`);
  }
  station_info(station_id: string){
   return this.http.get<any>(`${this.baseUrl}/${station_id}`);
  
  }
}
