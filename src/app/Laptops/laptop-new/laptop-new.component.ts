import { Component, OnInit } from '@angular/core';
import { LaptopService } from 'src/app/services/laptop.service';

@Component({
  selector: 'app-laptop-new',
  templateUrl: './laptop-new.component.html',
})
export class LaptopNewComponent implements OnInit {
  laptops: any[] = [];

  constructor(private laptopService: LaptopService) {}

  ngOnInit(): void {
    this.getAllLaptops();
  }

  getAllLaptops() {
    this.laptopService.getAllLaptops().subscribe((laptops: any[]) => {
      this.laptops = laptops;
    });
  }
}
