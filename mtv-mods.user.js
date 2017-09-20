// ==UserScript==
// @name         MTV mods
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  It's in the name
// @author       Qwerty-Space and Jimpi27
// @match        https://www.morethan.tv/*
// ==/UserScript==

var seedingItem = document.getElementById("stats_seeding");
var seedPointsItem = document.getElementById("stats_seedpoints");

seedingItem.removeChild(seedingItem.firstElementChild.nextSibling);
seedingItem.firstElementChild.innerHTML = seedingItem.firstElementChild.innerHTML.slice(0, -1) + ": ";
seedPointsItem.innerHTML = "<a href='market.php'>" + seedPointsItem.firstChild.textContent + "</a>" + seedPointsItem.lastElementChild.outerHTML;
