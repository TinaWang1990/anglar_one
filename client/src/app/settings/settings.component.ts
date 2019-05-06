import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  dataLoading = false;
  private querySubscription;
  savedChanges: boolean=false;
  error: boolean = false;
  errorMessage: String = "";
  dacData;
 
  constructor(private _route: Router, private _backendService: BackendService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.dataLoading = true;
    this.querySubscription = this._backendService.getUser().subscribe((res)=>{
      if(res["errorCode"]>0){
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.dacData = res["data"];
      }else{
        this.error = true;
        this.errorMessage = res["errorMessage"];
        this.dataLoading = true;
      }
    },(error)=>{
      this.error = true;
      this.errorMessage = error.message;
      this.dataLoading = false;
    },()=>{
      this.dataLoading = false;
    }
    )

  };

  logout(){
    window.localStorage.removeItem("token");
    this._route.navigate(['/login']);
  };

  settings(formData){
    this.dataLoading = true;
    this.querySubscription = this._backendService.updateUser(formData).subscribe(
      (res)=>{
        if(res["errorCode"]>0){
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.savedChanges = true;
        }else{
          this.error = true;
          this.errorMessage = res["errorMessage"];
          this.dataLoading = false;
        }
      },(error)=>{
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },()=>{
        this.dataLoading = false;
      }
    );
  }

  ngOnDestroy(){
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }


}
