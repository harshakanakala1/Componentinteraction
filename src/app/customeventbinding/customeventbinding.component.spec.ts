import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeventbindingComponent } from './customeventbinding.component';

describe('CustomeventbindingComponent', () => {
  let component: CustomeventbindingComponent;
  let fixture: ComponentFixture<CustomeventbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeventbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
