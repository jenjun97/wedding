
/**
 * 切換指定區塊的顯示或隱藏，並關閉其他區塊
 * @param {string} sectionId - 區塊的ID
 */
// 切換指定區塊的顯示或隱藏，並關閉其他區塊
function toggleSection(sectionId) {
	// 獲取所有區塊的ID
	const sections = [
		'info',
		'reply',
		'map',
		'reminder'
	];

	sections.forEach(id => {
		const section = document.getElementById(id);
		if (section) {
			if (id === sectionId) {
				if (section.style.display === "none" || section.style.display === "") {
					// 顯示指定區塊
					section.style.display = "block";
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

