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
      imageUrl: '/assets/camping.jpeg',
      username: 'eaydin',
      content: 'Kampa Gencler',
    },
    {
      title: 'Tirmanis',
      imageUrl: '/assets/paragliding.jpeg',
      username: 'eaydin',
      content: 'Bugunde iyi tirmandim',
    },
    {
      title: 'Surf',
      imageUrl: '/assets/surf.jpeg',
      username: 'eaydin',
      content: 'Hadi biraz surf yapalim',
    },
  ];
}
