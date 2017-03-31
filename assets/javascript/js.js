
$("#start-button").on("click", function () {
	location.href = "Booklet/booklet.html";
});

$("#submit-button").on("click", function () {
		var text = $("#text-area").val();
		console.log(text);
	$("#recieve-text").html(text);
})

$("#javascript").on("click", function () {
	location.href = "Booklet/booklet.html";
})