export const sanitizeContent = (content) =>
	content
		.replaceAll('&amp;', ' ')
		.replaceAll('&nbsp;', ' ')
		.replace(/ +/g, ' ')
		.replaceAll('<div><br></div>', '\n ')
		.replaceAll('<br>', '\n')
		.replaceAll('<div>', '\n ')
		.replaceAll('</div>', '');
