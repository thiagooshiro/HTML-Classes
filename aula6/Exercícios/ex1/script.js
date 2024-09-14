const boxes = document.querySelectorAll('.box');
const showButton = document.getElementById('show-box');
const hideButton = document.getElementById('hide-box');

showButton.addEventListener('click', () => {
    boxes.forEach(box => box.classList.remove('hidden'));
});

hideButton.addEventListener('click', () => {
    boxes.forEach(box => box.classList.add('hidden'));
});
