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
  kicker: string; // short label above the title on the home page
  question: string; // the business question, in plain words
  answer: string; // the one-line answer, shown on the home page
  summary: string;
  when: string;
  facts: { label: string; value: string }[];
  problem: string[];
  myPart: string[];
  results: string[];
  limits: string[];
  links: { label: string; href: string }[];
  media?: Media[];
  budget?: boolean; // show the interactive review-budget chart
};

export const projects: Project[] = [
  {
    slug: 'olist-late-delivery',
    title: 'Predicting late deliveries',
    kicker: 'Olist e-commerce, McGill Enterprise Data Science',
    question: 'If operations can only check a few orders a day, which ones should they check?',
    answer: 'Checking the riskiest 10% of orders catches 36% of late deliveries. Random checks catch 10%.',
    summary:
      'A model that flags e-commerce orders likely to arrive after the promised date, using only what is known when the order is approved. I owned the tuning, the ensemble tests and the final evaluation on the held-out test set.',
    when: 'Fall 2026',
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
      'Ran 90 randomized-search trials across three models (40 logistic regression, 20 random forest, 30 gradient boosting), treating data-preparation choices such as rare-category grouping and class weighting as settings to tune.',
      'Found that the purchase month was hurting, not helping. With only 15 months of data, it recorded which period was bad rather than seasonality: February was 3.0% late in 2017 and 14.1% in 2018. Dropping it did more than all the tuning.',
      'Tested four voting ensembles. Before looking at results, we fixed the rule: a more complex model replaces the logistic regression only if it wins on 4 of 5 folds by more than one standard error. None passed. The best one tied.',
      'Locked the final model, then opened the test set once: April to July 2018, 21,333 orders. Compared it with a random baseline and a two-feature baseline, with a paired bootstrap to check whether the gains were real.',
    ],
    results: [
      'Checking the riskiest 10% of orders catches 316 of the 876 late ones in the test period (36.1%). Random checks catch 10.2%, and a two-feature baseline 33.6%.',
      'The final model beats both baselines on every metric: PR-AUC 0.126 against 0.109 for the two-feature baseline, a gain of 0.017 (95% CI 0.006 to 0.027).',
      'The winner is also the simplest candidate: a tuned logistic regression that fits in about a second and whose coefficients can be explained to an operations team.',
    ],
    limits: [
      'Most of the value comes from two facts: how long the delivery promise is, and which state the order ships to. At the 10% budget, the gain over the two-feature baseline is 2.5 points with a 95% interval of -0.4 to 4.8, so it may be noise.',
      'Lateness comes in system-wide waves that the model cannot see coming.',
      'After the first test run, the team agreed to leave a gap between training and test data, as in cross-validation. It lowered the score slightly. Both runs are kept in the notebook.',
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
        caption: 'From the team’s analysis: far away with a short promise is the riskiest corner.',
      },
    ],
    budget: true,
  },
  {
    slug: 'skillguard',
    title: 'SkillGuard',
    kicker: 'Nebius x NVIDIA Global AI Hackathon',
    question: 'Can you trust a skill an AI agent wrote for itself before it installs it?',
    answer: 'It blocked an unsafe skill that NVIDIA’s static scanner rated safe, for under $0.50 in model calls.',
    summary:
      'Before a personal AI agent installs a skill it wrote for itself, SkillGuard runs that skill in a sandbox, records what it actually does, and lets a person decide. Built with Jay Malhotra in a team of two.',
    when: 'Oct 2026',
    facts: [
      { label: 'My part', value: 'Co-builder on a team of two, with a focus on cost control and the model comparison' },
      { label: 'Context', value: 'Nebius x NVIDIA Global AI Hackathon, October 2026' },
      { label: 'Stack', value: 'NVIDIA Nemotron on Nebius Token Factory, NVIDIA OpenShell, Python' },
      { label: 'Outcome', value: 'Blocked a skill that static checks rated safe. 1,058 tests.' },
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
      'At runtime the same skill got all twelve receipt tasks right while attempting thirteen reads of a private file, all denied by the sandbox. SkillGuard blocked the install.',
      '821 model requests across the whole project, including the final model comparison, for $0.48 in total under hard budget caps.',
      'Nemotron and Qwen both scored 7 of 8 and failed the same case, so the comparison does not show one model is better.',
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
        caption: 'The real app: catch the change, watch the agent, review the evidence, keep control.',
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
  },
];
