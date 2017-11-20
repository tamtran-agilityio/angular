import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../core';
import { UserService } from '../auth/service/user.service';
import { AchieveGoalsService } from './achieve-goals/service/achieve-goals.service';
import { Collection } from './achieve-goals/modal/collection';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collectionsData: Collection[];
  constructor(private logger: LoggerService,
              private userService: UserService,
              private achieveGoalsService: AchieveGoalsService) { }

  ngOnInit() {
    this.achieveGoalsService.getAchieve().subscribe((res: Collection[]) => {
      this.collectionsData = res;
    });
  }
}
