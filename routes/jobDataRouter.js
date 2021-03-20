let express = require('express');
let router = express.Router();
let cors = require('cors');

// CORS HEADERS MIDDLEWARE
router.use(cors());

// MODEL
let JobData = require('../public/models/jobDataModel.ts');

/**
 * GET /api/description
 * Purpose: Get all jobDatas
 */
router.get('/portfolio/job/description', (req, res) => {  
    JobData.find(req.query)
        .then((jobData) => {
            console.log(jobData);
            res.send(jobData);
        }).catch((e) => {
            res.send(e);
        });
})

module.exports = router;