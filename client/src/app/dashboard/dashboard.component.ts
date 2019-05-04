import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lat: number;
  lng: number;
  data;
  stopCondition = false;
  private querySubsciption;

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    const secondsCounter = interval(2000);
    this.querySubsciption = secondsCounter.subscribe(n=>
      //console.log(`It's been ${n} seconds since subscribing!`)
      this.getLocation()
      );
  }

  getLocation(){
    var positionOption = { enableHighAccuracy: false, maximumAage: Infinity, timeout: 6000 };
    var gpsSuccess = function (currentPosition){

    };
    var gpsFailed = function(){
      //
      //
    };
  
    //locate the user
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position=> {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.data = {"lat": position.coords.latitude, "long": position.coords.longitude};
        //console.log(this.data);
        this._backendService.setLocation(this.data).subscribe((res)=>console.log("Success"));
      }), gpsFailed, positionOption);
    }

  };

  ngOnDestroy(){
    if(this.querySubsciption){
      this.querySubsciption.unsubscribe(); 
    }
  }


}
