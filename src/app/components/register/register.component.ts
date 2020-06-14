import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ApiService]
})
export class RegisterComponent implements OnInit {

  public email = "";
  public password = "";
  public btnDisabled = true;
  public firstName = "";
  public lastName = "";

  constructor(private api: ApiService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 2000,
    });
  }

  submitForm(){

    if(this.email !== "" && this.password !== "" && this.firstName !== "" && this.lastName !== ""){

      let obj = {
        email: this.email,
        password: this.password,
        first_name: this.firstName,
        last_name: this.lastName
      };

      this.api.post('register', obj).subscribe(data => {
        this.openSnackBar("Registeration successfull");
      }, () => {
        this.openSnackBar("Something went wrong!");
      });

    }

  }

}
