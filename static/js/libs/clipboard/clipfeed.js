var clipboardFeed = new ClipboardJS('[data-clipboard-btn]');
clipboardFeed.on('success', function (e) {
	e.clearSelection();
	//console.info('Action:', e.action);
	//console.info('Text:', e.text);
	//console.info('Trigger:', e.trigger);
	showTooltip(e.trigger, 'Copied!');
});
clipboardFeed.on('error', function (e) {
	//console.error('Action:', e.action);
	//console.error('Trigger:', e.trigger);
	showTooltip(e.trigger, fallbackMessage(e.action));
});