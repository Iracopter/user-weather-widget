import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Імпортуємо сервіс для роботи з даними
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saved-data',
  templateUrl: './saved-data.component.html',
  styleUrls: ['../topheading/topheading.component.css']
})
export class SavedDataComponent implements OnInit {
  savedData: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.savedData = this.dataService.getSavedData();
    console.log(this.savedData);
  }
}
