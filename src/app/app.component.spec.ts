import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
	await TestBed.configureTestingModule({
	  imports: [
		RouterTestingModule
	  ],
	  declarations: [
		AppComponent
	  ],
	}).compileComponents();
  });

  it('should create the app', () => {
	const fixture = TestBed.createComponent(AppComponent);
	const app = fixture.componentInstance;
	expect(app).toBeTruthy();
  });

  it(`should have as title 'sensor-monitoring'`, () => {
	const fixture = TestBed.createComponent(AppComponent);
	const app = fixture.componentInstance;
	expect(app.title).toEqual('sensor-monitoring');
  });

  it('should render title', () => {
	const fixture = TestBed.createComponent(AppComponent);
	fixture.detectChanges();
	const compiled = fixture.nativeElement;
	expect(compiled.querySelector('.content span').textContent).toContain('sensor-monitoring app is running!');
  });
});
