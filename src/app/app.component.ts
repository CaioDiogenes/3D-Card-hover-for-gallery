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
      title: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Dandadan_logo.png",
      cover: "https://images-ext-1.discordapp.net/external/fYy773moensHQgRyLjGsP86EtlnzDc6IMUDM2gKTFn8/%3Fwidth%3D857%26height%3D1200%26hash%3D2057/https/ae01.alicdn.com/kf/S41ee5c11910540c0857553d42abf3610P.jpg?format=webp&width=479&height=671",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },

    // okarun
    {
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },

    // ash
    {
      object3D: "https://i.imgur.com/RJZODdb.gif",
      title: "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png",
      cover: "https://i.pinimg.com/736x/d6/b9/b2/d6b9b229742fa2ab8c620173953bef8b.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },
    
    {
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },{
      object3D: "https://i.imgur.com/vWa25XP.gif",
      title: "https://tamashiiweb.com/images/category/664613f57fe0f.png",
      cover: "https://4kwallpapers.com/images/walls/thumbs_2t/19423.jpg",
      redirect: "https://imgur.com/a/6L5s8Z1"
    },
  ]
}
