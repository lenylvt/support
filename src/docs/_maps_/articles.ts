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
	},
	{
		id: 351104,
		slug: 'frequency-asked-questions',
		markdown: 'getting-started/frequency-asked-questions.md',
		image: '/articles/cover/frequency-asked-questions.png',
		imageAlt: 'Image montrant un point d\'interrogation à côté de 2 téléphones sur l\'application mobile Papillon',
		title: 'Questions fréquemment posées',
		description: 'Certaines questions reviennent fréquemment. C\'est pourquoi nous avons pris le temps d\'y répondre.',
		time_to_read: 5,
		difficulty: 'Facile',
		stepped_guide_available: false,
	},
	{
		id: 313101,
		slug: 'customization-icons',
		markdown: 'customization/icons.md',
		image: '/articles/cover/icons.png',
		imageAlt: 'Image montrant certaines icônes de l\'application Papillon',
		title: 'Les Icônes',
		description: 'Papillon te permet de personnaliser l\'application avec des icônes. Tu trouveras ici comment faire.',
		time_to_read: 5,
		difficulty: 'Facile',
		stepped_guide_available: false,
	},
	{
		id: 313102,
		slug: 'customization-matiere',
		markdown: 'customization/matiere.md',
		image: '/articles/cover/matiere.png',
		imageAlt: 'Image montrant la personnalisation des matières dans Papillon',
		title: 'Les Matières',
		description: 'Découvre comment personnaliser les matières dans Papillon.',
		time_to_read: 4,
		difficulty: 'Facile',
		stepped_guide_available: false,
	},
	{
		id: 313104,
		slug: 'customization-theme',
		markdown: 'customization/theme.md',
		image: '/articles/cover/theme.png',
		imageAlt: 'Image montrant la personnalisation du thème dans Papillon',
		title: 'Le Thème',
		description: 'Change le thème de Papillon pour une expérience personnalisée.',
		time_to_read: 4,
		difficulty: 'Facile',
		stepped_guide_available: false,
	},
	{
		id: 313103,
		slug: 'customization-onglets',
		markdown: 'customization/onglets.md',
		image: '/articles/cover/onglets.png',
		imageAlt: 'Image montrant la personnalisation des onglets dans Papillon',
		title: 'Les Onglets',
		description: 'Personnalise les onglets de l\'application selon tes besoins.',
		time_to_read: 3,
		difficulty: 'Facile',
		stepped_guide_available: false,
	},
	{
		id: 313105,
		slug: 'customization-accueil',
		markdown: 'customization/accueil.md',
		image: '/articles/cover/accueil.png',
		imageAlt: 'Image montrant la personnalisation de l\'accueil dans Papillon',
		title: 'L\'Accueil',
		description: 'Personnalise la page d\'accueil de Papillon selon tes préférences.',
		time_to_read: 3,
		difficulty: 'Facile',
		stepped_guide_available: false,
	},
]

export default articles;