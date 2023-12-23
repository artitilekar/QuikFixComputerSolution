import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopNewComponent } from './desktop-new.component';

describe('DesktopNewComponent', () => {
  let component: DesktopNewComponent;
  let fixture: ComponentFixture<DesktopNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopNewComponent]
    });
    fixture = TestBed.createComponent(DesktopNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
