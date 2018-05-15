function onSubmitSmall() {
	var name = document.getElementById("small_table_name").value;
	if (name == "") {
		return;
	}

	var f = document.getElementById("small_table");
	var input = f.getElementsByTagName("input");

	for (var i=0; i<input.length; ++i) {
		console.log(input[i].value);
	}
}

