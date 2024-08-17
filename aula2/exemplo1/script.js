function toggleLista(id) {
    var lista = document.getElementById(id);
    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}