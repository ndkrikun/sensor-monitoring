import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseSensorReading } from '../models/response-sensor-reading.model';
import { take } from 'rxjs/operators';
import { ResponseBuilderService } from './response-builder.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
	private readonly routes = {
		GET_ALL_READINGS: '/assets/data/sensor_readings.json'
	};

	constructor(
		private readonly http: HttpClient,
		private readonly responseBuilder: ResponseBuilderService
	) { }

	public async getSensorReadings(): Promise<ResponseSensorReading[]> {
		return new Promise(resolve => {
			this.http.get<string>(this.routes.GET_ALL_READINGS).pipe(take(1)).subscribe(
				payload => resolve(this.responseBuilder.prepareSensorReadings(payload)),
				(error: HttpErrorResponse) => {
					if (error.status === 200) {
						resolve(this.responseBuilder.prepareSensorReadings(error.error.text));
					} else {
						console.error(error);
					}
				}
			);
		});
	}
}
