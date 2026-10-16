// Chapter 02 — The shift: visibility → coordination
function Chapter02(){
  return (
    <ChapterShell num="02" eyebrow="Thesis">
      <ShortAnswer>
        For the last decade, the answer to revenue problems was <strong>visibility</strong> — more dashboards, more signals, more charts. The next decade's answer is <strong>coordination</strong> — the right person, on the right account, at the right moment, with the right context. They look similar. They are not.
      </ShortAnswer>

      <P>
        Walk into most revenue tools today and you'll find a dashboard. Pipeline by stage. Account health by score. Activity by rep. The premise was: if we just see more of what's happening, we'll act on it. After ten years of building exactly this, the premise didn't hold. Teams got more dashboards and the same number of unanswered Mondays.
      </P>
      <P>
        The bottleneck was never visibility. The bottleneck was — and is — coordination.
      </P>

      <H2>The decade of dashboards</H2>
      <P>
        Revenue intelligence categories — pipeline analytics, conversation intelligence, account health scoring — all answered the same question, slightly differently: <em>what is happening right now?</em> They got very good at answering it. CROs could see deal stages, conversion rates, rep activity, customer sentiment. The data was there.
      </P>
      <P>
        What they didn't answer: <em>so what does the team do about it?</em>
      </P>

      <H2>Visibility without cadence is noise</H2>
      <P>
        A dashboard that shows you the same chart on Monday morning and Friday afternoon isn't a system — it's a mirror. It reflects state. It doesn't run a cycle. It doesn't decide who acts next, when, or with what context. It doesn't remember last week. It assumes someone — usually a manager — will translate the numbers into a Monday plan, on time, every week, for every team.
      </P>
      <P>
        That someone has been doing it manually for a decade. They are tired.
      </P>

      <H2>Real-time data is real-time anxiety</H2>
      <P>
        The other failure mode of visibility-first thinking: alerts. Every time a signal flips, ping someone. Every time a deal stalls, ping someone. The result is a team that can't focus and a manager whose Slack is on fire. The signal-to-noise ratio collapses. The "important" alert gets ignored because the previous nine weren't.
      </P>
      <PullQuote attribution="Nautilida manifesto">
        Real-time data is real-time anxiety. Sales teams need rhythm.
      </PullQuote>

      <VisibilityVsCoordination/>

      <H2>Coordination is the moat</H2>
      <P>
        The shift is not "AI replaces dashboards." Dashboards have their place — for forensics, for board reports, for picking up details. The shift is recognising that <strong>operational revenue work — Monday plans, mid-week priorities, Friday wraps</strong> — is a coordination problem, not a visibility problem.
      </P>
      <P>
        And coordination is a compounding moat. Visibility tools are commoditising — every CRM bolts on AI dashboards now. But coordination depends on memory of <em>your</em> book, <em>your</em> patterns, <em>your</em> people. That memory compounds week over week. The longer it runs, the harder it is to replicate.
      </P>

      <H2>What changes when you make the shift</H2>
      <UL items={[
        'Monday standups stop reconstructing what happened. They start with the plan already written.',
        'Forecast calls stop arguing about which deals are real. They argue about which moves matter.',
        'The Slack thread that asked "who is covering X?" doesn\'t need to be sent.',
        'QBRs stop trying to compress nine months of context into forty-five minutes — the context lives in the loop.',
      ]}/>

      <KeyTakeaway items={[
        'Visibility shows what happened. Coordination decides what to do about it.',
        "A dashboard that doesn't change between Monday and Friday is a mirror, not a system.",
        'Real-time alerts collapse the signal-to-noise ratio. Rhythm protects it.',
        "Coordination compounds because memory compounds. Visibility doesn't.",
        'The next decade of revenue tooling is operational, not analytical.',
      ]}/>
    </ChapterShell>
  );
}

Object.assign(window, {Chapter02});
