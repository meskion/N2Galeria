import { Component, OnInit } from '@angular/core';
import data from './exposiciones.json';
@Component({
  selector: 'app-exposiciones',
  templateUrl: './exposiciones.component.html',
  styleUrls: ['./exposiciones.component.css']
})
export class ExposicionesComponent implements OnInit {

  public expos;
  constructor() { 
    this.expos = data;
  }

  ngOnInit(): void {
  }

}
