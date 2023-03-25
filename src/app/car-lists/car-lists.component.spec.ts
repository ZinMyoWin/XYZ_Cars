import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListsComponent } from './car-lists.component';

describe('CarListsComponent', () => {
  let component: CarListsComponent;
  let fixture: ComponentFixture<CarListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
