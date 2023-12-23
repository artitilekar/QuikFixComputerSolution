import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBreadcrumbComponent } from './title-breadcrumb.component';

describe('TitleBreadcrumbComponent', () => {
  let component: TitleBreadcrumbComponent;
  let fixture: ComponentFixture<TitleBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(TitleBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
