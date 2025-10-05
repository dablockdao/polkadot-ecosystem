---
title: Ternoa
description: Ternoa è una blockchain avanzata progettata per affrontare le principali sfide nel settore Web3 relative alla sicurezza e alla privacy.
hero:
  tagline: Rete TEE decentralizzata alimentata da SGX per un futuro sicuro e senza fiducia
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

Ternoa, un protocollo multi-rete e cross-layer che sfrutta le tecnologie di calcolo confidenziale per migliorare la sicurezza, la privacy e la scalabilità della blockchain. Questo approfondimento coprirà l'architettura di Ternoa, le sue caratteristiche uniche e perché si distingue come un componente critico del panorama Web3.

## Panoramica di Ternoa. **Cos'è Ternoa?**
Ternoa è un protocollo blockchain avanzato progettato per affrontare le principali sfide nel settore Web3, in particolare quelle relative alla sicurezza e alla privacy. Combina le tecnologie di registro distribuito con il calcolo confidenziale per creare un ambiente robusto per le applicazioni decentralizzate (dApp). Ternoa è composto da tre reti interconnesse:
1. **Ternoa Chain**: Una blockchain Layer-1 costruita su Substrate, che supporta contratti intelligenti scritti in linguaggi come Rust, C, C++ e TypeScript. Consente agli sviluppatori di utilizzare primitive pre-codificate tramite un SDK JavaScript.
2. **Ternoa Fortress**: Una rete decentralizzata di coprocessori alimentata da Trusted Execution Environments (TEE), che funge da sistema di gestione delle chiavi per criptare i dati off-chain con chiavi on-chain.
3. **Ternoa zkEVM**: Un validium Layer-2 che utilizza multi-proof TEE per una maggiore sicurezza, fornendo un ambiente equivalente alla Ethereum Virtual Machine (EVM) per il deployment di contratti intelligenti in Solidity.

## Caratteristiche e Vantaggi Chiave di Ternoa
1. **Accessibilità**
    - **Facile per gli sviluppatori**: Ternoa si rivolge sia a sviluppatori nuovi che esperti. I nuovi sviluppatori possono utilizzare l'SDK JavaScript per creare applicazioni blockchain senza scrivere contratti intelligenti, mentre gli sviluppatori esperti possono deployare contratti intelligenti WASM su Ternoa Chain utilizzando Rust, C, C++, o TypeScript. Il supporto per Solidity sarà disponibile a breve.
    - **Transizione da Web2**: La piattaforma è progettata per collegare Web2 e Web3, rendendola adatta a corporazioni e organizzazioni in transizione verso la tecnologia blockchain.
2. **Confidenzialità Integrata**
    - **Sicurezza alimentata da TEE**: Ternoa Fortress utilizza TEE per proteggere i dati off-chain con chiavi di crittografia on-chain, consentendo la creazione di applicazioni private e senza fiducia. Questa funzionalità sarà estesa anche a Ternoa zkEVM al momento del lancio.
    - **Funzionalità di privacy**: Gli sviluppatori possono creare applicazioni che controllano l'accesso a dati confidenziali senza fare affidamento su terze parti.
3. **Sicurezza Robusta**
    - **Framework Substrate**: Costruito su Substrate, Ternoa Chain beneficia delle funzionalità di sicurezza del framework, inclusa una base di codice accuratamente auditata e un meccanismo di consenso Proof of Stake (PoS).
    - **Decentralizzazione**: La rete è supportata da centinaia di nodi e validatori, garantendo decentralizzazione e sicurezza. L'architettura di Ternoa è anche compatibile con la sicurezza della rete Polkadot.
    - **Sicurezza migliorata con zkEVM**: Ternoa zkEVM combina prove a conoscenza zero con prove TEE per una sicurezza superiore della rete.

## Reti Ternoa e i Loro Scopi
1. **Ternoa Chain**
    - **Scopo**: Facilita l'onboarding degli sviluppatori Web2 in Web3.
    - **Caratteristiche**: Ambiente di deployment WASM per contratti intelligenti, primitive pre-codificate accessibili tramite JavaScript e integrazione con Substrate.
2. **Ternoa Fortress**
    - **Scopo**: Fornisce privacy dei dati e sicurezza decentralizzata.
    - **Caratteristiche**: Una rete di coprocessori TEE con capacità native di gestione delle chiavi.
3. **Ternoa zkEVM**
    - **Scopo**: Migliora la sicurezza zkEVM con prove TEE e rende l'ecosistema Ternoa accessibile da Ethereum.
    - **Caratteristiche**: Un validium che offre un ambiente equivalente all'EVM protetto da multi-proof TEE.

## Casi d'Uso di Ternoa
1. **Privacy dei Dati**
    - **Time Guardian**: Un'applicazione che garantisce che i dati rimangano confidenziali e accessibili solo sotto condizioni predefinite.
    - **Hereditas**: Una piattaforma sicura per gestire e trasferire l'eredità digitale.
2. **Mercati**
    - **Secret Stash**: Un marketplace di contenuti privati che utilizza le funzionalità di privacy di Ternoa per proteggere i dati degli utenti.
3. **Gaming**
    - **Mafiafoot**: Un gioco basato su blockchain che sfrutta le caratteristiche di Ternoa per un'esperienza di gioco sicura e decentralizzata.
    - **Virtual Regatta**: Un gioco di vela virtuale che utilizza l'infrastruttura di Ternoa per migliorare l'esperienza del giocatore.

## Approfondimento Tecnico: Ternoa Chain
1. **Integrazione con Substrate**: Ternoa è costruito sul framework Substrate, offrendo interoperabilità naturale con l'ecosistema Polkadot. Punta a diventare una parachain di Polkadot, sfruttando la sicurezza di Polkadot e le capacità di comunicazione cross-chain.
2. **Delegated Proof of Stake (NPoS)**: Ternoa utilizza Nominated Proof of Stake (NPoS) per garantire una produzione e validazione dei blocchi sicura e decentralizzata. I validatori e i nominatori collaborano per mantenere la sicurezza e l'integrità della rete.
3. **Meccanismo di Consenso Ibrido**: Ternoa impiega un meccanismo di consenso ibrido che combina BABE (Blind Assignment for Blockchain Extension) per la produzione dei blocchi e GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement) per la finalità. Questo approccio garantisce una rapida produzione dei blocchi e una robusta finalità.

## Governance di Ternoa
1. **Governance On-Chain**: Il modello di governance di Ternoa prevede la partecipazione attiva dei titolari di token e di un consiglio. Le proposte di cambiamento della rete seguono un processo di referendum in cui gli stakeholder votano in base ai loro token staked.
    - **Consiglio**: Composto da membri responsabili di proporre, approvare o respingere i cambiamenti.
    - **Referendum**: Il voto basato sui token assicura che le decisioni riflettano gli interessi della comunità.
2. **Votazioni e Proposte**: Le proposte possono essere presentate dal pubblico o dal consiglio. Seguono un processo di votazione in cui i titolari di token bloccano i loro token per un periodo specificato per partecipare alla decisione.

## Ternoa Fortress: Garantire la Privacy dei Dati
1. **Trusted Execution Environments (TEE)**: Le TEE forniscono un ambiente sicuro per l'esecuzione del codice, isolandolo dal sistema operativo principale. Ciò garantisce che i dati rimangano confidenziali e sicuri.
2. **Gestione delle Chiavi**: Ternoa utilizza un sistema decentralizzato di gestione delle chiavi per proteggersi contro accessi non autorizzati. Le condivisioni segrete sono distribuite tra più TEE, garantendo che non ci sia un punto di fallimento singolo.
3. **Misure di Sicurezza**: Vari meccanismi come la condivisione segreta di Shamir, l'attestazione remota e i protocolli di comunicazione sicura proteggono contro vettori di attacco comuni come gli attacchi MITM, gli attacchi di replay e gli accessi non autorizzati.

### Conclusione
Ternoa è un protocollo rivoluzionario nell'ecosistema Polkadot, offrendo un ambiente sicuro, privato e scalabile per lo sviluppo di dApp. La sua architettura multi-rete, le funzionalità integrate di confidenzialità e i robusti meccanismi di sicurezza lo rendono una piattaforma ideale per gli sviluppatori che desiderano creare la prossima generazione di applicazioni decentralizzate. Affrontando le principali sfide nel Web3, Ternoa è destinato a svolgere un ruolo cruciale nel futuro della tecnologia blockchain.
- <small>Token correlati:</small> **CAPS**
