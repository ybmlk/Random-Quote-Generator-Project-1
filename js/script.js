/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    citation: "Publication",
    year: "1952",
    tags: ["Hope", "Wisdom "]
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    tags: ["Politics", "Learning"]
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk",
    citation: "Twitter",
    year: "2014",
    tags: ["Success", "Motivation"]
  },
  {
    quote: "Failure is an option. If things are not failing, you are not innovating enough.",
    source: "Elon Musk",
    citation: "Speech",
    year: "2016",
    tags: ["Business", "Success"]
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    citation: "Publication",
    year: "1994",
    tags: ["Wisdom", "Motivation"]
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    tags: ["Humor", "Business"]
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    source: "James Cameron",
    citation: "Speech",
    year: "2015",
    tags: ["Success", "Business"]
  },
  {
    quote: "You know you are on the road to success if you would do your job and not be paid for it.",
    source: "Oprah Winfrey",
    citation: "Speech",
    year: "2012",
    tags: ["Empowering", "Success"]
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    source: "George Addair",
    tags: ["Empowering", "Motivation"]
  },
  {
    quote: "I have learned over the years that when one's mind is made up, this diminishes fear.",
    source: "Rosa Parks",
    tags: ["Learning", "Politics"]
  },
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber]
}


/***
 * `printQuote` function
***/
function printQuote() {
  var randomQuote = getRandomQuote();
  var quoteHTML = '';
  quoteHTML += `<p class="quote"> ${randomQuote.quote} </p>`;
  quoteHTML += `<p class="source"> ${randomQuote.source}`;
  if (randomQuote.citation !== undefined) {
    quoteHTML += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year !== undefined) {
    quoteHTML += `<span class="year"> ${randomQuote.year} </span></p>`;
  }
  return document.getElementById('demo').innerHTML = quoteHTML
}

printQuote()
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

