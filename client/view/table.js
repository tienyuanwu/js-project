function onSubmit() {
	var name = document.getElementById("table_name").value;
	if (name == "") {
		alert( "name is empty!");
		return;
	}

	var b1 = parseFloat(document.getElementById("table_b1").value);
	var b2 = parseFloat(document.getElementById("table_b2").value);
	var b3 = parseFloat(document.getElementById("table_b3").value);
	var b4 = parseFloat(document.getElementById("table_b4").value);
	var b5 = parseFloat(document.getElementById("table_b5").value);
	var b6 = parseFloat(document.getElementById("table_b6").value);

	postTable(name, b1, b2, b3, b4, b5, b6);
	console.log(b1.value, name.value=="");
}

function postTable(name, b1, b2, b3, b4, b5, b6) {
	var table = {
		"name": name,
		"data": [b1,b2,b3,b4,b5,b6]
	}
	console.log(table)

	$.ajax({
		type: 'POST',
		url: 'http://localhost:8080/v1/table',
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
