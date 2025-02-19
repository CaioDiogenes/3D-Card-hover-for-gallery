import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FigureCardComponent } from '../../projects/my-library/src/public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FigureCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '3d-card';
  imgs: Array<any> = [
    {
      object3D: "https://i.imgur.com/SD9RHH1.png",
      title: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWJRhnrz30Sbs7lCtAIwDK32PEalrSKLuVcA3NjVXvfksVF0pnMo6xF3b5jgvsCa2sWdPx9uW9qdq5DiLURdlMRd41oAv9lueQSexRP_rmB2.png?r=420",
      cover: "https://images-ext-1.discordapp.net/external/fYy773moensHQgRyLjGsP86EtlnzDc6IMUDM2gKTFn8/%3Fwidth%3D857%26height%3D1200%26hash%3D2057/https/ae01.alicdn.com/kf/S41ee5c11910540c0857553d42abf3610P.jpg?format=webp&width=479&height=671",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },
    {
      object3D: "https://i.imgur.com/m2M60Bj.png",
      title: "https://i.imgur.com/DHZTe9G.png",
      cover: "https://i.imgur.com/4DyAosb.jpeg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    }
  ]
}
