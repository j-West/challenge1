var rangeInput = document.querySelector("#rangeInput");
var numInput = document.querySelector("#numInput");

rangeInput.addEventListener("input", function() {
  numInput.value = this.value;
});

numInput.addEventListener("input", function() {
  rangeInput.value = this.value;
});
