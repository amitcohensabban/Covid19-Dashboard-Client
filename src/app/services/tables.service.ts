import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private apiUrl = 'https://localhost:7118/api';

  constructor(private http: HttpClient) { }

  getBedOccupancyTable(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/BedOccupancy`);
  }

  getTrafficLightsPlanTable(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/TrafficLightsPlan`);
  }

  getVerifiedPatientsTable(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/VerifiedPatients`);
  }
}
