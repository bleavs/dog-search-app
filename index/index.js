// Dog class

class Dog {
  constructor(breed) {
    this.breed = breed
    Dog.all.push(this)
  }
}

Dog.all = []

// Event listener

document.addEventListener('DOMContentLoaded', function(){

  getDogs();

  form = document.querySelector('form.ui.form')
  form.addEventListener('submit', searchBreeds)

  doogz = document.querySelector('select[name="doogz"]')
  doogz.addEventListener('change', selectBreed)

})

function selectBreed(ev) {
  ev.preventDefault()

  const desBreed = event.target.value

  if (document.getElementById("dogimgs").getElementsByTagName("img").length > 0) {
    document.getElementById("dogimgs").innerHTML = ""
  }

  getDogsImgs(desBreed);


}


// Image Search for Breeds

function searchBreeds(ev) {
  ev.preventDefault()

  const desBreed = ev.target.querySelector('input').value

  if (document.getElementById("dogimgs").getElementsByTagName("img").length > 0) {
    document.getElementById("dogimgs").innerHTML = ""
  }

  getDogsImgs(desBreed);

  ev.target.querySelector('input').value = ''



}

// getting Dogs from API

function getDogs() {

  fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json()).then(json => showDogs(json))
}

function showDogs(json) {
  const dogs = json.message;
  const dogBreeds = Object.keys(dogs)

  // const dogDiv = document.querySelector('#dogs')

  const dogSelect = document.querySelector('#dogz')

  for (let i = 0; i < dogBreeds.length; i += 1) {

    // const dog = document.createElement('h5');

    const dog = document.createElement('option');

    dog.value = dogBreeds[i];
    dog.text = dogBreeds[i];

    // dog.value.addEventListener('click', searchBreeds)
    // dog.innerText = dogBreeds[i];

    new Dog(dogBreeds[i]);

    // dogDiv.appendChild(dog);

    dogSelect.appendChild(dog);

    // new Dog(dogBreeds[i]);
  }
}

//

function getDogsImgs(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images`).then(res => res.json()).then(json => showImg(json))
}

function showImg(json) {

    const dogImgs = json.message;

    const dogImgDiv = document.querySelector('#dogimgs')

    for (let i = 0; i < 10; i += 1) {



      if (dogImgs[i]) {
        const doggi = document.createElement('img');
        doggi.setAttribute('src', `${dogImgs[i]}`)

        dogImgDiv.appendChild(doggi);
      }

    }
}
