//https://kitsu.io/api/edge/anime?filter[categories]=adventure

//filter by category

document.getElementById('submitGenre').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=adventure`)
  .then(res => {
    let results = res.data
    if(results.length > 1) {
      console.log('works')
    } else {
      console.log('doesnt work')
    }
  })
    .catch(err => console.error(err))
})

document.getElementById('submitTitle').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${document.getElementById('submitTitle').value}`)
    .then(res => {
      let results = res.data
      console.log(results)
      })
    .catch(err => console.error(err))
})