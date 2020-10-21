import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesMapComponent } from './boxes-map.component';

describe('BoxesMapComponent', () => {
	let component: BoxesMapComponent;
	let fixture: ComponentFixture<BoxesMapComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ BoxesMapComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BoxesMapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
