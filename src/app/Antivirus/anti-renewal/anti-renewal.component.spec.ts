import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiRenewalComponent } from './anti-renewal.component';

describe('AntiRenewalComponent', () => {
  let component: AntiRenewalComponent;
  let fixture: ComponentFixture<AntiRenewalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiRenewalComponent]
    });
    fixture = TestBed.createComponent(AntiRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
