const express = require("express");
const app = express();
const cors = require("cors");

const fileRoutes = require('./routes/fileRouter.js');

app.use(cors());
app.use(express.json());

// Define uploads directory for storing files
app.use('/uploads', express.static('uploads'));

app.use('/api', fileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
