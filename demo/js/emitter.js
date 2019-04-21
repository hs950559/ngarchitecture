function MyEmitter() {
	this.events = {};
}

MyEmitter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
};

MyEmitter.prototype.emit = function(type) {
	if(this.events[type]){
		this.events[type].forEach(fn => fn());
	}
};



let m = new MyEmitter();
m.on('greetMe', function() {
	console.log("You greeted Me!");
});

m.emit('greetMe'); // You greeted Me!
