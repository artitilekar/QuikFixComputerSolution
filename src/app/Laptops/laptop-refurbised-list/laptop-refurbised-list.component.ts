import { Component, OnInit } from '@angular/core';
import { LaptopService } from 'src/app/services/laptop.service';

@Component({
  selector: 'app-laptop-refurbised-list',
  templateUrl: './laptop-refurbised-list.component.html',
  styleUrls: ['./laptop-refurbised-list.component.css'],
})
export class LaptopRefurbisedListComponent implements OnInit {
  reflaptops: any[] = [];

  constructor(private laptopService: LaptopService) {}

  ngOnInit(): void {
    this.getAllRefLaptops();
  }

  getAllRefLaptops() {
    this.laptopService.getAllRefLaptops().subscribe((reflaptops: any[]) => {
      this.reflaptops = reflaptops;
    });
  }
}
