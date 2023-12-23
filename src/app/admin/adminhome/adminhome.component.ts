import { Component, OnInit } from '@angular/core';
import { RemoveService } from 'src/app/services/remove.service';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css'],
})
export class AdminhomeComponent implements OnInit {
  constructor(private authService: RemoveService) {}
  ngOnInit(): void {
    this.authService.setAdmin();
    console.log(this.authService.isUserLoggedIn());
  }
}
