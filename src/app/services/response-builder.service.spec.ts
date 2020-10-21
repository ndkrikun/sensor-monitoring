import { TestBed } from '@angular/core/testing';

import { ResponseBuilderService } from './response-builder.service';

describe('ResponseBuilderService', () => {
	let service: ResponseBuilderService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ResponseBuilderService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
