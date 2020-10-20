import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { UpdateAllReadingsReducer } from './reducers/sensor-readings/actions/update-all-readings.action';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	public readonly sensorReadings$ = this.store.select(({sensorReadings: {readings}}) => readings);

	constructor(
		private readonly request: RequestService,
		private readonly store: Store<AppState>
	) {}

	public async ngOnInit(): Promise<void> {
		const readings = await this.request.getSensorReadings();
		this.store.dispatch(new UpdateAllReadingsReducer(readings));
	}
}
