import { Component, OnInit } from '@angular/core';
import { DesktopService } from 'src/app/services/desktop.service';

@Component({
  selector: 'app-desktop-refurbised-list',
  templateUrl: './desktop-refurbised-list.component.html',
  styleUrls: ['./desktop-refurbised-list.component.css'],
})
export class DesktopRefurbisedListComponent implements OnInit {
  refdesktops: any[] = [];

  constructor(private desktopService: DesktopService) {}

  ngOnInit(): void {
    this.getAllRefDesktops();
  }

  getAllRefDesktops() {
    this.desktopService.getAllRefDesktops().subscribe((refdesktops: any[]) => {
      this.refdesktops = refdesktops;
    });
  }
}
