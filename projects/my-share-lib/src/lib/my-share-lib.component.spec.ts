import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShareLibComponent } from './my-share-lib.component';

describe('MyShareLibComponent', () => {
  let component: MyShareLibComponent;
  let fixture: ComponentFixture<MyShareLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShareLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShareLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
