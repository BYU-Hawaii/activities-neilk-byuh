document.getElementById('feedbackForm').addEventListener('submit', function(event) {
//prevents going to top
event.preventDefault();
//feedback submitted
var feedbackMessage = document.getElementById('feedbackMessage');
        feedbackMessage.style.display = 'block';
//turtle game 
function resetGame() {
    document.getElementById('gameMessage').innerText = '';
    var turtle = document.querySelector('.turtle');
    turtle.style.animation = 'none';
    turtle.offsetHeight; 
    turtle.style.animation = null;
}
});