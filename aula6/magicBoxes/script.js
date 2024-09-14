const boxes = document.querySelectorAll('.box');
const hideButton = document.getElementById('hide-box');
const resetButton = document.getElementById('reset-box');

// Função para desaparecer a primeira caixa visível
hideButton.addEventListener('click', () => {
    for (let box of boxes) {
        if (!box.classList.contains('hidden')) {
            box.classList.add('hidden');
            break; // Some apenas uma caixa
        }
    }
});

// Função para resetar e mostrar todas as caixas
resetButton.addEventListener('click', () => {
    for (let box of boxes) {
        box.classList.remove('hidden');
    }
});
