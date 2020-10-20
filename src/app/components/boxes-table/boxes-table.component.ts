import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { FormatConverterService } from 'src/app/services/format-converter.service';

@Component({
  selector: 'app-boxes-table',
  templateUrl: './boxes-table.component.html',
  styleUrls: ['./boxes-table.component.sass']
})
export class BoxesTableComponent {
	public readonly boxes$ = this.store.select(
		({sensorReadings: {readings}}) => this.formatConverter.getAllBoxes(readings)
	);

	public readonly columns = ['id', 'coordinates', 'sensorsQuantity'];

	constructor(
		private readonly store: Store<AppState>,
		private readonly formatConverter: FormatConverterService,
		private readonly router: Router,
	) { }

	public goToSensorsList(id: string): void {
		this.router.navigateByUrl(`boxes/${id}/sensors`);
	}

}
