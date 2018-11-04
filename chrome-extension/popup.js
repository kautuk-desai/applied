chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	let tab_url = tabs[0].url;
	const http = new HttpRequest(tab_url);
	http.check_if_applied().then(function(response){
		if(response){
			$("#statusContainer .alert").css('display', 'block');
			$("#trackButton").attr("disabled", true);
		}
	});

	$("#trackButton").on("click", function() {
		const http = new HttpRequest(tab_url);
		http.check_if_applied().then(function(response){
			if(!response){
				http.insert_applied_job();
			}
			else {
				$("#statusContainer .alert").css('display', 'block');
				$("#trackButton").attr("disabled", true);
			}
		});
	});
});

/**
 * This function will create AJAX request and communicate with the python api
 * hosted on UB server
 * @param {string} data - the data that is to be sent to the server
 * (could be session update message, tweets array)
 */
var HttpRequest = function(application_url) {
	this.is_applied = "https://127.0.0.1:3000/isapplied";
	this.application_url = application_url || null;
	this.insert_applied_url = "https://127.0.0.1:3000/insertApplied";

	/* the function starts the session if session_id is undefined
     * else ends the session if user id is defined.
     * @param {string} session_id - the session id (if present) then the 
     * terminate session API is called. else new session is created.
     */
	this.check_if_applied = function() {
		return new Promise((resolve, reject) => {
			console.info("checking if job is already applied...");

			if (this.application_url) {
				const url = this.is_applied + "?jobURL=" + encodeURIComponent(this.application_url);
				console.log("get: ", url);
				$.ajax({
					method: "GET",
					url: url,
					contentType: "application/json"
				})
					.done(function(response) {
						let is_applied = response.length > 0 ? true : false;
						console.log("is applied: ", is_applied);
						resolve(is_applied);
					})
					.fail(function(response) {
						console.error("Failed: \n", response);
					});
			}
		});
	};

	/* the function creates a new user job application url.
     */
	this.insert_applied_job = function() {
		console.log("inserting the job applcation url");
		const data = { url: this.application_url };
		console.log(data);
		$.ajax({
			method: "POST",
			url: this.insert_applied_url,
			data: data
		}).done(function(response) {
			console.log("job application url stored...");
		}).fail(function(response){
			console.error("insert failed: \n", response);
		})
	};
};
