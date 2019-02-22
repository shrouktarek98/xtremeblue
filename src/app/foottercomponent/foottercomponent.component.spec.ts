import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoottercomponentComponent } from './foottercomponent.component';

describe('FoottercomponentComponent', () => {
  let component: FoottercomponentComponent;
  let fixture: ComponentFixture<FoottercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoottercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoottercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
