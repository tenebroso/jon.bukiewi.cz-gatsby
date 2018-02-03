const env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

module.exports = {
	siteMetadata: {
		title: 'Jon Bukiewicz',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-transformer-sharp',
		//'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: '',
			}
		},
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
				verboseOutput: false,
				auth: {
					htaccess_user: process.env.HTACCESS_USER,
					htaccess_pass: process.env.HTACCESS_PASS,
					htaccess_sendImmediately: false,
				}
			}
		}
	],
};
