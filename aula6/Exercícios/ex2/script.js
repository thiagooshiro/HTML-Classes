const boxes = document.querySelectorAll('.box');
const toggleButton = document.getElementById('toggle-grow');

toggleButton.addEventListener('click', () => {
    boxes.forEach(box => box.classList.toggle('grow'));
});
