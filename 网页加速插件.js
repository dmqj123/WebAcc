// ==UserScript==
// @name         网页加速器
// @namespace    http://tampermonkey-delightful
// @version      0.6
// @description  加速当前网页的加载速度，并过滤掉广告
// @include      https://*
// @include      http://*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // 检查是否包含特定关键词或图片源
    var containsFilterWordsOrSrc = function(src) {
        return (src.indexOf('广告') >= 0) || (src.indexOf('AD') >= 0) || (src.indexOf('ad') >= 0) || (src.indexOf('https://wan.baidu.com/') || (src.indexOf('https://code.51.com/') === 0);
    }

    // 只加速非 Google 搜索页面
    if (window.location.href.indexOf('google') === -1) {
        // 处理图片
        var replaceImages = function(imgElement) {
            if (!containsFilterWordsOrSrc(imgElement.dataset.src)) {
                imgElement.onload = null;
                imgElement.src = imgElement.dataset.src;
            }
            delete imgElement.dataset.src;
        }

        var images = document.querySelectorAll('img[data-src]');
        for (var i = 0; i < images.length; i++) {
            images[i].onload = replaceImages.bind(this, images[i]);
        }
    }
})();