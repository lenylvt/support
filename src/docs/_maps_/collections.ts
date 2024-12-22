import { Brush, GitCommit, Lock, Rocket } from 'lucide-svelte';

const collections = [
	{
		id: 3511,
		slug: 'getting-started',
		icon: Rocket,
		name: 'Démarrer avec Papillon',
		articlesId: []
	},
	{
		id: 3524,
		slug: 'security-and-privacy',
		icon: Lock,
		name: 'Sécurité et vie privée',
		articlesId: [352401]
	},
	{
		id: 3131,
		slug: 'customization',
		icon: Brush,
		name: 'Personnalisation',
		articlesId: []
	},
	{
		id: 3433,
		slug: 'contribute',
		icon: GitCommit,
		name: 'Contribuer',
		articlesId: []
	}
];

export default collections;