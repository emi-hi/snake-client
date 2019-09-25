/**
 * Establishes connection with the game server
 */
const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.43.245',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', (connect) => {
    console.log('Successfully connected to server!')
    conn.write('Name: Em');


  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

module.exports = { connect };

/*
    conn.write('Move: up')
    setTimeout(() => {
      conn.write('Move: left');
    }, 300);
    setTimeout(() => {
      conn.write('Move: up');
    }, 600);
    setTimeout(() => {
      conn.write('Move: right');
    }, 900);
    setTimeout(() => {
      conn.write('Move: right');
    }, 2000);
    */