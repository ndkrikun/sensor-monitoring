import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppState } from './app.state';
import { sensorReadingsReducer } from './reducers/sensor-readings/sensor-readings.reducer';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BoxesTableComponent } from './components/boxes-table/boxes-table.component';
import { BoxSensorsTableComponent } from './components/box-sensors-table/box-sensors-table.component';



@NgModule({
	declarations: [
		AppComponent,
		BoxesTableComponent,
		BoxSensorsTableComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatToolbarModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		MatInputModule,
		StoreModule.forRoot<AppState>({
			sensorReadings: sensorReadingsReducer
		}),
		StoreDevtoolsModule.instrument()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
