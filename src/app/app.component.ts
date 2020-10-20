import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	constructor(
		private readonly request: RequestService
	) {}

	public async ngOnInit(): Promise<void> {
		const readings = await this.request.getSensorReadings();
		console.log(readings);
	}
}
