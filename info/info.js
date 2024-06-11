// info.js

/**
 * 計算高度並發送給父窗口
 */
function sendHeight() {
	// 計算當前文件的高度
	var height = document.body.scrollHeight;
	// 將高度資訊發送給父窗口
	window.parent.postMessage({ type: 'setHeight', height: height }, '*');
}

// 當窗口載入時執行的動作
window.onload = function() {
	// 發送當前高度資訊
	sendHeight();
	// 每秒檢查一次高度
	setInterval(sendHeight, 1000); // 每秒檢查一次高度
};

// 當窗口大小變更時，重新計算並發送高度資訊
window.onresize = sendHeight;
