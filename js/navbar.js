$(function () {
	const resizeHandler = () => {
		// 获取导航栏高度, 四舍五入
		let navbarHeight = Math.round($('.navbar').height());
		// 设置给导航栏助手, 解决高度塌陷
		$('.navbar-support').height(navbarHeight);
	};

	resizeHandler();
	window.addEventListener('resize', resizeHandler);
});

