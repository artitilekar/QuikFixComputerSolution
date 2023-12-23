import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntinewComponent } from './antinew.component';

describe('AntinewComponent', () => {
  let component: AntinewComponent;
  let fixture: ComponentFixture<AntinewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntinewComponent]
    });
    fixture = TestBed.createComponent(AntinewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
