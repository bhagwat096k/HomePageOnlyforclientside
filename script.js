document.getElementById('story-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const storyInput = document.getElementById('story-input').value;
    const errorMessage = document.getElementById('error-message');

    if (storyInput.length < 3) {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
        alert("Story submitted: " + storyInput);
        document.getElementById('story-form').reset(); // Clear the form
    }
});
