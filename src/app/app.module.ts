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
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoxesTableComponent } from './components/boxes-table/boxes-table.component';
import { BoxReadingsTableComponent } from './components/box-readings-table/box-readings-table.component';
import { BoxesMapComponent } from './components/boxes-map/boxes-map.component';



@NgModule({
	declarations: [
		AppComponent,
		BoxesTableComponent,
		BoxReadingsTableComponent,
		BoxesMapComponent
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
		MatSelectModule,
		MatDialogModule,
		FormsModule,
		StoreModule.forRoot<AppState>({
			sensorReadings: sensorReadingsReducer
		}),
		StoreDevtoolsModule.instrument()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
