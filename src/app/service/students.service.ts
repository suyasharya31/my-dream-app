import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  departments:string[]=["cs","it","mechanical","chemical","automobile"];
  
  getdept(){
    return this.departments;
  }
  constructor() { }
}
