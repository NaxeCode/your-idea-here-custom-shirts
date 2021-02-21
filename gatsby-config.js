require('dotenv').config()

module.exports = {
	siteMetadata: {
		siteName: 'Your Idea Here',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-datocms`,
			options: { apiToken: '02b15189c865a47a864f4dbf81a89a' },
		},
		{
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey:
					'NDU4OGQ2YzYtMmFhYS00ZTIwLTliODItMjA5MzRjOGY2Y2I3NjM3NDg0OTQ0NjU1NjM3Mjcw',
				autopop: true,
			},
		},
	],
}
