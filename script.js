document.getElementById('apply-button').addEventListener('click', function() {
    var backgroundColor = document.getElementById('background-color').value;
    var fontSize = document.getElementById('font-size').value + 'px';
    var textContent = document.getElementById('text-content').value;

    var textToChange = document.getElementById('text-to-change');
    textToChange.style.backgroundColor = backgroundColor;
    textToChange.style.fontSize = fontSize;
    textToChange.textContent = textContent;
});
