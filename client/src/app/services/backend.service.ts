import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  setUser(formData){
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "User Created.",
      "rowCount" : "30",
      "data" : {
        "token" : "abcd"
      }
    }
    let fakeResponse_1 = {
      "errorCode" : "0",
      "errorMessage" : "Some error.",
      "rowCount" : "30",
      "data" : {
        "token" : "abcd"
      }
    }
    return Observable.create(
      observer => {
        setTimeout(()=>{
          observer.next(fakeResponse_1)
        },2000)
      }
    );
  }

  login(formData){
    let fakeResponse_1 = {
      "errorCode" : "1",
      "errorMessage" : "User Id is invalid.",
      "rowCount" : "30",
      "data" : {
        "token" : "abcd"
      }
    };
    let fakeResponse_2 = {
      "errorCode" : "0",
      "errorMessage" : "Password is not valid.",
      "rowCount" : "30",
      "data" : {
        "token" : "abcd"
      }
    };
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "Authentication Successful.",
      "rowCount" : "30",
      "data" : {
        "token" : "abcd"
      }
    };
    return Observable.create(
      observer => {
        setTimeout(()=>{
          observer.next(fakeResponse_3)
        },2000)
      }
    );
  };

  setLocation(formData){
    console.log(formData);
  }

  getUserLocation() {
    let fakeResponse_3 = {
      'errorCode' : "1",
      "errorMessage" : "",
      "rowCount": "30",
      "data": [{
        "email": "Tina",
        "lat": "akdf",
        "lng": "pppp",
        "createdAt": "Sep 24 10:00:00pm"
      },
      {
        "email": "Tina2",
        "lat": "akdf2",
        "lng": "pppp2",
        "createdAt": "Sep 25 10:00:00pm"
      }
    ]
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }, 2000)
      }
    );
  }

  getUser(formData){
    let fakeResponse_3 = {
      'errorCode' : "1",
      "errorMessage" : "",
      "rowCount": "30",
      "data": {
        "email": "Tina",
        "inputEmail": "tina@gmail.com",
        "inputPassword": "1234",
        "question": "question",
        "answer": "answer"
      }
    
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }, 2000)
      }
    );
  }

  updateUser(formData){
    let fakeResponse_3 = {
      'errorCode' : "1",
      "errorMessage" : "",
      "rowCount": "30",
      "data": {
        "token": "abcd"
      }
    
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }, 2000)
      }
    );
  }
  
}
