// variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        person: "Charles R. Swindoll"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        person: "Confucius"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    // Add more quotes here...
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        person: "Chinese Proverb"
    },
    // Add more quotes here...


// Generate additional quotes to reach a total of 50
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        person: "Abraham Lincoln"
    },
    // Add more quotes here...
];


btn.addEventListener('click', function(){
    

    let random = Math.floor(Math.random() * quotes.length)

        quote.innerText = quotes[random].quote;
        person.innerText = quotes[random].person;

})
