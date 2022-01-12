import { Component, OnInit } from '@angular/core';
 interface Idiomas{
  id: number,
  name: string,


}
interface User{
   email: string,
   password: string
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  countries: string[] = ['España','EE.UU', 'Italian', 'Francia', 'Portugal'];

  idiomas:Idiomas[] =[
    { id: 1, name: 'Spanish'},
    {id: 2 , name : 'English'},
    {id: 3 , name : 'French'},
    {id: 4 , name : 'Portuguese'}
  ]

 users: User[] =[
   {email: 'mary@gmail.com', password: '1234'},
   {email: 'anelly@gmail.com', password: '1234'},
   {email: 'patty@gmail.com', password: '1234'},
 ]

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
