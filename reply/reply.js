document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('replyIframe');

    iframe.onload = function() {
        var iframeHeight = iframe.contentWindow.document.body.scrollHeight;
        var adjustedHeight = iframeHeight * 1.15;
        iframe.style.height = adjustedHeight + 'px';

        // 向父頁面發送高度訊息
        window.parent.postMessage({
            type: 'setHeightReply',
            height: adjustedHeight
        }, '*');
		console.log(adjustedHeight);
    };
});
