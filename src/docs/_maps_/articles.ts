//LES ID DES ARTICLES SONT BASÉE SUR L'ID DE LA COLLECTION SUIVI DU NUMÉRO DE L'ARTICLE (01, 02, 03, ...)

const articles = [
	{
		id: 352401,
		slug: 'terms-of-service',
		markdown: 'security-and-privacy/terms-of-service.md',
		image: '/articles/cover/terms-of-service.png',
		imageAlt: 'Placeholder image',
		title: 'Conditions générales d\'utilisation',
		description: 'Les Conditions générales d’utilisation définissent les règles et obligations applicables lors de l’utilisation des services Papillon.',
		time_to_read: 5,
		difficulty: 'Non spécifié',
		stepped_guide_available: false,
	},
	{
		id: 352402,
		slug: 'privacy-policy',
		markdown: 'security-and-privacy/privacy-policy.md',
		image: '/articles/cover/privacy-policy.png',
		imageAlt: 'Placeholder image',
		title: 'Politique de confidentialité',
		description: 'Par souci de transparence, une politique de confidentialité claire et précise détaille ce que Papillon fait de vos données personnelles.',
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