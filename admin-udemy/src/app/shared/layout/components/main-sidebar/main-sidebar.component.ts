import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
