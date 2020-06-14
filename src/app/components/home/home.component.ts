import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {

  public users = [];
  public currentPage = 1;
  public totalPages = [];

  constructor(private api: ApiService) { }


  requestPage(){
    this.totalPages = [];
    this.api.get('users?page=' + this.currentPage).subscribe(data => {
      this.users = data['data'];
      
      for(let i=0; i<data['total_pages']; i++){
        this.totalPages.push(i+1);
      }
    }, () => {
      console.log("Unable to fetch data");
    });
  }

  ngOnInit(): void {
    this.requestPage();
  }

  updatePage(page){
    this.currentPage = page;
    this.requestPage();
  }

  itemDeleted(id: number){
   this.users = this.users.filter(item => item.id !== id);
  }



}
