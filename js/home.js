import {ui} from './ui.js'
import {getDetails} from './details.js'


export class startApp {
  constructor(){
    this.getGame('MMORPG');

    const links = document.querySelectorAll('.nav-item .nav-link')
    for(const link of links){
      link.addEventListener('click',() => {
        document.getElementById('loader').classList.remove('d-none')
        document.querySelector('.nav-link.active').classList.remove('active')
        link.classList.add('active');
        let info = link.getAttribute('data-info');
        this.getGame(info);
      })
    }
    this.ui = new ui();
  }

  async getGame(category) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c3d4296185msh84012836b56ef14p137cc9jsn453784c5e9d1",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
    const result = await response.json();
    document.getElementById('loader').classList.add('d-none')
    this.ui.displayCards(result);
    new getDetails();
  }
}
