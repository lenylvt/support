import { Brush, GitCommit, Lock, Rocket } from 'lucide-svelte';

const collections = [
	{
		id: 3511,
		slug: 'getting-started',
		icon: Rocket,
		name: 'Démarrer avec Papillon',
		articlesId: [351101, 351104]
	},
	{
		id: 3524,
		slug: 'security-and-privacy',
		icon: Lock,
		name: 'Sécurité et vie privée',
		articlesId: [352401, 352402]
	},
	{
		id: 3131,
		slug: 'customization',
		icon: Brush,
		name: 'Personnalisation',
		articlesId: [313101, 313102, 313104, 313103, 313105]
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