import { Component, OnInit } from '@angular/core';
import data from './noticias.json';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  
  public noticias;
  constructor() { 
    this.noticias = data;
  }

  ngOnInit(): void {

    
  }

}
