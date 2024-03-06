

const clientUrl = 'https://main.lotto-product.dev.advbet.com/integration';
const script = document.createElement('script');

script.onload = function () {
	createIFrame()
}

script.src = `${clientUrl}/iframeResizer.js?${Date.now()}`;
document.head.appendChild(script)

function createIFrame() {
	let iFrame = document.getElementById('iframe');
	const url = document.getElementById('link-input').value;
	if (iFrame) {
		iFrame.src = url;
		return;
	}
	iFrame = document.createElement('iframe');
	iFrame.src = url;
	iFrame.id = 'iframe';
	iFrame.style = 'width: 100%; margin-top: 100px;'
	iFrame.frameBorder = 0;
	iFrame.allow = 'clipboard-write'
	document.getElementById('header').after(iFrame);
	window.iFrameResize({log: false, checkOrigin: false, stickyHeaderHeight: 100}, '#iframe') // Onload logic for IFrame init
}
