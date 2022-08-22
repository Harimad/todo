let apiQuotes = [...localQuotes];

function newQuote() {
  const $quote = document.querySelector('#quote span:first-child');
  const $author = document.querySelector('#quote span:last-child');

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) $author.innerText = `- Unknwon`;
  else $author.innerText = `- ${quote.author}`;

  $quote.textContent = `"${quote.text}"`;
}

newQuote();

// async function getQuotes() {
//   const apiUrl = 'https://type.fit/api/quotes';
//   try {
//     const res = await fetch(apiUrl);
//     apiQuotes = await res.json();
//     newQuote();
//   } catch (error) {
//     console.log(error);
//   }
// }
// getQuotes();

setInterval(newQuote, 20000);
