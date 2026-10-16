// Chapter 01 — What is an AI team lead?
// Establishes the category. Distinguishes from AI assistants and AI chatbots.

function Chapter01(){
  return (
    <ChapterShell num="01" eyebrow="Definition">
      <ShortAnswer>
        An AI team lead is a <strong>coordination layer</strong> that runs your team's weekly rhythm, carries memory across your stack, and routes the next move to the right owner — without being asked. It is not an AI assistant (which answers when prompted), and it is not an AI chatbot (which handles scripted scenarios). It is a third thing.
      </ShortAnswer>

      <P>
        For two decades, "AI in your tools" meant one of two things: a chat box where you ask a question, or a scripted bot that handles narrow tasks. Both are useful. Neither is what a sales team actually needs to coordinate twenty accounts across five owners every week.
      </P>
      <P>
        A new category has been forming. The <strong>AI team lead</strong> sits above the tools — reading what is happening, remembering what happened last week, and quietly handing the right move to the right person on the right day. It is not a smarter assistant. It is a different shape entirely.
      </P>

      <CompareCards cards={[
        {
          eyebrow:'AI ASSISTANT',
          title:'Answers when asked.',
          lead:'General-purpose conversational AI. Single-session memory. Excellent at writing, summarising, analysis. Waits for a prompt.',
          examples:'ChatGPT · Claude · Gemini · Copilot',
        },
        {
          eyebrow:'AI CHATBOT',
          title:'Resolves narrow scenarios.',
          lead:'Domain-scoped, often customer-facing. Handles common questions, qualifies leads, routes to humans when stuck.',
          examples:'Intercom Fin · Drift · Ada · scripted helpdesks',
        },
        {
          eyebrow:'AI TEAM LEAD',
          title:'Runs the rhythm.',
          lead:'Coordination layer with persistent cross-stack memory. Acts on schedule and on demand. Hands the next move to the right owner.',
          examples:'Nauti',
          tone:'hero',
        },
      ]}/>

      <H2>The assistant — an answer machine</H2>
      <P>
        An AI assistant is a conversational front end on a large language model. You open a window, you type a question, you get an answer. The interaction is one-shot. The assistant is good at writing emails, summarising threads, drafting briefs from raw notes, explaining a concept, generating code. It is excellent for the work a single person does at their desk.
      </P>
      <P>
        What an assistant does not do: remember which accounts your team is watching this month. Notice that a champion has gone quiet. Re-route a Tuesday priority because Monday's signal shifted. Hand a brief to a leader without being asked. The assistant is reactive by design — it activates when prompted and goes silent when not.
      </P>

      <H2>The chatbot — a domain-narrow resolver</H2>
      <P>
        AI chatbots are bot-shaped tools built for specific user-facing tasks. The most common shape is customer support: a visitor types a question, the bot answers from a known knowledge base, escalates to a human if confidence drops. Sales versions qualify inbound leads with scripted questions. They are scoped, scripted-or-semi-scripted, and tuned for one job.
      </P>
      <P>
        Chatbots are good at the jobs they were built for. They are not built for cross-functional coordination. They do not carry memory of <em>your</em> book of accounts across weeks. They cannot draft a Monday brief that ranks priorities by impact, because that is not what they were trained or designed to do. The shape is wrong for the job.
      </P>

      <H2>The team lead — a coordination layer</H2>
      <P>
        The AI team lead is a different category. It sits above your stack — CRM, email, chat — and holds a single, persistent memory of every account, every conversation, every pattern. It runs on a recurring rhythm: a Monday brief that ranks the week's priorities, mid-week priority lists routed to specific owners with the <em>why</em> attached, a Friday recap that closes the loop with narrative, and compounding memory between weeks.
      </P>
      <P>It does three things week in, week out:</P>
      <UL items={[
        <><strong>Carries memory.</strong> Every ask, every reply, every shift in account behaviour stays with the team. No one re-asks. No one re-explains.</>,
        <><strong>Coordinates execution.</strong> Routes the next move to the right owner, on the right day, with the context the move requires.</>,
        <><strong>Compounds.</strong> Every Mon → Fri cycle feeds memory back in. The book gets sharper. Patterns that took a quarter to surface in March surface in two weeks by June.</>,
      ]}/>
      <P>
        Nauti is the AI team lead built for revenue teams. It connects to HubSpot and Teams (Pipedrive and Slack are next), reads the signals, builds the memory, drafts the brief, runs the loop. It is read-only by default — it does not write back to source systems. It is deterministic — every claim has a traceable source. It is tenant-isolated — your data never trains a shared model.
      </P>

      <H2>Side by side</H2>
      <P>
        The categories solve different problems. Pick the wrong one and the work doesn't move; pick the right one and the team feels coordinated for the first time in a long time.
      </P>
      <CompareTable
        columns={['AI Assistant', 'AI Chatbot', 'AI Team Lead']}
        rows={[
          { label:'Trigger',   values:['When you prompt it', 'When a user asks',   'On schedule + on demand'] },
          { label:'Memory',    values:['Per session',         'Per conversation',  'Persistent, cross-stack'] },
          { label:'Output',    values:['An answer',           'Resolution or hand-off', 'Brief, priority list, narrative recap'] },
          { label:'Audience',  values:['One-on-one',          'Customer-facing',   'Whole team — leaders, AMs, RevOps'] },
          { label:'Initiative',values:['Reactive',            'Reactive in scope', 'Proactive'] },
          { label:'Domain',    values:['Generic',             'Narrow / scripted', 'Specific (sales / revenue)'] },
          { label:'Examples',  values:['ChatGPT, Claude',     'Intercom Fin, Drift', 'Nauti'] },
        ]}
      />

      <H2>Why the distinction matters</H2>
      <P>
        Sales teams have spent the last two years bolting assistants and chatbots into their workflows. Both helped at the edges — faster email drafts, faster lead qualification, faster CRM search. Neither moved the core problem.
      </P>
      <P>
        The core problem is coordination. The right person, on the right account, on the right day, with the right context. That is not a question to be answered. It is not a scripted scenario to resolve. It is a rhythm to be run, week after week, with memory that accumulates instead of resetting.
      </P>

      <PullQuote attribution="The Weekly Loop, Nautilida">
        Intelligence gives you a sharp snapshot. The loop gives you a sharp team that gets sharper every week.
      </PullQuote>

      <P>
        That is the work an AI team lead does. Not faster answers. Coordinated execution.
      </P>

      <H2>What it is not</H2>
      <P>
        An AI team lead is not a replacement for the revenue leader. It frees the leader from reconstruction work — "what happened last week", "who is covering X account now", "is this deal still real" — so the leader can do the actual work: judgment calls, strategy, relationships.
      </P>
      <P>
        It is not a dashboard. Dashboards show you what happened; an AI team lead tells you what to do about it.
      </P>
      <P>
        It is not a voice clone of a CRO that talks like Steve Jobs. It is a quiet, deterministic coordinator that disappears into the team's rhythm. The job is to make the team feel sharper. Not to be visible.
      </P>

      <KeyTakeaway items={[
        'AI Assistant answers questions. AI Chatbot resolves narrow scenarios. AI Team Lead runs coordination.',
        'The first two are reactive. The third is proactive.',
        'A team lead carries persistent memory across your stack. Assistants and chatbots do not.',
        'Sales coordination is a rhythm to be run, not a question to be answered.',
        'Nauti is an AI team lead built for revenue teams. Read-only, deterministic, tenant-isolated.',
      ]}/>
    </ChapterShell>
  );
}

Object.assign(window, {Chapter01});
