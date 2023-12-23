import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }

  scrollToTop() {
    const scrollOptions: ScrollToOptions = {
      top: 0,
      behavior: 'smooth', // Use 'smooth' for smooth scrolling
    };

    window.scrollTo(scrollOptions);
  }
}
