import { Component, OnInit } from '@angular/core';
import { DesktopService } from 'src/app/services/desktop.service';

@Component({
  selector: 'app-desktop-new',
  templateUrl: './desktop-new.component.html',
  styleUrls: ['./desktop-new.component.css'],
})
export class DesktopNewComponent implements OnInit {
  desktops: any[] = [];

  constructor(private desktopService: DesktopService) {}

  ngOnInit(): void {
    this.getAllDesktops();
  }

  getAllDesktops() {
    this.desktopService.getAllDesktops().subscribe((desktops: any[]) => {
      this.desktops = desktops;
    });
  }
}
