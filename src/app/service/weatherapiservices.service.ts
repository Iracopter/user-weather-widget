import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiservicesService {
  constructor(private _http: HttpClient) { }

  // Метод для отримання даних погоди на основі координат
  getWeatherByCoordinates(latitude: number, longitude: number): Observable<any> {
    const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,precipitation,cloudcover`;
    return this._http.get(weatherApiUrl);
  }
}
