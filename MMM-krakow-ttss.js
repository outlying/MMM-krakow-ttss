Module.register("MMM-krakow-ttss",{

	requiresVersion: "2.1.1",

	defaults: {
		
	},

	// Define required scripts.
	getScripts() {
		return ["moment.js"]; // Time formatting
	},

	getStyles: function() {
		return [
			this.file('krakow-ttss.css')
		]
	},

	// Start all inits
	start: function() {
		Log.info("Starting module: " + this.name);

		// Collect data
		var self = this;
		self.fetchData();
		setInterval(function() {
			self.fetchData();
		}, 10000);
	},


	getHeader: function() {
		return "MPK";
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = 'Hello world!';
		return wrapper;
	},

	socketNotificationReceived(notification, data) {
		Log.log("Recieved notification " + notification);
		Log.log(data);

		if(notification === "STOP_DATA") {
			/*
			var stop = data.result;
			var key = String([stop.stopId, stop.type]);
			stopsData.set(key, stop);
			*/
			this.updateDom();
		}
	},

	fetchData() {
		Log.info("Fetching data for " + this.name);
		this.sendSocketNotification("FETCH_DATA", this.config);
	},
});
