import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map } from 'rxjs/operators';
import { OutputComponent } from '../output/output.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xhmm',
  templateUrl: './xhmm.component.html',
  styleUrls: ['./xhmm.component.css']
})
export class XhmmComponent implements OnInit {
  pathGATK: string="12313" ;
  pathBamList: string;  
  pathRefDirectory: string;
  pathExomeList: string;
  pathParam:string;
  pathOutput:string;
  author:string;
  outputEmail:string;
  messageOutput:Message;
  userName:string;
  userPassword:string;
  message:string;
  constructor( private http: HttpClient,private router: Router) {
 
  }

  ngOnInit() {
  }
  func()
  {
    this.message=null;
    console.log(this.userName)
    console.log(this.userPassword)
    if(!this.userName || !this.userPassword)
    {
      this.message="Please input user name and user password"
    }
    else
    {
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.userName + ':' + this.userPassword) });
      this.http.post<Message>('http://193.176.181.150:8099/xhmm',{
        pathGATK:this.pathGATK,
        pathBamList: this.pathBamList,
        pathRefDirectory: this.pathRefDirectory,
        pathExomeList: this.pathExomeList,
        pathParam: this.pathParam,
        pathOutput:this.pathOutput,
        outputEmail:this.outputEmail,
        author:this.author
      },{headers,observe:'response'}).subscribe(
        (httpResponse:HttpResponse<Message>) =>{
          this.messageOutput = httpResponse.body;
            this.router.navigate(['/output'], { queryParams: { message: JSON.stringify(this.messageOutput)} });
        },
        error=>
        {
          if(error.status==401)
          {
            this.message="Ivalid login or password";
          }
        }
         )
        ;
    } 
  }

  resp()
  {
    this.message=null;
    console.log(this.userName)
    console.log(this.userPassword)
    if(!this.userName || !this.userPassword)
    {
      this.message="Please input user name and user password"
    }
    else
    {
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.userName + ':' + this.userPassword) });
      this.http.get<Message>('http://193.176.181.150:8099/response',{headers,observe:'response'}).subscribe(
        (httpResponse:HttpResponse<Message>) =>{
          this.messageOutput = httpResponse.body;
            this.router.navigate(['/output'], { queryParams: { message: JSON.stringify(this.messageOutput)} });
        },
        error=>
        {
          if(error.status==401)
          {
            this.message="Invalid login or passwohrd";
          }
        }
         )
        ;
    }   
  }

}

export class Message
{
  message: string;
}
