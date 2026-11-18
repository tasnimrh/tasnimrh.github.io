// One entry per case study. The home page and the /work/<slug>/ pages are generated from this list.

export type Media = {
  kind: 'video' | 'image';
  src: string;
  poster?: string;
  w: number;
  h: number;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  context: string;
  when: string;
  role: string;
  summary: string; // one sentence, shown on the home page
  metrics: { v: string; l: string }[];
  stack: string[];
  question: string;
  lede: string;
  facts: { label: string; value: string }[];
  problem: string[];
  myPart: string[];
  results: string[];
  limits: string[];
  links: { label: string; href: string }[];
  media?: Media[];
  visual: 'budget' | 'runlog';
};

export const projects: Project[] = [
  {
    slug: 'olist-late-delivery',
    title: 'Late-delivery risk at order approval',
    context: 'Olist e-commerce, McGill Enterprise Data Science',
    when: 'Fall 2026',
    role: 'Model tuning, ensembles and final evaluation, team of seven',
    summary:
      'A model that ranks e-commerce orders by their risk of arriving late, using only what is known when the order is approved, so operations can review the right orders first.',
    metrics: [
      { v: '36.1%', l: 'of late orders caught at a 10% review budget' },
      { v: '3.6×', l: 'more than random review' },
      { v: '85,371', l: 'orders, time-ordered validation' },
    ],
    stack: ['Python', 'scikit-learn', 'pandas'],
    question: 'If operations can only review a few orders a day, which ones should they review?',
    lede: 'A model that flags e-commerce orders likely to arrive after the promised date, using only what is known when the order is approved. I owned the tuning, the ensemble tests and the final evaluation on the held-out test set.',
    facts: [
      { label: 'My part', value: 'Tuning, ensembles and the final test-set evaluation, on a team of seven' },
      { label: 'Context', value: 'McGill INSY 674 Enterprise Data Science, Fall 2026' },
      { label: 'Data', value: '85,371 delivered orders from Olist, a Brazilian marketplace, 2017 to 2018' },
      { label: 'Stack', value: 'Python, pandas, scikit-learn' },
    ],
    problem: [
      'Between January 2017 and July 2018, 7.0% of delivered Olist orders arrived after the promised date. Late orders averaged 2.21 stars, against 4.28 for orders that arrived on time.',
      'The goal was to flag risky orders when they are approved, early enough for someone to act, instead of finding out from a bad review.',
    ],
    myPart: [
      'Ran 90 randomized-search trials across three model families (40 logistic regression, 20 random forest, 30 gradient boosting), treating data-preparation choices such as rare-category grouping and class weighting as parameters to tune.',
      'Found that purchase month was hurting the model. With only 15 months of history, it recorded which period was bad rather than true seasonality: February was 3.0% late in 2017 and 14.1% in 2018. Removing it improved the model more than all of the tuning.',
      'Tested four voting ensembles against a selection rule fixed in advance: a more complex model replaces logistic regression only if it wins on 4 of 5 folds by more than one standard error. None passed; the best one tied.',
      'Locked the final model, then opened the test set once: April to July 2018, 21,333 orders. Compared it with a random baseline and a two-feature baseline, using a paired bootstrap to check whether the gains were real.',
    ],
    results: [
      'Reviewing the riskiest 10% of orders catches 316 of the 876 late ones in the test period (36.1%). Random review catches 10.2%; a two-feature baseline, 33.6%.',
      'The final model beats both baselines on every metric: PR-AUC of 0.126 against 0.109 for the two-feature baseline, a gain of 0.017 (95% CI 0.006 to 0.027).',
      'The selected model is also the simplest candidate: a tuned logistic regression that trains in about a second and whose coefficients an operations team can read.',
    ],
    limits: [
      'Most of the signal comes from two facts: the length of the delivery promise and the destination state. At the 10% budget, the gain over the two-feature baseline is 2.5 points with a 95% interval of -0.4 to 4.8, so it may be noise.',
      'Lateness arrives in system-wide waves that the model cannot anticipate.',
      'After the first test run, the team agreed to leave a gap between training and test data, matching cross-validation. It lowered the score slightly. Both runs are kept in the notebook.',
    ],
    links: [
      { label: 'My notebook', href: 'https://github.com/JustJay7/olist-late-delivery/blob/main/notebooks/05_fine_tune.ipynb' },
      { label: 'Team repository', href: 'https://github.com/JustJay7/olist-late-delivery' },
    ],
    media: [
      {
        kind: 'image',
        src: '/media/olist-budget-curves.webp',
        w: 1400,
        h: 492,
        alt: 'Precision-recall curve and recall at each review budget on the test set',
        caption: 'From my notebook: precision-recall, and the share of late orders caught at each review budget, on the test set.',
      },
      {
        kind: 'image',
        src: '/media/olist-heatmap.webp',
        w: 1332,
        h: 744,
        alt: 'Heatmap of late rate by seller-to-customer distance and promised delivery window',
        caption: 'From the team’s analysis: long distance with a short promise is the riskiest combination.',
      },
    ],
    visual: 'budget',
  },
  {
    slug: 'skillguard',
    title: 'SkillGuard: runtime checks for AI agent skills',
    context: 'Nebius x NVIDIA Global AI Hackathon',
    when: 'Oct 2026',
    role: 'Co-builder, team of two',
    summary:
      'A checkpoint that runs a skill an AI agent wrote for itself inside a sandbox, records what it actually does, and blocks the install when it misbehaves.',
    metrics: [
      { v: '7/100', l: 'static risk score: rated safe' },
      { v: '13/13', l: 'private-file reads caught at runtime' },
      { v: '$0.48', l: 'for 821 model calls, under hard caps' },
    ],
    stack: ['NVIDIA Nemotron', 'Nebius', 'OpenShell', 'Python'],
    question: 'Can you trust a skill an AI agent wrote for itself before it installs it?',
    lede: 'Before a personal AI agent installs a skill it wrote for itself, SkillGuard runs that skill in a sandbox, records what it actually does, and lets a person decide. Built with Jay Malhotra.',
    facts: [
      { label: 'My part', value: 'Co-builder on a team of two, focused on cost control and the model comparison' },
      { label: 'Context', value: 'Nebius x NVIDIA Global AI Hackathon, October 2026' },
      { label: 'Stack', value: 'NVIDIA Nemotron on Nebius Token Factory, NVIDIA OpenShell, Python' },
      { label: 'Tests', value: '1,058 in the offline suite' },
    ],
    problem: [
      'AI agents can now write their own skills: instructions and scripts they save and reuse. A skill that looks fine on paper can behave very differently once it runs.',
      'Static scanners read the source. They cannot see what a skill does when it executes.',
    ],
    myPart: [
      'Co-built the checkpoint: pause the skill an agent stages for itself, test it in a sandbox, and let a person approve or reject it with the evidence in front of them.',
      'Kept every model call under hard budget caps, with a ledger of each request and its estimated cost.',
      'Ran a matched comparison of NVIDIA Nemotron against Qwen on the same eight review cases.',
    ],
    results: [
      'A static scanner scored our unsafe test skill 7 out of 100 and rated it safe, the same score it gave the repaired version.',
      'At runtime, the same skill completed all twelve receipt tasks correctly while attempting thirteen reads of a private file, all denied by the sandbox. SkillGuard blocked the install.',
      '821 model requests across the project, including the final comparison, for $0.48 in total.',
      'Nemotron and Qwen both scored 7 of 8 and failed the same case, so the comparison does not show that either model is better.',
    ],
    limits: [
      'The supported profile is narrow: receipt skills in a fixed, isolated workspace. Small attack sets do not establish general safety.',
      'Cost figures are estimates from our own ledger, not provider invoices.',
    ],
    links: [
      { label: 'Demo video (2:44)', href: 'https://youtu.be/eZ9NVyEEMAI' },
      { label: 'Code on GitHub', href: 'https://github.com/JustJay7/skillguard' },
    ],
    media: [
      {
        kind: 'video',
        src: '/media/skillguard-walkthrough.mp4',
        w: 1120,
        h: 700,
        poster: '/media/skillguard-walkthrough.webp',
        alt: 'The SkillGuard walkthrough stepping through its stages',
        caption: 'The working app: catch the change, watch the agent, review the evidence, keep control.',
      },
      {
        kind: 'image',
        src: '/media/skillguard-watch.webp',
        w: 1400,
        h: 896,
        alt: 'Evidence from a sandbox run: the injected instruction and what the agent actually did',
        caption: 'Evidence from a sandbox run: the injected instruction, and what the agent actually did.',
      },
    ],
    visual: 'runlog',
  },
];
