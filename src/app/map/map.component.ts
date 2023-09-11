import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { UserapiservicesService } from '../service/userapiservices.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: L.Map | null = null;
  private userCoordinates: { latitude: number, longitude: number }[] = [];

  constructor(private userService: UserapiservicesService) { }

  private initMap(): void {
    if (!this.map) {
      this.map = L.map('map', {
        
        center: [0,0],
        zoom: 3
      });

      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.map);
    }
  }
  
  ngAfterViewInit(): void {
    this.initMap();

    this.userService.topHeading().subscribe((userData) => {
      console.log(userData);
      const firstUser = userData.results[0];

      // Додавання маркерів для кожного користувача
      userData.results.forEach((user: any) => {
        this.addUserMarker(user);

      });
    });
  }

  private addUserMarker(user: any): void {
    if (this.map) { // Перевірка на null
      const latitude = user.location.coordinates.latitude;
      const longitude = user.location.coordinates.longitude;
  
      const marker = L.marker([latitude, longitude]).addTo(this.map);
      marker.bindPopup(`<b>${user.name.first} ${user.name.last}</b><br>
      ${user.location.city}, ${user.location.state}, ${user.location.country}<br>
      <img src="${user.picture.large}" alt="User Photo" width="100" height="100">`).openPopup();
    }
  }
  
}
