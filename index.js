const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

//get
app.get("/b", (req, res) => {
    res.send

//GET
app.get("/b:id", (req, res) => {
const id =res.params.id;
try{
const binContent = fs.readFileSync(`.bins/${id}.json`)
response.send(binContent);
} catch(e) {
    res.send.Status(422).json({"message":"Invalid Record ID"})
}
});
//update
app.put("/b:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const binExist = fs.existsSync(`./bins.${id}.json`)
    if(!binExist){
        res.status(404).json({
            "message": "Bin not found",
            "success": false
        });
        return;
    }
    fs.writeFileSync(`./bins/${id}.json`,JSON.stringify(body,null,4));
    const successMessage = {
        success: true,
        date: body,
        "version": 1,
        "parentId": id
    }
    res.send(successMessage);
})

//create
app.post("/b", (req, res) => {
    const body = req.body;
    fs.writeFileSync(`message.json`,JSON.stringify( body,null,4));
    res.sendStatus(200)
});

app.listen(3000,() => {
    console.log("app is running on port 3000");
});