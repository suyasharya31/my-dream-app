import { Component, OnInit } from '@angular/core';
//import { StudentsService } from '../service/students.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[EmployeeService]
})
export class HomeComponent implements OnInit {

  employees:string[];
  constructor(private service:EmployeeService) { }

  ngOnInit(): void {

    this.employees=this.service.getName();
  }

}
