const start = document.querySelector('#one');
const end = document.querySelector('#two');
const body=document.querySelector('#body');

function generateRandomHexColor() {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color.padStart(6, '0');
}

let intervalId;

// Start the interval when the start element is clicked
start.addEventListener('click', function() {
    intervalId = setInterval(function() {
        const randomColor = generateRandomHexColor();
        body.style.backgroundColor = randomColor;
    }, 1000);
});

// Stop the interval when the end element is clicked
end.addEventListener('click', function() {
    clearInterval(intervalId); 
});
