function createRecordSelect() {
	var url = 'http://localhost:8080/v1/record';
	$.getJSON(url, function(data){
		for (i = 0; i < data.records.length; i++) {
			var option = document.createElement("option");
			option.text = data.records[i];
			option.value = data.records[i];
			document.getElementById("record_select").appendChild(option);
		} 
	});
}

function createTableSelect() {
	var url = 'http://localhost:8080/v1/table/list';
	$.getJSON(url, function(data){
		for (i = 0; i < data.data.length; i++) {
			var table = data.data[i];
			var option = document.createElement("option");
			option.text = table.name;
			option.value = table.id;
			document.getElementById("table_select").appendChild(option);
		} 
	});
}

function createSuggestionSelect() {
	var url = 'http://localhost:8080/v1/suggestion/list';
	$.getJSON(url, function(data){
		for (i = 0; i < data.data.length; i++) {
			var table = data.data[i];
			var option = document.createElement("option");
			option.text = table.name;
			option.value = table.id;
			document.getElementById("suggestion_select").appendChild(option);
		} 
	});
}

function onReload() {
	var select = document.getElementById("record_select");
	recordId = select.options[select.selectedIndex].value;
	if (recordId == null) {
		return;
	}

	select = document.getElementById("table_select");
	tableId = select.options[select.selectedIndex].value;
	if (tableId == null) {
		return;
	}

	select = document.getElementById("suggestion_select");
	suggestionId = select.options[select.selectedIndex].value;
	if (suggestionId == null) {
		return;
	}

	getSuggestion(recordId, tableId, suggestionId)
	getSequence3dChard(recordId, tableId);
	getFrequency3dChard(recordId, tableId);
}

function getSuggestion(record, table, suggestion) {
	var url = 'http://localhost:8080/v1/suggestion?record=' + record + '&table=' + table + '&suggestion=' + suggestion; 
	$.getJSON(url, function(data){
		var html = "<ul>"
		for (i = 0; i < data.data.length; i++) {
			var string = data.data[i];
			html += "<li>" + string + "</li>"
		}
		html += "</ui>"
		document.getElementById('suggestion_list').innerHTML = html;
	});

}

function getSequence3dChard(id, table) {
	var url = 'http://localhost:8080/v1/chart/sequence?record=' + id + '&table=' + table
	$.getJSON(url, function(data){
		var array = []
		for (i=0; i<data.datas.length; i++) {
			var d = data.datas[i];
			var color = 'rgb(' + d.color.r + ',' + d.color.g + ',' + d.color.b + ')';
			var trace1 = {
				x:[d.x], y: [d.y], z:[d.z],
				showlegend: false,
				mode: 'markers',
				marker: {
					size: 10,
					color: color,
				},
				type: 'scatter3d'
			};
			array.push(trace1);
		}

		var layout = {
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 0
			},
			scene: {
				xaxis: {
					range: [0, 7],
					tickmode: 'array',
					tickvals: [0, 1, 2, 3, 4, 5, 6, 7],
					ticktext: ['乾', '兌', '離', '震', '巽', '坎', '艮', '坤'],
					tickfont: { size: 14 }
				},
				yaxis: {
					range: [0, 7],
					tickmode: 'array',
					tickvals: [0, 1, 2, 3, 4, 5, 6, 7],
					ticktext: ['乾', '兌', '離', '震', '巽', '坎', '艮', '坤'],
					tickfont: { size: 14 }
				}
			}

		};

		// Plotting the surfaces..
		Plotly.newPlot('chart3dsequence', array, layout);
	});
}

function getFrequency3dChard(id, table) {
	var url = 'http://localhost:8080/v1/chart/frequency?record=' + id + '&table=' + table
	$.getJSON(url, function(data){
		var array = []
		for (i=0; i<data.datas.length; i++) {
			var d = data.datas[i];
			var color = 'rgb(' + d.color.r + ',' + d.color.g + ',' + d.color.b + ')';
			var trace1 = {
				x:[d.x], y: [d.y], z:[d.z],
				showlegend: false,
				mode: 'markers',
				marker: {
					size: 10,
					color: color,
				},
				type: 'scatter3d'
			};
			array.push(trace1);
		}

		var layout = {
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 0
			},
			scene: {
				xaxis: {
					range: [0, 7],
					tickmode: 'array',
					tickvals: [0, 1, 2, 3, 4, 5, 6, 7],
					ticktext: ['乾', '兌', '離', '震', '巽', '坎', '艮', '坤'],
					tickfont: { size: 14 }
				},
				yaxis: {
					range: [0, 7],
					tickmode: 'array',
					tickvals: [0, 1, 2, 3, 4, 5, 6, 7],
					ticktext: ['乾', '兌', '離', '震', '巽', '坎', '艮', '坤'],
					tickfont: { size: 14 }
				}
			}

		};

		// Plotting the surfaces..
		Plotly.newPlot('chart3dfrequency', array, layout);
	});
}

function postTable() {
	var table = {
		"name": "Test Table",
		"data": [1,2,3,4,5,6]
	}

	$.ajax({
		type: 'POST',
		url: 'http://localhost:8080/v1/table',
		data: JSON.stringify(table),
		success: function(data) { 
			console.log("success")
		},
		error: function(jqXHR, textStatus, error) {
			console.log(error)
		},
		contentType: "application/json",
		dataType: 'json'
	});
}
