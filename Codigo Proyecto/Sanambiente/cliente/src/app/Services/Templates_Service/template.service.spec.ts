import { TestBed } from '@angular/core/testing';

import { TemplateService } from './Templates_service';

describe('TemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplateService = TestBed.get(TemplateService);
    expect(service).toBeTruthy();
  });
});
