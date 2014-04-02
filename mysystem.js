var os = require('os');

var message = 'This is a snapshot of your system';

var sysarray = new Array('Type : ' +os.type(),
						 'Node : ' + process.version,
						 'Platform : ' + os.platform(),
						 'Hostname : ' + os.hostname(),
						 'Total mem : ' + os.totalmem(),
						 'Free Mem : ' + os.freemem(),
						 'Uptime : ' + os.uptime()
						);
	console.log(message);
	
	var i = 0;
	while (i < sysarray.length) {
			console.log(sysarray[i]);
			i++;
		}