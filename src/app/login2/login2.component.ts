import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  data: any = {
    email: 'user1@example.com',
    password: '123defDEF',
    isRememberMe: false
  };

  origClass = '';

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.origClass = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: new FormControl('user2@example.com', {
        validators: [
          Validators.required,
          Validators.email
        ],
        updateOn: 'blur'
       }),
       password: this.fb.control('123ABCabc', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32)
        ],
        updateOn: 'change'
      }),
      isRememberMe: true,
      extra: this.fb.array([
        this.makeExtra(),
        this.makeExtra(),
      ])
    });
  }

  getFormArray(name: string) {
    return this.form.get(name) as FormArray;
  }

  showError(name, validation) {
    return this.form.get(name).invalid
      && this.form.get(name).dirty
      && this.form.get(name).errors[validation];
  }

  makeExtra() {
    return this.fb.group({
      name: this.fb.control(''),
      tel: this.fb.control('')
    });
  }

  addExtra() {
    let extra = this.getFormArray('extra');
    extra.push(this.makeExtra());
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log('送出表單', form.value);
    }
  }

  ngOnDestroy(): void {
    document.body.className = this.origClass;
  }

}
