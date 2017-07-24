var uri = 'mongodb://localhost/test';
mongoose.createConnection(uri, { server: { poolSize: 4 }});
