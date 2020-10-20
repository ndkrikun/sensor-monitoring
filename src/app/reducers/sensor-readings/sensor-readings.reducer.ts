import { UpdateAllReadingsReducer } from './actions/update-all-readings.action';
import { SensorReadingsActionTypes } from './sensor-readings.action-types';
import { SensorReadingsState } from './sensor-readings.state';

const sensorReadingsDefaultState: SensorReadingsState = {
	readings: []
};

type SensorReadingsActions = (
	| UpdateAllReadingsReducer
);

export function sensorReadingsReducer(
	this: void,
	state = sensorReadingsDefaultState,
	action: SensorReadingsActions,
): SensorReadingsState {
	switch (action.type) {
		case SensorReadingsActionTypes.UPDATE_ALL_READINGS: return action.reduce(state, action);
		default: return state;
	}
}
