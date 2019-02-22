import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicscomponentComponent } from './servicscomponent.component';

describe('ServicscomponentComponent', () => {
  let component: ServicscomponentComponent;
  let fixture: ComponentFixture<ServicscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
