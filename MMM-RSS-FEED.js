Module.register("MMM-RSS-FEED",{
	
	defaults: {
		url: ""
	},
	getScripts: function() {
		return ["modules/MMM-RSS-FEED/js/jquery-3.1.1.min.js","modules/MMM-RSS-FEED/js/feednami.js"];
	},
		getStyles: function() {
		return ["modules/MMM-RSS-FEED/css/style.css"];
	},
	start: function() {
		Log.info("Starting module: " + this.name);
	},
	
	getDom: function () {
		var wrapper = document.createElement("div");
    		var url = this.config.url;
		feednami.load(url,function(result){
			if(result.error) {
				console.log(result.error);
			} else {
				var entries = result.feed.entries;
				for(var i = 0; i < entries.length; i++){
				var entry = entries[i];
				wrapper.innerHTML = entry.title;
				}
			}
		});
		return wrapper;
	}
});
