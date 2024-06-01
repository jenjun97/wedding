document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('replyIframe');

    iframe.onload = function() {
        // 使用 MutationObserver 監聽 iframe 內容的變化
        var observer = new MutationObserver(function() {
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            var iframeHeight = iframeDocument.body.scrollHeight;
            var adjustedHeight = iframeHeight * 1.15;
            iframe.style.height = adjustedHeight + 'px';

            // 向父頁面發送高度訊息
            window.parent.postMessage({
                type: 'setHeightReply',
                height: adjustedHeight
            }, '*');
            console.log(adjustedHeight);
        });

        // 配置 MutationObserver
        var config = { childList: true, subtree: true };
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        observer.observe(iframeDocument.body, config);

        // 初始計算高度
        var initialHeight = iframeDocument.body.scrollHeight;
        var adjustedHeight = initialHeight * 1.15;
        iframe.style.height = adjustedHeight + 'px';
        window.parent.postMessage({
            type: 'setHeightReply',
            height: adjustedHeight
        }, '*');
        console.log(adjustedHeight);
    };
});
