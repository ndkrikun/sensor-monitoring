import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { BoxInfo } from 'src/app/models/box.model';
import { FormatConverterService } from 'src/app/services/format-converter.service';
import { BoxesMapComponent } from '../boxes-map/boxes-map.component';

@Component({
  selector: 'app-boxes-table',
  templateUrl: './boxes-table.component.html',
  styleUrls: ['./boxes-table.component.sass']
})
export class BoxesTableComponent {
	/**
	 * All boxes from the readings state
	 */
	public readonly boxes$ = this.store.select(
		({sensorReadings: {readings}}) => this.formatConverter.getAllBoxes(readings)
	);

	/**
	 * All columns from the table
	 */
	public readonly columns = ['id', 'coordinates', 'readingsQuantity', 'buttons'];

	constructor(
		private readonly store: Store<AppState>,
		private readonly formatConverter: FormatConverterService,
		private readonly router: Router,
		private readonly dialog: MatDialog,
	) { }

	/**
	 * Navigates to the all readings list
	 */
	public goToAllReadingsList(event: Event, id: string): void {
		event.stopPropagation();
		this.router.navigateByUrl(`boxes/${id}/readings`);
	}

	/**
	 * Navigates to the sensors list
	 */
	public goToSensorsList(event: Event, id: string): void {
		event.stopPropagation();
		this.router.navigateByUrl(`boxes/${id}/sensors`);
	}

	/**
	 * Opens the popup with all boxes map
	 */
	public openBoxesMap(): void {
		this.boxes$.pipe(take(1)).subscribe(payload => {
			this.dialog.open(BoxesMapComponent, { width: '600px', data: { boxes: payload } });
		});
	}

}
