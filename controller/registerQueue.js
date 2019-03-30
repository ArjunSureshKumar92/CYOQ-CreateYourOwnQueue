exports.registerQueueUI = function (req, res) {
    console.log("Inside registerQueueUI")
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('registerQueue', {
        queue: {name: 'Food services', description: 'Line up for food in the cafeteria.'}
    });
}