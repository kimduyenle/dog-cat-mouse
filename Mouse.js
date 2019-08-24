function Mouse(name) {
	this.name = name;
}

Mouse.prototype.run = function() {
	console.log('Run');
};

module.exports = Mouse;