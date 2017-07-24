import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements OnInit {
  @Input() publisheddate: string
  constructor() { }

  ngOnInit() {
  }

}
