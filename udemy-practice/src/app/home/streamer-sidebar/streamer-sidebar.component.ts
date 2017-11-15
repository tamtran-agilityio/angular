import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'streamer-sidebar',
  templateUrl: './streamer-sidebar.component.html',
  styleUrls: ['./streamer-sidebar.component.scss']
})
export class StreamerSidebarComponent implements OnInit {
  searchField: FormControl;
  searchForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.searchForm = fb.group( {search: this.searchField});
  }

  ngOnInit() {
  }

  searchCourses(term: string) {
    console.log('term', term);
    // this.searchField.valueChanges.debounceTime(400).switchMap(term => );
  }
}
