document.getElementById("searchValue").onclick = function getInputValue() {
  const listOfThings = [
    {
      searchTerm: "string to find",
      output: "text to display",
      comment: "additional comment to add",
    },
    {
      searchTerm: "string to find",
      output: "text to display",
      comment: "additional comment to add",
    },
  ];
  var inputVal = document.getElementById("myInput").value;
  var html = "";

  for (i = 0; i < listOfThings.length; i++) {
    if (inputVal.includes(listOfThings[i].searchTerm)) {
      html += `<div><p>${listOfThings[i].output} ✅ ${listOfThings[i].comment}</p></div>`;
    } else {
      html += `<div><p>${listOfThings[i].output} ❌ </p></div>`;
    }
  }
  document.querySelector("#searchResults").innerHTML = html;
};
