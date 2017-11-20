import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollbarComponent } from './rollbar.component';

describe('RollbarComponent', () => {
  let component: RollbarComponent;
  let fixture: ComponentFixture<RollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
