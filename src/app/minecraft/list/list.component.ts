import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  projects = [
    {
      title: 'Villager Pathfinding',
      route: 'villager-pathfinding'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
