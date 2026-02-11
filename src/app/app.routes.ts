import { Station } from './station/station';
import { Routes } from '@angular/router';
import { AirStations } from './air_stations/air_stations';
import { Euskalmet } from './euskalmet/euskalmet';
import { Events } from './events/events';
export const routes: Routes = [
    {
        path: 'station/:id',
        component: Station
    },
    {
        path: 'air_stations',
        component: AirStations
    },
    {
        path: 'cultural_events',
        component: Events
    },
    {
        path: 'euskalmet',
        component: Euskalmet
    },
    {
        path: '',
        redirectTo: 'air_stations',
        pathMatch: 'full'
    }
];
