const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const companyRoutes = require('./routes/company');

app.use(cors());
app.use(express.json());

app.use('/api/company', companyRoutes);

app.get('/', (req, res) => {
  res.send('HR System Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
