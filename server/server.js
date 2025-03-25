const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes.user-routes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Assets
if (process.end.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// app.use(require('./routes'));
app.use('/api/', userRoutes);

app.listen(PORT, () =>
    console.log('🌎  ==> API Server now listening on PORT ${PORT}!'),
);