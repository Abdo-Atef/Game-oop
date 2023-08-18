export class ui {
  displayCards(cardsList) {
    let cartona = ``;
    for (let i = 0; i < cardsList.length; i++) {
      cartona += `
      <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="card h-100" data-id ="${cardsList[i].id}">
        <div class="card-body">
          <img src="${cardsList[i].thumbnail}" class="card-img-top" alt="...">
          <div class="d-flex justify-content-between align-items-center mt-3">
            <h5 class="card-title">${cardsList[i].title}</h5>
            <div class="btn btn-sm btn-primary">Free</div>
          </div>
          <p class="card-text">${cardsList[i].short_description}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <span>${cardsList[i].genre}</span>
          <span>${cardsList[i].platform}</span>
        </div>
      </div>
    </div>
      `;
    }
    document.getElementById("cardsContainer").innerHTML = cartona;
  }

  displayDetails(result) {
    let cartona = `
    <div class="col-md-4 my-4">
    <img src="${result.thumbnail}" alt="" class="w-100">
    </div>
    <div class="detailsCo col-md-8 my-md-4">
      <h3>Title: ${result.title}</h3>
      <div>Category: <span>${result.genre}</span></div>
      <div>Platform: <span>${result.platform}</span></div>
      <div>Status: <span>${result.status}</span></div>
      <p>${result.description}</p>
      <a class="btn border-warning text-white" href="${result.game_url}" target="_blank">Show Game</a>
    </div>
    `;
    document.querySelector(".details-page .row").innerHTML = cartona;
  }
}
