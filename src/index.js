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
        li.innerHTML = q.quote +' <i>-<i/>'+'<i>'+q.author+'<i/>';
        allQuotesList.appendChild(li);
    }
}

async function felkover() {
    let allQuotesArray = [];
    let response = await fetch('/src/quotes.json');
    let result = await response.json();
    let data = result.quotes.sort(function (a, b) {
        if (a.quote < b.quote) { return -1; }
        if (a.quote > b.quote) { return 1; }
        return 0;
    });
    for (let q of data) {
        data.forEach(q => {
            q.quote = q.quote.replace(' the ','<b> the </b>');
            q.quote = q.quote.replace('The ','<b>The </b>');
        })
        allQuotesArray.push(q.quote);
    }
    let dataList = document.getElementById('dataList');
    dataList.textContent='';

    for (let q of allQuotesArray) {
        let li = document.createElement('li');
        li.innerHTML = q;
        dataList.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('allQuotes').addEventListener('click', () => { showAllQuotes() });
    document.getElementById('felkover').addEventListener('click', () => { felkover() });

});

