import ('./catalog.json')
fetch("./catalog.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    let catalog = response;
    console.log (catalog);
    console.log('privet')
  })