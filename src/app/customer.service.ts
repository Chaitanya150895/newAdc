import {Injectable} from '@angular/core';

const TOKEN = 'TOKEN';
const LOCATION_ID='LOCATION_ID';
 
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }
  setLocationId(location_id: string): void {
    localStorage.setItem(LOCATION_ID, location_id);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}