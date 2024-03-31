import $ from "jquery";

const Favourites = () => {
  return <h1>Favourites</h1>;
};
$("#search-button").on("click", function (event) {
  event.preventDefault();
  var exerciseInput = $("#search-input").val().trim();
  console.log(exerciseInput);
  getExercise(exerciseInput);
  updateSearchHistory(exerciseInput);
});
function updateSearchHistory(exerciseInput) {
  var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  searchHistory = searchHistory.slice(0, 4);
  searchHistory.push(exerciseInput);
  console.log(searchHistory);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  // Update the search history display on the website
  var historyContainer = $("#history");
  historyContainer.empty();
  searchHistory.forEach(function (search) {
    // Create a button element for each search history item
    var historyItem = $('<button class="btn btn-secondary m-1 history-item">');
    historyItem.text(search);
    historyItem.on("click", function () {
      updateExercise(search);
    });
    historyContainer.append(historyItem);
  });
}
export default Favourites;
