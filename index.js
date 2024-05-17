document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('wishlist-form');
    const input = document.getElementById('item-input');
    const wishlist = document.getElementById('wishlist');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addItem(input.value);
        input.value = '';
    });

    wishlist.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove')) {
            removeItem(event.target.parentElement);
        }
    });

    function addItem(item) {
        const li = document.createElement('li');
        li.textContent = item;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        li.appendChild(removeButton);
        wishlist.appendChild(li);
    }

    function removeItem(item) {
        wishlist.removeChild(item);
    }
});
