import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { BoxReadingInfo } from 'src/app/models/box-reading.model';
import { FormatConverterService } from 'src/app/services/format-converter.service';

@Component({
  selector: 'app-box-readings-table',
  templateUrl: './box-readings-table.component.html',
  styleUrls: ['./box-readings-table.component.sass']
})
export class BoxReadingsTableComponent implements OnInit, OnDestroy, AfterViewInit {
	/**
	 * Box id from the route
	 */
	public readonly boxId = this.route.snapshot.paramMap.get('boxId');

	/**
	 * All readings from the current box
	 */
	private readonly boxReadings$ = this.store.select(
		({sensorReadings: {readings}}) => this.formatConverter.getBoxReadings(readings, this.boxId)
	);

	/**
	 * All columns from the table
	 */
	public columns = ['id', 'type', 'name', 'range', 'reading', 'readingTimeStamp'];

	/**
	 * Data required for the material table component
	 */
	public readonly dataSource = new MatTableDataSource<BoxReadingInfo>([]);

	/**
	 * An array of all subscriptions in this component
	 */
	private readonly subscriptions = new Array<Subscription>();

	/**
	 * Table paginator element
	 */
	@ViewChild(MatPaginator) private readonly paginator: MatPaginator;

	/**
	 * Table sort element
	 */
	@ViewChild(MatSort) private readonly sort: MatSort;

	/**
	 * All available sensor types
	 */
	public availableSensorTypes$ = this.boxReadings$.pipe(
		map(sensors => ['ALL'].concat(sensors
			.filter(({ type }, index, array) => array.findIndex(el => el.type === type) === index)
			.map(({ type }) => type)
		))
	);

	constructor(
		private readonly store: Store<AppState>,
		private readonly route: ActivatedRoute,
		private readonly formatConverter: FormatConverterService
	) { }

	/**
	 * Event handler for sensor type selection changes
	 */
	public changeSelectedSensorType(event: MatSelectChange): void {
		this.boxReadings$.pipe(
			take(1)
		).subscribe(sensors =>
			this.dataSource.data = event.value === 'ALL'
				? sensors
				: sensors.filter(({ type }) => type === event.value)
		);
	}

	/**
	 * Life cycle hook
	 */
	public ngOnInit(): void {
		this.subscriptions.push(
			this.boxReadings$.subscribe(payload => {
				this.dataSource.data = payload;
			})
		);
	}

	/**
	 * Life cycle hook
	 */
	public ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}

	/**
	 * Life cycle hook
	 */
	public ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
}
