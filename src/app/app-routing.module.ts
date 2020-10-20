import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxReadingsTableComponent } from './components/box-readings-table/box-readings-table.component';
import { BoxesTableComponent } from './components/boxes-table/boxes-table.component';

const routes: Routes = [
	{
		path: 'boxes',
		component: BoxesTableComponent
	},
	{
		path: 'boxes/:id/readings',
		component: BoxReadingsTableComponent
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
