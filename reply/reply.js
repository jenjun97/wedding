document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('replyIframe');

    iframe.onload = function() {
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // 等待iframe內容完全加載
        iframeDocument.addEventListener('readystatechange', function() {
            if (iframeDocument.readyState === 'complete') {
                var iframeHeight = iframeDocument.body.scrollHeight;
                var adjustedHeight = iframeHeight * 1.15;
                iframe.style.height = adjustedHeight + 'px';

                // 向父頁面發送高度訊息
                window.parent.postMessage({
                    type: 'setHeightReply',
                    height: adjustedHeight
                }, '*');
                console.log(adjustedHeight);
            }
        });
    };
});
