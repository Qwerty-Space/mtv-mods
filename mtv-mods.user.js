// ==UserScript==
// @name         MTV mods
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  It's in the name
// @author       Qwerty-Space
// @match        https://www.morethan.tv/
// ==/UserScript==

var listItem = document.getElementById("stats_seedpoints");
listItem.innerHTML = "<a href='market.php'>" + listItem.innerHTML + "</a>";
