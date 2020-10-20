import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxReadingsTableComponent } from './components/box-readings-table/box-readings-table.component';
import { BoxSensorsTableComponent } from './components/box-sensors-table/box-sensors-table.component';
import { BoxesTableComponent } from './components/boxes-table/boxes-table.component';
import { SensorReadingsTableComponent } from './components/sensor-readings-table/sensor-readings-table.component';

const routes: Routes = [
	{
		path: 'boxes',
		component: BoxesTableComponent
	},
	{
		path: 'boxes/:boxId/readings',
		component: BoxReadingsTableComponent
	},
	{
		path: 'boxes/:boxId/sensors',
		component: BoxSensorsTableComponent
	},
	{
		path: 'boxes/:boxId/sensors/:sensorId/readings',
		component: SensorReadingsTableComponent
	},
	{
		path: '**',
		redirectTo: '/boxes'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
