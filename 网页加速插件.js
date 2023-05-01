// ==UserScript==
// @name         网页加速器
// @namespace    http://tampermonkey-delightful
// @version      0.6
// @description  加速当前网页的加载速度，并过滤掉带有“广告”关键词的图片
// @include      https://*
// @include      http://*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // 检查是否包含“广告”关键词
    var containsAds = function(src) {
        return src.indexOf('广告') >= 0;
    }

    // 只加速非 Google 搜索页面
    if (window.location.href.indexOf('google') === -1) {
        // 处理图片
        var replaceImages = function(imgElement) {
            if (!containsAds(imgElement.dataset.src)) {
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
