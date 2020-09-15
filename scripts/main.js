let quotes = [

    {image: 'C:/Users/Nik/Desktop/projects/random-quote/images/oscar.jpg',
    quote: '"Be yourself; everyone else is already taken." <br>-Oscar Wilde'
    },

    {image: 'C:/Users/Nik/Desktop/projects/random-quote/images/albert.jpg',
    quote: '"Two things are infinite: the universe and human stupidity; and I \'m not sure about the universe." <br>-Albert Einstein'
    },

    {image: 'C:/Users/Nik/Desktop/projects/random-quote/images/marcus.jpg',
    quote: '"A room without books is like a body without a soul" <br>-Marcus Tullius Cicero'
    },

    {image: 'C:/Users/Nik/Desktop/projects/random-quote/images/mark.jpg',
    quote: '"If you tell the truth, you don\'t have to remember anything." <br>-Mark Twain'
    },

    {image: 'C:/Users/Nik/Desktop/projects/random-quote/images/friedrich.jpg',
    quote: '"Without music, life would be a mistake" <br>-Friedrich Nietzsche'
    }

];

function randomQuote () {
    var num = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-box').innerHTML = quotes[num].quote;
    document.getElementById('image-box').src = quotes[num].image;
}
    
  





 
