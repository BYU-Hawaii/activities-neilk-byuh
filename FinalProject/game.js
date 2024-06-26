document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const resetButton = document.getElementById('resetButton');
    const cardImages = [
        'turtle1.jpg', 'turtle2.jpg', 'turtle3.jpg', 'turtle4.jpg',
        'turtle5.jpg', 'turtle6.jpg', 'turtle7.jpg', 'turtle8.jpg',
        'turtle1.jpg', 'turtle2.jpg', 'turtle3.jpg', 'turtle4.jpg',
        'turtle5.jpg', 'turtle6.jpg', 'turtle7.jpg', 'turtle8.jpg'
    ];

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        gameBoard.innerHTML = '';
        shuffle(cardImages);
        cardImages.forEach(image => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.image = image;

            const frontFace = document.createElement('img');
            frontFace.src = `./images/${image}`;

            card.appendChild(frontFace);
            gameBoard.appendChild(card);

            card.addEventListener('click', flipCard);
        });
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;

        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.image === secondCard.dataset.image;

        if (isMatch) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function resetGame() {
        createBoard();
    }

    resetButton.addEventListener('click', resetGame);

    createBoard();
});
jpg