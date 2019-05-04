import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubsciption;
  savedChanges: boolean = false;

  constructor(private _backendService: BackendService, private _route: Router) { }

  ngOnInit() {
  }

  setUser(formData) {
    this.dataLoading = true;
    this.querySubsciption = this._backendService.setUser(formData).subscribe(
      (res)=>{
        if(res["errorCode"]>0){
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.savedChanges = true
        }else{
          this.error = true;
          this.errorMessage = res["errorMessage"];
          this.dataLoading = false;
        }
      },
      (error) => {this.error = true; this.errorMessage = error.errorMessage; this.dataLoading = false;},
      ()=>{this.dataLoading = false;}
    );
  }
  ngOnDestroy(){
    if(this.querySubsciption){
      this.querySubsciption.unsubscribe(); 
    }
  }

}
