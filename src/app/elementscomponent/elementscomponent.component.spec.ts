import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementscomponentComponent } from './elementscomponent.component';

describe('ElementscomponentComponent', () => {
  let component: ElementscomponentComponent;
  let fixture: ComponentFixture<ElementscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
