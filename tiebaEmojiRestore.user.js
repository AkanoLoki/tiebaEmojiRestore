// ==UserScript==
// @name         百度贴吧滑稽恢复
// @namespace    URL Not Available
// @version      1.2
// @description  替换百度贴吧滑稽HashTag为正常表情
// @author       AkanoLoki
// @match        http://tieba.baidu.com/*
// @grant        none
// ==/UserScript==


(function () {
    'use strict';
    //String
    var tgt = '<a href="http://tieba.baidu.com/hottopic/browse/hottopic?topic_id=0&amp;topic_name=%E6%BB%91%E7%A8%BDgo%20die">#滑稽go die#</a>';
    var rep = '<img class="BDE_Smiley" pic_type="1" width="30" height="30" src="//tb2.bdstatic.com/tb/editor/images/face/i_f25.png?t=20140803">';
    var lzltgt = '<a class="topic-tag" target="_blank" href="/hottopic/browse/hottopic?topic_name=%E6%BB%91%E7%A8%BDgo%20die">#滑稽go die#</a>';
    var lzlrep = '<img class="BDE_Smiley" width="30" height="30" changedsize="false" src="http://static.tieba.baidu.com/tb/editor/images/client/image_emoticon25.png">';
    var lzlstr = 'go die';
    var loadimg = '<img class="loading_reply" src="//tb2.bdstatic.com/tb/static-pb/img/loading_69032b0.gif">';

    mainReplace();

    $('body').on('mouseover', function () {
        if(document.body.innerHTML.indexOf(loadimg) == -1){
            lzlReplace();
        }
    });

    function mainReplace(){
        while(document.body.innerHTML.indexOf(tgt) > -1){
            document.body.innerHTML = document.body.innerHTML.replace(tgt, rep);
        }
    }

    function lzlReplace() {
        if(document.body.innerHTML.indexOf(lzltgt) > -1){
            document.body.innerHTML = document.body.innerHTML.replace(lzltgt, lzlrep);
        }
    }

})();
