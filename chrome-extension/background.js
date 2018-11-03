/**
 * This function will create AJAX request and communicate with the python api
 * hosted on UB server
 * @param {string} data - the data that is to be sent to the server
 * (could be session update message, tweets array)
 */
var HttpRequest = function(application_url) {
    this.is_applied = "localhost:3000";
    this.application_url = application_url || null;
    this.insert_applied_url = "localhost:3000/applied"

    /* the function starts the session if session_id is undefined
     * else ends the session if user id is defined.
     * @param {string} session_id - the session id (if present) then the 
     * terminate session API is called. else new session is created.
     */
    this.check_if_applied = function(url) {
        return new Promise((resolve, reject) => {
            console.info("updating user session...");
            $.ajax({
                method: "GET",
                url: this.is_applied,
                contentType: "application/json"
            }).done(function(response) {

                }).fail(function(response) {
                    console.error("Failed to end session: \n", response);
                });
        });
    };

    /* the function creates a new user job application url.
     */
    this.insert_applied_job = function(){
        console.log("inserting the job applcation url");
        const data = {url:this.application_url};
        $.ajax({
            method:"POST",
            url: this.insert_applied_url,
            data: data
        }).done(function(response){

        })
    }
};
