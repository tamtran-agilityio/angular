import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Topic } from '../../shared/dropdown/modal/topic';

@Component({
  selector: 'featured-topic',
  templateUrl: './featured-topic.component.html',
  styleUrls: ['./featured-topic.component.scss']
})
export class FeaturedTopicComponent implements OnInit {
  @Input() topics: Topic[];
  constructor() { }

  ngOnInit() {
  }

}
