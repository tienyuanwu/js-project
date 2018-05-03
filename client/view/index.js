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

// Plotting the surfaces..
Plotly.newPlot('myDiv', [data_z1]);
