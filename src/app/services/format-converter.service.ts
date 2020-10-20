import { Injectable } from '@angular/core';
import { BoxInfo } from '../models/box.model';
import { SensorReading } from '../models/sensor-reading.model';
import { SensorInfo } from '../models/sensor.model';

@Injectable({
  providedIn: 'root'
})
export class FormatConverterService {

	constructor() { }

	public getAllBoxes(readings: SensorReading[]): BoxInfo[] {
		return readings.reduce((acc, reading) => {
			const existingIndex = acc.findIndex(el => el.id === reading.box_id);
			if (existingIndex >= 0) {
				acc[existingIndex].sensorsQuantity += 1;
			} else {
				acc.push({
					id: reading.box_id,
					longitude: reading.longitude,
					latitude: reading.latitude,
					sensorsQuantity: 1
				});
			}

			return acc;
		}, [] as BoxInfo[]);
	}

	public getSensorsInBox(readings: SensorReading[], boxId: string): SensorInfo[] {
		return readings
			.filter(({ box_id }) => box_id === boxId)
			.map(({id, name, sensor_type, range_l, range_u, reading, unit, reading_ts}) => ({
				id,
				type: sensor_type,
				name,
				lowerRange: range_l,
				upperRange: range_u,
				reading,
				unit,
				readingTimeStamp: reading_ts
			}));
	}
}
