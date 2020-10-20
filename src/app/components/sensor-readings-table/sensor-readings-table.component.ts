import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { FormatConverterService } from 'src/app/services/format-converter.service';

@Component({
  selector: 'app-sensor-readings-table',
  templateUrl: './sensor-readings-table.component.html',
  styleUrls: ['./sensor-readings-table.component.sass']
})
export class SensorReadingsTableComponent {
	public readonly boxId = this.route.snapshot.paramMap.get('boxId');
	public readonly sensorId = this.route.snapshot.paramMap.get('sensorId');

	public readonly sensor$ = this.store.select(
		({ sensorReadings: { readings } }) => this.formatConverter.getSensorReadings(readings, this.boxId, this.sensorId)
	);

	public columns = ['reading', 'readingTimeStamp'];

	constructor(
		private readonly store: Store<AppState>,
		private readonly formatConverter: FormatConverterService,
		private readonly router: Router,
		private readonly route: ActivatedRoute,
	) { }
}
