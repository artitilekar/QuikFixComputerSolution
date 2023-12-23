import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laptop } from 'src/app/models/laptops.model';
import { refLaptop } from '../models/reflaptops.model';
@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  private apiUrl = 'http://localhost:3000/api/laptops';
  private apiUrlref = 'http://localhost:3000/api/reflaptops';

  constructor(private http: HttpClient) {}

  getAllLaptops(): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(this.apiUrl);
  }
  getAllRefLaptops(): Observable<refLaptop[]> {
    return this.http.get<refLaptop[]>(this.apiUrlref);
  }
}
