// data.service.ts
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private savedData: any[] = [];

  constructor() { }

  saveData(data: any) {
    this.savedData.push(data);
  }

  getSavedData() {
    return this.savedData;
  }
}
