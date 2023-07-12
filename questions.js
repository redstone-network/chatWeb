import {
  MoonbeamLineData,
  MoonbeamPieData,
  MoonbeamCardListData,
  AcalaLineData,
  AcalaPieData,
  AcalaCardListData,
  BifrostLineData,
  BifrostCardListData,
  BifrostPieData,
} from './data.js';
const QUESTION1 = `list the recent valuable project airdrops and the specific steps to participate in them`;
const QUESTION2 = `Could you provide me with the most active DApps on the Polkadot blockchain in the past month, along with a summary analysis of their activity`.toLowerCase();
const QUESTION3 = `what is our current strategy considering the Bitcoin market trend, and how do we adjust it for short and ultra-short-term trading`.toLowerCase();
const QUESTION4 = `What insights and investment strategies can be gleaned from the correlation between the ETH price and its inflow and outflow on the Binance exchange`.toLowerCase();
const ANSWER1 = `
In the past week, we've identified three notable project airdrops, namely:

* [ ] **Starknet**  
  **Starknet** is set to revolutionize layer 2 solutions on Ethereum.
* [ ] **ZkSync**  
  **ZkSync** is pioneering zkRollups for scalability.
* [ ] **LayerZero**  
  **LayerZero** is creating a cross-chain interoperability protocol.</br>
There are a few crucial steps to follow:
1. Visit the official LayerZero website at www.layerzero.com.
2. Create a unique blockchain address through a trusted browser plug-in wallet or a secure script.
3. Engage with the LayerZero community by completing at least three transfers and acquiring an NFT from their ecosystem.
4. Ensure all these operations are completed before August 30th to be eligible for the snapshot and ultimately, the airdrop.
`;

const ANSWER23 = `
* Extremely cheap fees: (<$0.05)and fast transaction finality when compared to other leading amart contract platforms

* Incredibly well-funded project.

* Easy-to-use wallet and beginner:friendly UI helping to onboard crypto nevices.

* FTW collapse has strong mid-term negative effect on Solana price.

***

- High barrier to become validator due to hardware requirements and ongoing costs to maintain ($40.000-595.000 per year) lead to network centralization.

- "Monolithic laver:one" design, white highly performant now will struggle to seale into the millions of transactions per second.

- Network uptime and reliability suffer, including once shutting down the network completely for 17 hours.
`;
const a1 = 'Over the past month, the three most active DApps on the Polkadot blockchain are Moonbeam, Acala, and Bifrost.';
const a2 = `
Moonbeam shows significant activity with two daily trading peaks occurring around 14:00 and 18:00. Total issuance is 1.075 billion with 55% circulating, 35% staking, and 10% others. The DApp boasts 1,197,562 holders with a total of 9,187,220 transfers. It has a robust Finalized and Signed Extrinsics data at 3,971,389 and 403,921 respectively. Its staked/bonded data stands at 330.597M/357.366M.

  \`\`\`chart
  {
    "charts": [
      [
        {
          "type": "line",
          "title": "Chain Status",
          "col": 6,
          "data": ${JSON.stringify(MoonbeamLineData)}
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
            "title": "Total Issuance",
            "total": "1.075 B",
            "data": ${JSON.stringify(MoonbeamPieData)}
          }
      ],
      [
        {
          "type": "cardList",
          "col": 12,
          "title": "Chain Data",
          "data": ${JSON.stringify(MoonbeamCardListData)}
        }
      ]
    ]
  }
  \`\`\`
  Acala maintains a healthy trading volume with the trading peaks occurring between 10:00-14:00 and 24:00. It has a total issuance of 999.999M with a distribution of 60% circulating and 40% others. It sustains a Finalized data of 3,989,442, Signed Extrinsics data of 2,932,633, and has facilitated 4,348,737 transfers among its 159,251 holders.

  \`\`\`chart
  {
    "charts": [
      [
        {
          "type": "line",
          "title": "Chain Status",
          "col": 6,
          "data": ${JSON.stringify(AcalaLineData)}
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
            "title": "Total Issuance",
            "total": "999.999 M",
            "data": ${JSON.stringify(AcalaPieData)}
          }
      ],
      [
        {
          "type": "cardList",
          "col": 12,
          "title": "Chain Data",
          "data": ${JSON.stringify(AcalaCardListData)}
        }
      ]
    ]
  }
  \`\`\`
  Bifrost registers peak trading activity between 17:00-18:00. It has a total issuance of 999.999M, 85% of which is circulating and the remaining 15% marked as others. It has Finalized and Signed Extrinsics data standing at 2,700,515 and 101,505 respectively. The DApp has been utilized by 4,569 holders with 76,352 transfers in total.

  \`\`\`chart
  {
    "charts": [
      [
        {
          "type": "line",
          "title": "Chain Status",
          "col": 6,
          "data": ${JSON.stringify(BifrostLineData)}
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
            "title": "Total Issuance",
            "total": "999.999 M",
            "data": ${JSON.stringify(BifrostPieData)}
          }
      ],
      [
        {
          "type": "cardList",
          "col": 12,
          "title": "Chain Data",
          "data": ${JSON.stringify(BifrostCardListData)}
        }
      ]
    ]
  }
  \`\`\`
  `;
const ANSWER3 = `
In analyzing Bitcoin's current dynamics, we maintain our strategy. We're eyeing long positions around the 29,000 mark, complemented by increased spot purchases. With the market showing a 0.618 Fibonacci retracement, it's an apt time to accumulate, preparing for an upward breakout.

In the ultra-short-term scenario, consider the exchange's liquidation chart. It displays abundant short positions suitable for liquidation. It's recommended to enter around 29,850, with profit-taking at 30,560, and placing a stop loss at 29,380.

Avoid round integer pending orders for better risk management. As market data evolves, our strategic points need adjusting.

![img](https://img1.imgtp.com/2023/07/12/TIOHjiWO.svg)
`;
const ANSWER4 = `
Upon examining the correlation between Ethereum (ETH) price fluctuations and ETH inflows and outflows on Binance, we unearth key insights that suggest a discernible pattern. Specifically, we notice substantial inflows and outflows aligning with significant price movements. For instance, an outflow of 17,500 ETH on May 11th and 13th corresponded to a drop in price to approximately 1785, whereas an inflow of 23,085 ETH on May 23rd coincided with a price hike to 1940.

The observed patterns potentially indicate that large inflows tend to precede price rises, while significant outflows may signal impending price drops, possibly driven by 'whale' transactions – substantial trades by major holders that can influence the market.

Drawing from this analysis, we recommend that investors closely monitor such inflow and outflow activities, as they could serve as precursors to significant price movements. Investors might consider buying ahead of large inflows and selling prior to significant outflows.

![img](https://img1.imgtp.com/2023/07/12/k7esWv58.svg)
`;
const ANSWER2 = JSON.stringify([a1, a2]);

export const DEFAULT_ANSWER = `We appreciate your question! Sadly, our system isn't able to provide an answer at the moment. Please be assured, we've recorded your query and our committed team is addressing it. As we refine our system, we'll be equipped to answer such questions in the future. We truly value your patience.

We'd love to invite you to join our lively community at [Website URL]. There, you can help us identify more unanswered questions, or help answer some for the community. As a bonus, you could earn our ecological tokens! Your contribution could greatly impact our services. We'd be thrilled to see you there!`;

export const questionMapping = {
  [QUESTION1]: ANSWER1,
  [QUESTION2]: ANSWER2,
  [QUESTION3]: ANSWER3,
  [QUESTION4]: ANSWER4,
};
