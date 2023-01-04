let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById('main-title').innerHTML = 'Dom Toretto Homepage!';

  // Part 2
  let bodyColor = document.querySelector('body');
  bodyColor.style.backgroundColor = '#cdcdcd';

  // Part 3
  let lastItem = document.querySelector('#favorite-things li:last-child');
  lastItem.remove();

  // Part 4
  const specialTitles = document.getElementsByClassName('special-title');
  for (let i of specialTitles) {
    i.style.fontSize = '2rem';
  }

  // Part 5
  let raceItems = document.querySelectorAll('#past-races li');
  for (let li of raceItems) {
    if (li.innerHTML === 'Chicago') {
      li.remove();
    }
  }

  // Part 6
  let li = document.createElement('li');
  li.textContent = 'New York';
  document.getElementById('past-races').appendChild(li);

  // Part 7
  let divEl = document.createElement('div');
  divEl.classList.add('blog-post', 'purple');
  let h2 = document.createElement('div');
  h2.textContent = 'New York';
  h2.style.color = 'white';
  h2.style.fontSize = '2em';
  divEl.appendChild(h2);
  let p = document.createElement('p');
  p.textContent = 'I RACED NEW YORK CITY WITH MY CAR!';
  divEl.appendChild(p);
  let mainEl = document.querySelector('div.main');
  mainEl.appendChild(divEl);



  // Part 8

  let quoteEl = document.getElementById('quote-title');
  quoteEl.onclick = randomQuote;


  // Part 9
  const blogPosts = document.getElementsByClassName('blog-post');
  for (let i of blogPosts) {
    i.addEventListener('mouseover', (e) => {
      i.classList.add('red');
      i.classList.remove('purple');
    });
    i.addEventListener('mouseout', (e) => {
      i.classList.remove('red');
      i.classList.add('purple');
    });
  }
  // for (let i of blogPosts) {
  //   i.addEventListener('mouseenter', (e) => {
  //     i.classList.toggle('red');
  //   });
  //   i.addEventListener('mouseout', (e) => {
  //     i.classList.toggle('purple');
  //   });
  // }

});
