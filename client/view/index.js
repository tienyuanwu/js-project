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
