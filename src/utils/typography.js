import Typography from 'typography'

const typography = new Typography({
	baseFontSize: "18px",
	baseLineHeight: 1.45,
	googleFonts: [
		{
		  name: 'Rajdhani',
		  styles: [
			'500',
		  ],
		},
		{
		  name: 'Playfair',
		  styles: [
			'400',
		  ],
		},
	  ],
	headerFontFamily: ["Rajdhani", "sans-serif"],
	headerWeight: "500",
	bodyFontFamily: ["Playfair", "Georgia", "serif"],
	includeNormalize: false
});

module.exports = typography