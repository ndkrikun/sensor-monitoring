import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxReadingsTableComponent } from './box-readings-table.component';

describe('BoxReadingsTableComponent', () => {
  let component: BoxReadingsTableComponent;
  let fixture: ComponentFixture<BoxReadingsTableComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
	  declarations: [ BoxReadingsTableComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(BoxReadingsTableComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
