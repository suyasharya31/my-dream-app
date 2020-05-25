import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })

export class AppComponent 
{
  num:number=1;
  title = 'my lord is always with me!!';
  msg:string="this is example of interpolation in angular";
  name:string="arya";
  students:string[]=["suyash","arya","shrirang","abhinav"];
   styles=
  {
    'background-color':''
  }
  pink()
  {
    this.styles["background-color"]="pink";
  }
  yellow(){
    this.styles["background-color"]="yellow";
  }
  green(){
    this.styles["background-color"]="green";
  }
  onclick()
  {
    console.log("you clicked the button"+this.num);
    this.num=this.num+1;
  }
}