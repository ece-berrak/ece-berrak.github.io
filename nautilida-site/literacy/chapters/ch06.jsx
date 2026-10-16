// Chapter 06 — The hard questions (the elephants in the room, answered without dodging)
function Chapter06(){
  return (
    <ChapterShell num="06" eyebrow="Objections">
      <ShortAnswer>
        The questions we hear most — from founders, from VCs, from buyers — are the same handful. Some are tactical (compliance, hallucinations). Some are existential (foundation labs, incumbents, agents). They all deserve direct answers, not marketing.
      </ShortAnswer>

      <P>
        Every category that didn't exist last year invites the same objections. "Can't the existing tools do it?" "Won't compliance break this?" "What's your moat?" "What if a single agent eats the whole stack?" Each one is fair. Each one has a specific answer.
      </P>

      <HardQA items={[
        {
          q: "Can't ChatGPT or Claude already do this?",
          a: "For one-shot tasks — drafting an email, summarising a thread, explaining a doc — yes, and well. For coordination across people, accounts, and weeks — no. ChatGPT and Claude don't carry persistent memory of your book. They don't run a Monday rhythm. They activate when prompted and go silent when not. The team lead is a different shape: continuously running, persistently remembering, proactively routing. We unpack the category distinction in Chapter 01."
        },
        {
          q: "We're already buried in manual admin work and workflow tools. Why add another?",
          a: "The team lead doesn't add another tool — it removes the orchestration layer that was being done by hand. Today, that orchestration is a manager every Sunday evening, or a stack of Zaps and scripts someone has to maintain. The brief, the priorities, the recap, the memory between weeks — those are the work. We do that assembly so the team can focus on the relationship work AI doesn't replace."
        },
        {
          q: "Why won't OpenAI, Anthropic, or Google just build this themselves?",
          a: "Because the moat isn't the model — it's cross-stack memory and an operational rhythm fitted to a specific team. Foundation labs build horizontal capabilities (chat, summarisation, code). They don't build the integration plumbing into your CRM, the schema for your accounts, or the rhythm that matches your team's week. That's category-specific work. The same way OpenAI didn't build Notion, Cursor, or Replit — they built the substrate, and category-specific products built the rest. AI team leads are the same shape."
        },
        {
          q: "What stops 50 startups from copying you once one team proves the loop works?",
          a: "The substrate. Switching costs come from the memory you've built, not the brand on top. The first six months of using a team lead are when patterns get learned, drift baselines get set, your book gets known. A copy-cat starts with empty memory; the incumbent has six months of compounding context. That's a moat that compounds with time, not a feature that gets copied in a sprint. Features rot; substrates compound."
        },
        {
          q: "Won't HubSpot, Salesforce, or another CRM just bolt this on?",
          a: "Some of it, yes — and some of that will be useful for in-CRM tasks. But coordination requires cross-stack memory, and CRMs are by definition stack-bound. They optimise for what's inside the CRM. The team lead optimises for what's between systems — CRM, email, chat, calendar. Different starting point, different incentive. It's the same reason Salesforce never beat Slack on chat or Gong on conversation intelligence: the CRM is the wrong starting point for those problems."
        },
        {
          q: "What if a single super-agent eventually does everything — and the coordination layer disappears?",
          a: "We don't think it does, and the bet is structural. Even a perfectly capable model needs three things to coordinate a team: persistent memory of the book, knowledge of the rhythm the team runs on, and integration into the tools they live in. The \"agent\" framing misses that this isn't an intelligence problem — it's an integration and memory problem. A more capable model makes the team lead sharper, not redundant. The substrate is the moat; the model is the engine on top of it."
        },
        {
          q: "What about GDPR and data residency?",
          a: "Tenant-isolated by default — your team's memory never crosses to another customer's tenant. EU and US residency are pickable; you choose where data lives. The system is read-only by default — it reads from CRM, email, and chat but doesn't write back unless you turn that on, deliberately, with audit. Standard data subject rights (deletion, export) work as you'd expect."
        },
        {
          q: "What about hallucinations? AI saying things that aren't true?",
          a: "We don't guess. Every claim in a brief — every number, every named account, every flagged signal — points back to the raw source: the email, the order record, the call note. If the source isn't there, the claim isn't made. The brief is deterministic by design: the same data yields the same brief. Your security team can audit the path from any number on screen back to the source row that produced it."
        },
        {
          q: "Will this atrophy the manager? They stop reading their own data?",
          a: "The opposite, in our observation. The brief surfaces patterns managers used to miss because they didn't have time to look. Having coordination handled gives managers more time on judgement — not less. The skill that atrophies is reconstruction work, and that's the skill that should atrophy. The skill that grows is interpretation, judgement, relationship. The team lead is what lets a senior manager scale to twice the book without the team falling apart."
        },
        {
          q: "What if you go down? What if you go away?",
          a: "Read-only architecture means we don't break your CRM if we go down — your stack keeps working. Data export is one click; you take everything with you, including the memory. We're venture-backed with EU operations and an aveato design partnership active today. We're building for the long arc of this category, but the architecture also assumes any single tool can fail without taking the team down with it."
        },
      ]}/>

      <KeyTakeaway items={[
        'AI assistants and chatbots are reactive. The team lead is proactive — different category.',
        'No new tool to maintain. Removes the orchestration layer that was being done by hand.',
        'Tenant-isolated, read-only, EU/US residency, SOC 2 II. Compliance from day one.',
        'Deterministic with sources. If a claim has no source, the claim isn\'t made.',
        'The moat is months of memory — not the model. Substrate compounds; features get copied.',
        "Foundation labs build horizontal. CRMs build stack-bound. Coordination is between — different shape.",
      ]}/>
    </ChapterShell>
  );
}

Object.assign(window, {Chapter06});
