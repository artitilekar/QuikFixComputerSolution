import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopRefurbisedListComponent } from './laptop-refurbised-list.component';

describe('LaptopRefurbisedListComponent', () => {
  let component: LaptopRefurbisedListComponent;
  let fixture: ComponentFixture<LaptopRefurbisedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaptopRefurbisedListComponent]
    });
    fixture = TestBed.createComponent(LaptopRefurbisedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
