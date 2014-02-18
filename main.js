require.config({
	baseUrl: './',
	paths: {
		"jquery": "bower_components/jquery/dist/jquery"
	}
});

require(['i18n'], function (i18n) {

	i18n.set();
	console.log(i18n._('Hello World'));

	i18n.set({
		'lang': 'zh-tw',
		'path': ''
	});
	console.log(i18n._('Hello World'));

	i18n.set({
		'lang': 'en-us',
		'path': ''
	});
	console.log(i18n._('Hello World'));

	i18n.set({
		'lang': 'ja',
		'path': ''
	});
	console.log(i18n._('Hello World'));
	
});