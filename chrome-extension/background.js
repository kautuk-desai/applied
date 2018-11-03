
/**
 * This function will create AJAX request and communicate with the python api
 * hosted on UB server
 * @param {string} data - the data that is to be sent to the server
 * (could be session update message, tweets array)
 */
var HttpRequest = function(data) {
    this.start_session_url = api_urls.start_session_url;
    this.dump_scrapped_tweets_url = api_urls.dump_scrapped_tweets_url;
    this.data = data;

    /* the function starts the session if session_id is undefined
     * else ends the session if user id is defined.
     * @param {string} session_id - the session id (if present) then the 
     * terminate session API is called. else new session is created.
     */
    this.check_if_applied = function(url) {
        return new Promise((resolve, reject) => {
                console.info("updating user session...");
                $.ajax({
                    method: 'PATCH',
                    url: this.start_session_url + "/" + session_id,
                    data: this.data,
                    contentType: 'application/json'
                }).done(function(response) {

                    //End of user session: remove all storage variables when the twitter tab is closed.
                    destroyAllStorage();
                    console.info("Session ended successfully: \n", response);

                    resolve();
                }).fail(function(response) {
                    console.error("Failed to end session: \n", response);
                });
        });
    }

    /* the function dumps scrapped tweets info into database.
     */
    this.dump_scrapped_tweets = function() {
        console.info("sending scrapped tweets...");
        $.ajax({
            method: 'POST',
            url: this.dump_scrapped_tweets_url,
            data: this.data,
            contentType: 'application/json'
        }).done(function(response) {
            console.info("loaded data successfully: \n", response);
        }).fail(function(response) {
            console.error("Failed to load data: \n", response);
        });
    }
}