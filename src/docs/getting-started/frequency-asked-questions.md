# Introduction

Vous êtes nombreux à télécharger Papillon, et ça nous touche grandement. Mais régulièrement, vous nous posez des questions ou vous nous signalez des problèmes ! Alors, on va répondre aux plus fréquentes d’entre elles. 😉

# 📊 Ma moyenne est incorrecte, que faire ?

## Le problème

Papillon récupère automatiquement votre moyenne générale depuis vos services scolaires,si votre établissement a activé cette option. Dans le cas où votre moyenne n'est pas disponible, Papillon se charge de la calculer automatiquement.

Nous n'avons pas connaissance des algorithmes de calcul des moyennes des services scolaires. C'est pour cela que la communauté s'investit pour en fournir [une alternative](https://github.com/PapillonApp/Papillon/blob/main/src/utils/grades/getAverages.ts) la plus efficace possible. Cependant, celle-ci ne fonctionne pas dans toutes les configurations.

La moyenne générale est généralement définie comme une moyenne pondérée des moyennes de chaque matière, tenant compte des coefficients, des barèmes, des notes bonus et autres paramètres spécifiques. Ces variables peuvent parfois provoquer des écarts selon la méthode utilisée pour le calcul.

## Solution

Si vous constatez une différence notable entre votre moyenne générale et la moyenne calculée par Papillon, vous pouvez venir nous contacter à l’adresse [support@papillon.bzh](mailto:support@papillon.bzh) ou sur nos réseaux sociaux. Si vous avez également des compétences techniques, nous sommes ouverts à la contribution.

> #### 🛑 Avant de nous contacter
> Pour considérer cela comme problématique, il faut une différence **notable** avec votre moyenne réelle, d'au-delà de 0.30 points environ.

# 🔐 Mes données sont-elles vraiment en sécurité ?

## Réponse

Papillon est un projet libre et open source. Pour nous, la sécurité de vos données personnelles est un **sujet essentiel**. C'est pour cela que l'application **ne partage aucune donnée avec des tiers** et ne communique jamais avec des services étrangers à vos services scolaires, ni même avec des serveurs de Papillon.

Vos identifiants ne sont pas conservés par l'application ni transmis à Papillon et vos informations de connexion ne quittent jamais votre appareil.

# 👥 Ça veut dire quoi “open-source” ?

## Réponse

Quand on dit que l’application est open source, cela signifie que n'importe qui peut consulter et vérifier le code Papillon librement. Cela assure la sécurité de vos données, car il est possible pour tous d'examiner le code exécuté sur votre téléphone.

Vous pouvez consulter le code librement sur le repo GitHub de l’application Papillon à l’adresse https://github.com/PapillonApp/Papillon.

# 🏫 Pourquoi mon lycée n’est pas listé ? (Pronote)

> #### ☝️ N’oublie pas
> Ce n'est pas parce que votre établissement n'apparaît pas qu'il est incompatible avec Papillon : **il peut quand même fonctionner.**

## Le problème

Lorsque tu cherches à localiser ton établissement, il est possible que celui-ci n’apparaisse pas. En effet, certains établissements peuvent refuser d’apparaitre dans l’annuaire fourni par Pronote. Papillon n’a pas moyen d’ajouter un établissement à cet annuaire totalement maintenu par l’entreprise Index-éducation.

## Solution

Pour te connecter, tu peux utiliser la méthode du QR code ou bien celle de l’URL de ton établissement. Tu pourras en apprendre plus sur [ce tutoriel](https://staggingsupport.godetremy.com/articles/351101-login-pronote).

Et si tu es vraiment quelqu’un de cool, tu peux faire une demande d’établissement manquant à cette adresse : https://github.com/PapillonApp/datasets/issues/new/choose.

# 🧑‍🧑‍🧒 Pourquoi je ne parviens pas à me connecter en tant que parent ?

## Le problème

Papillon ne supporte actuellement que les comptes élèves.

## La solution

Si votre enfant est d’accord, vous pourriez lui demander de partager son compte avec vous. Nous nous permettons tout de même de vous avertir que suivre son enfant trop intensivement peut nuire à sa santé psychologique.

# 🧑‍🏫 Pourquoi je ne parviens pas à me connecter en tant que professeur ?

## Réponse

Papillon ne supporte actuellement que les comptes élèves.

# 🌍 Pourquoi Papillon n’est pas disponible dans ma région ?

## Le problème

Rendre Papillon disponible dans tous les pays du monde est un défi complexe, car nombreux ont des politiques différentes en fonction des lois en vigueur. De plus, les magasins d’application incluent également des restrictions. Actuellement, Papillon est disponible dans les pays suivants :

- France

## Solution

Nous prévoyons d’agrandir notre couverture dans l’avenir, mais cela ne reste pas une priorité pour le moment. Il te suffit d’attendre patiemment…

# 📞 Comment nous contacter ?

Si tu as des questions, rencontres des bugs ou fais face à un problème que tu ne parviens pas à résoudre, nous sommes là pour t’aider ! Tu peux nous contacter sur nos réseaux sociaux :

- 🎮 **Discord** : [Rejoignez notre serveur](https://discord.gg/wVKWBRTbfh)
- 🐦 **X (Twitter)** : [@thepapillonapp](https://twitter.com/thepapillonapp)
- 📸 **Instagram** : [@thepapillonapp](https://instagram.com/thepapillonapp)
- 🎵 **TikTok** : [@thepapillonapp](http://tiktok.com/@thepapillonapp)
- 🏢 **LinkedIn** : https://www.linkedin.com/company/getpapillonapp

Ou tu peux également nous envoyer un e-mail à [support@papillon.bzh](mailto:support@papillon.bzh), et nous te répondrons dans les meilleurs délais !