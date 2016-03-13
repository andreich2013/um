(function(win) {

	var doc = win.document;

	console.log(win.um.type.findout('djfd'));
	console.log(win.um.type.findout(new String('p')));
	console.log(win.um.type.findout(String('lol')));

	console.log(win.um.type.findout(2));
	console.log(win.um.type.findout(new Number(3)));
	console.log(win.um.type.findout(Number(2)));

	console.log(win.um.type.findout(true));
	console.log(win.um.type.findout(new Boolean(false)));
	console.log(win.um.type.findout(Boolean(true)));

	console.log(win.um.type.findout(null));

	console.log(win.um.type.findout(undefined));

	console.log(win.um.type.findout({}));
	console.log(win.um.type.findout(new Object()));
	console.log(win.um.type.findout(Object.create({})));
	console.log(win.um.type.findout(new function() {}));

	console.log(win.um.type.findout([]));
	console.log(win.um.type.findout(new Array(3)));
	console.log(win.um.type.findout(Array(64)));

	console.log(win.um.type.findout(function() {}));

}(window));