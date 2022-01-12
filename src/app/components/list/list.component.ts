import { Component, OnInit } from '@angular/core';

export interface Language {
  name: string;
  created: number;
}

@Component({
  selector: 'app-list',

  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
  
})
export class ListComponent implements OnInit {
  frameworks: string[]= ['Angular', 'Spring', 'Larabel', 'React', 'Express', 'Vue.Js'];

  languages: Language[] = [
   
    {name: "Javascript", created: 1995},
    {name: "PHP", created: 1994},
    {name: "Java", created: 1995},
    {name: "Python", created: 1991},
    {name: "Dart", created: 2011},
    {name: "C#", created: 2000},
  ];


  dataTitle: string[] = ["name", "created"];
  

  constructor() { }

  ngOnInit(): void {
  }

}
