import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css'],
  providers:[EmployeeService]
})
export class ViewallComponent implements OnInit {

  employee:Employee[];
  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    this.employee=this.service.getalldetails();
  }

}
