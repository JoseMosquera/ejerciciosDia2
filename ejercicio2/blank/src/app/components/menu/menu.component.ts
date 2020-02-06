import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  pages = [
    {
      tittle: 'Fruits List',
      url: '/menu/fruits',
    },
    {
      tittle: 'Sandbox',
      url: '/menu/sandbox',
    }
  ]

  constructor() { }

  ngOnInit() {}

}
