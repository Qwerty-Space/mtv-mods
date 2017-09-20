// ==UserScript==
// @name         MTV mods
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  It's in the name
// @author       Qwerty-Space and Jimpi27
// @match        https://www.morethan.tv/*
// ==/UserScript==

var listItem = document.getElementById("stats_seedpoints");
listItem.innerHTML = "<a href='market.php'>" + listItem.firstChild.textContent + "</a>" + listItem.lastElementChild.outerHTML;
