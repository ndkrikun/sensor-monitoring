import { Injectable } from '@angular/core';
import { ResponseSensorReading } from '../models/response-sensor-reading.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseBuilderService {
	/**
	 * Creates a valid response data from the raw response
	 */
	public prepareSensorReadings(data: string): ResponseSensorReading[] {
		try {
			return data
				.split('\n')
				.reduce(
					(acc, el) => !!el ? acc.concat(JSON.parse(el)) : acc,
					[] as ResponseSensorReading[]
				);
		} catch (error) {
			console.error(error);
			return [];
		}
	}
}
