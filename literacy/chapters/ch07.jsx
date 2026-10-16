// Chapter 07 — Where we're going (today the brain, tomorrow the senses)
function Chapter07(){
  return (
    <ChapterShell num="07" eyebrow="Roadmap">
      <ShortAnswer>
        Today, Nauti is the <strong>brain</strong> — a coordination layer that reads, remembers, briefs, routes, and recaps. Tomorrow, it grows <strong>senses</strong>: voice in calls, presence in meetings, drafted moves before you ask. We're shipping the brain first because senses without a substrate are theatre.
      </ShortAnswer>

      <RoadmapHorizons/>

      <H2>Today — the brain</H2>
      <P>
        Where we are now. The product reads from CRM, email, and chat. It builds a single, persistent memory of every account, every conversation, every shifted pattern. It drafts the Monday brief before 9am. It routes mid-week priorities to specific owners with the why attached. It writes the Friday recap as narrative — what moved, what carries, what's drafted for next Monday.
      </P>
      <P>
        Live integrations: <strong>HubSpot + Teams</strong>. Live audiences: leadership and account managers. The substrate is built. The loop is running.
      </P>

      <H2>Next — the senses</H2>
      <P>
        Capabilities we're shipping in upcoming releases:
      </P>
      <UL items={[
        <><strong>Proactive Ping</strong> (shipping soon) — context-attached nudges in the channels the team already lives in.</>,
        <><strong>Meeting Notes</strong> (in build) — sit in calls, listen, take notes, update memory in real time.</>,
        <><strong>Team Chat Presence</strong> (in build) — surfaces in Slack/Teams threads with the why for any account question.</>,
        <><strong>Auto Follow-through</strong> (next) — drafts the next email, the next call agenda, based on the memory.</>,
        <><strong>Pipedrive + Slack</strong> integrations (next).</>,
      ]}/>

      <H2>Later — the full coordinator</H2>
      <P>
        Capabilities on the roadmap, beyond the immediate release schedule:
      </P>
      <UL items={[
        <>Voice presence in calls — proactively suggesting the next move while the conversation is happening.</>,
        <>Org-wide memory — sales, customer success, RevOps, leadership sharing one source of truth.</>,
        <>Salesforce, Gmail, Outlook integrations — by request, prioritised by design partners.</>,
      ]}/>

      <H2>What we deliberately won't do</H2>
      <P>
        Just as important as what's coming: what isn't. We don't pretend to be a chatbot for customers. We don't auto-write to source systems unless explicitly enabled. We don't build voice clones. We don't replace the AM, the leader, or the relationship. We're a coordination layer above the team — never a layer between the team and the customer.
      </P>
      <P>
        These exclusions matter because every category that doesn't draw lines becomes the same product as every other category. We are building one shape, deeply, and saying no to the rest.
      </P>

      <H2>Why brain-first matters</H2>
      <P>
        The reason brain-first matters: senses without memory are theatre. A voice that joins a call but doesn't remember last month's conversation is just a worse human. Notes that get taken but don't connect to the account's pattern just generate more noise. Each new sense gets sharper because the memory it plugs into already knows the team, the book, and the rhythm.
      </P>
      <PullQuote attribution="The compounding logic">
        Build the substrate that compounds. The capabilities on top get cheaper to ship — and sharper — every quarter.
      </PullQuote>

      <H2>Where we are on the arc</H2>
      <P>
        Most categories take a decade to play out. Visibility tools took eight years to reach the dashboards we now consider table stakes. Coordination tools — AI team leads — are at year one. The brain is the substrate. Each sense layered on top is a step toward the team lead that genuinely thinks alongside the team.
      </P>
      <P>
        We are early. That is the point.
      </P>

      <KeyTakeaway items={[
        'Today: the brain. Memory + coordination + rhythm.',
        'Tomorrow: senses. Voice, meetings, proactive moves, auto-follow-through.',
        'Brain-first, on purpose. Senses without a substrate underperform.',
        "Deliberate exclusions: customer-facing chat, auto-writes, voice clones.",
        'Each new capability compounds with the memory already there. Shape is the moat.',
      ]}/>
    </ChapterShell>
  );
}

Object.assign(window, {Chapter07});
