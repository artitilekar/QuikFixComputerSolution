import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Desktop } from 'src/app/models/desktops.model';
import { refDesktop } from '../models/refdesktops.model';
@Injectable({
  providedIn: 'root',
})
export class DesktopService {
  private apiUrl = 'http://localhost:3000/api/desktops';
  private apiUrlref = 'http://localhost:3000/api/refdesktops';
  constructor(private http: HttpClient) {}

  getAllDesktops(): Observable<Desktop[]> {
    return this.http.get<Desktop[]>(this.apiUrl);
  }

  getAllRefDesktops(): Observable<refDesktop[]> {
    return this.http.get<refDesktop[]>(this.apiUrlref);
  }
}
