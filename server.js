const express = require('express');

//create app variable and initialize express
const app = express();

//use a route
//create a hard coded array for starter, later this will come from db 
app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName:'Doe'},
        {id: 2, firstName: 'Steve', lastName:'Smith'},
        {id: 3, firstName: 'Mary', lastName:'Swanson'}
    ];

    //pass the array as json
    res.json(customers);
});

//create port variable to listen on 
//not using port 3000 bc that's the port to generate react app
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));