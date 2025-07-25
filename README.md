# Arborescence

.git
commands/utility        Cela est obligatoire selon la documentation de discord.js
embeds                  C'est l'endroit ou les embeds seront stockes
node_modules
.env
.gitignore
README.md
deploy.js               Script afin d'envoyer la liste des commandes a discord
index.js                Script principal se chargeant de l'interprétation des commandes
package-lock.json
package.json

# Pourquoi choisir cette base ?

Car elle permet un moyen semi-automatique de déployer des commandes dans le bot et permettra de déployer plus simplement les changements dans le repo principal pour @yaiik car il n'aura qu'a copier les fichiers commandes et embeds et executer le deploy.js avec
```
node deploy
```
