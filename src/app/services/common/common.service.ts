import { AnimationStyleMetadata } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  public changeNavColor: Subject<Object> = new Subject<Object>();
  //State Management
  SetSession(key: string, value: any): void {
    //sessionStorage.setItem(key, JSON.stringify(value));
    localStorage.setItem(key, JSON.stringify(value));
  }

  GetSession(key: string): any {
    if (typeof window !== 'undefined') {
      //let retrievedObject = sessionStorage.getItem(key) as string;
      let retrievedObject = localStorage.getItem(key) as string;
      return retrievedObject;
    }
  }

  RemoveFromSession(key: string): any {
    localStorage.removeItem(key);
  }

  clearSession(): void {
    localStorage.clear();
  }

  EscapeJson(list: any) {
    var json = list.replace(/\\/g, '');
    var convertedList = JSON.parse(json);
    return convertedList;
  }

  GetHTMLElementById(elementId: any): any {
    var HTMLId = document.getElementById(elementId) as HTMLInputElement;
    return HTMLId;
  }

  GetHTMLValueById(elementId: any): any {
    var HTMLId = document.getElementById(elementId) as HTMLInputElement;
    return HTMLId.value;
  }

  InputSelectionChange(event: any): any {
    var value = event.target.value;
    return value;
  }

  InputSelectionChangeByText(event: any): any {
    var value = event.target.value;
    return value;
  }
}
