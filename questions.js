const QUESTION1 = `list the recent valuable project airdrops and the specific steps to participate in them`;
const QUESTION2 = `generate investment summary for solana`;
const QUESTION4 = `Provide me with the most active DApps on the Ethereum blockchain in the past month, along with a summary analysis of their activity`.toLowerCase();
const ANSWER1 = `
In the past week, we've identified three notable project airdrops, namely:

* [ ] **Starknet**  
  **Starknet** is set to revolutionize layer 2 solutions on Ethereum.
* [ ] **ZkSync**  
  **ZkSync** is pioneering zkRollups for scalability.
* [ ] **LayerZero**  
  **LayerZero** is creating a cross-chain interoperability protocol.

There are a few crucial steps to follow:
1. Visit the official LayerZero website at www.layerzero.com.
2. Create a unique blockchain address through a trusted browser plug-in wallet or a secure script.
3. Engage with the LayerZero community by completing at least three transfers and acquiring an NFT from their ecosystem.
4. Ensure all these operations are completed before August 30th to be eligible for the snapshot and ultimately, the airdrop.
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
`;
const a1 = 'Over the past month, the three most active DApps on the Ethereum blockchain are Uniswap, Axie Infinity, and OpenSea.'
const a2 = `
  Axie Infinity has experienced a drop in engagement, with daily active users falling from a peak of 2.7 million to less than a million as of May 9th, 2023​​. Despite the decrease in players, Axie Infinity maintained a significant 24-hour trading volume of $62,050,627, showcasing the game's enduring appeal and potential for recovery​​.
  \`\`\`chart
  {
    "charts": [
      [
        {
          "type": "line",
          "col": 6,
          "data": [
            {
              "x": "2021-01-01",
              "inflow": 100000,
              "outflow": 50000
            },
            {
              "x": "2021-02-01",
              "inflow": 200000,
              "outflow": 100000
            },
            {
              "x": "2021-03-01",
              "inflow": 300000,
              "outflow": 200000
            },
            {
              "x": "2021-04-01",
              "inflow": 400000,
              "outflow": 300000
            },
            {
              "x": "2021-05-01",
              "inflow": 500000,
              "outflow": 400000
            },
            {
              "x": "2021-06-01",
              "inflow": 600000,
              "outflow": 500000
            },
            {
              "x": "2021-07-01",
              "inflow": 700000,
              "outflow": 600000
            }
          ]
        },
        {
          "type": "none",
          "col": 1,
          "data": [
            
          ]
        },
        {
            "type": "pie",
            "col": 5,
            "data": [
              {
                "x": "2021-01-01",
                "inflow": 100000,
                "outflow": 50000
              },
              {
                "x": "2021-02-01",
                "inflow": 200000,
                "outflow": 100000
              },
              {
                "x": "2021-03-01",
                "inflow": 300000,
                "outflow": 200000
              },
              {
                "x": "2021-04-01",
                "inflow": 400000,
                "outflow": 300000
              },
              {
                "x": "2021-05-01",
                "inflow": 500000,
                "outflow": 400000
              },
              {
                "x": "2021-06-01",
                "inflow": 600000,
                "outflow": 500000
              },
              {
                "x": "2021-07-01",
                "inflow": 700000,
                "outflow": 600000
              }
            ]
          }
      ]
    ]
  }
  \`\`\`

  Axie Infinity has experienced a drop in engagement, with daily active users falling from a peak of 2.7 million to less than a million as of May 9th, 2023​​. Despite the decrease in players, Axie Infinity maintained a significant 24-hour trading volume of $62,050,627, showcasing the game's enduring appeal and potential for recovery​​.
  \`\`\`chart
  {
    "charts": [
      [
        {
          "type": "line",
          "col": 6,
          "data": [
            {
              "x": "2021-01-01",
              "inflow": 100000,
              "outflow": 50000
            },
            {
              "x": "2021-02-01",
              "inflow": 200000,
              "outflow": 100000
            },
            {
              "x": "2021-03-01",
              "inflow": 300000,
              "outflow": 200000
            },
            {
              "x": "2021-04-01",
              "inflow": 400000,
              "outflow": 300000
            },
            {
              "x": "2021-05-01",
              "inflow": 500000,
              "outflow": 400000
            },
            {
              "x": "2021-06-01",
              "inflow": 600000,
              "outflow": 500000
            },
            {
              "x": "2021-07-01",
              "inflow": 700000,
              "outflow": 600000
            }
          ]
        },
        {
          "type": "none",
          "col": 1,
          "data": [
            
          ]
        },
        {
            "type": "pie",
            "col": 5,
            "data": [
              {
                "x": "2021-01-01",
                "inflow": 100000,
                "outflow": 50000
              },
              {
                "x": "2021-02-01",
                "inflow": 200000,
                "outflow": 100000
              },
              {
                "x": "2021-03-01",
                "inflow": 300000,
                "outflow": 200000
              },
              {
                "x": "2021-04-01",
                "inflow": 400000,
                "outflow": 300000
              },
              {
                "x": "2021-05-01",
                "inflow": 500000,
                "outflow": 400000
              },
              {
                "x": "2021-06-01",
                "inflow": 600000,
                "outflow": 500000
              },
              {
                "x": "2021-07-01",
                "inflow": 700000,
                "outflow": 600000
              }
            ]
          }
      ]
    ]
  }
  \`\`\`
  `
const ANSWER4 = JSON.stringify([a1, a2]) ;

export const DEFAULT_ANSWER = `We appreciate your question! Sadly, our system isn't able to provide an answer at the moment. Please be assured, we've recorded your query and our committed team is addressing it. As we refine our system, we'll be equipped to answer such questions in the future. We truly value your patience.

We'd love to invite you to join our lively community at [Website URL]. There, you can help us identify more unanswered questions, or help answer some for the community. As a bonus, you could earn our ecological tokens! Your contribution could greatly impact our services. We'd be thrilled to see you there!`;

export const questionMapping = {
  [QUESTION1]: ANSWER1,
  [QUESTION2]: ANSWER2,
  [QUESTION4]: ANSWER4,
};