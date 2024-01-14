# Dialine
Find interest in writing a diary with Dialine!

## How to start writing

Open `diary.js`, this is where you will start writing your diary.

```javascript
add(form1(date, text, img, id)) -> Add a page with image on the left
add(form2(date, text, img, id)) -> Add a page with image on the right

add(br(number)) -> Add a break with how many <br> tag

add(img('./imgs/bg/balloon2.png')) -> Add a image on the left
add(img('./imgs/bg/balloon2.png','right')) -> Add a image on the right
```

To create arow connect between pages:

```javascript
setTimeout(function () {
    connect(id1, id2) -> Connect id1 with id2
}, 10);
```
