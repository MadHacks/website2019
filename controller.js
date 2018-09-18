function MakeFrame(list_of_frames) {
	var out = {}
	for (l of list_of_frames) {
		out[l] = {}
	}
	return out
}

window.onload = function() {
	// Manage frames
	frames_set = MakeFrame(document.querySelectorAll('.framed'));

	// Dragability
	const draggable = new Draggable.Draggable(document.querySelectorAll('.framed'), {
  		draggable: '.title_bar'
	});

	draggable.on('drag:start', (evt) => {
		relative_x = evt.data.sensorEvent.data.clientX - evt.data.sourceContainer.offsetLeft;
		relative_y = evt.data.sensorEvent.data.clientY - evt.data.sourceContainer.offsetTop;
		frames_set[evt.data.sourceContainer]['init_mouse_start'] = [relative_x, relative_y];

		console.log(relative_x, evt.data.sourceContainer.offsetWidth)
		if (relative_x > evt.data.sourceContainer.offsetWidth - 20) {
			evt.data.sourceContainer.style.display = "none";
		}
	});
	draggable.on('drag:move', (evt) => {
		x = evt.data.sensorEvent.data.clientX;
		y = evt.data.sensorEvent.data.clientY;
		evt.data.sourceContainer.style.left = x - frames_set[evt.data.sourceContainer]['init_mouse_start'][0];
		evt.data.sourceContainer.style.top = y - frames_set[evt.data.sourceContainer]['init_mouse_start'][1];
	});
	//draggable.on('drag:stop', () => console.log('drag:stop'));
}