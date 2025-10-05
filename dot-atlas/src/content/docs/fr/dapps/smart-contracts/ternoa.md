---
title: Ternoa
description: Ternoa est une blockchain avancée conçue pour résoudre les principaux défis du Web3 en matière de sécurité et de confidentialité.
hero:
  tagline: Réseau TEE décentralisé propulsé par SGX pour un futur sécurisé et sans confiance
  image: 
    file: ../../../../../assets/dapps/ecos/ternoa.png
  actions:
    - text: Dapps
      link: https://www.ternoa.network/
      icon: external
    - text: Docs
      link: https://docs.ternoa.network/
      icon: external
      variant: secondary
---

Ternoa, un protocole multi-réseaux et inter-couches qui utilise des technologies de calcul confidentiel pour améliorer la sécurité, la confidentialité et la scalabilité de la blockchain. Cette analyse approfondie couvre l'architecture de Ternoa, ses caractéristiques uniques et pourquoi elle se distingue comme un composant essentiel du paysage Web3.

## Présentation de Ternoa. **Qu'est-ce que Ternoa ?**
Ternoa est un protocole de blockchain avancé conçu pour résoudre les défis majeurs du Web3, en particulier ceux liés à la sécurité et à la confidentialité. Il combine les technologies de registre distribué avec le calcul confidentiel pour créer un environnement robuste pour les applications décentralisées (dApps). Ternoa se compose de trois réseaux interconnectés :
1. **Ternoa Chain** : Une blockchain de niveau 1 construite sur Substrate, prenant en charge les contrats intelligents écrits dans des langages tels que Rust, C, C++ et TypeScript. Elle permet aux développeurs d'utiliser des primitives pré-codées via un SDK JavaScript.
2. **Ternoa Fortress** : Un réseau décentralisé de coprocesseurs alimenté par des environnements d'exécution de confiance (TEEs), qui fonctionne comme un système de gestion des clés pour chiffrer les données hors chaîne avec des clés on-chain.
3. **Ternoa zkEVM** : Un validium de niveau 2 qui utilise des multi-preuves TEE pour une sécurité améliorée, offrant un environnement équivalent à la machine virtuelle Ethereum (EVM) pour déployer des contrats intelligents Solidity.

## Fonctionnalités clés et avantages de Ternoa
1. **Accessibilité**
    - **Facilité pour les développeurs** : Ternoa s'adresse à la fois aux développeurs débutants et expérimentés. Les nouveaux développeurs peuvent utiliser le SDK JavaScript pour créer des applications blockchain sans écrire de contrats intelligents, tandis que les développeurs expérimentés peuvent déployer des contrats intelligents WASM sur Ternoa Chain en utilisant Rust, C, C++, ou TypeScript. Le support de Solidity sera bientôt disponible.
    - **Transition Web2** : La plateforme est conçue pour faire le pont entre Web2 et Web3, la rendant adaptée aux entreprises et organisations en transition vers la technologie blockchain.
2. **Confidentialité intégrée**
    - **Sécurité alimentée par TEE** : Ternoa Fortress utilise des TEEs pour sécuriser les données hors chaîne avec des clés de chiffrement on-chain, permettant la création d'applications privées et sans confiance. Cette fonctionnalité sera également étendue à Ternoa zkEVM lors de son lancement.
    - **Fonctionnalités de confidentialité** : Les développeurs peuvent créer des applications qui contrôlent l'accès aux données confidentielles sans recourir à des tiers.
3. **Sécurité robuste**
    - **Cadre Substrate** : Construit sur Substrate, Ternoa Chain bénéficie des fonctionnalités de sécurité du cadre, y compris une base de code minutieusement audité et un mécanisme de consensus Proof of Stake (PoS).
    - **Décentralisation** : Le réseau est soutenu par des centaines de nœuds et de validateurs, garantissant la décentralisation et la sécurité. L'architecture de Ternoa est également compatible avec la sécurité du réseau Polkadot.
    - **Sécurité renforcée avec zkEVM** : Ternoa zkEVM combine des preuves à connaissance nulle avec des preuves TEE pour une sécurité supérieure du réseau.

## Réseaux Ternoa et leurs objectifs
1. **Ternoa Chain**
    - **Objectif** : Faciliter l'intégration des développeurs Web2 dans Web3.
    - **Caractéristiques** : Environnement de déploiement WASM pour les contrats intelligents, primitives pré-codées accessibles via JavaScript, et intégration avec Substrate.
2. **Ternoa Fortress**
    - **Objectif** : Assurer la confidentialité des données et la sécurité décentralisée.
    - **Caractéristiques** : Réseau de coprocesseurs TEE avec des capacités natives de gestion des clés.
3. **Ternoa zkEVM**
    - **Objectif** : Améliorer la sécurité zkEVM avec des preuves TEE et rendre l'écosystème Ternoa accessible depuis Ethereum.
    - **Caractéristiques** : Un validium offrant un environnement équivalent à EVM sécurisé par des multi-preuves TEE.

## Cas d'utilisation de Ternoa
1. **Confidentialité des données**
    - **Time Guardian** : Une application garantissant que les données restent confidentielles et accessibles uniquement dans des conditions prédéfinies.
    - **Hereditas** : Une plateforme sécurisée pour gérer et transférer l'héritage numérique.
2. **Marchés**
    - **Secret Stash** : Un marché de contenus privés utilisant les fonctionnalités de confidentialité de Ternoa pour protéger les données des utilisateurs.
3. **Jeux**
    - **Mafiafoot** : Un jeu basé sur la blockchain utilisant les fonctionnalités de Ternoa pour un jeu décentralisé et sécurisé.
    - **Virtual Regatta** : Un jeu de voile virtuel utilisant l'infrastructure de Ternoa pour améliorer l'expérience des joueurs.

## Exploration technique : Ternoa Chain
1. **Intégration de Substrate** : Ternoa est construit sur le cadre Substrate, offrant une interopérabilité naturelle avec l'écosystème Polkadot. Il vise à devenir une parachain Polkadot, tirant parti de la sécurité et des capacités de communication inter-chaînes de Polkadot.
2. **Preuve de participation déléguée (NPoS)** : Ternoa utilise le Nominated Proof of Stake (NPoS) pour assurer la production et la validation des blocs de manière sécurisée et décentralisée. Les validateurs et les nominants collaborent pour maintenir la sécurité et l'intégrité du réseau.
3. **Mécanisme de consensus hybride** : Ternoa utilise un mécanisme de consensus hybride combinant BABE (Blind Assignment for Blockchain Extension) pour la production des blocs et GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement) pour la finalité. Cette approche assure une production rapide des blocs et une finalité robuste.

## Gouvernance de Ternoa
1. **Gouvernance on-chain** : Le modèle de gouvernance de Ternoa implique une participation active des détenteurs de tokens et d'un conseil. Les propositions de changements de réseau passent par un processus de référendum où les parties prenantes votent en fonction de leurs tokens mis en jeu.
    - **Conseil** : Composé de membres responsables de proposer, approuver ou rejeter les changements.
    - **Référendums** : Le vote basé sur les stakes garantit que les décisions reflètent les intérêts de la communauté.
2. **Vote et propositions** : Les propositions peuvent être soumises par le public ou le conseil. Elles passent par un processus de vote où les détenteurs de tokens verrouillent leurs tokens pendant une période spécifiée pour participer à la prise de décision.

## Ternoa Fortress : Assurer la confidentialité des données
1. **Environnements d'exécution de confiance (TEEs)** : Les TEEs offrent un environnement sécurisé pour l'exécution du code, l'isolant du système d'exploitation principal. Cela garantit que les données restent confidentielles et sécurisées.
2. **Gestion des clés** : Ternoa utilise un système de gestion des clés décentralisé pour protéger contre l'accès non autorisé. Les secrets sont répartis sur plusieurs TEEs, garantissant qu'il n'y ait pas de point de défaillance unique.
3. **Mesures de sécurité** : Divers mécanismes tels que le partage secret de Shamir, l'attestation distante et les protocoles de communication sécurisée protègent contre les vecteurs d'attaque courants comme les attaques MITM, les attaques par répétition et l'accès non autorisé.

### Conclusion
Ternoa est un protocole révolutionnaire dans l'écosystème Polkadot, offrant un environnement sécurisé, privé et évolutif pour le développement des dApps. Son architecture multi-réseaux, ses fonctionnalités de confidentialité intégrées et ses mécanismes de sécurité robustes en font une plateforme idéale pour les développeurs souhaitant créer la prochaine génération d'applications décentralisées. En répondant aux défis clés du Web3, Ternoa est bien positionné pour jouer un rôle clé dans l'avenir de la technologie blockchain.
- <small>Token(s) associé(s) :</small> **CAPS**
