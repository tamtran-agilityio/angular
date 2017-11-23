import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  country: String = 'English';
  countrys: string[] = ['English', 'Deutsch', 'Francais', 'Espanol'];
  constructor() { }

  ngOnInit() {
  }

}
