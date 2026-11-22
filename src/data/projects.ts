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

import type { Log } from '../components/RunLog.astro';

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
  visual: 'budget' | 'runlog' | 'pipeline';
  log?: Log;
};

export const projects: Project[] = [
  {
    slug: 'olist-late-delivery',
    title: 'Late-delivery risk at order approval',
    context: 'Olist e-commerce, McGill Enterprise Data Science',
    when: 'Fall 2026',
    role: 'Model tuning, ensembles and final evaluation, team of seven',
    summary:
      'A late order earns 2.2 stars; an on-time one, 4.3. This model ranks orders by late-arrival risk at approval, so a small operations team reviews the right orders before the customer is let down.',
    metrics: [
      { v: '36.1%', l: 'of late orders caught at a 10% review budget' },
      { v: '6.8', l: 'reviews per late order caught, against 24 at random' },
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
      'In operations terms: at the 10% budget, the team reviews 6.8 orders for every late order it catches, against 24 under random review. Reviewing pays off whenever preventing one late delivery is worth more than about seven reviews.',
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
  {
    slug: 'kafka-spark-streaming',
    title: 'Streaming pipeline: Kafka to Spark, verified end to end',
    context: 'McGill Enterprise ML in Production',
    when: 'Nov 2026',
    role: 'Solo: code, infrastructure and verification',
    summary:
      'A 2022 course pipeline no longer ran on 2026 platforms. I rebuilt it on Confluent Cloud and Databricks with a registered Avro contract, and proved every event arrived exactly once.',
    metrics: [
      { v: '32/32', l: 'events landed, from three producers' },
      { v: '0', l: 'duplicates, checked by event id' },
      { v: '9', l: 'breaking issues fixed in the 2022 code' },
    ],
    stack: ['Kafka', 'Avro', 'Spark Structured Streaming', 'Databricks', 'Delta Lake'],
    question: 'When events flow in from three different producers, how do you prove none were lost or duplicated?',
    lede: 'I rebuilt a Kafka and Spark course pipeline that no longer ran, gave it a data contract, and ended it with a check that compares what was sent with what landed.',
    facts: [
      { label: 'My part', value: 'Solo: all code, cloud setup and verification' },
      { label: 'Context', value: 'McGill INSY 684 Enterprise Machine Learning in Production, November 2026' },
      { label: 'Platforms', value: 'Confluent Cloud (Basic cluster, 6 partitions), Databricks Free Edition on serverless compute' },
      { label: 'Stack', value: 'PySpark, confluent-kafka 2.16.1, Avro, Schema Registry, Delta Lake' },
    ],
    problem: [
      'The provided notebook was written for Databricks Community Edition, which has since been retired. On serverless compute its streaming queries were rejected, one configuration line was not valid Python, and API keys sat in plain text in every cell.',
      'Worse, the streaming job read a topic and wrote back into the same topic, so every run doubled the data. A pipeline like that looks fine in a demo and corrupts every report built on it.',
    ],
    myPart: [
      'Designed a CustomerEvent Avro schema and registered it in Confluent Schema Registry as the contract between producers and consumers. An enum rejects a misspelled event type at write time, a UUID per event makes duplicates detectable, and optional fields keep the schema able to evolve.',
      'Wrote helpers so Spark writes the same Confluent wire format (magic byte plus schema id) as the official Python client, so every message decodes both in Confluent and in Spark.',
      'Produced events three ways: a Spark batch write, an idempotent Python producer with acks=all, and a Structured Streaming job fed by arriving files. Consumed them as a stream into a Delta table, with checkpoints and the availableNow trigger that serverless compute supports.',
      'Moved credentials into a Databricks secret scope and broke the feedback loop by landing the consumer stream in Delta instead of the source topic.',
    ],
    results: [
      'All 32 events landed: 3 from the Spark batch job, 9 from the Python producer and 20 from the stream, with 0 duplicates and a single schema id across all of them.',
      'The notebook stops with an error if any count does not match, so silent data loss halts the run instead of reaching a report.',
      'No credentials appear in the notebook, its export or the screenshots.',
    ],
    limits: [
      'Synthetic customer events at small scale. It shows correctness and pipeline design, not throughput.',
      'Spark’s Kafka sink delivers at least once. Duplicates are detectable by event id, but downstream de-duplication is not built yet.',
      'The availableNow trigger processes on demand. A low-latency version would run it as a scheduled job.',
    ],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/tasnimrh/kafka-spark-streaming' }],
    media: [
      {
        kind: 'image',
        src: '/media/kafka-verification.webp',
        w: 1448,
        h: 937,
        alt: 'Databricks notebook output: every verification check passes',
        caption: 'The last cell of the notebook: what each producer sent against what landed in Delta.',
      },
      {
        kind: 'image',
        src: '/media/kafka-confluent-topic.webp',
        w: 1550,
        h: 936,
        alt: 'Confluent Cloud topic databricks_test showing 32 Avro messages decoded as readable fields',
        caption: 'Confluent Cloud decodes every message as readable fields because each one carries the registered schema.',
      },
    ],
    visual: 'pipeline',
    log: {
      top: ['kafka to spark / verification run', '12 nov 2026'],
      flow: ['produce', 'kafka', 'spark', 'delta'],
      caption: 'Every event sent was counted again where it landed.',
      rows: [
        { k: 'Spark batch write', v: '3 / 3', s: 'landed', tone: 'muted' },
        { k: 'Python producer, idempotent', v: '9 / 9', s: 'landed', tone: 'muted' },
        { k: 'Spark Structured Streaming', v: '20 / 20', s: 'landed', tone: 'muted' },
        { k: 'Duplicates by event id', v: '0', s: 'pass', tone: 'ok' },
        { k: 'End-to-end check', v: '32 / 32', s: 'pass', tone: 'ok' },
      ],
    },
  },
];
