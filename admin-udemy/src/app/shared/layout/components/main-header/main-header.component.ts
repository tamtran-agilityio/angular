import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
