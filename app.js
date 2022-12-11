// api key
const ACCESS_KEY = 'r3WeSjY-hv9gyJE1Rw4h0L1FsTUsR3gO8PjPI2Jh-zY';
const submitButton = document.getElementById('submit_button');
const queryInput = document.getElementById('query');
const photoList = document.getElementById('photo_list');
let page = 1;

submitButton.addEventListener('click', requestPhotos);
queryInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        submitButton.click(); 
        clearPhotos();
    }
})

// request photos
function requestPhotos() {
    // request
    const query = queryInput.value;

    fetch(`https://api.unsplash.com/search/photos/?query=${query}&page=${page}&client_id=${ACCESS_KEY}`)
    .then(res => res.json())
    .then(json => {
        setPhotos(json.results);
    })
    .catch(err => console.error(err));
}


// set photos
function setPhotos(photos) {
    photos.forEach(photo => {
        const photoTemplate = 
        `<div class="photo">
            <img 
              src="${photo.urls.full}"
              alt="${photo.urls.description}"
              width="50%"
              height="50%">
            </img>
        </div>`;

        photoList.innerHTML += photoTemplate;
    });
}

// clear photo list
function clearPhotos() {
    photoList.innerHTML = '';
    page = 1;
}

// scroll event
window.addEventListener('scroll', (e) => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        ++page;
        requestPhotos();
     }
});