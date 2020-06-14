import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private api = "https://reqres.in/api/";

    constructor(private http: HttpClient) {}

    get(path: string){
        return this.http.get(this.api + path);
    }

    post(path: string, data: any){
        return this.http.post(this.api + path, data);
    }

    put(){

    }

    delete(path: string){
        return this.http.delete(this.api + path);
    }

}