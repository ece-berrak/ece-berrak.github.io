// Chapter 05 — Where it fits in your stack
function Chapter05(){
  return (
    <ChapterShell num="05" eyebrow="Honest comparisons">
      <ShortAnswer>
        An AI team lead is in a different category from <strong>AI assistants</strong> (ChatGPT, Claude, Gemini), <strong>chatbots</strong> (Intercom Fin, Drift), and <strong>revenue intelligence</strong> tools (Gong, Clari, Salesforce Einstein). It doesn't replace any of them. It does something they were never built for: coordination across people, accounts, and weeks.
      </ShortAnswer>

      <P>
        Sales teams already have AI in the stack. Some of it works well. The question is whether the tools you have can run a coordination loop. Most can't — and that's not a flaw, it's a different job.
      </P>

      <H2>vs AI assistants — ChatGPT, Claude, Gemini, Copilot</H2>
      <P>
        General-purpose chat models excel at one-shot tasks: drafting an email, summarising a document, explaining a concept, writing code. You ask, you get an answer. Single-session memory. No knowledge of <em>your</em> book of accounts unless you paste it in every time.
      </P>
      <P>
        An AI team lead carries persistent memory of every account, every conversation, every signal — across weeks and months. It doesn't wait to be asked. It runs the rhythm. <em>Use ChatGPT to draft a single email. Use a team lead to know which email to draft, for which account, at which time, and why.</em>
      </P>

      <H2>vs revenue intelligence — Gong, Clari, Salesforce Einstein</H2>
      <P>
        Revenue intelligence tools surface what happened inside one silo at a time. Gong reads call recordings. Clari reads CRM forecasts. Salesforce Einstein scores opportunities. Each is excellent inside its silo. None of them write a Monday brief that pulls signals from all three plus email and chat into one paragraph.
      </P>
      <P>
        The AI team lead sits above the silos. It reads from CRM <em>and</em> email <em>and</em> chat, builds a single cross-stack memory, and outputs a brief — not another dashboard. Revenue intelligence is visibility. A team lead is coordination. Different jobs, both useful.
      </P>

      <H2>vs CRM-native AI — HubSpot AI, Einstein assistants</H2>
      <P>
        CRM-native AI handles in-CRM tasks: smart fields, AI summaries of records, automated follow-up suggestions. It is excellent within the CRM. It does not coordinate across CRM, email, and chat — because it doesn't see across them. Cross-stack memory is the precondition for cross-stack coordination, and CRM AI is by definition stack-bound.
      </P>

      <H2>vs chatbots — Intercom Fin, Drift, Ada</H2>
      <P>
        Chatbots resolve narrow user-facing scenarios — support questions, lead qualification, FAQs. They are not built for cross-functional team coordination. Shallow memory, tight scope, customer-facing. Different shape, different job.
      </P>

      <H2>Side by side</H2>
      <CompareTable
        columns={['What it is', 'What it does', "What it doesn't"]}
        rows={[
          { label:'AI Assistant',   values:['Conversational AI',   'Answers questions, drafts content',  'Carry persistent team memory'] },
          { label:'AI Chatbot',     values:['Domain-narrow bot',   'Resolves scripted scenarios',        'Coordinate across functions'] },
          { label:'Revenue Intel',  values:['Visibility tool',     'Surfaces one-silo signals',          'Run a weekly rhythm or write a brief'] },
          { label:'CRM AI',         values:['In-CRM smart layer',  'In-CRM tasks, summaries',            'See or coordinate across stack'] },
          { label:'AI Team Lead',   values:['Coordination layer',  'Brief, route, recap, compound',      "Replace the leader's judgement"] },
        ]}
      />

      <H2>What it doesn't replace</H2>
      <P>
        An AI team lead doesn't replace the CRO, the AM, the CS lead, or the conversation intelligence platform. It frees the leader from reconstruction work. It hands the AM a curated list. It sits alongside the visibility stack rather than competing with it. The shift is additive — coordination on top of visibility — not substitutive.
      </P>
      <P>
        The team lead also doesn't replace human judgement. It removes reconstruction work so judgement gets the time it deserves. The CRO still decides which deals to escalate. The AM still decides what to say to the buyer. The team lead just makes sure they walk into the decision already prepared.
      </P>

      <H2>How to read your stack</H2>
      <P>
        A simple test: open your current stack, page through one week of notifications. For each, ask:
      </P>
      <UL items={[
        '"Does this answer what just happened?" → that\'s visibility.',
        '"Does this answer what to do about it?" → that\'s coordination.',
      ]}/>
      <P>
        Most teams find their stack heavy on the first and light on the second. The team lead fills the second column.
      </P>

      <KeyTakeaway items={[
        'AI assistants answer; team leads coordinate. Different jobs.',
        'Revenue intelligence shows what happened; team leads decide what to do.',
        'CRM AI is stack-bound; team leads sit above the stack.',
        "Coordination is additive — it sits alongside your visibility tools, not in place of them.",
        "The team lead doesn't replace human judgement. It removes reconstruction work so judgement gets the time.",
      ]}/>
    </ChapterShell>
  );
}

Object.assign(window, {Chapter05});
