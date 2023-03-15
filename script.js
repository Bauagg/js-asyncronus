
const btnSearch = document.querySelector(`#search-btn`)
btnSearch.addEventListener('click', async function () {

    try {
        const imputSearch = document.querySelector('.form-control')
        const brita = await getBrita(imputSearch.value)
        console.log(brita)
        updateUI(brita)
    }

    catch (error) {
        console.log(error)
    }

    finally {
        loading()


    }
});

function getBrita(getData) {
    return fetch(`https://newsapi.org/v2/everything?q=${getData}&apiKey=f6f9b5ff08ed46d8ab32401be3684d00`)
        .then(data => data.json())
        .then(data => {
            return data.articles;
        })
}


function updateUI(data) {
    let datas = [];
    data.forEach(e => {
        const card = showCards(e)
        datas.push(card)
    });

    document.getElementsByClassName('row brita-container')[0].innerHTML = datas;
}

function showCards(m) {
    return `<div class="col-md-3 my-0">
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

function loading() {
    let lod = load()
    document.getElementsByClassName('load')[0].innerHTML = lod;
    console.log(lod)
}

function load() {
    return `
    <div class="text-center m-5">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>`
}



