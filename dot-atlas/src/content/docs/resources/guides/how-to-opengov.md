---
title: 'Step-by-Step Guide to Participate in Polkadot OpenGov (2025)'
description: 'Learn how to participate in Polkadot OpenGov with this step-by-step guide, covering proposals, voting, and delegations.'
sidebar: 
    label: OpenGov 101
---

This guide shows DOT holders how to participate in **Polkadot OpenGov**—from setting up a wallet to proposing, voting, delegating, and tracking outcomes across governance tracks. It also explains conviction voting, approval/support curves, deposits, locks, and best practices for safer, more effective on-chain decision-making.

## Why OpenGov matters (and how it differs from Gov v1)
Polkadot evolved from **Governance v1** (Council/Technical Committee) to **OpenGov**, a **direct, track-based democracy** where **DOT holders** decide outcomes. OpenGov replaces centralized choke points with:

* **Multiple tracks** tuned for different risk/scope levels (e.g., spending, staking admin, Root).
* **Continuous decision-making**, so many referenda can proceed in parallel.
* **Per-track delegations**, so you can delegate to topic experts without giving up all control.
* **Approval & support curves**, which adapt required thresholds to risk and participation.

The result: faster, more granular decisions—while keeping high-impact changes under stricter scrutiny.

## OpenGov in one minute (ELI5)
Think of Polkadot like a city managed by its residents:

* **Tracks** are lanes for different decisions (small purchases vs. changing the constitution).
* **Approval** is how many weighted votes say “yes.”
* **Support** is how many people showed up to vote (participation).
* **Conviction** is you saying, “I’m so sure, I’ll lock my tokens for longer,” which **amplifies** your vote.
* **Delegation** is letting a trusted neighbor vote on paving-roads (but maybe not on schools) on your behalf.

## Key concepts

### Tracks & origins
* **Track:** A pipeline with its own parameters (max items in decision, timelines, deposits, curves).
* **Origin:** The authority level for the action being proposed (e.g., **Root** for the highest privilege calls).
* **Examples:**

  * **Root** — highest authority; used for sensitive system changes.
  * **Whitelisted Caller** — expedited execution for vetted calls via the Polkadot Technical Fellowship.
  * **Wish For Change** — non-binding signaling (gauge sentiment, set direction).
  * **Treasurer / Spender (Small/Medium/Big)** — requests to spend DOT from Treasury.
  * **Staking Admin** — changes related to staking configuration.

> **Takeaway:** Choose the **right track** for your intent; it determines deposits, timelines, thresholds, and who can dispatch the call.

### Deposits
* **Submission deposit:** Posted by the proposer to create the referendum (discourages spam).
* **Decision deposit:** Posted to move a proposal into the decision queue (ensures proposers are committed).
* **Refund/forfeit:** Depending on track rules and outcomes, deposits may be returned or burned.

### Decision flow & timelines

While parameters vary by track, the typical flow is:

1. **Submission** (preimage on-chain, then submission deposit)
2. **Prepare period** (referendum is visible; early voting may open but not count toward outcome)
3. **Decision period** (votes count; must meet Approval & Support)
4. **Confirmation period** (metrics must be sustained)
5. **Enactment period** (if passed, the call is executed after a delay suitable to risk)

> **Max deciding:** Each track caps how many referenda can be in **decision** at once; others queue.

### Approval & support curves
* **Approval:** Share of weighted “Aye” needed. Riskier tracks require higher approval.
* **Support:** Share of total active issuance participating (Aye + Abstain) required.
* **Curves:** Thresholds can ease as participation grows; **Approval never drops below 50%**.

### Conviction voting & locks
* **Conviction multiplier:** Increases vote weight if you accept a **longer lock** after the referendum ends.
* **0 to 6× (typical):** Higher conviction → longer lock → larger weight.
* **Locks apply** to winning votes (or to delegation if you undelegate). If you voted without conviction or were on the losing side, unlock may be immediate per rules.

## Tooling overview
* **Wallets:** Polkadot.js extension, Talisman, SubWallet, Nova Wallet (mobile).
* **Governance UIs:** **Polkadot.js Apps**, **Subsquare**, **Polkassembly**.
* **Trackers/analytics:** **OpenGov.watch**, **OG Tracker**, and community dashboards (e.g., OpenShore/OpenGov digests).
* **Bridges/DEX if needed:** To move DOT where you participate (not needed for on-chain governance on relay chain).

> Choose a **wallet + UI** pair you’re comfortable with. Mobile users gravitate to Nova; browser users often prefer Polkadot.js + Subsquare/Polkassembly.


## Quick start: participate in 15 minutes
1. **Install a wallet** (Polkadot.js or Talisman; Nova for mobile).
2. **Secure your seed** (offline, multiple backups; never share).
3. **Fund with a small amount of DOT** (enough for fees & optional deposits).
4. **Open a governance UI** (Subsquare or Polkassembly) and connect wallet.
5. **Pick an active referendum** (start with a low-risk Spender track).
6. **Vote**: Choose **Aye/Nay/Abstain**, optionally set conviction (e.g., 1× no lock, up to 6× with long lock).
7. **Confirm & submit** (sign transaction).
8. **Review locks & track status** (monitor outcome and unlock time in your wallet).

## How to propose a referendum
> **Tip:** Start small (e.g., **Small Spender**). Draft clearly, secure support, then escalate scope.

1. **Draft your proposal**
   * Define **objective**, **scope**, **benefit to the network**, **deliverables**, **KPIs**, **milestones**, **budget** (if Treasury).
   * Identify the **correct track & origin**.
   * Prepare a **preimage** (the call data to be executed, plus metadata/explanation).

2. **Submit the preimage on-chain**
   * Using Polkadot.js Apps (or integrated flows on Subsquare/Polkassembly), post the **preimage**.
   * You’ll receive a **preimage hash** used when opening the referendum.

3. **Open the referendum**
   * Provide title, content, and link to artifacts (roadmap, milestones).
   * **Pay the submission deposit**.
   * If required, **post the decision deposit** to move it into the decision queue when ready.

4. **Campaign responsibly**
   * Publish a concise explainer: problem → solution → cost/benefit → risks/mitigations.
   * Be available for Q\&A; take feedback seriously; **iterate**.
   * Avoid astroturfing; disclose affiliations and deliverable history.

5. **See it through**
   * Monitor Approval/Support; address blockers.
   * If passed, **deliver** per milestones; provide reports.
   * If it fails, **post-mortem** and adjust (scope, track, KPIs).

## How to vote effectively
1. **Read the call** (preimage) and summary.
2. **Check the track** (risk, deposits, timelines, max deciding).
3. **Scan comments & due diligence** (conflicts, feasibility, budget sanity).
4. **Choose stance & conviction**
   * **Aye / Nay / Abstain** (abstain counts toward **Support**, not **Approval**).
   * Adjust **conviction** if you want more weight and accept a lock.
5. **Submit vote** and record the **unlock date** if applicable.
6. **Revisit before Decision end**: You can update/remove votes while the referendum is ongoing.

**Heuristic:**
* **Low risk** (e.g., signaling): 0–1× conviction.
* **Medium** (e.g., Small/Medium Spender): 1–2×.
* **High impact** (Root; parameter changes): higher conviction only if you’re truly confident.


## How to delegate (multi-role, per-track)
Delegation helps you stay engaged without micromanaging every referendum.

1. **Pick experts per track**
   * Example: delegate **Treasury** to a grants analyst; **Staking Admin** to a validator; keep **Root** for yourself.

2. **Set scope & conviction**
   * Delegation can include a **conviction lock** (be mindful of unlock rules when changing/undelegating).
   * You can delegate **all tracks** or **specific tracks**.

3. **Confirm & monitor**
   * Track your delegates’ rationale and performance.
   * **Rotate** if alignment or quality drifts.
   * You can still **override** with a direct vote on specific referenda if desired.

## Monitoring your impact
* **Wallet:** See locks, track balances, pending unlocks.
* **Governance UI:** Follow your votes, delegations, and outcomes.
* **Dashboards:** Use trackers for trends (per-track throughput, pass rates, treasury outflows, participation).
* **Notifications:** Subscribe to new referenda for tracks you care about.

## Common pitfalls & pro tips

**Pitfalls**
* Voting with **high conviction** on ambiguous items → unexpected long locks.
* Submitting to the **wrong track** → stalls or rejections.
* Weak proposals (unclear deliverables, missing KPIs, no roadmap) → credibility loss.
* Ignoring **Support** (participation): even high Approval can fail if too few vote.
* Not budgeting for **deposits & fees**.

**Pro tips**
* **Signal first** with **Wish For Change**, then propose execution.
* Earn trust via **transparent milestones & reports**.
* Prefer **per-track delegation** to topic experts; keep Root close.
* Track **max-deciding** congestion; time submissions strategically.
* Maintain a **governance diary** (why you voted, what you learned).

## FAQs
**1) What’s the difference between Approval and Support?**
Approval is the **share of weighted Aye**; Support is **how many took part** (Aye + Abstain) out of active issuance. Both must meet the track’s curves.

**2) Do I lose DOT when I vote with conviction?**
No—DOT is **time-locked**, not spent. Higher conviction means a **longer lock** after the referendum ends (typically only if you’re on the winning side).

**3) Can I change or remove my vote?**
Yes, while the referendum is active. After it ends, locks apply per your conviction and the outcome.

**4) What if my delegate votes against my view?**
You can **override** with a direct vote on an item, or **undelegate** (note potential lock timings).

**5) How do I know which track to use for a new idea?**
Match the **authority** needed by the call (origin) and the **risk/scope**. Spending → Spender; parameter tuning → Staking Admin; system-level change → Root; sentiment → Wish For Change.

**6) Are deposits always refunded?**
Not always. Refund/burn rules vary by track and outcome; read the UI’s summary before posting.

**7) How does Abstain work?**
Abstain **increases Support** without contributing to Approval—useful when you want the network to decide with high participation but you’re neutral.

**8) Can I participate via mobile?**
Yes—**Nova Wallet** provides mobile-first governance with integrated views and notifications.

## Conclusion
OpenGov gives **every DOT holder** a practical path to influence Polkadot—at the right scope, on the right timeline, with transparent rules. Start small, learn the tracks, use conviction thoughtfully, and lean on per-track delegation to scale your impact.
 
