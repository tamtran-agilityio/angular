import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Course } from '../../modal/course';

@Component({
  selector: 'couses-compare',
  templateUrl: './couses-compare.component.html',
  styleUrls: ['./couses-compare.component.scss']
})
export class CousesCompareComponent implements OnInit {
  @Input() coursesComparion: Course[];
  constructor() { }

  ngOnInit() {
  }

}
