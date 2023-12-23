import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopRefurbisedListComponent } from './desktop-refurbised-list.component';

describe('DesktopRefurbisedListComponent', () => {
  let component: DesktopRefurbisedListComponent;
  let fixture: ComponentFixture<DesktopRefurbisedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopRefurbisedListComponent]
    });
    fixture = TestBed.createComponent(DesktopRefurbisedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
