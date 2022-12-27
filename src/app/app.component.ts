import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
    {
      title: 'Camping',
      imageUrl: '/assets/camping.jpg',
      username: 'eaydin',
      content: 'Kampa Gencler',
    },
    {
      title: 'Tirmanis',
      imageUrl: '/assets/paragliding.jpg',
      username: 'eaydin',
      content: 'Bugunde iyi tirmandim',
    },
    {
      title: 'Surf',
      imageUrl: '/assets/surf.jpg',
      username: 'eaydin',
      content: 'Hadi biraz surf yapalim',
    },
  ];
}
