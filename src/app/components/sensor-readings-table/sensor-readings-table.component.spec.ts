import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorReadingsTableComponent } from './sensor-readings-table.component';

describe('SensorReadingsTableComponent', () => {
  let component: SensorReadingsTableComponent;
  let fixture: ComponentFixture<SensorReadingsTableComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
	  declarations: [ SensorReadingsTableComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(SensorReadingsTableComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
