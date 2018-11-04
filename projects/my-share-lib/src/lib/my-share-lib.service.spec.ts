import { TestBed } from '@angular/core/testing';

import { MyShareLibService } from './my-share-lib.service';

describe('MyShareLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyShareLibService = TestBed.get(MyShareLibService);
    expect(service).toBeTruthy();
  });
});
