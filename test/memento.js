(function(win) {

	var doc = win.document;

	var careTaker = new win.um.Memento();
		state1 = {
			a: 1,
			b: 2
		},
		state2 = {
			b: 5,
			c: 'ololo'
		};

	careTaker.$set('state1', state1);
	careTaker.$set('state2', state2);

	state1.a = 5;

	console.log(!!careTaker.$get('state1'));
	console.log(careTaker.$get('state3') === undefined);
	console.log(careTaker.$get('state1').a !== state1.a);

	console.log(careTaker.$get('state2').b === state2.b);

}(window));