module.exports = function parseStringAsArray(arr) {
	return arr.split(',').map(tech => tech.trim())
};