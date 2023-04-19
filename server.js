const express = require('express');
const app = express();
const PORT = 8000;

const wyr = {
    1:  {
        'option1': 'Invent a new gadget',
        'option2': 'Discover a new species'
    },
    2: {
        'option1': 'Have a 1 minute conversation with your past self',
        'option2': 'With your future self'
    },
    3:  {
        'option1': 'Be a superhero',
        'option2': 'A wizard'
    },
    4: {
        'option1': 'Speak all languages',
        'option2': 'Be able to speak to animals'
    },
    5:  {
        'option1': 'Detect any lie you hear',
        'option2': 'Get away with any lie you tell'
    },
    6: {
        'option1': 'Live ten 100-years lives',
        'option2': 'One 1000-years live'
    },
    7: {
        'option1': "Be famous when you're alive but forgotten after you die",
        'option2': "Unknown when you're alive but famous after you die"
    },
    8: {
        'option1': 'Only be able to whisper',
        'option2': 'Only be able to shout'
    },
    9: {
        'option1': 'Be the extra on a great, Oscar winning film',
        'option2': 'Be the main character on a trash movie'
    },
    10: {
        'option1': 'Be an expert in bird watching',
        'option2': 'Be an expert on insect identification'
    },
    11: {
        'option1': 'Find the meaning of life',
        'option2': "Find every government's top secrets"
    },
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
    res.json(wyr);
});

app.get('/api/:id', (req, res) => {
    const wyrId = +req.params.id;
    
    if (wyr[wyrId]) {
        res.json(wyr[wyrId]);
    } else {
        res.json(`Entry doesn't exist. Number of entries: ${Object.keys(wyr).length}`);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});