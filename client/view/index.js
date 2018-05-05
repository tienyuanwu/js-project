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
	var url = 'http://localhost:8080/v1/chart3d?id=' + id + '&table=' + table
	$.getJSON(url, function(data){

		/*
	var z_data = [
		[ 0, 0, 0, 0, 0, 0, 0, 0],
		[ 0, 0, 0, 0, 0, 0, 1, 0],
		[ 0, 0, 0, 0, 0, 1, 0, 0],
		[ 0, 0, 0, 0, 0, 0, 0, 0],
		[ 0, 0,	0, 1, 0, 0, 0, 0],
		[ 0, 0, 0, 0, 0, 0, 0, 0],
		[ 0, 0, 0, 0, 0, 0, 0, 0],
		[ 1, 0, 0, 0, 0, 0, 0, 0]
	]
	*/
		var z_data = data.datas;

		// creating data objects..
		var data_z1 = {z: z_data, type: 'surface'};

		var layout = {
			scene: {
				xaxis: {
					tickvals: [0, 1, 2, 3, 4, 5, 6, 7],
					ticktext: ['乾', '兌', '離', '震', '巽', '坎', '艮', '坤'],
					tickfont: { size: 16 }
				},
				yaxis: {
					tickvals: [0, 1, 2, 3, 4, 5, 6, 7],
					ticktext: ['乾', '兌', '離', '震', '巽', '坎', '艮', '坤'],
					tickfont: { size: 16 }
				}
			}
		};

		// Plotting the surfaces..
		Plotly.newPlot('myDiv', [data_z1], layout);

	});
}
