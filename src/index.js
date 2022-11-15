async function showAllQuotes() {

    let response = await fetch('/src/quotes.json');
    let result = await response.json();
    let data = result.quotes.sort(function (a, b) {
        if (a.quote < b.quote) { return -1; }
        if (a.quote > b.quote) { return 1; }
        return 0;
    });
    let allQuotesList = document.getElementById('dataList');
    allQuotesList.textContent = '';

    for (let q of data) {
        let li = document.createElement('li');
        li.innerHTML = q.quote;
        allQuotesList.appendChild(li);
    }
}

async function felkover() {
    let response = await fetch('/src/quotes.json');
    let result = await response.json();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('allQuotes').addEventListener('click', () => { showAllQuotes() });
})

