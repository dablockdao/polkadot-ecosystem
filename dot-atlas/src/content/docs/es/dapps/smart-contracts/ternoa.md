---
title: Ternoa
description: Ternoa es una blockchain avanzada diseñada para abordar desafíos clave en el espacio Web3 relacionados con la seguridad y la privacidad.
hero:
  tagline: Red descentralizada TEE impulsada por SGX para un futuro seguro y sin confianza.
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

Ternoa es un protocolo multinivel y multicapa que utiliza tecnologías de computación confidencial para mejorar la seguridad, privacidad y escalabilidad de blockchain. Este análisis detallado aborda la arquitectura de Ternoa, sus características únicas y por qué se destaca como un componente crítico en el ecosistema Web3.

## Descripción general de Ternoa. **¿Qué es Ternoa?**
Ternoa es un protocolo avanzado de blockchain diseñado para abordar desafíos clave en el espacio Web3, especialmente los relacionados con la seguridad y la privacidad. Combina tecnologías de libro mayor distribuido con computación confidencial para crear un entorno robusto para aplicaciones descentralizadas (dApps). Ternoa consta de tres redes interconectadas:
1. **Ternoa Chain**: Una blockchain de capa 1 construida sobre Substrate, que admite contratos inteligentes en lenguajes como Rust, C, C++ y TypeScript. Ofrece un SDK de JavaScript para que los desarrolladores utilicen primitivas preconfiguradas.
2. **Ternoa Fortress**: Una red de coprocesadores descentralizada impulsada por Entornos de Ejecución Confiables (TEEs), que funciona como un sistema de gestión de claves para cifrar datos fuera de la cadena con claves en la cadena.
3. **Ternoa zkEVM**: Una solución de capa 2 validium que utiliza pruebas múltiples TEE para mayor seguridad, proporcionando un entorno equivalente a la Máquina Virtual Ethereum (EVM) para implementar contratos inteligentes en Solidity.

## Características y beneficios clave de Ternoa
1. **Accesibilidad**
    - **Amigable para desarrolladores**: Ternoa está diseñado tanto para desarrolladores nuevos como experimentados. Los nuevos pueden usar el SDK de JavaScript para crear aplicaciones blockchain sin escribir contratos inteligentes, mientras que los experimentados pueden implementar contratos inteligentes WASM utilizando Rust, C, C++ o TypeScript. El soporte para Solidity estará disponible próximamente.
    - **Transición Web2-Web3**: La plataforma está diseñada para conectar Web2 con Web3, haciéndola ideal para corporaciones y organizaciones que desean adoptar tecnología blockchain.
2. **Confidencialidad incorporada**
    - **Seguridad impulsada por TEEs**: Ternoa Fortress utiliza TEEs para proteger datos fuera de la cadena con claves de cifrado en la cadena, permitiendo la creación de aplicaciones privadas y confiables. Esta funcionalidad se extenderá a Ternoa zkEVM con su lanzamiento.
    - **Características de privacidad**: Los desarrolladores pueden construir aplicaciones que controlen el acceso a datos confidenciales sin depender de terceros.
3. **Seguridad robusta**
    - **Framework Substrate**: Construida sobre Substrate, Ternoa Chain se beneficia de sus características de seguridad, incluido un código auditado y un mecanismo de consenso Proof of Stake (PoS).
    - **Descentralización**: La red está respaldada por cientos de nodos y validadores, asegurando descentralización y seguridad. Su arquitectura también es compatible con la seguridad de la red Polkadot.
    - **Seguridad mejorada con zkEVM**: Ternoa zkEVM combina pruebas de conocimiento cero con pruebas TEE para una seguridad superior de la red.

## Redes de Ternoa y sus propósitos
1. **Ternoa Chain**
    - **Propósito**: Facilitar la adopción de Web3 por desarrolladores de Web2.
    - **Características**: Entorno de implementación WASM, primitivas preconfiguradas accesibles vía JavaScript e integración con Substrate.
2. **Ternoa Fortress**
    - **Propósito**: Proporcionar privacidad de datos y seguridad descentralizada.
    - **Características**: Una red de coprocesadores TEE con capacidades nativas de gestión de claves.
3. **Ternoa zkEVM**
    - **Propósito**: Mejorar la seguridad zkEVM con pruebas TEE y hacer accesible el ecosistema Ternoa desde Ethereum.
    - **Características**: Un validium que ofrece un entorno equivalente a EVM asegurado por pruebas múltiples TEE.

## Casos de uso de Ternoa
1. **Privacidad de datos**
    - **Time Guardian**: Una aplicación que asegura que los datos sean confidenciales y accesibles solo bajo condiciones predefinidas.
    - **Hereditas**: Una plataforma segura para gestionar y transferir herencias digitales.
2. **Mercados**
    - **Secret Stash**: Un mercado de contenido privado que utiliza las características de privacidad de Ternoa para proteger los datos de los usuarios.
3. **Juegos**
    - **Mafiafoot**: Un juego basado en blockchain que aprovecha las características de Ternoa para un entorno seguro y descentralizado.
    - **Virtual Regatta**: Un juego de navegación virtual que utiliza la infraestructura de Ternoa para mejorar la experiencia del jugador.

## Análisis técnico: Ternoa Chain
1. **Integración Substrate:** Ternoa está construido sobre el framework Substrate, proporcionando interoperabilidad natural con el ecosistema Polkadot. Aspira a convertirse en una parachain de Polkadot, aprovechando su seguridad y capacidades de comunicación entre cadenas.
2. **Prueba de Participación Nominada (NPoS):** Ternoa utiliza NPoS para garantizar la producción y validación de bloques de manera segura y descentralizada. Los validadores y nominadores colaboran para mantener la seguridad e integridad de la red.
3. **Mecanismo de consenso híbrido:** Combina BABE para la producción de bloques y GRANDPA para la finalidad, asegurando una rápida producción de bloques y una robusta confirmación.

## Gobernanza en Ternoa
1. **Gobernanza en la cadena:** El modelo de gobernanza de Ternoa involucra la participación activa de los titulares de tokens y un consejo. Las propuestas de cambios en la red pasan por un proceso de referéndum donde los interesados votan según sus tokens en staking.
    - **Consejo**: Compuesto por miembros responsables de proponer, aprobar o rechazar cambios.
    - **Referendos**: El voto basado en staking asegura que las decisiones reflejen los intereses de la comunidad.
2. **Votación y propuestas:** Las propuestas pueden ser presentadas por el público o el consejo y pasan por un proceso de votación donde los titulares de tokens bloquean sus activos para participar en la toma de decisiones.

## Ternoa Fortress: Garantizando la privacidad de los datos
1. **Entornos de Ejecución Confiables (TEEs):** Proporcionan un entorno seguro para la ejecución de código, aislándolo del sistema operativo principal. Esto asegura que los datos permanezcan confidenciales y seguros.
2. **Gestión de claves:** Ternoa utiliza un sistema de gestión de claves descentralizado para proteger contra accesos no autorizados. Las claves se dividen en múltiples TEEs, eliminando puntos únicos de fallo.
3. **Medidas de seguridad:** Mecanismos como el secreto compartido de Shamir, la atestación remota y protocolos de comunicación seguros protegen contra ataques comunes como MITM y accesos no autorizados.

### Conclusión
Ternoa es un protocolo innovador en el ecosistema Polkadot, que ofrece un entorno seguro, privado y escalable para el desarrollo de dApps. Su arquitectura multinivel, características de confidencialidad integradas y mecanismos de seguridad robustos lo convierten en una plataforma ideal para desarrolladores que buscan crear la próxima generación de aplicaciones descentralizadas. Al abordar los desafíos clave en Web3, Ternoa está lista para desempeñar un papel crucial en el futuro de la tecnología blockchain.
- <small>Token relacionado/s:</small> **CAPS**
