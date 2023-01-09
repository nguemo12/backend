'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const customerRoutes = require('./routes/customerRoutes');
const staffsRoutes = require('./routes/staffsRoutes');
const brandRoutes = require('./routes/brandRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderitemRoutes = require('./routes/orderitemRoutes');
const stockRoutes = require('./routes/stockRoutes');
const storeRoutes = require('./routes/storeRoutes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', eventRoutes.routes);
app.use('/api', customerRoutes.routes);
app.use('/api', staffsRoutes.routes);
app.use('/api', categoryRoutes.routes);
app.use('/api', brandRoutes.routes);
app.use('/api', orderRoutes.routes);
app.use('/api', orderitemRoutes.routes);
app.use('/api', stockRoutes.routes);
app.use('/api', storeRoutes.routes);

app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});