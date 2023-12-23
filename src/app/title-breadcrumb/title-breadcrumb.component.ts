// title-breadcrumb.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-breadcrumb',
  templateUrl: './title-breadcrumb.component.html',
  styleUrls: ['./title-breadcrumb.component.css'],
})
export class TitleBreadcrumbComponent {
  @Input() pageTitle: string;
  @Input() breadcrumb: string;
  @Input() showHomeBreadcrumb: boolean = true;
}
