const express = require("express");

const app = express();
app.use(express.static("public"));

app.post("dump_req_allow", (req, res) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>> dump req")
    console.log(req.body)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>> dump req")

    res.end() // Empty SUCCESS
});
