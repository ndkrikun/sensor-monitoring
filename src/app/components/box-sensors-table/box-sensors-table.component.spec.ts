import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSensorsTableComponent } from './box-sensors-table.component';

describe('BoxSensorsTableComponent', () => {
	let component: BoxSensorsTableComponent;
	let fixture: ComponentFixture<BoxSensorsTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ BoxSensorsTableComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BoxSensorsTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
