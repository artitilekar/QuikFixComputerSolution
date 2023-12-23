import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { RemoveService } from '../services/remove.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(
    private scrollService: ScrollService,
    private authservice: RemoveService
  ) {}

  scrollToTop() {
    this.scrollService.scrollToTop();
  }

  isUser(): boolean {
    return this.authservice.isUserLoggedIn();
  }
}
