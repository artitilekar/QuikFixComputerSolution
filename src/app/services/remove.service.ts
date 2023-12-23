import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemoveService {
  isAdmin: boolean = false;
  constructor() {}
  isUserLoggedIn() {
    return this.isAdmin ? false : true;
  }
  setAdmin() {
    this.isAdmin = true;
  }
}
