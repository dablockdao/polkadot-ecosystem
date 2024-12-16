---
title: 'Polkadot Telemetry'
---
Tools  
 DevOps  

Polkadot Telemetry offers real-time monitoring and performance tracking for Polkadot network nodes with customizable metrics.

What is Polkadot Telemetry? 
----------------------------

Polkadot Telemetry is a comprehensive tool designed to monitor and analyze the performance of nodes within the Polkadot network. This telemetry service, accessible through the default Polkadot telemetry dashboard at telemetry.polkadot.io, offers a real-time view of online nodes, providing essential performance metrics crucial for node operators and network administrators.

Monitoring and Performance Tracking for the Polkadot Ecosystem
--------------------------------------------------------------

The telemetry dashboard allows users to customize the displayed node information, including validator status, location, implementation version, peer count, and various network and block metrics. This customization ensures that users can focus on the specific data points that are most relevant to their needs, enhancing the overall monitoring experience.

Nodes within the Polkadot network can be configured to connect to the default telemetry service using the ***–telemetry-url*** option. This setup, however, exposes node information publicly, which may not be desirable for all node operators. To address this concern, operators have the option to run their own private telemetry servers using the substrate-telemetry project. This project provides both a backend ingestion server and a frontend dashboard, allowing operators to collect and view telemetry data for their nodes privately.

The substrate-telemetry project is divided into two main components: the backend and the frontend. The backend is a Rust project responsible for ingesting telemetry data from nodes, while the frontend is a React/TypeScript project that presents this data in an accessible user interface. By running a private telemetry server, operators can ensure that sensitive node information remains secure and is not publicly exposed.

Setting up a private telemetry server involves several steps. Firstly, the backend binaries need to be built and run. The ***telemetry\_core*** and t***elemetry\_shard*** binaries handle the core ingestion and data distribution tasks, respectively. Once the backend is operational, the frontend can be set up to provide a user interface for viewing the telemetry data. The frontend server can be started locally, allowing operators to navigate to **http://localhost:3000 to access the UI**.

For those looking for alternative monitoring solutions, the Nebula tool from ProbeLab is an option. Nebula performs a full crawl of the Polkadot peer-to-peer network, gathering additional node information that can complement the data provided by Polkadot Telemetry.

In conclusion, **Polkadot Telemetry is an essential tool for monitoring node performance within the Polkadot ecosystem**. While the default telemetry dashboard provides a convenient way to access real-time node data, the option to run a private telemetry server ensures that node operators can maintain control over their data. Additionally, alternative tools like Nebula offer complementary insights, making Polkadot Telemetry a versatile and robust solution for network monitoring.
