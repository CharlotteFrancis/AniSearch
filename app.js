//https://kitsu.io/api/edge/anime?filter[categories]=adventure

//filter by category

document.getElementById('submitGenre').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${document.getElementById('genre').value}`)
  .then(res => {
    //grab results array
    let results = res.data.data
    console.log(results)
    if(results.length <= 0) {
      console.log('No results found.')
    } else {
      //appends 10 list elements to the ul aniList
      for(let i = 0; i < 10 || i < results.length; i++) {
        //console.log(results[i])
        let listElem = document.createElement('li')
        listElem.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${results[i].attributes.posterImage.small}" class="card-img-top" alt="${results[i].attributes.titles.en_jp}">
            <div class="card-body">
              <h5 class="card-title">${results[i].attributes.titles.en_jp}</h5>
              <p class="card-text">${results[i].attributes.description}</p>
              <a id="favorite" class="btn btn-primary">Add to Favorites</a>
            </div>
        </div>
        `
        document.getElementById('aniList').append(listElem)
      }
    }
  })
  .catch(err => console.error(err))


})