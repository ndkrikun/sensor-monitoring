import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxSensorsTableComponent } from './components/box-sensors-table/box-sensors-table.component';
import { BoxesTableComponent } from './components/boxes-table/boxes-table.component';

const routes: Routes = [
	{
		path: 'boxes',
		component: BoxesTableComponent
	},
	{
		path: 'boxes/:key/sensors',
		component: BoxSensorsTableComponent
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
