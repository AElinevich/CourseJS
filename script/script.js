let books = document.querySelectorAll('.books');
let bookItem = document.querySelectorAll('.book');
let header = document.querySelectorAll('.book h2');
let adv = document.querySelector('.adv');
let chapterTwo = bookItem[0].querySelectorAll('li');
let chapterFive = bookItem[5].querySelectorAll('li');
let chapterSix = bookItem[2].querySelectorAll('li');
let NewchapterSix = bookItem[2].querySelector('ul');
let newElement = document.createElement('li');

books[0].prepend(bookItem[1]);
books[0].append(bookItem[2]);
bookItem[3].before(bookItem[4]);

document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

header[4].innerHTML = 'Книга 3. this и Прототипы Объектов';
header[4].style.color = "darkkhaki";

adv.remove();

chapterTwo[10].before(chapterTwo[2]);
chapterTwo[9].before(chapterTwo[7]);
chapterTwo[7].before(chapterTwo[5]);
chapterTwo[5].before(chapterTwo[4]);


chapterFive[2].before(chapterFive[9]);
chapterFive[2].before(chapterFive[3]);
chapterFive[2].before(chapterFive[4]);
chapterFive[5].before(chapterFive[6]);
chapterFive[8].before(chapterFive[5]);

newElement.textContent = 'Глава 8: За пределами ES6';
NewchapterSix.append(newElement);
chapterSix[9].before(newElement);





