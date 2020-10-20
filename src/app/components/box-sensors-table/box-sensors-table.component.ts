import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { FormatConverterService } from 'src/app/services/format-converter.service';

@Component({
  selector: 'app-box-sensors-table',
  templateUrl: './box-sensors-table.component.html',
  styleUrls: ['./box-sensors-table.component.sass']
})
export class BoxSensorsTableComponent {
	public readonly boxId = this.route.snapshot.paramMap.get('boxId');

	public readonly boxSensors$ = this.store.select(
		({sensorReadings: {readings}}) => this.formatConverter.getBoxSensors(readings, this.boxId)
	);

	public columns = ['type', 'name', 'range'];

	constructor(
		private readonly store: Store<AppState>,
		private readonly formatConverter: FormatConverterService,
		private readonly router: Router,
		private readonly route: ActivatedRoute,
	) { }

	public goToSensorReadingsList(sensorId: string): void {
		this.router.navigateByUrl(`boxes/${this.boxId}/sensors/${sensorId}/readings`);
	}

}
