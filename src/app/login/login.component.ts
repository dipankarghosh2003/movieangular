import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Response} from '@angular/http';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private loginForm : FormGroup;
  constructor(private router : Router) { }

  ngOnInit() {
  this.loginForm = new FormGroup({
  	user: new FormControl(null,[]),
  	pswd: new FormControl(null,[])
  })
  }
  loginUser(){
  	console.log(this.loginForm.value['user']);
  	localStorage.setItem('user',"test");
  	this.router.navigate(['/home']);
  }

}
