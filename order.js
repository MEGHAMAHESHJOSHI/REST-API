const express = require('express');
const router = express.Router();

// router.get('/' , (req,res,next) => {

//     res.status(200).json({
//         message:'Handling GET request to /products'
//     });
//     });


//     router.post('/' , (req,res,next) => {

//         res.status(20).json({
//             message:'Handling POST request to /products'
//         });
//         }); 


router.get('/',(req,res,next) =>{
    res.status(200).json({
        message:'Orders were fetched'
    });
});


router.get('/',(req,res,next) =>{
    res.status(201).json({
        message:'Order was created'
    });
});

router.get('/:orderId',(req ,res next) => {
    res.status(200).json({
        message: 'order details',
        orderId: req.params.orderId
    });
});
router.delete('/:orderId',(req ,res next) => {
    res.status(200).json({
        message: 'order deleted',
        orderId: req.params.orderId
    });
});

module.exports = router; 