// app.js
const express = require('express');
const fileRoutes = require('./api/routes/fileRoutes');
const app = express();

app.use(express.json());

app.use('/files', fileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
