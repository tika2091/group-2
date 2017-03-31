
$("#flipbook").on("click", function () {
	console.log("gogo");
})


$("#submit-button").on("click", function storyText() {
	var text = $("#input-1").val().trim();
	$("#story-text").html(text);

});