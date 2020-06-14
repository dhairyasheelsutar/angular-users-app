import { Component, OnInit, Input, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ApiService]
})
export class UserComponent implements OnInit {

  @Input()
  public id = -1

  @Input()
  public email = "";

  @Input()
  public firstName = "";

  @Input()
  public lastName = "";

  @Input()
  public avtar = "";

  @Output() itemDeleted: EventEmitter<number> =  new EventEmitter();
  @Output() itemEdited: EventEmitter<object> =  new EventEmitter();

  constructor(private api: ApiService, private snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 2000,
    });
  }

  
  ngOnInit(): void {
    
  }

  deletePerson(){
    this.api.delete('users/' + this.id).subscribe(data => {
      this.openSnackBar("Item deleted successfully!");
      this.itemDeleted.emit(this.id);
    }, () => {
      this.openSnackBar("Something went wrong!");
    });
  }


  

}
