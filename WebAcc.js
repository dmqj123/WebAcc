// ==UserScript==
// @name         网页加速器
// @namespace    http://tampermonkey-delightful
// @version      1
// @author            DMQJ
// @description  加速当前网页的加载速度，并过滤掉广告
// @include      https://*
// @include      http://*
// @grant        GM_addStyle
// @license MIT
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBkPSJNMCA3OWMwLTM1LjQgMjguNS02NCA2My45LTY0LjFzNjQuMSAyOC42IDY0LjEgNjRjMCA5LjQtMi4xIDE4LjQtNS43IDI2LjUtMSAyLjMtMi4zIDQuNi0zLjYgNi43LS40LjYtMSAxLTEuNyAxSDExYy0uNyAwLTEuMy0uNC0xLjctMS0xLjMtMi4yLTIuNS00LjQtMy42LTYuN0MyLjEgOTcuNCAwIDg4LjQgMCA3OXptMjQuNC0zOS43Yy01LjIgNS4xLTkuMiAxMS4xLTEyIDE3LjgtMyA2LjktNC41IDE0LjItNC41IDIxLjhhNTUuODYgNTUuODYgMCAwIDAgNC40IDIxLjhjLjcgMS42IDEuNCAzLjIgMi4yIDQuN2g5OC44Yy44LTEuNSAxLjYtMy4xIDIuMi00LjdhNTUuODYgNTUuODYgMCAwIDAgNC40LTIxLjggNTUuODYgNTUuODYgMCAwIDAtNC40LTIxLjhjLTIuOC02LjctNi45LTEyLjctMTItMTcuOC01LjEtNS4yLTExLjEtOS4yLTE3LjgtMTJhNTUuODYgNTUuODYgMCAwIDAtMjEuOC00LjQgNTUuODYgNTUuODYgMCAwIDAtMjEuOCA0LjRjLTYuNiAyLjgtMTIuNiA2LjgtMTcuNyAxMnoiIGZpbGw9IiM0NDQiLz48cGF0aCBkPSJNMTIuNCA1Ny4xYzIuOC02LjcgNi45LTEyLjcgMTItMTcuOCA1LjEtNS4yIDExLjEtOS4yIDE3LjgtMTJBNTUuODYgNTUuODYgMCAwIDEgNjQgMjIuOWE1NS44NiA1NS44NiAwIDAgMSAyMS44IDQuNGM2LjcgMi44IDEyLjcgNi45IDE3LjggMTIgNS4yIDUuMSA5LjIgMTEuMSAxMiAxNy44YTU1Ljg2IDU1Ljg2IDAgMCAxIDQuNCAyMS44IDU1Ljg2IDU1Ljg2IDAgMCAxLTQuNCAyMS44Yy0uNyAxLjYtMS40IDMuMi0yLjIgNC43SDE0LjZjLS44LTEuNS0xLjYtMy4xLTIuMi00LjdBNTUuODYgNTUuODYgMCAwIDEgOCA3OC45Yy0uMS03LjYgMS40LTE0LjkgNC40LTIxLjh6IiBmaWxsPSIjNjQ5OTUwIi8+PHBhdGggZD0iTTc3LjUgNjAuOUM2OCA4MS4yIDY0LjkgODQuNiA2NC42IDg1Yy0xLjUgMS41LTMuNSAyLjMtNS42IDIuM3MtNC4xLS44LTUuNi0yLjNhNy45MSA3LjkxIDAgMCAxIDAtMTEuMmMuMy0uNCAzLjgtMy40IDI0LjEtMTIuOXptMC04Yy0xLjEgMC0yLjMuMi0zLjQuOEM2My4yIDU4LjggNTEgNjQuOSA0Ny44IDY4LjFjLTYuMiA2LjItNi4yIDE2LjMgMCAyMi41IDMuMSAzLjEgNy4yIDQuNyAxMS4yIDQuN3M4LjEtMS42IDExLjItNC43YzMuMi0zLjIgOS4zLTE1LjQgMTQuNC0yNi4zIDIuNi01LjYtMS43LTExLjQtNy4xLTExLjR6TTYzLjkgMjkuOGMtMjcuMiAwLTQ5LjUgMjIuNi00OS4xIDQ5LjggMCAzLjYuNSA3LjIgMS4zIDEwLjYuNCAxLjggMiAzLjEgMy45IDMuMSAyLjYgMCA0LjQtMi40IDMuOS00LjktLjctMy0xLjEtNi4yLTEuMS05LjNBNDIuMDQgNDIuMDQgMCAwIDEgMjYgNjNjMi01IDUtOS40IDguOC0xMy4yUzQzIDQzLjEgNDcuOSA0MWE0Mi4wNCA0Mi4wNCAwIDAgMSAzMi4yIDBjNC45IDIuMSA5LjMgNS4xIDEzLjEgOC45Qzk3IDUzLjYgOTkuOSA1OCAxMDIgNjNhNDIuMDQgNDIuMDQgMCAwIDEgMy4yIDE2LjFjMCAzLjItLjQgNi4zLTEuMSA5LjMtLjYgMi41IDEuMyA0LjkgMy45IDQuOSAxLjggMCAzLjUtMS4zIDMuOS0zLjEuOC0zLjYgMS4zLTcuMyAxLjMtMTEuMSAwLTI3LjMtMjIuMS00OS4zLTQ5LjMtNDkuM3oiIGZpbGw9IiM0NDQiLz48L3N2Zz4=
// ==/UserScript==

(function() {
    'use strict';

    // 检查是否包含特定关键词或图片源
    var containsFilterWordsOrSrc = function(src) {
        return (src.indexOf('广告') >= 0) || (src.indexOf('AD') >= 0) || (src.indexOf('ad') >= 0) || (src.indexOf('https://wan.baidu.com/')===0) || (src.indexOf('https://code.51.com/') === 0);
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
  let util = {
        getValue(name) {
            return GM_getValue(name);
        },

        setValue(name, value) {
            GM_setValue(name, value);
        },

        include(str, arr) {
            str = str.replace(/[-_]/ig, '');
            for (let i = 0, l = arr.length; i < l; i++) {
                let val = arr[i];
                if (val !== '' && str.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return true;
                }
            }
            return false;
        },

        addStyle(id, tag, css) {
            tag = tag || 'style';
            let doc = document, styleDom = doc.getElementById(id);
            if (styleDom) return;
            let style = doc.createElement(tag);
            style.rel = 'stylesheet';
            style.id = id;
            tag === 'style' ? style.innerHTML = css : style.href = css;
            doc.head.appendChild(style);
        },

        reg: {
            chrome: /^https?:\/\/chrome.google.com\/webstore\/.+?\/([a-z]{32})(?=[\/#?]|$)/,
            edge: /^https?:\/\/microsoftedge.microsoft.com\/addons\/.+?\/([a-z]{32})(?=[\/#?]|$)/,
            firefox: /^https?:\/\/(reviewers\.)?(addons\.mozilla\.org|addons(?:-dev)?\.allizom\.org)\/.*?(?:addon|review)\/([^/<>"'?#]+)/,
            microsoft: /^https?:\/\/(?:apps|www).microsoft.com\/(?:store|p)\/.+?\/([a-zA-Z\d]{10,})(?=[\/#?]|$)/,
        }
    };

    let main = {
        initValue() {
            let value = [{
                name: 'setting_success_times',
                value: 0
            }, {
                name: 'allow_external_links',
                value: true
            }, {
                name: 'allow_query_links',
                value: true
            }, {
                name: 'enable_store_link',
                value: true
            }, {
                name: 'enable_target_self',
                value: false
            }, {
                name: 'enable_animation',
                value: false
            }, {
                name: 'delay_on_hover',
                value: 65
            }, {
                name: 'exclude_list',
                value: ''
            }, {
                name: 'exclude_keyword',
                value: 'login\nlogout\nregister\nsignin\nsignup\nsignout\npay\ncreate\nedit\ndownload\ndel\nreset\nsubmit\ndoubleclick\ngoogleads\nexit'
            }];

            value.forEach((v) => {
                util.getValue(v.name) === undefined && util.setValue(v.name, v.value);
            });
        },

        registerMenuCommand() {
            GM_registerMenuCommand('🚀 已加速：' + util.getValue('setting_success_times') + '次', () => {
                Swal.fire({
                    showCancelButton: true,
                    title: '确定要重置加速次数吗？',
                    icon: 'warning',
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    customClass: {
                        popup: 'instant-popup',
                    },
                }).then((res) => {
                    if (res.isConfirmed) {
                        util.setValue('setting_success_times', 0);
                        history.go(0);
                    }
                });
            });
            GM_registerMenuCommand('⚙️ 设置', () => {
                let dom = `<div style="font-size: 1em;">
                              <label class="instant-setting-label">加速外部链接<input type="checkbox" id="S-External" ${util.getValue('allow_external_links') ? 'checked' : ''} class="instant-setting-checkbox"></label>
                              <label class="instant-setting-label"><span>加速含参数链接 <a href="https://www.youxiaohou.com/tool/install-instantpage.html#%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E">详见</a></span><input type="checkbox" id="S-Query" ${util.getValue('allow_query_links') ? 'checked' : ''} 
                              class="instant-setting-checkbox"></label>
                              <label class="instant-setting-label">加速扩展/应用商店链接<input type="checkbox" id="S-Store" ${util.getValue('enable_store_link') ? 'checked' : ''} class="instant-setting-checkbox"></label>
                              <label class="instant-setting-label">加速链接在当前页打开<input type="checkbox" id="S-Target" ${util.getValue('enable_target_self') ? 'checked' : ''} class="instant-setting-checkbox"></label>
                              <label class="instant-setting-label">加速动画效果<input type="checkbox" id="S-Animate" ${util.getValue('enable_animation') ? 'checked' : ''} 
                              class="instant-setting-checkbox"></label>
                              <label class="instant-setting-label">链接预读延时（毫秒）<input type="number" min="65" id="S-Delay" value="${util.getValue('delay_on_hover')}" 
                              class="instant-setting-input"></label>
                              <label class="instant-setting-label-col">排除下列网址 <textarea placeholder="列表中的域名将不开启加速器，一行一个，例如：www.baidu.com" id="S-Exclude" class="instant-setting-textarea">${util.getValue('exclude_list')}</textarea></label>
                              <label class="instant-setting-label-col">排除下列关键词 <textarea placeholder="链接中含关键词将不开启加速器，一行一个，例如：logout" id="S-Exclude-Word" class="instant-setting-textarea">${util.getValue('exclude_keyword')}</textarea></label>
                            </div>`;
                Swal.fire({
                    title: '加速器配置',
                    html: dom,
                    showCloseButton: true,
                    confirmButtonText: '保存',
                    footer: '<div style="text-align: center;font-size: 1em;">点击查看 <a href="https://www.youxiaohou.com/tool/install-instantpage.html" target="_blank">使用说明</a>，助手免费开源，Powered by <a href="https://www.youxiaohou.com">油小猴</a></div>',
                    customClass: {
                        popup: 'instant-popup',
                    },
                }).then((res) => {
                    if (res.isConfirmed) {
                        history.go(0);
                    }
                });

                document.getElementById('S-External').addEventListener('change', (e) => {
                    util.setValue('allow_external_links', e.currentTarget.checked);
                });
                document.getElementById('S-Query').addEventListener('change', (e) => {
                    util.setValue('allow_query_links', e.currentTarget.checked);
                });
                document.getElementById('S-Store').addEventListener('change', (e) => {
                    util.setValue('enable_store_link', e.currentTarget.checked);
                });
                document.getElementById('S-Target').addEventListener('change', (e) => {
                    util.setValue('enable_target_self', e.currentTarget.checked);
                });
                document.getElementById('S-Animate').addEventListener('change', (e) => {
                    util.setValue('enable_animation', e.currentTarget.checked);
                });
                document.getElementById('S-Delay').addEventListener('change', (e) => {
                    util.setValue('delay_on_hover', e.currentTarget.value);
                });
                document.getElementById('S-Exclude').addEventListener('change', (e) => {
                    util.setValue('exclude_list', e.currentTarget.value);
                });
                document.getElementById('S-Exclude-Word').addEventListener('change', (e) => {
                    util.setValue('exclude_keyword', e.currentTarget.value);
                });
            });
        },

        //在排除名单里
        inExcludeList() {
            let exclude = util.getValue('exclude_list').split('\n');
            let host = location.host;
            return exclude.includes(host);
        },

        //加速主代码
        instantPage() {
            if (window.instantLoaded) return;
            let mouseoverTimer;
            let lastTouchTimestamp;
            const prefetches = new Set();
            const prefetchElement = document.createElement('link');
            const isSupported = prefetchElement.relList && prefetchElement.relList.supports && prefetchElement.relList.supports('prefetch')
                && window.IntersectionObserver && 'isIntersecting' in IntersectionObserverEntry.prototype;
            const isOnline = () => window.navigator.onLine;
            const allowQueryString = 'instantAllowQueryString' in document.body.dataset || util.getValue('allow_query_links');
            const allowExternalLinks = 'instantAllowExternalLinks' in document.body.dataset || util.getValue('allow_external_links');
            const useWhitelist = 'instantWhitelist' in document.body.dataset;
            const mousedownShortcut = 'instantMousedownShortcut' in document.body.dataset;
            const DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION = 1111;
            const enableAnimation = util.getValue('enable_animation');
            const enableTargetSelf = util.getValue('enable_target_self');
            const enableStoreLink = util.getValue('enable_store_link');
            window.instantLoaded = true;
            const excludeKeyword = util.getValue('exclude_keyword').split('\n');

            let delayOnHover = util.getValue('delay_on_hover');
            let useMousedown = false;
            let useMousedownOnly = false;
            let useViewport = false;

            if ('instantIntensity' in document.body.dataset) {
                const intensity = document.body.dataset.instantIntensity;

                if (intensity.substr(0, 'mousedown'.length) === 'mousedown') {
                    useMousedown = true;
                    if (intensity === 'mousedown-only') {
                        useMousedownOnly = true;
                    }
                } else if (intensity.substr(0, 'viewport'.length) === 'viewport') {
                    if (!(navigator.connection && (navigator.connection.saveData || (navigator.connection.effectiveType && navigator.connection.effectiveType.includes('2g'))))) {
                        if (intensity === "viewport") {
                            if (document.documentElement.clientWidth * document.documentElement.clientHeight < 450000) {
                                useViewport = true;
                            }
                        } else if (intensity === "viewport-all") {
                            useViewport = true;
                        }
                    }
                } else {
                    const milliseconds = parseInt(intensity);
                    if (!Number.isNaN(milliseconds)) {
                        delayOnHover = milliseconds;
                    }
                }
            }

            if (isSupported) {
                const eventListenersOptions = {
                    capture: true,
                    passive: true,
                };

                if (!useMousedownOnly) {
                    document.addEventListener('touchstart', touchstartListener, eventListenersOptions);
                }

                if (!useMousedown) {
                    document.addEventListener('mouseover', mouseoverListener, eventListenersOptions);
                } else if (!mousedownShortcut) {
                    document.addEventListener('mousedown', mousedownListener, eventListenersOptions);
                }

                if (mousedownShortcut) {
                    document.addEventListener('mousedown', mousedownShortcutListener, eventListenersOptions);
                }


                if (useViewport) {
                    let triggeringFunction;
                    if (window.requestIdleCallback) {
                        triggeringFunction = (callback) => {
                            requestIdleCallback(callback, {
                                timeout: 1500,
                            });
                        };
                    } else {
                        triggeringFunction = (callback) => {
                            callback();
                        };
                    }

                    triggeringFunction(() => {
                        const intersectionObserver = new IntersectionObserver((entries) => {
                            entries.forEach((entry) => {
                                if (entry.isIntersecting) {
                                    const linkElement = entry.target;
                                    intersectionObserver.unobserve(linkElement);
                                    preload(linkElement);
                                }
                            });
                        });

                        document.querySelectorAll('a').forEach((linkElement) => {
                            if (isPreloadable(linkElement)) {
                                intersectionObserver.observe(linkElement);
                            }
                        });
                    });
                }
            }

            function touchstartListener(event) {
                /* Chrome on Android calls mouseover before touchcancel so `lastTouchTimestamp`
                 * must be assigned on touchstart to be measured on mouseover. */
                lastTouchTimestamp = performance.now();

                const linkElement = event.target.closest('a');

                if (!isPreloadable(linkElement)) {
                    return;
                }

                preload(linkElement);
            }

            function mouseoverListener(event) {
                if (performance.now() - lastTouchTimestamp < DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION) {
                    return;
                }

                if (!('closest' in event.target)) {
                    // Without this check sometimes an error “event.target.closest is not a function” is thrown, for unknown reasons
                    // That error denotes that `event.target` isn’t undefined. My best guess is that it’s the Document.

                    // Details could be gleaned from throwing such an error:
                    //throw new TypeError(`instant.page non-element event target: timeStamp=${~~event.timeStamp}, type=${event.type}, typeof=${typeof event.target}, nodeType=${event.target.nodeType}, nodeName=${event.target.nodeName}, viewport=${innerWidth}x${innerHeight}, coords=${event.clientX}x${event.clientY}, scroll=${scrollX}x${scrollY}`)
                    return
                }

                const linkElement = event.target.closest('a');

                if (!isPreloadable(linkElement)) {
                    return;
                }

                linkElement.addEventListener('mouseout', mouseoutListener, {passive: true});

                mouseoverTimer = setTimeout(() => {
                    preload(linkElement);
                    mouseoverTimer = undefined;
                }, delayOnHover);
            }

            function mousedownListener(event) {
                const linkElement = event.target.closest('a');

                if (!isPreloadable(linkElement)) {
                    return;
                }

                preload(linkElement);
            }

            function mouseoutListener(event) {
                if (event.relatedTarget && event.target.closest('a') === event.relatedTarget.closest('a')) {
                    return;
                }

                if (mouseoverTimer) {
                    clearTimeout(mouseoverTimer);
                    mouseoverTimer = undefined;
                }
            }

            function mousedownShortcutListener(event) {
                if (performance.now() - lastTouchTimestamp < DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION) {
                    return;
                }

                const linkElement = event.target.closest('a');

                if (event.which > 1 || event.metaKey || event.ctrlKey) {
                    return;
                }

                if (!linkElement) {
                    return;
                }

                linkElement.addEventListener('click', function (event) {
                    if (event.detail === 1337) {
                        return;
                    }

                    event.preventDefault();
                }, {capture: true, passive: false, once: true});

                const customEvent = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    detail: 1337
                });
                linkElement.dispatchEvent(customEvent);
            }

            function isPreloadable(linkElement) {
                if (!linkElement || !linkElement.href) {
                    return;
                }

                if (util.include(linkElement.href, excludeKeyword)) {
                    if (!util.reg.chrome.test(linkElement.href) &&
                        !util.reg.edge.test(linkElement.href) &&
                        !util.reg.edge.test(linkElement.href) &&
                        !util.reg.microsoft.test(linkElement.href)) {
                        return;
                    }
                }

                if (useWhitelist && !('instant' in linkElement.dataset)) {
                    return;
                }

                if (!allowExternalLinks && linkElement.origin !== location.origin && !('instant' in linkElement.dataset)) {
                    return;
                }

                if (!['http:', 'https:'].includes(linkElement.protocol)) {
                    return;
                }

                if (linkElement.protocol === 'http:' && location.protocol === 'https:') {
                    if (linkElement.href.indexOf('http://www.baidu.com/link?url') === 0) {
                        linkElement.href = linkElement.href.replace('http', 'https');
                    } else {
                        return;
                    }
                }
                //下载文件不加速
                if (/\.[a-zA-Z0-9]{0,5}$/i.test(linkElement.href)) {
                    //排除域名，网站扩展名
                    if (!/(com|cn|top|ltd|net|tech|shop|vip|xyz|wang|cloud|online|site|love|art|xin|store|fun|cc|website|press|space|beer|luxe|video|ren|group|fit|yoga|org|pro|ink|biz|info|design|link|work|mobi|kim|pub|name|tv|co|asia|red|live|wiki|gov|life|world|run|show|city|gold|today|plus|cool|icu|company|chat|zone|fans|law|host|center|club|email|fund|social|team|guru|htm|html|php|asp|jsp)$/i.test(linkElement.href)) {
                        return;
                    }
                }

                if (!allowQueryString && linkElement.search && !('instant' in linkElement.dataset)) {
                    return;
                }

                if (linkElement.hash && linkElement.pathname + linkElement.search === location.pathname + location.search) {
                    return;
                }

                if (linkElement.dataset.filename || linkElement.dataset.noInstant) {
                    return;
                }

                return true;
            }

            function preload(linkElement) {
                let url = linkElement.href;

                if (!isOnline()) {
                    return;
                }

                if (prefetches.has(url)) {
                    return;
                }

                if (enableStoreLink) {
                    if (util.reg.chrome.test(url)) {
                        linkElement.href = url.replace("chrome.google.com", "chrome.crxsoso.com");
                    }
                    if (util.reg.edge.test(url)) {
                        linkElement.href = url.replace("microsoftedge.microsoft.com", "microsoftedge.crxsoso.com");
                    }
                    if (util.reg.firefox.test(url)) {
                        linkElement.href = url.replace("addons.mozilla.org", "addons.crxsoso.com");
                    }
                    if (util.reg.microsoft.test(url)) {
                        linkElement.href = url.replace(/(www|apps)\.microsoft\.com/, "apps.crxsoso.com");
                    }
                }

                const prefetcher = document.createElement('link');
                prefetcher.rel = 'prefetch';
                prefetcher.href = url;
                document.head.appendChild(prefetcher);

                prefetches.add(url);

                if (enableAnimation) {
                    linkElement.classList.add("link-instanted");
                }
                if (enableTargetSelf) {
                    linkElement.target = '_self';
                }

                util.setValue('setting_success_times', util.getValue('setting_success_times') + 1);
            }
        },

        addPluginStyle() {
            let style = `
                .instant-popup { font-size: 14px !important; }
                .instant-setting-label { display: flex;align-items: center;justify-content: space-between;padding-top: 15px; }
                .instant-setting-label-col { display: flex;align-items: flex-start;;padding-top: 15px;flex-direction:column }
                .instant-setting-checkbox { width: 16px;height: 16px; }
                .instant-setting-textarea { width: 100%; margin: 14px 0 0; height: 60px; resize: none; border: 1px solid #bbb; box-sizing: border-box; padding: 5px 10px; border-radius: 5px; color: #666; line-height: 1.2; }
                .instant-setting-input { border: 1px solid #bbb; box-sizing: border-box; padding: 5px 10px; border-radius: 5px; width: 100px}
                 @keyframes instantAnminate { from { opacity: 1; } 50% { opacity: 0.4 } to { opacity: 0.9; }}
                .link-instanted { animation: instantAnminate 0.6s 1; animation-fill-mode:forwards }
                .link-instanted * { animation: instantAnminate 0.6s 1; animation-fill-mode:forwards }
            `;

            if (document.head) {
                util.addStyle('swal-pub-style', 'style', GM_getResourceText('swalStyle'));
                util.addStyle('instant-style', 'style', style);
            }

            const headObserver = new MutationObserver(() => {
                util.addStyle('swal-pub-style', 'style', GM_getResourceText('swalStyle'));
                util.addStyle('instant-style', 'style', style);
            });
            headObserver.observe(document.head, {childList: true, subtree: true});
        },

        init() {
            this.initValue();
            this.addPluginStyle();
            this.registerMenuCommand();
            if (this.inExcludeList()) return;
            this.instantPage();
        }
    };
    main.init();
})();