var express = require("express"),
	app = express(),
	 port = process.env.PORT || 3000,
	bodyParser = require("body-parser");

var	todoRoutes = require("./routes/todos");

app.get("/",function(req,res){
	res.send("ROOT");
});
		
app.use("/api/todos", todoRoutes);
		
if(!module.parent){
app.listen(port, (error) => {
    if(error) {
        throw error;
    }
    console.log(`Express server listening on port ${port}`);
});
}