document.addEventListener("DOMContentLoaded", function () {
  // Selectors of HTML Elements
  const selectBoy = document.getElementsByClassName("boy");
  const selectGirl = document.getElementsByClassName("girl");

  // Buttons!
  const boyButton = document.getElementById("boyButton");
  const girlButton = document.getElementById("girlButton");

  // Initial State
  Array.from(selectBoy).forEach(function (element) {
    element.style.display = "none";
  });
  Array.from(selectGirl).forEach(function (element) {
    element.style.display = "none";
  });

  // Event Listeners
  boyButton.addEventListener("click", showBoyTable);
  girlButton.addEventListener("click", showGirlTable);

  // Functions
  function showBoyTable() {
    Array.from(selectBoy).forEach(function (element) {
      if (element.style.display == "none") {
        element.style.display = "block";
        boyButton.innerHTML = "Hide Boy Records";
      } else {
        element.style.display = "none";
        boyButton.innerHTML = "Boy Records";
      }
    });
  }
  function showGirlTable() {
    Array.from(selectGirl).forEach(function (element) {
      if (element.style.display == "none") {
        element.style.display = "block";
        girlButton.innerHTML = "Hide Girl Records";
      } else {
        element.style.display = "none";
        girlButton.innerHTML = "Girl Records";
      }
    });
  }
});
