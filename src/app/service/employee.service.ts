import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:Employee[]=[

    {empid:"emp1",empage:45,empdept:"cs",empgender:"male",empname:"ram",emptelno:8989898989},
    {empid:"emp2",empage:23,empdept:"testing",empgender:"male",empname:"shyam",emptelno:7878894556},
    {empid:"emp3",empage:23,empdept:"automation",empgender:"female",empname:"jaya",emptelno:8817735080},
    {empid:"emp4",empage:23,empdept:"development",empgender:"female",empname:"sushma",emptelno:8451269784}
  ];
  constructor() { }
  
  getName():string[]
  {
  
    return this.employees.map((data)=>{
      return data.empname;
    });
  }

  getalldetails():Employee[]
  {
    return this.employees;
  }





}
