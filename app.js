// api key
const ACCESS_KEY = 'r3WeSjY-hv9gyJE1Rw4h0L1FsTUsR3gO8PjPI2Jh-zY';

// request photo
document.getElementById('submit').addEventListener('click', function(e) {

    // clear before
    clearPhotos();

    const query = document.getElementById('query').value;

    fetch(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${ACCESS_KEY}`)
    .then(res => res.json())
    .then(json => {
        setPhotos(json.results);
    })
    .catch(err => console.error(err));

});


// set photos
const photoList = document.getElementById('photo_list');

function setPhotos(photos) {
    photos.forEach(photo => {
        const photoTemplate = 
        `<div class="photo">
            <img src="${photo.urls.full}" alt="${photo.urls.description}" width="50%" height="50%"></img>
        </div>`;
        photoList.innerHTML += photoTemplate;
    });
}

function clearPhotos() {
    photoList.innerHTML = '';
}