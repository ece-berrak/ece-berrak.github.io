// Chapter 03 — Anatomy of the weekly loop
function Chapter03(){
  return (
    <ChapterShell num="03" eyebrow="Operating rhythm">
      <ShortAnswer>
        The weekly revenue coordination loop has four parts: a <strong>Monday brief</strong>, <strong>mid-week priorities</strong> for each owner, a <strong>Friday recap</strong>, and a <strong>compounding memory</strong> that carries into next Monday. Cadence over alerts. Direction over dashboards.
      </ShortAnswer>

      <P>
        A working revenue rhythm has a beginning, a middle, an end, and a memory. Skip any of the four and the rhythm doesn't run. Monday without a recap = no story arc. Recap without memory = restart from zero next week. Memory without priorities = lots of context, no execution. The four parts are interdependent.
      </P>

      <WeeklyLoopDiagram/>

      <P>
        Read the diagram across two rows: leader and AM. <strong>Monday</strong> hits both — leader brief and AM brief, same loop, different lens. <strong>Tue–Thu</strong> only the AM row is active (mid-week priorities + pre-meeting prep); leadership stays silent by design. <strong>Friday</strong> hits both again — leader recap and AM wrap, same close, different angle. <strong>Sat–Sun</strong> the memory layer compounds and assembles next Monday — quietly, without anyone in the office.
      </P>

      <H2>Why a week</H2>
      <P>
        A day is too short. By the time a daily signal becomes a daily action, the week has already shaped itself around the noise. A month is too long. By the time a monthly signal becomes a monthly plan, the deal you should have prioritised has already slipped. A week is almost exactly the right length: long enough for real signals to emerge, short enough to act before the window closes.
      </P>
      <P>
        Five business days is the smallest unit you can plan, run, and evaluate. Anything shorter is reactive. Anything longer is bureaucratic.
      </P>

      <H2>Monday — both audiences, different lens</H2>
      <P>
        Monday opens with two briefs in parallel. The <strong>leader brief</strong> names the week across the portfolio — risks, opportunities, what shifted, handovers. The <strong>AM brief</strong> names the week inside each owner's book — priorities, the why for each, pre-meeting prep already attached. Same loop, different lens.
      </P>
      <P>
        Short. Specific. Actionable. The team walks into Monday already knowing where the week is going. No reconstruction meeting. No "who's covering this account?" triage. The plan is written — twice, for two audiences.
      </P>

      <H2>Mid-week — priorities & prep</H2>
      <P>
        Tuesday through Thursday is execution. Each owner gets a small daily list — three accounts that matter most today, with the why attached. Pre-meeting prep arrives before every call: last touches, open promises, questions left unanswered, the pattern this account is showing this month. Context travels with the meeting. The owner reconstructs nothing.
      </P>
      <P>
        For leaders: the mid-week is silent. No pings. The brief on Monday already named the priorities; the owners are working them. Leadership coming in mid-week to "just check" doesn't help — it pulls focus from the work the brief already directed.
      </P>

      <H2>Friday — both audiences, different lens</H2>
      <P>
        Friday closes the loop. Like Monday, it lands for both audiences in parallel. The <strong>leader recap</strong> is narrative — what changed in the book, which risks resolved, which surfaced, what decisions the team made, what's drafted for next Monday. The <strong>AM wrap</strong> is each owner's own week — what they closed, what rolled, three Mon-ready next moves already drafted before they log off.
      </P>
      <P>
        A CRM report tells you what happened. The Friday recap tells you what it meant.
      </P>

      <H2>The compound — memory between weeks</H2>
      <P>
        The part that changes everything is what happens between Friday and Monday. Every signal, every decision, every shifted pattern is remembered. The book sharpens week over week. Accounts that showed a specific reorder rhythm in March are understood by the loop in April. The team picks up exactly where Friday left off, every Monday, for as long as the loop runs.
      </P>
      <PullQuote attribution="Chapter 02">
        Coordination compounds because memory compounds.
      </PullQuote>

      <H2>Chat on demand — the always-on layer</H2>
      <P>
        Alongside the cyclical rhythm, the loop runs a continuous chat layer. Anyone on the team — leader, AM, RevOps, CS — can ask any question about any account, any time. The chat doesn't break the rhythm; it complements it.
      </P>
      <P>
        The Monday brief and the Friday recap handle the <em>predictable</em> questions — what's at risk, what shifted, what to do. The chat handles the <em>unpredictable</em> ones: "what did Acme actually say in February?", "what was the last quote we sent Hooli?", "show me every account where the champion went quiet in the last 30 days." Same memory, same evidence trail, different surface.
      </P>
      <P>
        The chat is what stops people from re-asking. It's where the value of memory becomes visible in real time — typed question, answered with the actual touch, the actual order, the actual conversation, all sourced.
      </P>

      <H2>What the loop looks like in calendar form</H2>
      <UL items={[
        <><strong>SUN evening</strong> · the loop reads last week and assembles the brief.</>,
        <><strong>MON 7:00</strong> · leader brief lands. AM priority lists land.</>,
        <><strong>TUE → THU</strong> · daily priority lists. Pre-meeting prep before every call. Leaders silent.</>,
        <><strong>FRI 17:00</strong> · narrative recap lands. Monday is already half-drafted.</>,
        <><strong>SAT–SUN</strong> · memory compounds. Patterns sharpen.</>,
      ]}/>

      <KeyTakeaway items={[
        'Four parts: Monday brief, mid-week priorities, Friday recap, memory between weeks.',
        'A week is the right unit — long enough for patterns, short enough for action.',
        "Mid-week is silent for leaders. The plan was Monday's job.",
        'Friday is narrative, not numbers. Interpretation, not reporting.',
        'Memory between weeks is the multiplier — every cycle sharpens the next.',
      ]}/>
    </ChapterShell>
  );
}

Object.assign(window, {Chapter03});
