import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubsciption;
  myDocData;

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation() {
    this.dataLoading = true;
    this.querySubsciption = this._backendService.getUserLocation().subscribe((res) => {
      if (res["errorCode"] > 0) {
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.myDocData = res["data"];
      } else {
        this.error = true;
        this.errorMessage = res["errorMessage"];
        this.dataLoading = false;
      }
    },
      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {
        this.dataLoading = false;
      }
    );
  }

  ngOnDestroy() {
    if (this.querySubsciption) {
      this.querySubsciption.unsubscribe();
    }
  }


}
