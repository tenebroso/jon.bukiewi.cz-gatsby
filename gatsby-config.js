module.exports = {
	siteMetadata: {
		title: 'Jon Bukiewicz',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js'
			}
		},
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				baseUrl: 'ec2-13-58-199-98.us-east-2.compute.amazonaws.com',
				hostingWPCOM: false,
				protocol: 'http',
				useACF: false,
				verboseOutput: false
			}
		}
	],
};
