import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'streamer-sidebar',
  templateUrl: './streamer-sidebar.component.html',
  styleUrls: ['./streamer-sidebar.component.scss']
})
export class StreamerSidebarComponent implements OnInit {
  terms: String = '';
  private searchTermStream = new Subject<string>();
  constructor() { }

  ngOnInit() {
  }

  searchCourses(terms: string) {
  }
}
