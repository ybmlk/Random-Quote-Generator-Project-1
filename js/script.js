/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// an array of quotes with their sources, citation, year and topics
var quotes = [
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    citation: "Publication",
    year: "1952",
    topics: ["Hope", "Wisdom "]
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    topics: ["Politics", "Learning"]
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk",
    citation: "Twitter",
    year: "2014",
    topics: ["Success", "Motivation"]
  },
  {
    quote: "Failure is an option. If things are not failing, you are not innovating enough.",
    source: "Elon Musk",
    citation: "Speech",
    year: "2016",
    topics: ["Business", "Success"]
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    citation: "Publication",
    year: "1994",
    topics: ["Wisdom", "Motivation"]
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    topics: ["Humor", "Business"]
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    source: "James Cameron",
    citation: "Speech",
    year: "2015",
    topics: ["Success", "Business"]
  },
  {
    quote: "You know you are on the road to success if you would do your job and not be paid for it.",
    source: "Oprah Winfrey",
    citation: "Speech",
    year: "2012",
    topics: ["Empowering", "Success"]
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    source: "George Addair",
    topics: ["Empowering", "Motivation"]
  },
  {
    quote: "I have learned over the years that when one's mind is made up, this diminishes fear.",
    source: "Rosa Parks",
    topics: ["Learning", "Politics"]
  },
]


// randomely selects an object (a quote) with all its properties (quote, source, citation, year, topics)
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber]
}

// randomely selects a color code from an array
function getRandomColor() {
  var colors = ["#3ac162", "#1dd1a1", "#54a0ff", "#222f3e", "#341f97",
    "#2e86de", "#01a3a4", "#5f27cd", "#ee5253", "#ff9f43", "#feca57", "#0abde3"];
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber]
}

/* 
1. assigns a random quote (an object) to a variable
2. concatenates the properties of the object into an HTML string
3. inserts the HTML string at a specific spot
4. changes the background color 
*/
function printQuote() {
  var randomQuote = getRandomQuote();
  var quoteHTML = '';
  quoteHTML += `<p class="quote"> ${randomQuote.quote} </p>`;
  quoteHTML += `<p class="source"> ${randomQuote.source}`;
  // makes sure the quote has a citation
  if (randomQuote.citation !== undefined) {
    quoteHTML += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  // makes sure the quote has a year
  if (randomQuote.year !== undefined) {
    quoteHTML += `<span class="year"> ${randomQuote.year} </span></p>`;
  }
  // adds all the quote's topics into an unordered list 
  quoteHTML += '<ul class="topic">';
  for (var i = 0; i < randomQuote.topics.length; i += 1) {
    quoteHTML += `<li>${randomQuote.topics[i]}</li>`
  }
  quoteHTML += '</ul>'
  // inserts the HTML string into the document
  document.getElementById('demo').innerHTML = quoteHTML;
  // assigns a random color to the background
  document.querySelector('body').style.backgroundColor = getRandomColor();
}

printQuote();

// calls the printQuote() function every 5 seconds
setInterval(printQuote, 5000);