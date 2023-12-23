import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopNewComponent } from './laptop-new.component';

describe('LaptopNewComponent', () => {
  let component: LaptopNewComponent;
  let fixture: ComponentFixture<LaptopNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaptopNewComponent]
    });
    fixture = TestBed.createComponent(LaptopNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
