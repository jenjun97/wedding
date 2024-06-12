// 定義上一個高度以避免重複發送
// 定義上一個高度以避免重複發送
let lastHeight = 0;

/**
 * 切換指定區塊的顯示或隱藏，並關閉其他區塊
 * @param {string} sectionId - 區塊的ID
 */
// 切換指定區塊的顯示或隱藏，並關閉其他區塊
function toggleSection(sectionId) {
    // 獲取所有區塊的ID
    const sections = [
        'info',
        'story',
        'aboutus',
        'wedding-album',
        'reply',
        'map',
        'reminder',
        'share',
        'guest-album'
    ];

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            if (id === sectionId) {
                if (section.style.display === "none" || section.style.display === "") {
                    // 顯示指定區塊
                    section.style.display = "block";
                    if (id === 'info') {
                        // 顯示 info 區塊時更新高度
                        updateIframeHeight();
                    }
                } else {
                    // 隱藏指定區塊
                    section.style.display = "none";
                }
            } else {
                // 隱藏其他區塊
                section.style.display = "none";
            }
        }
    });
}

// 當視窗大小變更時，更新 iframe 的高度
// 當視窗大小變更時，更新 iframe 的高度
window.onresize = function() {
    if (document.getElementById('info').style.display !== 'none') {
        updateIframeHeight();
    }
};

// 更新 iframe 的高度
// 更新 iframe 的高度
function updateIframeHeight() {
    const iframe = document.getElementById('infoIframe');
    if (iframe) {
        iframe.contentWindow.postMessage('requestHeight', '*');
    }
}

// 當接收到高度更新消息時，更新 iframe 的高度
// 當接收到高度更新消息時，更新 iframe 的高度
window.addEventListener('message', function(event) {
    if (event.data.type === 'setHeight') {
        const iframe = document.getElementById('infoIframe');
        if (iframe) {
            const newHeight = event.data.height + 'px';
            if (iframe.style.height !== newHeight) {
                iframe.style.height = newHeight;
                lastHeight = event.data.height; // 更新 lastHeight 以避免重複更新
            }
        }
    }
});
