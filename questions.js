const QUESTION1 = `list the recent valuable project airdrops and the specific steps to participate in them.`
const QUESTION2 = `generate investment summary for solana`

const ANSWER2 = `
* 列表
* Extremely cheap fees: (<$0.05)and fast transaction finality when compared to other leading amart contract platforms

* Incredibly well-funded project.

* Easy-to-use wallet and beginner:friendly UI helping to onboard crypto nevices.

* FTW collapse has strong mid-term negative effect on Solana price.

***

- High barrier to become validator due to hardware requirements and ongoing costs to maintain ($40.000-595.000 per year) lead to network centralization.

- "Monolithic laver:one" design, white highly performant now will struggle to seale into the millions of transactions per second.

- Network uptime and reliability suffer, including once shutting down the network completely for 17 hours.
`
export const DEFAULT_ANSWER = `We appreciate your question! Sadly, our system isn't able to provide an answer at the moment. Please be assured, we've recorded your query and our committed team is addressing it. As we refine our system, we'll be equipped to answer such questions in the future. We truly value your patience.

We'd love to invite you to join our lively community at [Website URL]. There, you can help us identify more unanswered questions, or help answer some for the community. As a bonus, you could earn our ecological tokens! Your contribution could greatly impact our services. We'd be thrilled to see you there!`
export const questionMapping = {
  [QUESTION1]: 'answer1',
  [QUESTION2]: ANSWER2,
};