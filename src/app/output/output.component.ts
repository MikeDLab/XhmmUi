import { Component, OnInit } from '@angular/core';
import { Message } from '../xhmm/xhmm.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  message: Message;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{this.message=JSON.parse(params['message'])})
  }

}
