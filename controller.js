window.onload = function() {
	numWindows = document.querySelectorAll('.framed').length;
	windowZs = []
	console.log(numWindows)

	function updateZ(evt) {
		if (evt.data) {
			elm = evt.data.sourceContainer;
		}
		else {
			elm = evt.path[evt.path.length - 6];
		}
		for (i = 0; i < numWindows; i++) {
			l = windowZs[i]
			if (l == elm) {
				windowZs.splice(i, 1)
				windowZs.push(l)
			}
		}
		for (i = numWindows-1; i >= 0; i--) {
			windowZs[i].style.zIndex = i.toString()
		}
		console.log(windowZs)
	}

	function MakeFrame(list_of_frames) {
		var out = {}
		for (l of list_of_frames) {
			out[l] = {}

			l.addEventListener('click', updateZ)
			windowZs.push(l)
		}
		return out
	}

	// Manage frames
	frames_set = MakeFrame(document.querySelectorAll('.framed'));

	// Dragability
	const draggable = new Draggable.Draggable(document.querySelectorAll('.framed'), {
  		draggable: '.title_bar'
	});

	draggable.on('drag:start', (evt) => {
		updateZ(evt)

		relative_x = evt.data.sensorEvent.data.clientX - evt.data.sourceContainer.offsetLeft;
		relative_y = evt.data.sensorEvent.data.clientY - evt.data.sourceContainer.offsetTop;
		frames_set[evt.data.sourceContainer]['init_mouse_start'] = [relative_x, relative_y];

		//console.log(relative_x, evt.data.sourceContainer.offsetWidth)
		if (relative_x > evt.data.sourceContainer.offsetWidth - 20) {
			evt.data.sourceContainer.style.display = "none";
		}
	});
	draggable.on('drag:move', (evt) => {
		frame = evt.data.sourceContainer;
		
		x = evt.data.sensorEvent.data.clientX;
		y = evt.data.sensorEvent.data.clientY;

		x_ = frames_set[frame]['init_mouse_start'][0];
		y_ = frames_set[frame]['init_mouse_start'][1];

		bound_x = x + frame.offsetWidth - x_;
		bound_y = y + frame.offsetHeight - y_;

		anchor_x = x - x_;
		anchor_y = y - y_;

		frame.style.left = x - x_;
		frame.style.top = y - y_;

		/*
		// Check against right bound
		if (bound_x < window.innerWidth && anchor_x > 0 ) { frame.style.left = x - x_; draggable.trigger(new DragStopEvent({source: evt.data.source, originalSource: evt.data.originalSource, sensorEvent: evt.data.sensorEvent, sourceContainer: evt.data.sourceContainer })); }
		else if (bound_x > window.innerWidth) { frame.style.left = window.innerWidth - frame.offsetWidth - 1; }
		else if (anchor_x < 0) { frame.style.left = 1; }

		if (bound_y < window.innerHeight && anchor_y > 0) { frame.style.top = y - y_; }
		else if (bound_y > window.innerHeight) { frame.style.top = window.innerHeight - frame.offsetHeight - 1; }
		else if (anchor_y < 0) { frame.style.top = 1; }
		*/
	});
	draggable.on('drag:stop', (evt) => {

	});
}