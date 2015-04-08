var _ = require('lodash');
var operations = require('./operations');

function Expression(value, operation, comparand) {
	//todo: value is a number
	if(!_.has(operations, operation)) {
		throw 'Unsupported operation';
	}
	// todo: comparand is a number
	this.value = value;
	this.operation = operations[operation];
	this.comparand = comparand;
}

Expression.prototype.evaluate = function() {
	return eval(this.value + this.operation + this.comparand);
};

module.exports = Expression;