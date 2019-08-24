function Mouse(name) {
	this.name = name;
}

Mouse.prototype.sleep = function() {
	console.log('Sleeping...');
};

module.exports = Mouse;