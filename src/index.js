'use strict';
import "@babel/polyfill";
import "nodelist-foreach-polyfill";
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";
import elementClosest from "element-closest";
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import changeImages from './modules/changeImages';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// плавный скролл по якорям
// timer
countTimer('30 july 2020')
// меню
toggleMenu();
// popup 
togglePopup()
// смена изображений
changeImages();
// табы
tabs()
// слайдер
slider()
// калькулятор
calc(100);
// send-adjax-form 
sendForm();


    