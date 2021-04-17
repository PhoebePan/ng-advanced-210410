import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  origClass = '';
  constructor() { }

  data: any = {
    email: '123@example.com',
    password: '',
    isRememberMe: true
  };

  ngOnInit(): void {
    this.origClass = document.body.className;
    document.body.className = 'bg-gradient-primary';
  }

  onSubmit(form: NgForm){
    console.log(form);
    if (form.valid) {
      console.log('送出表單', form.value);
    }
  }

  ngOnDestroy(): void {
    document.body.className = this.origClass;
  }

}
