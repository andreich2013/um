(function(win) {

	var doc = win.document;

	var hash = {
			observer: new win.um.Observer()
		},
		hash2 = {
			observer: new win.um.Observer()
		};

	hash.observer.on('someEvent', function(value) {
		console.log(value);
	});

	hash.observer.on('someEvent', function(value) {
		console.log('one more handler for ' + value);
	});

	hash2.observer.on('someEvent', function(value) {
		console.log(value);
	});

	hash.observer.trigger('someEvent', 'hash');
	hash2.observer.trigger('someEvent', 'hash2');

}(window));