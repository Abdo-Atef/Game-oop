import {ui} from './ui.js'

export class getDetails {

constructor(){
  this.ui = new ui()

  document.querySelector('.header .btn-close').addEventListener('click',()=>{
    document.querySelector('.details-page').classList.add('d-none')
    document.querySelector('.main-page').classList.remove('d-none')
  })
  const cards = document.getElementsByClassName('card');
  for(const card of cards){
    card.addEventListener('click',()=>{
      document.getElementById('loader').classList.remove('d-none');
      const id =card.getAttribute('data-id');
      this.getDetails(id);
    })
  }
}

async getDetails(id){
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c3d4296185msh84012836b56ef14p137cc9jsn453784c5e9d1',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
    const response = await fetch(url, options);
    const result = await response.json();
     this.ui.displayDetails(result);

     document.querySelector('.details-page').classList.remove('d-none')
     document.querySelector('.main-page').classList.add('d-none')
    document.getElementById('loader').classList.add('d-none')
  }
}
