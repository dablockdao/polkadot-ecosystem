---
title: 'Polkadot Telemetry'
description: Polkadot Telemetry offre il monitoraggio in tempo reale e il tracciamento delle prestazioni per i nodi della rete Polkadot con metriche personalizzabili.
sidebar:   
    label: Telemetry
---

Polkadot Telemetry è uno strumento progettato per monitorare e analizzare le prestazioni dei nodi all'interno della rete Polkadot. Questo servizio di telemetria, accessibile tramite la dashboard predefinita di Polkadot Telemetry su telemetry.polkadot.io, offre una vista in tempo reale dei nodi online, fornendo metriche di prestazione essenziali per gli operatori di nodi e gli amministratori della rete.

## Monitoraggio e tracciamento delle prestazioni per l'ecosistema Polkadot
La dashboard di telemetria consente agli utenti di personalizzare le informazioni visualizzate sui nodi, inclusi lo stato del validatore, la posizione, la versione di implementazione, il numero di peer e varie metriche di rete e di blocco. Questa personalizzazione assicura che gli utenti possano concentrarsi sui punti dati più rilevanti per le loro esigenze, migliorando l'esperienza complessiva di monitoraggio.

I nodi all'interno della rete Polkadot possono essere configurati per connettersi al servizio di telemetria predefinito utilizzando l'opzione ***–telemetry-url***. Questa configurazione, tuttavia, espone pubblicamente le informazioni sui nodi, il che potrebbe non essere desiderabile per tutti gli operatori di nodi. Per affrontare questa preoccupazione, gli operatori hanno la possibilità di eseguire i propri server di telemetria privati utilizzando il progetto substrate-telemetry. Questo progetto fornisce sia un server di ingestione del backend che una dashboard del frontend, consentendo agli operatori di raccogliere e visualizzare i dati di telemetria per i loro nodi in modo privato.

Il progetto substrate-telemetry è diviso in due componenti principali: il backend e il frontend. Il backend è un progetto Rust responsabile per l'ingestione dei dati di telemetria dai nodi, mentre il frontend è un progetto React/TypeScript che presenta questi dati in un'interfaccia utente accessibile. Eseguiamo un server di telemetria privato, gli operatori possono garantire che le informazioni sensibili dei nodi rimangano sicure e non vengano esposte pubblicamente.

Impostare un server di telemetria privato comporta diversi passaggi. In primo luogo, è necessario costruire ed eseguire i binari del backend. I binari ***telemetry_core*** e ***telemetry_shard*** gestiscono rispettivamente i compiti principali di ingestione e distribuzione dei dati. Una volta che il backend è operativo, è possibile impostare il frontend per fornire un'interfaccia utente per visualizzare i dati di telemetria. Il server frontend può essere avviato localmente, consentendo agli operatori di accedere all'interfaccia utente tramite il proprio localhost.

Per coloro che cercano soluzioni alternative di monitoraggio, lo strumento Nebula di ProbeLab è un'opzione. Nebula esegue una scansione completa della rete peer-to-peer di Polkadot, raccogliendo informazioni aggiuntive sui nodi che possono complementare i dati forniti da Polkadot Telemetry.

In conclusione, **Polkadot Telemetry è uno strumento essenziale per monitorare le prestazioni dei nodi nell'ecosistema Polkadot**. Mentre la dashboard di telemetria predefinita fornisce un modo conveniente per accedere ai dati in tempo reale sui nodi, la possibilità di eseguire un server di telemetria privato garantisce che gli operatori di nodi possano mantenere il controllo sui propri dati. Inoltre, strumenti alternativi come Nebula offrono approfondimenti complementari, rendendo Polkadot Telemetry una soluzione versatile e robusta per il monitoraggio della rete.
