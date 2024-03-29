const handleUserInput = function(key){
  if (key === '\u0003') {
    process.exit();
  }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.once('data', handleUserInput);
  stdin.resume();
  return stdin;
}

module.exports = { setupInput }