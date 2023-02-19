import { Component } from '@angular/core';
import { Movie } from 'src/app/main/models/movie.model';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent {
  // second time
  movieArray: Movie[] = [
    {
      adult: false,
      backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
      genre_ids: [28, 12, 878],
      id: 505642,
      original_language: 'en',
      original_title: 'Black Panther: Wakanda Forever',
      overview:
        'Queen Ramonda, Shuri,M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
      popularity: 4782.887,
      poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
      release_date: '2022-11-09',
      title: 'Black Panther: Wakanda Forever',
      video: false,
      vote_average: 7.5,
      vote_count: 3245,
    },
    {
      adult: false,
      backdrop_path: '/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg',
      genre_ids: [16, 12, 35, 10751, 14],
      id: 315162,
      original_language: 'en',
      original_title: 'Puss in Boots: The Last Wish',
      overview:
        'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
      popularity: 3509.8,
      poster_path: '/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
      release_date: '2022-12-07',
      title: 'Puss in Boots: The Last Wish',
      video: false,
      vote_average: 8.5,
      vote_count: 3788,
    },
    {
      adult: false,
      backdrop_path: '/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg',
      genre_ids: [28, 12, 53],
      id: 646389,
      original_language: 'en',
      original_title: 'Plane',
      overview:
        'After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.',
      popularity: 3444.704,
      poster_path: '/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg',
      release_date: '2023-01-13',
      title: 'Plane',
      video: false,
      vote_average: 6.7,
      vote_count: 457,
    },
    {
      adult: false,
      backdrop_path: '/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg',
      genre_ids: [28, 10749, 35],
      id: 758009,
      original_language: 'en',
      original_title: 'Shotgun Wedding',
      overview:
        'Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.',
      popularity: 2133.603,
      poster_path: '/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg',
      release_date: '2022-12-28',
      title: 'Shotgun Wedding',
      video: false,
      vote_average: 6.4,
      vote_count: 464,
    },
    {
      adult: false,
      backdrop_path: '/q2fY4kMXKoGv4CQf310MCxpXlRI.jpg',
      genre_ids: [878, 27, 35],
      id: 536554,
      original_language: 'en',
      original_title: 'M3GAN',
      overview:
        "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
      popularity: 1893.085,
      poster_path: '/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg',
      release_date: '2022-12-28',
      title: 'M3GAN',
      video: false,
      vote_average: 7.5,
      vote_count: 1632,
    },
  ];
}
