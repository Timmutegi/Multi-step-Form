import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  data: {};
  isLoading = true;
  message: boolean;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const ID = this.activatedRoute.snapshot.params.ID;
    console.log(ID);
    this.api.getData(`/multi-step-form/${ID}`).subscribe(
      res => {
        // console.log(res);
        if (res.code === 200) {
          this.message = true;
          this.isLoading = false;
          this.data = [res.data];
          // console.log(this.data);
        }
      }
    );
  }
}
