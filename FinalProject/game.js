document.addEventListener('DOMContentLoaded', function() {
    const turtle = document.getElementById('turtle');
    const gameContainer = document.querySelector('.game-container');
    let isGameOver = false;
    
    function jump() {
        if (!isGameOver) {
            turtle.style.transform = 'translateY(-60px)';
            setTimeout(() => {
                turtle.style.transform = 'translateY(0)';
            }, 200);
        }
    }
    
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            jump();
        }
    });
    
    function createObstacle() {
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        gameContainer.appendChild(obstacle);
        
        setTimeout(() => {
            if (!isGameOver) {
                obstacle.remove();
            }
        }, 3000);
    }
    
    setInterval(createObstacle, 2500);
    
    function checkCollision() {
        const obstacles = document.querySelectorAll('.obstacle');
        obstacles.forEach(obstacle => {
            if (
                turtle.getBoundingClientRect().bottom >= obstacle.getBoundingClientRect().top &&
                turtle.getBoundingClientRect().top <= obstacle.getBoundingClientRect().bottom &&
                turtle.getBoundingClientRect().right >= obstacle.getBoundingClientRect().left &&
                turtle.getBoundingClientRect().left <= obstacle.getBoundingClientRect().right
            ) {
                gameOver();
            }
        });
    }
    
    setInterval(checkCollision, 50);
    
    function gameOver() {
        isGameOver = true;
        alert('Game Over! Click OK to play again.');
        location.reload(); // Reloads the page to restart the game
    }
});
