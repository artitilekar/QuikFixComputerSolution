import { Component, OnInit } from '@angular/core';

import { RemoveService } from '../services/remove.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userLogin: boolean;

  constructor(private authservice: RemoveService) {}
  ngOnInit(): void {
    this.userLogin = this.authservice.isUserLoggedIn();
  }
  isUser(): boolean {
    return this.authservice.isUserLoggedIn();
  }
}
