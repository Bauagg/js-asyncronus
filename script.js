
const btnSearch = document.querySelector(`#search-btn`)
btnSearch.addEventListener('click', async function () {
    const imputSearch = document.querySelector(`.form-control`)
    const brita = await getBrita(imputSearch.value)
    console.log(brita)
    // updateUI(brita)


});

function getBrita(keyword) {

    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f6f9b5ff08ed46d8ab32401be3684d00')
        .then(data => data.json())
        .then(data => {
            data + keyword
            return console.log(data.articles)

        })
}
getBrita()


function updateUI(data) {
    let card = '';
    data.forEach(e => card + showCards(e))
    const britaContainer = document.querySelector('.brita-container')
    britaContainer.innerHTML = card;
}

function showCards(m) {
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${m.urlToImage}">
                    <div class="card-body">
                        <h5 class="card-title">${m.title}</h5>
                        <p class="card-text">${m.name}.</p>
                        <a href="#" class="btn btn-primary">Furthermore</a>
                    </div>
                </div>
            </div>`;
}