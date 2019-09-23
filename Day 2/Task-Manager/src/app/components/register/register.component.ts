import { Component, OnInit } from '@angular/core';
import { Validators , FormGroup , FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm : FormGroup;

  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm()
  {
  /*  this.registerForm = new FormGroup({
      name: new FormControl(''),      //default value is blank
      email: new FormControl(''),
      password: new FormControl(''),
      cpassword: new FormControl(''


    });
    */

    this.registerForm = this.builder.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.required],
      cpassword:['',{ validator : function(form) {
                  
                  const password = form.get('password');
                  const cpassword = form.get('cpassword');

                  if(password.value!==cpassword.value)
                  {
                    //set error
                    cpassword.setErrors({
                      passwordMatch:true
                    });
                  }
                  else
                  {
                    cpassword.setErrors(null);
                  }
               }
         }]
    });



  }

  register()
  {
    console.log('registered'); 
    console.log(this.registerForm.value);
  }

}
