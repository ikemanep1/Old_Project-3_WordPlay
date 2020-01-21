$(document).ready(function() {
  $("form#sentence_input").submit(function(event) {
    event.preventDefault();
    var item1 = $("#item1").val();
     var sentences = item1.split(" ");
    console.log(sentences);
    var matrix = []
    sentences.forEach(function(sentence) {
      characterCheck = sentence.length;
      if (characterCheck >= 3)
      matrix.push(sentence);
    });
    var results = matrix.reverse().join(" ");
    console.log(results);
    $(".results").append("<li>" + results + "</li>");
});
});
