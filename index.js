// 动态加载Google表单
document.addEventListener('DOMContentLoaded', function() {
    const replyContent = document.getElementById('replyContent');
    if (replyContent) {
        replyContent.innerHTML = `<iframe id="replyIframe" src="https://docs.google.com/forms/d/e/1FAIpQLSdr9AIolvSGjuirBEnJwxHwNWugL1965m8f1Y760y4Uwq5zfQ/viewform?embedded=true" width="100%" height="2000" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">載入中…</iframe>`;
    }
});

// 動態調整iframe高度
window.addEventListener('message', function(event) {
    if (event.data.type === 'setHeight') {
        const iframe = document.getElementById('infoIframe');
        if (iframe) {
            iframe.style.height = event.data.height + 'px';
        }
    } else if (event.data.type === 'setHeightReply') {
        const section = document.getElementById('replyIframe');
        if (section) {
            section.style.height = event.data.height + 'px';
        }
    }
});

// 現有的JavaScript代碼...

/**
 * 切换指定区块的显示或隐藏，并关闭其他区块
 * @param {string} sectionId - 区块的ID
 */
function toggleSection(sectionId) {
    // 获取所有区块的ID
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
                // 切换指定区块的显示状态
                if (section.style.display === "none" || section.style.display === "") {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            } else {
                // 隐藏其他区块
                section.style.display = "none";
            }
        }
    });
}

// 动态加載reminder.html內容
document.addEventListener('DOMContentLoaded', function() {
    const reminderContent = document.getElementById('reminderContent');
    if (reminderContent) {
        fetch('reminder/reminder.html')
            .then(response => response.text())
            .then(data => {
                reminderContent.innerHTML = data;
            })
            .catch(error => console.error('Error loading reminder.html:', error));
    }
});
