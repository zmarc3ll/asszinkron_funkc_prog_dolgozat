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

async function boldFunct() {
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
            q.quote = q.quote.replaceAll(' the ','<b> the </b>');
            q.quote = q.quote.replaceAll('The ','<b>The </b>');
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

async function lenghtOfQuote() {
    let response = await fetch('/src/quotes.json');
    let result = await response.json();
    let data = result.quotes;
    let lengthArray = [];
    let ascendant = data.quotes.sort(function (a, b) {
      let author1 = a.author.toUpperCase();
      let author2 = b.author.toUpperCase();
      if (author1 < author2) {
        return -1;
      } else if (author1 > author2) {
        return 1;
      } 
      return 0;
    });

    let lenghtList = document.getElementById('dataList');
    lenghtList.textContent = "";
    for (let q of ascendant) {
      let li = document.createElement('li');
      lengthArray.push(q.quote.length);
      li.innerHTML = q.quote.length +' '+ q.quote +' '+ q.author;
      lenghtList.appendChild(li);
    }
}
async function search() {
    let searched = document.getElementById('searchInput').value;
    let response = await fetch('/src/quotes.json');
    let result = await response.json();
    let data = result.quotes;
    let filter = data.quotes.filter(
      (q) => q.author.toLowerCase() === searched.toLowerCase()
    );
    document.getElementById('searchOutput').value = filter.length;
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('allQuotes').addEventListener('click', () => { showAllQuotes() });
    document.getElementById('bold').addEventListener('click', () => { boldFunct() });
    document.getElementById('lenghtButton').addEventListener('click', () => { lenghtOfQuote() });
    document.getElementById('counter').addEventListener('click', () => { search() });
    
});

