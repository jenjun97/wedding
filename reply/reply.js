document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('replyIframe');

    iframe.onload = function() {
        var previousHeight = 0;
        setInterval(function() {
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            var iframeHeight = iframeDocument.body.scrollHeight;

            if (iframeHeight !== previousHeight && iframeHeight > 0) {
                var adjustedHeight = iframeHeight * 1.15;
                iframe.style.height = adjustedHeight + 'px';
                previousHeight = iframeHeight;

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
