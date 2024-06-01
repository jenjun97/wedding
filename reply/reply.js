document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('replyIframe');

    iframe.onload = function() {
        var interval = setInterval(function() {
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            var body = iframeDocument.body;
            var html = iframeDocument.documentElement;
            var iframeHeight = Math.max(
                body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight
            );

            if (iframeHeight > 0) {
                var adjustedHeight = iframeHeight * 1.17;
                iframe.style.height = adjustedHeight + 'px';

                // 向父頁面發送高度訊息
                window.parent.postMessage({
                    type: 'setHeightReply',
                    height: adjustedHeight
                }, '*');
                console.log(adjustedHeight);
            }
        }, 1000); // 每秒重新計算高度
    };
});
