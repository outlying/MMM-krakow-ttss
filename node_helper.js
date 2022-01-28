const NodeHelper = require("node_helper");
// var request = require("request");

module.exports = NodeHelper.create({

	start: function () {
		console.log("Node helper for Kraków TTSS started ...");
	},

	socketNotificationReceived: function (notification, config) {
		if(notification === "FETCH_DATA") {
			this.fetchDepartures(config);
		}
	},

	fetchDepartures(config) {

		console.log(config);

		/*
		console.log("fetchDepartures(" + stopId + ", " + type + ")");
		const url = "https://mpk.jacekk.net/proxy_" + type + ".php/services/passageInfo/stopPassages/stop?stop=" + stopId + "&mode=departure"
		console.log("URL: " + url);

		request(url, (error, response, body) => {
			const statusCode = response && response.statusCode;

			console.log("Response status code " + statusCode);

			result = {};
			success = false;

			if(statusCode >= 200 && statusCode < 300) {
				result = JSON.parse(body);
				result.stopId = stopId;
				result.type = type;
				success = true;
			}

			console.log("Collected result for " + stopId + "|" + type);
			console.log(result);

			this.sendSocketNotification("STOP_DATA", {
				statusCode,
				success,
				result
			})
		});
		*/
	}

});