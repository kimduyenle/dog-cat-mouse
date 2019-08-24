function Mouse(name) {
	this.name = name;
}

Mouse.prototype.run = function() {
	console.log('Run');
};
Mouse.prototype.sleep = function() {
	console.log('Sleeping...');
};

module.exports = Mouse;