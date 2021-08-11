/** require dependencies */
const express = require("express")
const routes = require('./routers')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require('mongoose');
const db = mongoose.connection;

const app = express()
const router = express.Router()


/** connect to MongoDB datastore */
try {
  mongoose.connect('mongodb://localhost:27017/test', 
  {useNewUrlParser: true, useUnifiedTopology: true}
 )
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connenct success')
  });
} catch (error) {
    
}

let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
