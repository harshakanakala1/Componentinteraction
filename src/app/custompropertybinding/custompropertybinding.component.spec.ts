import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompropertybindingComponent } from './custompropertybinding.component';

describe('CustompropertybindingComponent', () => {
  let component: CustompropertybindingComponent;
  let fixture: ComponentFixture<CustompropertybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustompropertybindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustompropertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
