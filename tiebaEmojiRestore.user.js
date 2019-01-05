// ==UserScript==
// @name         百度贴吧滑稽恢复
// @namespace    URL Not Available
// @version      1.1
// @description  替换百度贴吧滑稽HashTag为正常表情
// @author       AkanoLoki
// @match        http://tieba.baidu.com/*
// @grant        none
// ==/UserScript==


(function () {
    'use strict';
    var tgt = '<a href="http://tieba.baidu.com/hottopic/browse/hottopic?topic_id=0&amp;topic_name=%E6%BB%91%E7%A8%BDgo%20die">#滑稽go die#</a>';
    var rep = '<img class="BDE_Smiley" pic_type="1" width="30" height="30" src="//tb2.bdstatic.com/tb/editor/images/face/i_f25.png?t=20140803">';
    while(document.body.innerHTML.indexOf(tgt) > -1){
        document.body.innerHTML = document.body.innerHTML.replace(tgt, rep);
    }
})();
