const QUESTION1 = `list the recent valuable project airdrops and the specific steps to participate in them`
const QUESTION2 = `generate investment summary for solana`
const QUESTION3 = `Provide me the Total Value Locked (TVL) of the project contract at address 0x7a250d5630b4cf539739df2c5dacb4c659f2488d, its recent inflow and outflow of funds, and any recent news regarding the project`.toLowerCase()
const ANSWER1 = `
In the past week, we've identified three notable project airdrops, namely:
* [ ] **Starknet**  \n **Starknet** is set to revolutionize layer 2 solutions on Ethereum.
* [ ] **ZkSync**  \n **ZkSync** is pioneering zkRollups for scalability.
* [ ] **LayerZero**  \n **LayerZero** is creating a cross-chain interoperability protocol.   \n There are few crucial steps to follow:  \n1.Visit the official LayerZero website at www.layerzero.com.  \n2.Create a unique blockchain address through a trusted browser plug-in wallet or a secure script.  \n3.Engage with the LayerZero community by completing at least three transfers and acquiring an NFT from their ecosystem.   \n4.Ensure all these operations are completed before August 30th to be eligible for the snapshot and ultimately, the airdrop.
`;

const ANSWER2 = `
* Extremely cheap fees: (<$0.05)and fast transaction finality when compared to other leading amart contract platforms

* Incredibly well-funded project.

* Easy-to-use wallet and beginner:friendly UI helping to onboard crypto nevices.

* FTW collapse has strong mid-term negative effect on Solana price.

***

- High barrier to become validator due to hardware requirements and ongoing costs to maintain ($40.000-595.000 per year) lead to network centralization.

- "Monolithic laver:one" design, white highly performant now will struggle to seale into the millions of transactions per second.

- Network uptime and reliability suffer, including once shutting down the network completely for 17 hours.
`
const ANSWER3 = `answer3`

export const DEFAULT_ANSWER = `We appreciate your question! Sadly, our system isn't able to provide an answer at the moment. Please be assured, we've recorded your query and our committed team is addressing it. As we refine our system, we'll be equipped to answer such questions in the future. We truly value your patience.

We'd love to invite you to join our lively community at [Website URL]. There, you can help us identify more unanswered questions, or help answer some for the community. As a bonus, you could earn our ecological tokens! Your contribution could greatly impact our services. We'd be thrilled to see you there!`

export const questionMapping = {
  [QUESTION1]: ANSWER1,
  [QUESTION2]: ANSWER2,
  [QUESTION3]: ANSWER3,
};