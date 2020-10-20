import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoxInfo } from 'src/app/models/box.model';
import { } from 'googlemaps';

interface DialogData {
	boxes: BoxInfo[];
}

@Component({
  selector: 'app-boxes-map',
  templateUrl: './boxes-map.component.html',
  styleUrls: ['./boxes-map.component.sass']
})
export class BoxesMapComponent implements AfterViewInit {
	constructor(
		public dialogRef: MatDialogRef<BoxesMapComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData
	) { }

	@ViewChild('map') private readonly mapElement: any;

	public ngAfterViewInit(): void {
		const center = new google.maps.LatLng(this.data.boxes[0].latitude, this.data.boxes[0].longitude);
		const mapOptions = { zoom: 4, center };
		const map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

		this.data.boxes.filter(
			({latitude, longitude}, index, array) => array.findIndex(el => el.latitude === latitude && el.longitude === longitude) === index
		).forEach(({ latitude, longitude, id }) => {
			new google.maps.Marker({
				position: {lat: latitude, lng: longitude},
				title: id
			}).setMap(map);
		});
	}
}
