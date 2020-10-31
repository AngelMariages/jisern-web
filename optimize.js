const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
	await imagemin(
		['wp-content/**/*.jpg', 'wp-content/**/*.png'],
		{
			preserveDirectories: true,
			destination: './',
			plugins: [
				imageminMozjpeg({ quality: 80 }),
				imageminPngquant({ quality: [0.8, 0.8] })
			]
		}
	);
})();
