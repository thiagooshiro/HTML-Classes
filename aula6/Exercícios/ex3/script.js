document.getElementById("reorder-boxes").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    
    boxes.forEach((box, index) => {
        // Alterando a ordem de cada caixa
        box.style.order = boxes.length - index;
    });
});

document.getElementById("reset-order").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    
    boxes.forEach((box) => {
        // Resetando a ordem para o valor padrão (0)
        box.style.order = "0";
    });
});
