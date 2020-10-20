import { Action } from '@ngrx/store';
import { ResponseSensorReading } from 'src/app/models/response-sensor-reading.model';
import { SensorReadingsActionTypes } from '../sensor-readings.action-types';
import { SensorReadingsState } from '../sensor-readings.state';

export class UpdateAllReadingsReducer implements Action {

	public readonly type = SensorReadingsActionTypes.UPDATE_ALL_READINGS;

	constructor(
		public readonly payload: ResponseSensorReading[]
	) { }

	public reduce(this: void, state: SensorReadingsState, action: UpdateAllReadingsReducer): SensorReadingsState {
		return {
			...state,
			readings: action.payload
		};
	}
}
