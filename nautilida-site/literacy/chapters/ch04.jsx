// Chapter 04 — Memory: the layer that compounds
function Chapter04(){
  return (
    <ChapterShell num="04" eyebrow="Substrate">
      <ShortAnswer>
        Three layers of memory make the loop compound: <strong>conversation memory</strong> (every ask and answer stays with the team), <strong>pattern memory</strong> (account drift before it shows in numbers), and <strong>loop-fed memory</strong> (every Mon→Fri cycle feeds back in and sharpens the next). Rules-based stacks can produce none of the three. Memory is what makes the AI team lead a different category.
      </ShortAnswer>

      <H2>Why memory matters</H2>
      <P>
        Coordination without memory is just choreography. The first week looks fine. By week six the team is asking "didn't we already cover this?", "what did the customer say in February?", "who picked up the Acme thread when M. Chen was out?". A loop without memory restarts from zero every Monday. A loop with memory begins where last Friday left off — every week, for as long as the loop runs.
      </P>
      <PullQuote attribution="Nautilida manifesto">
        Memory beats handover meetings, and beats pretending the last AM never existed.
      </PullQuote>

      <MemoryLayers/>

      <H2>Layer 01 — conversation memory</H2>
      <P>
        The shallowest layer, the one that pays back fastest. Every ask and every answer — Slack, Teams, email, CRM notes — stays with the team. Come back next week and the loop knows what was asked, what changed, where it left off.
      </P>
      <P>
        The downstream effect is small but constant: <strong>nobody re-asks. Nobody re-explains.</strong> Every Tuesday standup that used to begin with "wait, who's covering Acme?" doesn't. Every onboarding that used to run on a 12-hour shadow doesn't.
      </P>
      <P>
        Conversation memory is also the antidote to the AM-rotation cliff. When an account moves from one owner to another, the memory stays with the account — not with the person. The new owner reads the last six months in two minutes. The customer doesn't get re-asked the same questions. The relationship doesn't reset.
      </P>

      <H2>Layer 02 — pattern memory</H2>
      <P>
        Each account has a shape: cadence, contacts, tone, reorder rhythm, who replies fast and who doesn't. Pattern memory tracks how that shape <em>drifts</em> week over week. When a champion who used to reply within hours starts taking days, that's drift. When a reorder window slips from 2 weeks to 4, that's drift. When the email tone shifts from warm to terse, that's drift.
      </P>
      <P>
        The benefit: every owner and leader sees the same shift <strong>long before the revenue gap lands on a dashboard</strong>. Drift detection is the early-warning side of memory. Acting on it changes the quarter — not the post-mortem.
      </P>
      <P>
        Pattern memory also handles its inverse: knowing what's <em>normal</em> for an account, so the alert doesn't fire when nothing has actually changed. The account that always goes quiet for 14 days mid-month and reactivates on the 18th is fine. The system needs to know that.
      </P>

      <H2>Layer 03 — loop-fed memory</H2>
      <P>
        The compounding layer. The weekly loop isn't just output — it's input too. Each Mon→Fri cycle (the plan, the live re-routing, the Friday recap) feeds memory back in. Week by week, patterns get sharper, coordination gets tighter, the book is better known.
      </P>
      <P>
        Loop-fed is what makes the system different in week 24 from week 1. A static rules engine in week 24 is doing exactly what it did in week 1. A loop-fed memory in week 24 has six months of pattern learning embedded — every false alert pruned, every real signal reinforced, every account shape drawn out from observation.
      </P>
      <P>
        Loop-fed memory is also where institutional knowledge lives. The play that closed Wayne Industries' contract last quarter is in the memory. When a similar shape shows up at a new account three months later, the loop suggests it — not because someone wrote a rule, but because the loop remembered.
      </P>

      <H2>Why rules-based stacks can't do this</H2>
      <P>
        Rules-based revenue tools — alert-driven dashboards, scoring engines, automation rules — handle threshold detection well. "If health score below 60, alert." "If no activity in 14 days, flag." But threshold detection ignores context. It doesn't know that this account always goes quiet for 14 days mid-month. It doesn't know the champion is on holiday. It doesn't know last week's brief flagged this exact pattern as expected.
      </P>
      <P>
        Memory is what lets the system tell signal from noise. Rules can't carry memory across time, accounts, and people. That's not a feature gap — it's a category gap. The team lead's category exists because rules-based tools cannot do this work no matter how many rules you add.
      </P>

      <H2>What memory <em>shouldn't</em> do</H2>
      <P>
        Three guardrails make memory useful instead of creepy:
      </P>
      <UL items={[
        <><strong>Tenant-isolated.</strong> Your team's memory never trains a shared model or improves another customer's product. Privacy is the substrate, not the afterthought.</>,
        <><strong>Read-only by default.</strong> The loop reads from CRM, email, and chat. It doesn't write back to source systems unless you turn that on, deliberately, with audit.</>,
        <><strong>Deterministic, with sources.</strong> Every claim in a brief points to the raw signal — the email, the order record, the call note. If the source isn't there, the claim isn't made.</>,
      ]}/>

      <KeyTakeaway items={[
        'Conversation memory: nobody re-asks, nobody re-explains.',
        'Pattern memory: drift detected before it shows in the numbers.',
        'Loop-fed memory: every Mon→Fri cycle feeds back in. Week 24 is sharper than week 1.',
        'Rules-based stacks handle thresholds. They cannot carry memory.',
        'Memory is what makes the AI team lead a different category — not a faster CRM.',
        'Tenant-isolated, read-only, deterministic. Memory with guardrails or none at all.',
      ]}/>
    </ChapterShell>
  );
}

Object.assign(window, {Chapter04});
