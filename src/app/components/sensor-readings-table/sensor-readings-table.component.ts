import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { FormatConverterService } from 'src/app/services/format-converter.service';

@Component({
  selector: 'app-sensor-readings-table',
  templateUrl: './sensor-readings-table.component.html',
  styleUrls: ['./sensor-readings-table.component.sass']
})
export class SensorReadingsTableComponent {
	/**
	 * Box id from the route
	 */
	public readonly boxId = this.route.snapshot.paramMap.get('boxId');

	/**
	 * Sensor id from the route
	 */
	public readonly sensorId = this.route.snapshot.paramMap.get('sensorId');

	/**
	 * Sensor readings and general data
	 */
	public readonly sensor$ = this.store.select(
		({ sensorReadings: { readings } }) => this.formatConverter.getSensorReadings(readings, this.boxId, this.sensorId)
	);

	/**
	 * All columns from the table
	 */
	public columns = ['reading', 'readingTimeStamp'];

	constructor(
		private readonly store: Store<AppState>,
		private readonly formatConverter: FormatConverterService,
		private readonly route: ActivatedRoute,
	) { }
}
