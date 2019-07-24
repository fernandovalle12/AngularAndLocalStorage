import { TestBed } from '@angular/core/testing';

import { AllPostsService } from '../all-posts.service';

describe('AllPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllPostsService = TestBed.get(AllPostsService);
    expect(service).toBeTruthy();
  });
});
