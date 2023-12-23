const accesKey = "0abDulYXT6BeYH4thzQzJPi2dU9A5Wd5pxEZsggUQ7k";



const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchReasult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;



async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;

    // dont use following quotes "" or '' istead od this use `` just above tab button
    // const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}'


    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchReasult.innerHTML = "";
    }



    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchReasult.appendChild(imagelink);
    })
 showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();

});

showMoreBtn.addEventListener("click",()=>{
page++;
searchImages();
})