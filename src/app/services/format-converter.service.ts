import { Injectable } from '@angular/core';
import { BoxInfo } from '../models/box.model';
import { ResponseSensorReading } from '../models/response-sensor-reading.model';
import { BoxReadingInfo } from '../models/box-reading.model';
import { SensorInfo, SensorReadingsInfo } from '../models/sensor.model';

@Injectable({
  providedIn: 'root'
})
export class FormatConverterService {
	/**
	 * Returns all available boxes info
	 */
	public getAllBoxes(readings: ResponseSensorReading[]): BoxInfo[] {
		return readings.reduce((acc, reading) => {
			const existingIndex = acc.findIndex(el => el.id === reading.box_id);
			if (existingIndex >= 0) {
				acc[existingIndex].readingsQuantity += 1;
			} else {
				acc.push({
					id: reading.box_id,
					longitude: reading.longitude,
					latitude: reading.latitude,
					readingsQuantity: 1
				});
			}

			return acc;
		}, [] as BoxInfo[]);
	}

	/**
	 * Returns all readings info from the box
	 */
	public getBoxReadings(readings: ResponseSensorReading[], boxId: string): BoxReadingInfo[] {
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

	/**
	 * Returns all available sensors from the box
	 */
	public getBoxSensors(readings: ResponseSensorReading[], boxId: string): SensorInfo[] {
		return readings.filter(({ box_id }) => box_id === boxId).reduce((acc, reading) => {
			return acc.some(el => el.id === reading.id) ? acc : acc.concat({
				id: reading.id,
				type: reading.sensor_type,
				name: reading.name,
				lowerRange: reading.range_l,
				upperRange: reading.range_u,
			});
		}, [] as SensorInfo[]);
	}

	/**
	 * Returns readings information from the sensor
	 */
	public getSensorReadings(readings: ResponseSensorReading[], boxId: string, sensorId: string): SensorReadingsInfo {
		const items = readings.filter((reading) => reading.box_id === boxId && reading.id === sensorId);
		const { id, sensor_type, name, range_l, range_u } = items[0];
		return {
			id,
			type: sensor_type,
			name,
			lowerRange: range_l,
			upperRange: range_u,
			readings: items.map(({reading, unit, reading_ts}) => ({
				reading,
				unit,
				readingTimeStamp: reading_ts
			}))
		};
	}
}
