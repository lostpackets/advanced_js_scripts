let elements = document.querySelectorAll('[value=""]');
for (let i = 0; i < elements.length; i++) {
    elements[i].value = (i % 2 === 0) ? "0" : "1";
}
