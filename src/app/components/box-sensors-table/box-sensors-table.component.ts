import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { FormatConverterService } from 'src/app/services/format-converter.service';

@Component({
  selector: 'app-box-sensors-table',
  templateUrl: './box-sensors-table.component.html',
  styleUrls: ['./box-sensors-table.component.sass']
})
export class BoxSensorsTableComponent {
	private readonly boxId = this.route.snapshot.paramMap.get('id');

	public readonly boxSensors$ = this.store.select(
		({sensorReadings: {readings}}) => this.formatConverter.getSensorsInBox(readings, this.boxId)
	);

	public columns = ['id', 'type', 'name', 'lowerRange', 'upperRange', 'reading', 'unit', 'readingTimeStamp'];

	constructor(
		private readonly store: Store<AppState>,
		private readonly route: ActivatedRoute,
		private readonly formatConverter: FormatConverterService
	) { }

}
