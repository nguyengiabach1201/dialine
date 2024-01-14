add(form1('12th January 2024!', 'Happy birthday to me! Today is really a fun and a really joyful day not only for me but also for my family too!', './imgs/jan12.jpg', 'jan12'));
add(img('./imgs/bg/cloud.jpg'));
add(form2('13th January 2024!', 'How fun this day is!', './imgs/jan12.jpg', 'jan13'));


// add(form2('12th January!', 'test', './imgs/test.jpg', 'jan15'));
// add(img('./imgs/bg/balloon2.png','right'));

setTimeout(function () {
    connect('jan12', 'jan13');
}, 10);