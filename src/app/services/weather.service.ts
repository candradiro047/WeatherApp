import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = '8ebd1fbacfde54fc102f037d2b0522b7';
  city = 'Sleman';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    return this.http.get(
      `${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`
    );
  }
  getForecast(): Observable<any> {
    return this.http.get(
      `${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`
     );
  }
}