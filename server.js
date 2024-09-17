const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 2' },
    { id: 4, title: 'Item 3' },
  ];

app.post('/api/search', (req,res)=>{
   
   const matchesValues = data.filter((value,index,array)=>{
        return value.title == req.body.Title
   })
    console.log(req.body.Title)
    console.log(matchesValues);
    res.send(matchesValues)

})

// Middleware to parse JSON requests




const port = process.env.PORT || 3000; // Use the port provided by the host or default to 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
