var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    const { answer1 } = req.body;
    const correctAnswers = {
        answer1: '8'
    };
    const isAnswer1Correct = answer1 === correctAnswers.answer1;
    if (isAnswer1Correct) {
        flag = 'flag{th&flg}';
        res.cookie('flag', 'flag{th&flg}', { httpOnly: true });
        return res.send('<h1>Congratulations! </h1> Can you find the flag?');

    } else {
        res.render("finalCheck", {
            title: 'Sorry, try again!',
            linkText: 'Go back',
            linkURL: '/q&a2'
        });
    }


    if (isAnswer1Correct) {

        flag = 'flag{th&flg}';
        res.cookie('flag', 'flag{th&flg}', { httpOnly: true });
        res.render("finalCheck",{
            title: 'Congratulations!',
            isAnswer1Correct: isAnswer1Correct,
            flag: flag
        });
    } else {

    }

    // res.render("finalCheck",{
    //     title: 'Answers',
    //     isAnswer1Correct: isAnswer1Correct
    // });
});

module.exports = router;