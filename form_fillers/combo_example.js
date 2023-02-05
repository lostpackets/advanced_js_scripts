(function() {
  let elements = document.querySelectorAll('[value=""]');
  for (let i = 0; i < elements.length; i++) {
    elements[i].value = (i % 2 === 0) ? "0" : "1";
  }
})();
(function() {
  let elements = document.querySelectorAll('[onclick="submitq(5)"]');
  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
  }
})();
(function() {
  let elements = document.querySelectorAll('.keybtn');
  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
  }
})();
