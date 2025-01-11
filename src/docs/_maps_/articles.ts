//LES ID DES ARTICLES SONT BASÉE SUR L'ID DE LA COLLECTION SUIVI DU NUMÉRO DE L'ARTICLE (01, 02, 03, ...)

const articles = [
	{
		id: 352401,
		slug: 'terms',
		markdown: 'security-and-privacy/terms.md',
		image: 'https://france3-regions.francetvinfo.fr/image/Sd1nuZFstxAczwnRxkSxNlsN694/1752x939/regions/2024/12/19/capturepapillon-6763eac13bcb9082181281.jpg',
		imageAlt: 'Placeholder image',
		title: 'Conditions générales d\'utilisation',
		description: 'En utilisant Papillon, vous acceptez nos conditions d\'utilisation.',
		time_to_read: 5,
		difficulty: 'Non spécifié',
		stepped_guide_available: false,
	},
	{
		id: 351101,
		slug: 'login-pronote',
		markdown: 'getting-started/login-pronote.md',
		image: '/articles/cover/login-pronote.png',
		imageAlt: 'Image montrant un téléphone sur l\'application mobile Pronote avec une flèche pointant vers un téléphone sur l\'application mobile Papillon',
		title: 'Connexion à PRONOTE avec Papillon',
		description: 'Tu trouveras ici comment réussir à te connecter au service PRONOTE sur Papillon.',
		time_to_read: 10,
		difficulty: 'Facile',
		stepped_guide_available: false,
	}
]

export default articles;