function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function get3dChart(id, table) {
	var url = 'http://localhost:8080/v1/chart/sequence?id=' + id + '&table=' + table
	$.getJSON(url, function(data){
		var array = []
		for (i=0; i<data.datas.length; i++) {
			var d = data.datas[i];
			var color = 'rgb(' + d.color.r + ',' + d.color.g + ',' + d.color.b + ')';
			console.log(d);
			console.log(color);
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

function getPieChart(id, table) {
	var url = 'http://localhost:8080/v1/chart/frequency?id=' + id + '&table=' + table
	$.getJSON(url, function(data){
		var array = []
		for (i=0; i<data.datas.length; i++) {
			var d = data.datas[i];
			var color = 'rgb(' + d.color.r + ',' + d.color.g + ',' + d.color.b + ')';
			console.log(d);
			console.log(color);
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
