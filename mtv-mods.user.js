// ==UserScript==
// @name         MTV mods
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  It's in the name
// @author       Qwerty-Space
// @match        https://www.morethan.tv/
// ==/UserScript==

var listItem = document.getElementsById("stats_seedpoints")[0];
listItem.innerHTML = "<a href='whatever'>" + listItem.innerHTML + "</a>";
