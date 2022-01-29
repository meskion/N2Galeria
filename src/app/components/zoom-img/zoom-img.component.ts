import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zoom-img',
  templateUrl: './zoom-img.component.html',
  styleUrls: ['./zoom-img.component.css']
})
export class ZoomImgComponent implements OnInit {
  @Input() img!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
