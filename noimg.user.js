// ==UserScript==
// @name         noimg
// @namespace    http://tampermonkey.net/
// @version      0.1
// @run-at       document-start
// @description  try to take over the world!
// @noframes
// @author       You
// @match        *://*/*
// ==/UserScript==

(function() {
  var __machineID = '<<MACHINEID>>';
    function addStyle(styles) {
    if(document.getElementsByTagName("head")[0] && document && document.createElement) {
        var css = document.createElement('style');
        css.type = 'text/css';
        if (css.styleSheet) css.styleSheet.cssText = styles;
        else  css.appendChild(document.createTextNode(styles));
        document.getElementsByTagName("head")[0].appendChild(css);
        } else setTimeout(function(){addStyle(styles);},10);
    }
  addStyle("svg,img{display: none !important; visibility: hidden !important} *{background-image:none !important}");
})();
