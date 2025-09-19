---
title: 'Polkadot Cold Wallets Guide 2025: Ledger & Vault'
description: 'The Polkadot Ledger app offers a secure way to manage your DOT tokens, leveraging the robust security features of the Ledger hardware wallet.'
sidebar: 
    label: Cold Wallets 101
---

A practical, security-first guide to storing DOT in cold wallets. We compare **Ledger hardware wallets** and **Polkadot Vault** (air-gapped mobile), show how each works with Polkadot-JS and Ledger Live, and give clear setup, recovery, and staking workflows—plus checklists, pitfalls, and FAQs.

## Why cold storage for DOT?
If you hold DOT for the medium–long term, **cold storage** gives you the best shot at avoiding key theft. Cold wallets keep private keys **offline** (never on an internet-connected device), while still letting you **view balances**, **generate receiving addresses**, and **approve transactions** using a trusted screen and buttons (or QR signing). For Polkadot, two mature patterns dominate:

* **Ledger hardware wallets** (Nano X / S Plus) with the **Polkadot app**.
* **Polkadot Vault** (formerly Parity Signer) on a **permanently air-gapped smartphone**, signing via **QR codes**.

Both integrate with Polkadot tooling (Polkadot-JS, wallet UIs) and support the **ss58** address format used by Polkadot accounts.

## Cold wallet options for Polkadot

### Ledger hardware wallets
**What it is:** A purpose-built, tamper-resistant USB device. You install the **Polkadot app** via Ledger Live, then approve transactions on the device’s screen.
**Why people choose it:** Proven security model, tight ecosystem support, and straightforward UX if you already use Ledger for other assets.
**Good to know:** For some functions you’ll use **Polkadot-JS** with the Ledger account; some flows are also supported in **Ledger Live** (e.g., account, send/receive; staking support varies by release—see external sources).

### Polkadot Vault (air-gapped)
**What it is:** An open-source, offline signing app for iOS/Android that **never connects** to networks in normal use. You keep the phone in airplane mode (no SIM/Wi-Fi/Bluetooth). Public data moves via **QR codes**; private keys never leave the device.
**Why people choose it:** Extreme isolation (no radios), low cost (repurpose an old phone), excellent for **multisig** operators and governance keys.
**Good to know:** You’ll import accounts into **Polkadot-JS** (or compatible tools) as **“external QR signer”** accounts, then sign by scanning QR challenges.

## How it works (ELI5)
* Your **private key** is a super-password that can move your DOT.
* A **cold wallet** keeps that key **offline**, so malware and phishing sites can’t read or use it.
* To send a transaction, your online computer prepares a “to-be-signed” message.
* The **cold device** shows human-readable details (amount, recipient). You confirm on the device.
* The device returns a **signature** (not the key). Your computer broadcasts the signed transaction to the network.

## Key features & trade-offs

**Security posture**
* Ledger: Secure element chip + verified apps; keys are non-exportable.
* Polkadot Vault: Isolation by air-gap; the OS device is never connected when used properly; keys stay local.

**UX & ecosystem**
* Ledger: Familiar desktop flow via **Ledger Live** + **Polkadot-JS**; USB cable.
* Vault: QR workflows; ideal for **multisig**, **governance**, and “ceremony” operations.

**Cost & availability**
* Ledger: Paid hardware device.
* Vault: Free app; re-use an old phone (keep it offline forever).

**Operational nuance**
* Ledger: Firmware/app updates via Ledger Live.
* Vault: Keep **metadata** up to date via QR (so transactions parse correctly).


## Comparison table
| Capability / Concern   | **Ledger (Polkadot app)**                             | **Polkadot Vault (air-gapped)**           |
| ---------------------- | ----------------------------------------------------- | ----------------------------------------- |
| Key storage            | Secure element (non-exportable)                       | Encrypted on offline phone (never online) |
| Connection             | USB to PC; confirm on device                          | QR request/response; confirm on phone     |
| Works with Polkadot-JS | Yes (Ledger account)                                  | Yes (External QR signer)                  |
| Staking support        | Via Polkadot-JS; some flows in Ledger Live (see docs) | Via Polkadot-JS with QR signing           |
| Multisig ops           | Good (as one signer)                                  | Excellent (QR flow scales for many ops)   |
| Address format         | ss58 (Polkadot)                                       | ss58 (Polkadot)                           |
| Updates                | Firmware + app via Ledger Live                        | App updates; network metadata via QR      |
| Best for               | Broad users holding multiple coins                    | Security-maxi, DAO ops, governance keys   |

## Setup mini-guides

### Ledger + Polkadot

**1) Initialize Ledger device**
* Unbox, connect via USB, set a **PIN**, and securely write down your **24-word recovery phrase** (BIP39). Store offline (consider metal backup). Never type it into a computer or phone.

**2) Install Ledger Live + Polkadot app**
* Install **Ledger Live** on your computer.
* In **Manager**, install the **Polkadot** app on the device.

**3) Create/attach your Ledger account in Polkadot tooling**
* Open **Polkadot-JS** (Browser extension + Apps UI).
* With the Ledger device unlocked and **Polkadot app open**, add an account from Ledger (Accounts → Add Ledger).
* Label it clearly (e.g., `Ledger DOT – Cold`).

**4) Test receive with a dust amount**
* Copy the **ss58** Ledger address from Polkadot-JS.
* Send a small DOT amount *to the Ledger address* and verify on a block explorer.
* Confirm the **existential deposit (ED)** considerations in the UI before large transfers.

### Polkadot Vault + Polkadot.js

**1) Prepare the phone**
* Use a dedicated device. **Factory reset**, then keep **Airplane Mode ON**. Disable Wi-Fi/Bluetooth, remove SIM. Don’t log into cloud services.

**2) Install Polkadot Vault**
* Install from official app store(s). Open once to generate and securely write the **24-word seed**. Set a strong app passcode. Disable screenshots.

**3) Load network metadata**
* From a trusted metadata portal, scan the **Polkadot network metadata QR** in Vault so transactions display correctly.

**4) Export public account to Polkadot-JS**
* In Vault, display the account’s **public key QR**.
* In Polkadot-JS Extension, choose **Attach external QR signer**, scan the QR, and label the account (e.g., `Vault DOT – Cold`).

**5) Test receive with a dust amount**
* As above—send a small amount, verify, then move larger funds once comfortable.

## Send, receive, and stake DOT (secure workflows)

**Receive DOT**
1. In your chosen UI (Polkadot-JS, Ledger Live), copy the **ss58** address of the cold account.
2. If moving from an exchange, send a **test amount** first.
3. Wait for inclusion/finality; verify on a trusted explorer.

**Send DOT (Ledger)**
1. Prepare the transfer in Polkadot-JS (or Ledger Live if supported).
2. **Verify on the Ledger screen**: recipient, amount, fees.
3. Confirm. Broadcast the signed transaction.

**Send DOT (Vault)**
1. Prepare the transfer in Polkadot-JS (select the external QR signer account).
2. Scan the **signing payload QR** with Vault.
3. Verify details on Vault, approve → Vault displays a **signature QR**.
4. Scan it back into Polkadot-JS to broadcast.

**Stake DOT (overview)**
* You can stake via **Polkadot-JS** using your Ledger/Vault account as the **Stash/Stake** (modern flows combine roles; follow current UI).
* Some **Ledger Live** versions support staking actions; advanced users commonly prefer **Polkadot-JS** for control and transparency.
* Always read the on-device text before approving any staking or nomination action.

> **Note:** Polkadot staking concepts evolve (controller/stash, pooled staking, nominations). Use current UI guidance in Polkadot-JS or Ledger Live and review official docs linked below.

## Common pitfalls & pro tips
**Pitfalls**
* **Entering seed online:** Never type your 24 words into a PC/phone. Recovery happens **only** on the cold device (Ledger) or the offline Vault phone.
* **Old metadata (Vault):** If you don’t update metadata, transaction details may appear garbled; always update from a trusted QR source.
* **Wrong chain / address format:** Ensure the account is set to **Polkadot (ss58 prefix 0)** before sending.
* **Existential Deposit (ED):** Sending too little can **reap** an account. Check ED in the UI before dusting.
* **USB/driver issues (Ledger):** Keep firmware and the Polkadot app up-to-date in Ledger Live.

**Pro tips**
* **Labels matter:** Prefix accounts (`Ledger-Treasury`, `Vault-Gov`) to avoid mistakes.
* **Test mode:** Practice with a tiny amount on **Paseo** or **Westend** if your workflow supports it.
* **Multisig for ops:** Combine Ledger and Vault in **multisig** for team-level security.
* **Backups:** Use **metal backup** for seeds; consider a **BIP39 passphrase** only if you fully understand the risks.
* **Operational separation:** Keep a small **hot wallet** for day-to-day spending; keep the **cold wallet** untouched except for periodic moves.

## FAQs
**1) Which is safer for DOT: Ledger or Polkadot Vault?**
Both are strong. Ledger uses a **secure element** with verified apps; Vault relies on **complete network isolation**. Choose based on your operational comfort: USB device vs QR air-gap.

**2) Can I stake DOT with Ledger or Vault?**
Yes. Most commonly via **Polkadot-JS** using your cold account; some staking actions may be available in **Ledger Live**. Always confirm details on the device screen before signing.

**3) What if my Ledger or Vault phone is lost?**
Recover with your **24-word seed** on a new Ledger or a new offline phone with Vault. Your funds are on-chain; the seed recreates the keys. Keep seeds **offline** and redundant.

**4) Why do addresses look different in different apps?**
Polkadot uses **ss58** encoding with chain-specific prefixes. Ensure you’re using the **Polkadot** prefix when sending DOT.

**5) How do I update Polkadot Vault metadata?**
Use the **official metadata QR** from trusted sources and scan it in Vault. This enables correct display and signing for the current runtime.

**6) Is a passphrase (“25th word”) recommended?**
Advanced users sometimes add a **BIP39 passphrase**. It increases security but adds recovery risk. If you use it, document your process carefully and practice recovery.

**7) Can I use both Ledger and Vault?**
Yes—many teams do. For example, keep treasury keys on **multisig** with one signer as Ledger and another as Vault for defense-in-depth.

**8) Do I need the Polkadot-JS Extension?**
It’s the most common way to manage accounts and sign flows with both Ledger and Vault; it also helps label accounts and connect to dapps.

## Conclusion
Cold storage is the foundation of responsible DOT custody. Whether you choose **Ledger** for its seamless hardware experience or **Polkadot Vault** for true air-gap security, follow the checklists above, test with small amounts, and keep your seed phrase offline and resilient.
 