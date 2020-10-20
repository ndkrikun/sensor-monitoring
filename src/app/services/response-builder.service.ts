import { Injectable } from '@angular/core';
import { SensorReading } from '../models/sensor-reading.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseBuilderService {

	constructor() { }

	public prepareSensorReadings(data: string): SensorReading[] {
		return data
			.split('\n')
			.reduce(
				(acc, el) => !!el ? acc.concat(JSON.parse(el)) : acc,
				[] as SensorReading[]
			);
	}
}
