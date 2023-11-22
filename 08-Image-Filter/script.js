const searchForm = document.querySelector("#searchForm");
const searchBox = document.querySelector("#searchBox");
const searchResult = document.querySelector("#searchResult");
const showMore = document.querySelector("#showMore");

const apiKey = myKey.key;
let keyWord = "";
let page = 1;

async function searchImage(){
    keyWord = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${apiKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        searchResult.appendChild(image);
    })
    showMore.style.display = "block"
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})

showMore.addEventListener('click', ()=>{
    page++;
    searchImage();
})