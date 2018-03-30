// ==UserScript==
// @name         wiki-tweaks
// @namespace    https://github.com/cavemandaveman/userscripts
// @version      18.03.1
// @description  various tweaks to wikipedia pages
// @author       cavemandaveman
// @match        http*://*.wikipedia.org/*
// @grant        none
// ==/UserScript==


// Auto-expand Wikipedia navbars
var annoyingClasses = ['autocollapse', 'collapsed'];

annoyingClasses.forEach(function(annoyingClass) {
    var taintedDivs = document.getElementsByClassName(annoyingClass);
    Array.from(taintedDivs).forEach(function(div) {
        div.classList.remove(annoyingClass);
    });
});
