# Etapes de mise en route : 

- Créer un fichier '.env' a la racine du projet
- Créer les variables suivantes:
```
APPLICATIONID="l'application id du bot"
DESCRIPTIONCHANNELID="l'ID du channel description"
RULECHANNELID="l'ID du channel regles"
UPDATECHANNELID="l'ID du channel des majs"
DISCORD_TOKEN="le token du bot discord"
```
- Sauvegarder le fichier

# Arborescence

- .git
- commands/utility        Cela est obligatoire selon la documentation de discord.js
- core
    - config.js           C'est l'endroit ou tout les secrets de dotenv seront convertis en const afin de n'appeler dotenv qu'une seule fois
- embeds                  C'est l'endroit ou les embeds seront stockes
- node_modules
- .env
- .gitignore
- README.md
- deploy.js               Script afin d'envoyer la liste des commandes a discord
- index.js                Script principal se chargeant de l'interprétation des commandes
- package-lock.json
- package.json

# Pourquoi choisir cette base ?

Car elle permet un moyen semi-automatique de déployer des commandes dans le bot et permettra de déployer plus simplement les changements dans le repo principal pour @yaiik car il n'aura qu'a copier les fichiers commandes et embeds et executer le deploy.js avec
```
node deploy
```
