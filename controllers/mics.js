exports.hello = (req, res) => {
    res.send('Hello GET');
};

exports.helloPost = (req, res) => {
    const requestData = req.body;
    console.log(requestData);
    res.send(requestData);
};
