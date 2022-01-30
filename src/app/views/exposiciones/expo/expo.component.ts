import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../exposiciones.json';

@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.css']
})
export class ExpoComponent implements OnInit {
  public expo;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    let id  = +this._route.snapshot.paramMap.get('id');
    this.expo = data.filter(e => e.id == id)[0];
    console.log(this.expo)
  }

}
