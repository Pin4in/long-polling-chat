let clients = [];

exports.subscribe = function(resolve) {
  clients.push(resolve);
};

exports.disconnect = resolve => {
  clients.splice(clients.indexOf(resolve), 1);
};

exports.publish = function(message) {
  clients.forEach(resolve => {
    resolve(message);
  });

  clients = [];
};
