---
title: 'Using the Polkadot Ledger App: A Beginner&#8217;s Guide'
description: 'The Polkadot Ledger app offers a secure way to manage your DOT tokens, leveraging the robust security features of the Ledger hardware wallet.'
---
The Polkadot network, known for its interoperability and scalability, offers users the ability to securely manage their digital assets. One of the safest methods to manage your DOT tokens and interact with the Polkadot network is by using a hardware wallet, such as Ledger. This article provides a comprehensive guide for new users on how to use the Polkadot Ledger app, ensuring your digital assets are securely managed.

Understanding the Ledger Hardware Wallet
----------------------------------------

Before diving into the specifics of the **Polkadot Ledger app**, it’s crucial to understand **what a Ledger hardware wallet is**. A Ledger wallet is a physical device that stores the private keys for your cryptocurrencies offline. This type of wallet is known as a “cold storage” solution, providing an added layer of security compared to “hot wallets” (wallets connected to the internet).

### Step 1: Setting Up Your Ledger Device

To begin, you need to set up your Ledger device. If it’s your first time using a Ledger, follow these steps:

1. **Unbox and Connect**: Unpack your Ledger device and connect it to your computer using the provided USB cable.
2. **Install Ledger Live**: Download and install the Ledger Live application from the official Ledger website. This app allows you to manage the apps on your Ledger device and your cryptocurrencies.
3. **Initialize Your Device**: Follow the on-screen instructions on your Ledger device and Ledger Live to set up your device. You’ll need to choose a PIN and write down the recovery phrase provided. This recovery phrase is crucial for accessing your funds if your device is lost or damaged.

### Step 2: Installing the Polkadot App on Your Ledger

After setting up your Ledger device, you’ll need to install the Polkadot app:

1. **Open Ledger Live**: Launch the Ledger Live application on your computer.
2. **Navigate to Manager**: Connect your Ledger device and enter your PIN. Then, navigate to the “Manager” tab in Ledger Live.
3. **Find and Install Polkadot**: In the app catalog, search for “Polkadot” and click the “Install” button next to the Polkadot app. Your Ledger device will display “Processing” during the installation.

### Step 3: Using the Polkadot Ledger App

With the Polkadot app installed, you’re ready to manage your DOT tokens securely:

1. **Accessing the Polkadot App**: On your Ledger device, navigate to the Polkadot app and open it. Your device will display “Polkadot ready”.
2. **Using Polkadot UI with Ledger**: To interact with the Polkadot network, visit the official Polkadot-JS web interface. Make sure your Ledger device is connected and the Polkadot app is open.
3. **Connect Ledger to Polkadot-JS**: On the Polkadot-JS interface, navigate to the “Accounts” page, click on “Add Ledger”, and follow the prompts to connect your Ledger device. This process will link your Ledger-based Polkadot account to the Polkadot-JS interface, allowing you to send transactions securely.

### Step 4: Sending and Receiving DOT Tokens

With your Ledger device connected to the Polkadot-JS interface, you can easily send and receive DOT tokens:

- **To Receive DOT**: Navigate to the “Accounts” tab on Polkadot-JS, find your Ledger account, and use the displayed address to receive DOT tokens.
- **To Send DOT**: Click on “Send” next to your Ledger account on the Polkadot-JS interface, enter the recipient’s address, the amount, and confirm the transaction on your Ledger device.

### Conclusion

The Polkadot Ledger app offers a secure way to manage your DOT tokens, leveraging the robust security features of the Ledger hardware wallet. By following the steps outlined in this guide, new users can confidently interact with the Polkadot network, knowing their digital assets are well-protected. Remember, always keep your recovery phrase in a safe place, and never share your Ledger PIN or recovery phrase with anyone.

Useful content from the official Polkadot support portal: Ledger: [How to use Polkadot and Stake DOT with Ledger Live](https://support.polkadot.network/support/solutions/articles/65000175822-how-to-use-polkadot-and-stake-with-ledger-live).


---
title: 'How to Use Polkadot Vault: A Technical Guide'
description: 'Learn how to securely use Polkadot Vault for account management and transactions within the Polkadot ecosystem.'
---
**Polkadot Vault**, formerly known as the Party Designer app, is an advanced account management tool designed for the Polkadot ecosystem. It offers users the ability to generate and store multiple private keys securely, manage accounts, and sign transactions while keeping private keys offline. This guide provides a comprehensive overview of how to use the Polkadot Vault, from installation to transaction management.

Polkadot Vault Installation and Initial Setup
---------------------------------------------

**1. Download and Install the App**

- The Polkadot Vault app is available on both iOS and Android platforms. Begin by downloading the app from the respective app store and installing it on your smartphone.

**2. Secure Your Device**

- Turn your smartphone into a hardware wallet by enabling flight mode, disabling Bluetooth and Wi-Fi, and unplugging all connected cables. This step is crucial to ensure that the private keys remain secure and offline.

**3. Initial Setup**

- Open the app and follow the on-screen instructions to complete the initial setup. Acknowledge the privacy policy and terms of service, and ensure all security measures, such as disabling screenshots, are in place.

Polkadot Vault Generating and Managing Keys
-------------------------------------------

**4. Add or Recover a Key Set**

- In the Vault app, navigate to the ‘Keys’ section and choose to add a new key set or recover an existing one. For a new key set, provide an account name and write down the 24-word mnemonic seed phrase generated by the app. This seed phrase is essential for account recovery and should be stored securely offline.

**5. Manage Networks and Metadata**

- Under the ‘Settings’ menu, you can add new networks and update metadata. By default, the app includes Polkadot, Kusama, and Westend networks. Use the scanner feature to update metadata by scanning QR codes from the metadata portal provided by Parity Technologies.

**6. Verify Network Metadata**

- Ensure that the metadata for each network is up-to-date by scanning the corresponding QR codes. This step is necessary to enable signing transactions on the respective networks.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/IG_RGLsb2g0?si=Ssjx5Jb88-ayRrqC" title="YouTube video player" width="560"></iframe>

Using Polkadot Vault with Polkadot.js
-------------------------------------

**7. Export Keys to Polkadot.js**

- To use the Vault app with the Polkadot.js browser extension, export the public key via QR code. In Polkadot.js, select ‘Attach External QR Scanner Account’ and scan the QR code displayed on your phone. This will import the account into Polkadot.js.

**8. Sign Transactions**

- To send funds from the Vault account, initiate a transaction in Polkadot.js and scan the QR code using the Vault app. The Vault app will generate a signature, which can be scanned back into Polkadot.js to complete the transaction. This process ensures that the private key remains offline during the transaction.

Polkadot Vault Security and Maintenance
---------------------------------------

**9. Maintain Air-Gapped Security**

- Continuously ensure your device remains air-gapped. If the device connects to the internet, the Vault app will display a warning. Acknowledge any connections and immediately restore offline status to maintain security.

**10. Backup and Export Keys**

- Regularly backup your key sets by writing down the mnemonic seed phrase securely. Avoid storing this information on any internet-connected device to prevent potential security breaches.

### Conclusion

The Polkadot Vault app provides a robust solution for managing accounts within the Polkadot ecosystem securely. By maintaining an air-gapped environment and utilizing QR code-based transactions, users can ensure the highest level of security for their private keys. This guide offers a step-by-step approach to effectively using the Vault app, from installation to advanced transaction management.

For more detailed technical information and updates, users are encouraged to refer to official resources and documentation provided by Parity Technologies.