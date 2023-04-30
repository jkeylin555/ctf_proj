var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    const { answer1, answer2 } = req.body;
    const correctAnswers = {
        answer1: 'a',
        answer2: 'd'
    };
    const isAnswer1Correct = answer1 === correctAnswers.answer1;
    const isAnswer2Correct = answer2 === correctAnswers.answer2;
    console.log(isAnswer1Correct);
    console.log(isAnswer2Correct);


    let flag = isAnswer1Correct && isAnswer2Correct;
    if (flag) {
        res.render("check",{
            title: 'Congratulations!',
            linkText: 'Next question',
            linkURL: '/q&a2',
            flag: flag
        });
    } else {
        res.render("check", {
            title: 'Sorry, try again!',
            flag: flag,
            linkText: 'Go back',
            linkURL: '/'
        });
    }

});



module.exports = router;