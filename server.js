let express= require('express');
let app= express();
app.listen(8002);
app.use(express.static('node_modules'));
app.use(express.static('public'));