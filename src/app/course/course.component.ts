import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course= [
    {
    'id':1,'name':'Learn Angular','description':'Angular is a platform for building mobile and desktop web applications','image':'../../assets/Angular_full_color_logo.svg.png'
  },
  {
    'id':2,'name':'Learn Javascript','description': 'Javascript is a platform for building mobile and desktop web applications','image':'../../assets/javascript.jpg'
  },
  {
    'id':3,'name':'Learn jquery','description':'jquery is a platform for building mobile and desktop web applications','image':'../../assets/jquery.png'
  }
  ]
}
