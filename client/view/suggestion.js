function onSubmitSmall() {
	var name = document.getElementById("small_table_name").value;
	if (name == "") {
		alert( "table name 為空！");
		return;
	}

	var f = document.getElementById("small_table");
	var input = f.getElementsByTagName("input");

	var map = {}
	for (var i=0; i<input.length; ++i) {
		if (input[i].value == "") {
			alert( input[i].name + "為空！");
			return;
		}
		map[input[i].name] = input[i].value;
	}

	var table = {
		"name": name,
		"type": "sugg4",
		"data": map
	}

	console.log(table)

	$.ajax({
		type: 'POST',
		url: 'http://localhost:8080/v1/suggestion',
		data: JSON.stringify(table),
		success: function(data) { 
			alert( "success!");
		},
		error: function(jqXHR, textStatus, error) {
			alert(error);
		},
		contentType: "application/json",
		dataType: 'json'
	});
}

function onSubmitFull() {
	var name = document.getElementById("full_table_name").value;
	if (name == "") {
		alert( "table name 為空！");
		return;
	}

	var f = document.getElementById("full_table");
	var input = f.getElementsByTagName("input");

	var map = {}
	for (var i=0; i<input.length; ++i) {
		if (input[i].value == "") {
			alert( input[i].name + "為空！");
			return;
		}
		map[input[i].name] = input[i].value;
	}

	var table = {
		"name": name,
		"type": "sugg64",
		"data": map
	}

	console.log(table)

	$.ajax({
		type: 'POST',
		url: 'http://localhost:8080/v1/suggestion',
		data: JSON.stringify(table),
		success: function(data) { 
			alert( "success!");
		},
		error: function(jqXHR, textStatus, error) {
			alert(error);
		},
		contentType: "application/json",
		dataType: 'json'
	});
}

