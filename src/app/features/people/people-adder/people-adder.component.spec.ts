import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAdderComponent } from './people-adder.component';

describe('PeopleAdderComponent', () => {
  let component: PeopleAdderComponent;
  let fixture: ComponentFixture<PeopleAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
