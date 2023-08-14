# Atestamint

![512 x 512 logo](https://github.com/Atestamint/super-hack-contracts/assets/79229998/b90bfad2-8810-4b90-8716-b4ca2a6c590f)

## Live Demo

https://atestamint.tbh.ninja/

## Repos
https://github.com/orgs/Atestamint/repositories
https://github.com/Atestamint/atestamint-op-goerli-subgraph 
https://github.com/Atestamint/atestamint-op-mainnet-subgraph
https://github.com/Atestamint/super-hack-contracts 

## Presentation
https://www.canva.com/design/DAFrawuTrgI/vqz76zXaUkPm1y7hIPPaDA/view?utm_content=DAFrawuTrgI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

## Deployments

### OptimisticGoerli

1. AtestamintV2 - https://goerli-optimism.etherscan.io/address/0x0AE7d655Cda406c5b73Ea76855e2cE6aC3812a8E#code
2. Vault Implementation - https://goerli-optimism.etherscan.io/address/0xc4f783d1f0be2e52b59e5d1dd6888ee26c8fe27c#code
3. EAS Schema - https://optimism-goerli-bedrock.easscan.org/schema/view/0xae694f9e713ed68fabb42e4d75e15282c1db63887a06df4a78ca3c91a444fc14
4. Atestamint Subgraph API Endpoint - https://api.studio.thegraph.com/query/51108/atestamint-testing/v3.0.0


### Optimism

1. AtestamintV2 - https://optimistic.etherscan.io/address/0x23a76896B1B49CF4af4ad5e45c4E98BFbA7F0ddc#code
2. Vault Implementation - https://optimistic.etherscan.io/address/0x609BC1aAbBB373A6DFaE8CAeBD964404e88EF3ba#code
3. EAS Schema - https://optimism.easscan.org/schema/view/0xae694f9e713ed68fabb42e4d75e15282c1db63887a06df4a78ca3c91a444fc14
4. Atestamint Subgraph API Endpoint - https://api.studio.thegraph.com/query/51108/atestamint/v4.0.0

## Description

NFT rugpulls has resulted in $2.8B in losses! The lost of trust is devastating the onboarding of web3 users into NFTs. Less trading volume, less new projects, less creators using nfts for utility or fundraising. Blockchains are built for trustless interaction, but there are a lack of tools that ensure organizations building on top of blockchains are trustworthy.

Atestamint is a smart vault for NFT creators to build trust with their audience. Creators can launch their projects on Atestamint to stand out from scams, raise more funds, maintain stronger communities & build onchain credit. Supporters can hold projects accountable, find credible projects, and have a new way to quantitatively measure success and trustworthiness, all while preserving their privacy.

The platform also generates an 'Atestamint Score' which is an on-chain reputation score thats based off of the creator's ability to meet their milestones and the user's engagement through attestations. This scoring system helps users find credible projects and can even help other platforms differentiate projects that they should be rewarding (like through discounts and credits or penalizing through surcharges!).

## How It's Made

Sponsor Technologies: Worldcoin: WorldID is used to provide sybil resistance to the platform, ensuring that real users are minting NFTs, creating milestones, and making attesting. It also ensures one person one vote. Zora: the Atestamint factory contract utilizes createDrops and createEditions to let creators deploy and mint NFTs on Optimism and Zora simply, safely and quickly. Graph: A custom subgraph queries our two contracts in order to provide an Atestamint score. Other platforms can use these graphs in order to attain Atestamint scores of our projects and provide differentiated services. EAS: The platform uses Ethereum Attestation Service to create attestations schemas and manage them. Users vote through attestations and the attestation data is kept on-chain. Covalent: The platform functions like an NFT launchpad and we attain NFT data such as transaction history, from Covalent’s APIs on the front end. OptimismRetroPGF: Atestamint is launched on Optimism with a key function for anyone to create projects and milestones and have a community of users attest to their completion. This can be done proactively or retroactively. Platforms like Gitcoin can create a Atestamint project and bring a community of users to attest on the project and unlock a vault of funds. Charities can utilize Atestamint to raise funds and unlock it when milestones are met. The Atestamint Scoring system measures people, products and their projects and tracks their impact on-chain. Contracts: Atestamint Contract: Deploys NFT collections using Zora Factory with user input parameters, tied to the Vault contract. Deploys proxy Vault contracts for controlled interactions. Links NFTs to recipient addresses through Vault contracts. Vault Contract: Verifies genuine human voters with WorldID. Manages attestations via Ethereum Attestation Service (EAs). Tracks positive and negative votes. Unlocks funds based on voting and criteria. Allows schema updates via updateSchemaId function. Particularly Hacky Details: The Atestamint score wasn’t part of the original idea, but we realized that the data the platform was generating and that was available on-chain could be used for other platforms to discern on-chain credibility, so we decided to use the Graph. We looked at Charity ratings for inspiration when it came to rating a project’s ability to meet their roadmaps and came across Charity Navigator’s ‘Beacon System.’ Using this as a modal, we came up with a weighted formula. Fulfillment Score (F): Calculated as A / B (where A is the number of completed milestones, and B is the total number of milestones). Attestation Ratio (R): Calculated as X / C (where X is the number of attestations, and C is the total number of unique minters). Attestation Rate (A): Calculated as Y / T (where Y is the number of attestations, and T is the time period between mint out and unlock). - in days Other hacky details would be getting around the difficulty of working on EAS and WorldID at the same time (...WorldCoin works in Eth goerli and doesn’t work in Op goerli EAS works in op goerli and doesn’t work in eth goerli) so it required us to test them separately until we deployed on mainnet.

## Made with 💌 by

@richardkingxyz
@deeluckystar
@fabianferno
@gabrielantonyxaviour
