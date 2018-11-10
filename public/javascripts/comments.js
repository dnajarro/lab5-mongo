function postComment() {
$(document).ready(function(){
  $("#postComment").click(function(){
    var url = "comment";
    var myobj = {Name:$("#name").val(),Comment:$("#comment").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
    $.ajax({
        url:url,
        type: "POST",
        data: jobj,
        contentType: "application/json; charset=utf-8",
        success: function(data,textStatus) {
            $("#done").html(textStatus);
        }
    });
  });
});
}

function getComments() {
$("#getComments").click(function() {
  var name = $("#query").val();
  var URL = "comment?q=" + name;
  console.log(URL);
  $.getJSON(URL, function(data) {
    console.log(data);
    var everything = "<ul>";
    for(var comment in data) {
      com = data[comment];
      everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
    }
    everything += "</ul>";
    $("#comments").html(everything);
  });
});
}

function deleteComments() {
$(document).ready(function(){
  $("#deleteComments").click(function(){
    var url = "delete";
    $.ajax({
        url:url,
        type: "DELETE",
        success: function(data,textStatus) {
            $("#done").html(textStatus);
        }
    });
  });
});
}
