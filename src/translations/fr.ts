// tslint:disable:max-line-length

const fr = {
	verbose: 'Affiche plus de détails sur ce qu\'il se passe',
	usage: 'Utilisation: vue-dash create [name]',
	epilogue: 'Pour plus d\'informations, voir https://github.com/assurance-maladie-digital/vue-dash',
	cmds: {
		create: {
			description: `🎉 Créé et configure l'application`,
			name: {
				description: 'Nom de de l\'application'
			}
		},
		serve: {
			description: `🎮 Lance le serveur de développement`
		}
	},
	functions: {
		create: {
			question: {
				message: 'Écraser le contenu du dossier actuel',
				choices: {
					overwrite: 'Écraser',
					cancel: 'Annuler'
				}
			}
		}
	}
};

export default fr;
