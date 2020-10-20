import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { SensorInfo } from 'src/app/models/sensor.model';
import { FormatConverterService } from 'src/app/services/format-converter.service';

@Component({
  selector: 'app-box-sensors-table',
  templateUrl: './box-sensors-table.component.html',
  styleUrls: ['./box-sensors-table.component.sass']
})
export class BoxSensorsTableComponent implements OnInit, OnDestroy, AfterViewInit {
	private readonly boxId = this.route.snapshot.paramMap.get('id');

	public readonly boxSensors$ = this.store.select(
		({sensorReadings: {readings}}) => this.formatConverter.getSensorsInBox(readings, this.boxId)
	);

	public columns = ['id', 'type', 'name', 'range', 'reading', 'readingTimeStamp'];

	public dataSource: MatTableDataSource<SensorInfo>;

	private readonly subscriptions = new Array<Subscription>();

	@ViewChild(MatPaginator) private readonly paginator: MatPaginator;

	@ViewChild(MatSort) private readonly sort: MatSort;

	constructor(
		private readonly store: Store<AppState>,
		private readonly route: ActivatedRoute,
		private readonly formatConverter: FormatConverterService
	) { }

	public ngOnInit(): void {
		this.subscriptions.push(
			this.boxSensors$.subscribe(payload => {
				this.dataSource = new MatTableDataSource(payload);
			})
		);
	}

	public ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}

	public ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
}
