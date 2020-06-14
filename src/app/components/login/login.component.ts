import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {

  public email = "";
  public password = "";
  constructor(private api: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 2000,
    });
  }

  submitForm(){

    if(this.email !== "" && this.password !== ""){

      let obj = {
        email: this.email,
        password: this.password
      };

      this.api.post('login', obj).subscribe(data => {
        this.openSnackBar("Login successfull");
      }, () => {
        this.openSnackBar("Something went wrong!");
      });

    }

  }
}
