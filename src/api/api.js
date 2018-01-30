module.exports = (app) => {
    console.log('Registering api GET /firstMicroservice...');
    app.get('/firstMicroservice', (req, res) => {
        console.log("Got a GET request for /firstMicroservice");
        res.send('GET firstMicroservice Successfully.');
    })
}