---
title: 'SQD'
description: 'SQD Network es un motor de consultas descentralizado y altamente optimizado para la extracción por lotes de grandes volúmenes de datos.'
hero:
  tagline: 'Un motor de consultas descentralizado.'
  image: 
    file: ../../../../../assets/tools/dev/hellosqd.png
  actions:
    - text: 'Sitio'
      link: https://www.sqd.dev/
      icon: external
    - text: 'Documentación'
      link: https://docs.sqd.dev/
      icon: external
      variant: secondary
---

import { ShowcaseProfile, ShowcaseImage, ShowcaseText, ShowcaseYouTube, ShowcaseCTA, ShowcaseTwitter } from 'starlight-showcases';

A medida que los ecosistemas blockchain se vuelven más complejos e interconectados, los desarrolladores enfrentan mayores retos para acceder, procesar y analizar datos on-chain. **SQD Network** aparece como una solución innovadora, ofreciendo capacidades inigualables para la indexación y consulta de datos en entornos blockchain. Diseñada para simplificar el proceso de desarrollo de aplicaciones descentralizadas (dApps) y otras soluciones basadas en blockchain, **SQD Network** se convierte en un actor clave para los desarrolladores dentro del ecosistema de Polkadot y más allá.

## ¿Qué es SQD Network?
SQD Network es un **motor de consultas descentralizado y un data lake** optimizado para la extracción por lotes de grandes volúmenes de datos. Su arquitectura innovadora permite a los desarrolladores acceder a datos brutos y procesados de blockchain con una velocidad, eficiencia y rentabilidad sin precedentes. En la actualidad, la red da servicio a más de 200 protocolos blockchain, incluidas las principales cadenas basadas en EVM, redes Substrate como Polkadot e incluso blockchains emergentes como Solana, Tron y Fuel.

Las funcionalidades principales de SQD Network giran en torno a proporcionar una infraestructura sólida para indexar datos históricos de blockchain, habilitando casos de uso como:
- Análisis de transacciones y eventos  
- Toma de decisiones basada en datos para dApps  
- Desarrollo de APIs personalizadas para contratos inteligentes  

Al abordar las limitaciones de los nodos RPC tradicionales y de las soluciones de subgraph indexing, SQD Network mejora significativamente la eficiencia en el procesamiento de datos blockchain.

## Componentes Clave del Ecosistema SQD
El ecosistema de SQD está conformado por diversas herramientas y servicios complementarios que buscan agilizar el desarrollo en blockchain:

### 1. Squid SDK
El **Squid SDK** es un kit de herramientas en TypeScript que sirve como columna vertebral para la creación de indexadores de alto rendimiento. Permite a los desarrolladores extraer, transformar y cargar (ETL) datos desde la SQD Network de forma eficiente, sin necesidad de depender de nodos RPC de archivo.  
**Características Principales:**
- Capacidades de extracción y filtrado de datos de alto nivel  
- Soporte para decodificar y normalizar datos brutos de blockchain  
- Integración con soluciones de almacenamiento populares como PostgreSQL, BigQuery y sistemas de archivos locales  
- Servidor GraphQL para el desarrollo de APIs a la medida  
- Sincronización de datos en tiempo real con soporte para reorganizaciones de cadena  

El Squid SDK es especialmente útil para desarrolladores en Polkadot gracias a su compatibilidad con redes basadas en Substrate y su habilidad para manejar tareas complejas de indexación.

### 2. SQD Cloud
**SQD Cloud** ofrece una solución PaaS (Platform-as-a-Service) para el despliegue y la administración de indexadores de blockchain construidos con Squid SDK. Proporciona un entorno totalmente alojado y elimina las complejidades operativas de mantener indexadores personalizados.  
**Características Principales:**
- Migraciones sin tiempo de inactividad entre versiones de indexadores  
- Aprovisionamiento de endpoints RPC de alto rendimiento  
- Gestión intuitiva de despliegues a través de interfaz web o CLI  
- SLAs de nivel empresarial para garantizar fiabilidad y rendimiento  

Para proyectos que necesitan una infraestructura de nivel empresarial, SQD Cloud brinda una solución escalable y segura.

### 3. SQD Firehose
El **SQD Firehose** actúa como un adaptador liviano que permite que los frameworks de subgraph existentes se ejecuten en SQD Network sin requerir nodos RPC de archivo. Esta herramienta reduce significativamente los costos operativos, manteniendo a la vez un alto rendimiento de datos.

### 4. ApeWorx SQD Plugin
Para desarrolladores que utilizan el framework ApeWorx, el **plugin SQD** integra SQD Network como fuente de datos rápida y confiable. Este complemento facilita el acceso a datos en flujos de trabajo de prueba y despliegue.

## ¿Por Qué SQD Network es Esencial para el Desarrollo en Polkadot?
La arquitectura innovadora de Polkadot, construida sobre el framework Substrate, facilita la interoperabilidad y escalabilidad. Esto introduce complejidades en la indexación y consulta de datos, especialmente al manejar múltiples parachains. Las capacidades de SQD Network se alinean perfectamente con estas necesidades:

### 1. Acceso Integral a Datos
SQD Network ingiere petabytes de datos de más de 200 redes blockchain, incluidas Polkadot y sus parachains. Los desarrolladores pueden obtener datos históricos de transacciones, eventos, diffs de estado y trazas de ejecución, permitiendo un análisis profundo y la toma de decisiones informada.

### 2. Escalabilidad y Rendimiento
La arquitectura descentralizada de SQD Network permite una escalabilidad horizontal, asegurando que el sistema gestione cargas de datos crecientes sin sacrificar el rendimiento. Una sola consulta puede reemplazar hasta 100.000 peticiones RPC, haciendo el acceso a datos más de 100 veces más rápido que los métodos tradicionales.

### 3. Rentabilidad
Al eliminar costos de salida (egress fees) y ofrecer acceso a datos de blockchain sin necesidad de RPC, SQD Network reduce drásticamente los gastos. Los desarrolladores solo pagan por los recursos de cómputo, haciendo que sea una alternativa económica para proyectos de todos los tamaños.

### 4. Procesamiento de Datos en Tiempo Real
Para desarrolladores de Polkadot que construyen aplicaciones en tiempo real, como protocolos DeFi o plataformas de gaming, la habilidad de SQD Network para manejar bloques no finalizados y reorganizaciones de cadena garantiza la entrega de datos precisos y oportunos.

### 5. Interoperabilidad Multicadena
Con la interoperabilidad como pilar en Polkadot, el soporte de SQD Network para múltiples protocolos blockchain —desde Substrate hasta EVM y otros— facilita la creación de aplicaciones multicadena sin complicaciones.

## Casos de Éxito y Aplicaciones Reales
El impacto de SQD Network es evidente gracias a su adopción en proyectos líderes del ecosistema Web3. Algunos ejemplos destacados incluyen:

1. **PancakeSwap:** Este exchange descentralizado aprovecha SQD Network para indexar datos de manera eficiente, integrando funcionalidades multichain sin contratiempos.  
2. **RAILGUN:** Emplea la capacidad de rastreo de llamadas de SQD Network para respaldar sus mecanismos de privacidad, como el Privacy Pool/Proof of Innocence (PPOI).  
3. **Guru Network:** Gracias a la integración con el Squid SDK, Guru Network potencia sus paneles de análisis y procesos de IA con datos blockchain en tiempo real e históricos.  
4. **Skybreach:** En el ámbito del gaming, Skybreach recurre al SDK de indexación de SQD para acceder a datos completos de EVM, impulsando experiencias de juego de nueva generación.  
5. **[Polimec](/dapps/defi/polimec):** Polimec aprovecha la infraestructura robusta de SQD Network para escalar sus servicios DeFi a múltiples redes de forma eficiente.

## Cómo Comenzar con SQD Network
Para los desarrolladores de Polkadot interesados en aprovechar el potencial de SQD Network, el proceso de integración es sencillo:

1. **Explorar la Documentación:** Visita la documentación oficial de SQD Network para comprender las APIs, SDKs y opciones de despliegue disponibles.  
2. **Configurar un Indexador con Squid SDK:** Sigue la guía paso a paso para crear un indexador personalizado que se ajuste a tus necesidades de proyecto.  
3. **Utilizar SQD Cloud:** Despliega tu indexador en SQD Cloud para disfrutar de una solución de hosting escalable y sin complicaciones.  
4. **Unirte a la Red Descentralizada:** Participa en la red sin permisos de SQD, ejecutando un nodo worker o delegando tokens SQD para contribuir al ecosistema.

## El Futuro
A medida que la adopción de blockchain continúa en ascenso, la demanda de soluciones eficientes y rentables para el acceso a datos seguirá creciendo. Con una infraestructura de vanguardia y herramientas amigables para los desarrolladores, **SQD Network** se posiciona como un referente en la innovación de blockchain. Para el ecosistema de Polkadot, SQD Network ofrece una solución transformadora que permite a los desarrolladores construir aplicaciones escalables, interoperables y basadas en datos de manera sencilla.

Tanto si estás construyendo el próximo gran protocolo DeFi, una plataforma de gaming o una herramienta de análisis impulsada por IA, SQD Network proporciona la base que necesitas para prosperar en el siempre cambiante mundo de Web3.
