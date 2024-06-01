document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('replyIframe');

    iframe.onload = function() {
        var checkHeight = function() {
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
            } else {
                // 如果高度为0，继续检查
                setTimeout(checkHeight, 100);
            }
        };

        // 初始检查高度
        checkHeight();
    };
});
