let searchQuery = "";

document.querySelector('.form-inline').addEventListener('input', function (event) {
    event.preventDefault();
    searchQuery = document.querySelector('.custom-input').value;
    filterCards();
});

document.querySelector('.form-inline').addEventListener('submit', function (some) {
    some.preventDefault();
    searchQuery = document.querySelector('.custom-input').value;
    filterCards();
    searchQuery = document.querySelector('.custom-input').value = "";
});


function filterCards() {
    const cards = document.getElementsByClassName('card-main');
    const anscard = document.querySelectorAll('.card');
    // const cardContainer = document.querySelectorAll('.card-grid-space');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(searchQuery)) {

     
            if (searchQuery != "") {
                anscard[i].style.display = 'flex';
                anscard[i].style.border = "10px solid orange";
                anscard[i].style.height = "21em";
                anscard[i].style.width = "16em";
            } else {
                anscard[i].style.border = "none";
                anscard[i].style.height = "20em";
                anscard[i].style.width = "15em";
            }
            searchQuery.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        else {
            anscard[i].style.border = "none";
            anscard[i].style.height = "20em";
            anscard[i].style.width = "15em";
        }
    }

}







////////////code for the current date////////////////////////////////////////////


const divs = document.getElementsByClassName("date");

for (let i = 0; i < divs.length; i++) {
    divs[i].innerHTML = new Date().toDateString();
}
