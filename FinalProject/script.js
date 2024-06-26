document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    var feedbackMessage = document.getElementById('feedbackMessage');
            feedbackMessage.style.display = 'block';
});