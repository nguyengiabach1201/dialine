const diary = document.getElementById('diary');

function fromHTML(html, trim = true) {
    html = trim ? html : html.trim();
    if (!html) return null;

    const template = document.createElement('template');
    template.innerHTML = html;
    const result = template.content.children;

    if (result.length === 1) return result[0];
    return result;
}

function form1(date, text, img, id) {
    return `<div class="panel-container">
                <div class="panel panel-img">
                    <img src="${img}" alt="${text}" id="${id}">
                </div>
                <div class="panel panel-text">
                    <p class="date">${date}</p>
                    <p>
                        ${text}
                    </p>
                </div>
            </div>`;
}

function form2(date, text, img, id) {
    return `<div class="panel-container">                
                <div class="panel panel-text">
                    <p class="date">${date}</p>
                    <p>
                        ${text}
                    </p>
                </div>
                <div class="panel panel-img">
                    <img src="${img}" alt="${text}" id="${id}">
                </div>
            </div>`;
}

function connect(id1, id2) {
    new LeaderLine(
        document.getElementById(id1),
        document.getElementById(id2),
        { dash: { animation: true }, color: '#f7f5ee', startSocket: 'bottom', endSocket: 'top' }
    );
}

function br(num) {
    let str = `<div>`;
    for (let i = 0; i < num; i++) { str += `<br>` }
    str += `</div>`;
    return str;
}

function img(str, float) {
    if (float == 'right')     return `<div style="width: 600px; height: 150px"><img src="${str}" style="height: 150px; float: right;"></div>`;
    return `<div style="width: 600px; height: 150px"><img src="${str}" style="height: 150px;"></div>`;
}

function add(form) {
    let element = fromHTML(form);
    diary.appendChild(element);
}

add(form1('12th January 2024!', 'Happy birthday to me! Today is really a fun and a really joyful day not only for me but also for my family too!', './imgs/jan12.jpg', 'jan12'));
// add(br(6));
// add(img('./imgs/bg/cloud.jpg'));
// add(form2('12th January!', 'test', './imgs/test.jpg', 'jan15'));
// add(img('./imgs/bg/balloon2.png','right'));

// setTimeout(function () {
//     connect('jan14', 'jan15');
// }, 10);