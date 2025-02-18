
function addItem() {
    const itemInput = document.getElementById('item');
    const itemText = itemInput.value.trim();
    if (itemText === '') {
         alert ("Por favor, Digite algo")
    return;
}
    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${itemText}</span>
        <button onclick="removeItem(this)">Remover</button>
    `;
    document.getElementById('lista').appendChild(li);
    itemInput.value = '';
}

function removeItem(button) {
    button.parentElement.remove();
}

function toggleComplete(span) {
    span.classList.toggle('completed');
}
  

