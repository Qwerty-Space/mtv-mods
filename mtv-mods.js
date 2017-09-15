// ==UserScript==
// @name         MTV mods
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  It's in the name
// @author       Qwerty-Space
// @match        https://www.morethan.tv/
// @require      http://cdnjs.com/libraries/p5.js
// ==/UserScript==

var ele = document.getElementById('stats_seedpoints');
var wrapper = document.CreateElement('a href="market.php"');

function setup {
	el.parentNode.insertBefore(wrapper, ele);
	wrapper.appendChild(ele);
}