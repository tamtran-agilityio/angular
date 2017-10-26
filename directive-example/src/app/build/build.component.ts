import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {
  episodes = <any>[];
  episode =  null;
  count = 1;
  constructor() { }

  ngOnInit() {
    this.episode = { id:1 ,title: 'Winter Is Coming', director: 'Tim Van Patten' };
    this.episodes = [
      { id:1 ,title: 'Winter Is Coming', director: 'Tim Van Patten' },
      { id:2 ,title: 'The Kingsroad', director: 'Tim Van Patten' },
      { id:3 ,title: 'Lord Snow', director: 'Brian Kirk' },
      { id:4 ,title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
      { id:5 ,title: 'The Wolf and the Lion', director: 'Brian Kirk' },
      { id:6 ,title: 'A Golden Crown', director: 'Daniel Minahan' },
      { id:7 ,title: 'You Win or You Die', director: 'Daniel Minahan' },
      { id:8 ,title: 'The Pointy End', director: 'Daniel Minahan' }
    ]
  }

  trackById(index, episode) {
    return episode.title;
  }

  updateSelectedValue($event) {
  }
}
