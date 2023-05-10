function add(a, b) {
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    return 'You must provide two numbers' 
  }
  return a + b;
}
module.exports = add;