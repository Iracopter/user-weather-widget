import { Component, OnInit } from '@angular/core';
import { UserapiservicesService } from '../service/userapiservices.service';
import { WeatherapiservicesService } from '../service/weatherapiservices.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  constructor(
    private userService: UserapiservicesService,
    private weatherService: WeatherapiservicesService,
    private dataService: DataService
  ) { }

  expandedUsers: { [email: string]: boolean } = {};

// Змініть методи expandUser і collapseUser наступним чином
expandUser(userEmail: string) {
  this.expandedUsers[userEmail] = true;
}

collapseUser(userEmail: string) {
  this.expandedUsers[userEmail] = false;
}

  onSaveClick(user: any) {
    const latitude = user.location.coordinates.latitude;
    const longitude = user.location.coordinates.longitude;

    this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe((weatherData) => {
      console.log(weatherData);
      const temperature_2m = weatherData.hourly.temperature_2m;
      const minTemperature = Math.min(...temperature_2m);
      const maxTemperature = Math.max(...temperature_2m);
      const temperature = weatherData.current_weather.temperature;

      const userWithTemperature = {
        user: user,
        temperature: { current: temperature, min: minTemperature, max: maxTemperature }
      };

      this.dataService.saveData(userWithTemperature);
    });
  }

  topheadingDisplay: any = [];
  temperatureData: { [email: string]: { current: string, min: number, max: number, temperature_2m: number[], weathercode:number, cloudscover: number[] } } = {};

  ngOnInit(): void {
    this.userService.topHeading().subscribe((userData) => {
      console.log(userData);
      this.topheadingDisplay = userData.results;

      // Отримання даних погоди для кожного користувача
      this.topheadingDisplay.forEach((user: any) => {
        const latitude = user.location.coordinates.latitude;
        const longitude = user.location.coordinates.longitude;

        this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe((weatherData) => {
          console.log(weatherData);
          const temperature_2m = weatherData.hourly.temperature_2m;
          const cloudscovering = weatherData.hourly.cloudcover;
          const weathercode=weatherData.current_weather.weathercode;
          const cloudscoveringLimited = cloudscovering.slice(0,24);
          const temperature_2mLimited = temperature_2m.slice(0, 24);
          const minTemperature = Math.min(...temperature_2m);
          const maxTemperature = Math.max(...temperature_2m);
          const temperature = weatherData.current_weather.temperature;
          const email = user.email;

          this.temperatureData[email] = { current: temperature, min: minTemperature, max: maxTemperature, temperature_2m: temperature_2mLimited, weathercode: weathercode, cloudscover: cloudscoveringLimited };
        });
      });
    });
  }
}
