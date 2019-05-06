import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }

  setUser(formData){
    // let fakeResponse_3 = {
    //   "errorCode" : "1",
    //   "errorMessage" : "User Created.",
    //   "rowCount" : "30",
    //   "data" : {
    //     "token" : "abcd"
    //   }
    // }
    // let fakeResponse_1 = {
    //   "errorCode" : "0",
    //   "errorMessage" : "Some error.",
    //   "rowCount" : "30",
    //   "data" : {
    //     "token" : "abcd"
    //   }
    // }
    // return Observable.create(
    //   observer => {
    //     setTimeout(()=>{
    //       observer.next(fakeResponse_1)
    //     },2000)
    //   }
    // );
    let token = localStorage.getItem('token')?localStorage.getItem('token'):"abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token})};
    return this._http.post("http://localhost:3000/signup", formData, httpOptions);
  }

  login(formData){
    // let fakeResponse_1 = {
    //   "errorCode" : "1",
    //   "errorMessage" : "User Id is invalid.",
    //   "rowCount" : "30",
    //   "data" : {
    //     "token" : "abcd"
    //   }
    // };
    // let fakeResponse_2 = {
    //   "errorCode" : "0",
    //   "errorMessage" : "Password is not valid.",
    //   "rowCount" : "30",
    //   "data" : {
    //     "token" : "abcd"
    //   }
    // };
    // let fakeResponse_3 = {
    //   "errorCode" : "1",
    //   "errorMessage" : "Authentication Successful.",
    //   "rowCount" : "30",
    //   "data" : {
    //     "token" : "abcd"
    //   }
    // };
    // return Observable.create(
    //   observer => {
    //     setTimeout(()=>{
    //       observer.next(fakeResponse_3)
    //     },2000)
    //   }
    // );
    let token = localStorage.getItem('token')?localStorage.getItem('token'):"abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token})};
    return this._http.post("http://localhost:3000/login", formData, httpOptions);
  };

  setLocation(formData){
    let token = localStorage.getItem('token')?localStorage.getItem('token'):"abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token})};
    return this._http.post("http://localhost:3000/setlocation", formData, httpOptions);
  };

  getUserLocation() {
    // let fakeResponse_3 = {
    //   'errorCode' : "1",
    //   "errorMessage" : "",
    //   "rowCount": "30",
    //   "data": [{
    //     "email": "Tina",
    //     "lat": "akdf",
    //     "lng": "pppp",
    //     "createdAt": "Sep 24 10:00:00pm"
    //   },
    //   {
    //     "email": "Tina2",
    //     "lat": "akdf2",
    //     "lng": "pppp2",
    //     "createdAt": "Sep 25 10:00:00pm"
    //   }
    // ]
    // };
    // return Observable.create(
    //   observer => {
    //     setTimeout(() => {
    //       observer.next(fakeResponse_3)
    //     }, 2000)
    //   }
    // );
    let token = localStorage.getItem('token')?localStorage.getItem('token'):"abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token})};
    return this._http.get("http://localhost:3000/getlocation", httpOptions); 
  };

  getUser(){
    // let fakeResponse_3 = {
    //   'errorCode' : "1",
    //   "errorMessage" : "",
    //   "rowCount": "30",
    //   "data": {
    //     "email": "Tina",
    //     "inputEmail": "tina@gmail.com",
    //     "inputPassword": "1234",
    //     "question": "question",
    //     "answer": "answer"
    //   }
    
    // };
    // return Observable.create(
    //   observer => {
    //     setTimeout(() => {
    //       observer.next(fakeResponse_3)
    //     }, 2000)
    //   }
    // );
    let token = localStorage.getItem('token')?localStorage.getItem('token'):"abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token})};
    return this._http.get("http://localhost:3000/user", httpOptions);
  };

  updateUser(formData){
    // let fakeResponse_3 = {
    //   'errorCode' : "1",
    //   "errorMessage" : "",
    //   "rowCount": "30",
    //   "data": {
    //     "token": "abcd"
    //   }
    
    // };
    // return Observable.create(
    //   observer => {
    //     setTimeout(() => {
    //       observer.next(fakeResponse_3)
    //     }, 2000)
    //   }
    // );

    let token = localStorage.getItem('token')?localStorage.getItem('token'):"abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token})};
    return this._http.post("http://localhost:3000/updateuser", formData, httpOptions);
  };
  
}
