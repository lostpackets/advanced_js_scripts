(function() {
  let elements = document.querySelectorAll('[onclick="submitq(5)"]');
  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
  }
})();
