import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'streamer-sidebar',
  templateUrl: './streamer-sidebar.component.html',
  styleUrls: ['./streamer-sidebar.component.scss']
})
export class StreamerSidebarComponent implements OnInit {
  searchField: FormControl;
  searchForm: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router) {
    this.searchForm = fb.group( {search: this.searchField});
  }

  ngOnInit() {
  }

  searchCourses(event) {
    if (event.which === 13) {
      this.handleSearch();
    }
  }

  openSeach() {
    this.handleSearch();
  }

  handleSearch() {
    let value = this.searchForm.controls.search.value;
    if (_.isEmpty(value)) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/courses/search/'], { queryParams: { q: value }});
    }
  }
}
