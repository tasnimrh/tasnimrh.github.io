// Everything about Tasnim that appears in more than one place lives here.
// Edit this file (and projects.ts) to update the site; the layout reads from them.

export const site = {
  name: 'Tasnim Hassan',
  role: 'Analytics and AI',
  lead: 'I build machine learning and analytics for business decisions. Four years in corporate finance at Informa, Assembly Global and KPMG taught me what decision-makers need from the numbers.',
  looking: 'Open to roles in data science, technology consulting, strategy and digital transformation.',
  description:
    'Tasnim Hassan builds machine learning and analytics for business decisions, backed by four years in corporate finance at Informa, Assembly Global and KPMG. McGill MMA, graduating August 2027.',
  email: 'tasnim.hassan@mail.mcgill.ca',
  linkedin: 'https://www.linkedin.com/in/tasnimhassan/',
  github: 'https://github.com/tasnimrh',
  repo: 'https://github.com/tasnimrh/tasnimrh.github.io',
  resume: '/Tasnim_Hassan_Resume.pdf',
  photo: '/tasnim.jpg',
};

// The first-glance facts. Recruiters check title, company, dates and education first,
// so these sit on the first screen.
export const glance = [
  { k: 'Now', v: 'MMA candidate, McGill Desautels', d: 'GPA 4.0. Team lead on the Novartis capstone.' },
  { k: 'Before', v: 'Finance Analyst, Informa', d: 'London, 2022 to 2025. Also Assembly Global and KPMG.' },
  { k: 'Status', v: 'Based in Montreal', d: 'No sponsorship required. Graduating August 2027.' },
];

// The numbers strip. Each one is backed by a project or the resume.
export const stats = [
  { to: 36.1, dec: 1, suf: '%', label: 'of late deliveries caught by reviewing the riskiest 10% of orders', href: '/work/olist-late-delivery/' },
  { to: 13, dec: 0, suf: '/13', label: 'private-file reads caught at runtime in an AI skill a static scanner rated safe', href: '/work/skillguard/' },
  { to: 70, dec: 0, pre: '£', suf: 'M', label: 'multi-entity portfolio reported each month at Informa', href: '#experience' },
  { to: 15, dec: 0, suf: '%', label: 'better forecast accuracy from budgets and three-year models', href: '#experience' },
];

export type Role = { title: string; when: string; points: string[] };
export type Job = { org: string; parent?: string; place: string; roles: Role[] };

export const experience: Job[] = [
  {
    org: 'McGill University x Novartis',
    parent: 'MMA capstone project',
    place: 'Montreal',
    roles: [
      {
        title: 'Team Lead and Solutions Architect',
        when: 'Sep 2026 – Present',
        points: [
          'Leading a team of four building an AI-powered sales analytics solution for Novartis Pharma Canada: HCP segmentation, territory optimization and field activity insights in one dashboard.',
          'Designing the solution architecture across data, modelling and BI. Leading client meetings and owning the statement of work, scope and timelines.',
        ],
      },
    ],
  },
  {
    org: 'Informa Connect',
    parent: 'Informa PLC',
    place: 'London',
    roles: [
      {
        title: 'Finance Analyst',
        when: 'May 2024 – Sep 2025',
        points: [
          'Owned month-end P&L and cash flow reporting for a £70M multi-entity portfolio, ensuring statutory compliance.',
          'Partnered with the CFO and 7+ cost centre heads to strengthen cost control and forecast accuracy.',
          'Built budgeting, forecasting and KPI tracking in SAP and TM1, improving reporting efficiency.',
        ],
      },
      {
        title: 'Interim Business Controller',
        when: 'Sep 2023 – Apr 2024',
        points: [
          'Directed end-to-end financial operations of a £30M business unit through a leadership transition.',
          'Delivered a 3-day IFRS close across P&L, balance sheet and cash flow; enforced accrual, VAT and CAPEX policy.',
          'Developed budgets, 3-year strategic models and incentive frameworks, improving forecast accuracy by 15%.',
        ],
      },
      {
        title: 'Graduate Finance Analyst',
        when: 'Aug 2022 – Aug 2023',
        points: ['Standardized planning and performance reporting across business units, building TM1 and Power BI solutions.'],
      },
    ],
  },
  {
    org: 'Assembly Global',
    parent: 'Stagwell Inc.',
    place: 'London',
    roles: [
      {
        title: 'Finance Associate',
        when: 'Jan 2022 – Jul 2022',
        points: [
          'Managed multi-entity balance sheet reconciliations, resolving intercompany discrepancies ahead of audit.',
          'Consolidated trial balances into reporting packs and variance analysis for leadership performance reviews.',
        ],
      },
    ],
  },
  {
    org: 'KPMG UK',
    place: 'London',
    roles: [
      {
        title: 'Consulting Summer Intern',
        when: 'Jun 2021 – Aug 2021',
        points: [
          'Conducted benchmarking, data analysis and market research informing client transformation strategy.',
          'Supported consultants across workstreams on business transformation, risk assessment and audit readiness.',
        ],
      },
    ],
  },
];

export const education = [
  {
    org: 'McGill University, Desautels Faculty of Management',
    degree: 'Master of Management in Analytics',
    when: '2026 – 2027',
    detail: 'GPA 4.0/4.0. Entrance Scholarship. Enterprise data science, AI and deep learning, multivariate statistics.',
  },
  {
    org: 'De Montfort University',
    degree: 'BA (Hons) Business Management and Finance',
    when: '2018 – 2021',
    detail: "First-Class Honours, top of cohort in major. Dean's List. DMU International Scholarship. Teaching assistant.",
  },
];

export const leadership = [
  { org: 'McGill Case Competition Association', role: 'Vice President, Finance', when: '2026 – Present' },
  { org: 'Thinkr Consulting', role: 'Consultant, OsteoVie engagement', when: '2026 – Present' },
  { org: 'Desautels Graduate Women’s Association', role: 'MMA Representative', when: '2026 – Present' },
];

export const capabilities = [
  { area: 'Modelling', items: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'R', 'Statistics'] },
  { area: 'Data', items: ['SQL', 'Spark', 'Kafka', 'Databricks'] },
  { area: 'BI and reporting', items: ['Power BI', 'Tableau', 'Advanced Excel'] },
  { area: 'Finance systems', items: ['SAP', 'TM1', 'Salesforce', 'Sage'] },
  { area: 'Tooling', items: ['Docker', 'Git', 'Matplotlib', 'Seaborn'] },
];

export const certifications = [
  { name: 'AI Fluency: Framework and Foundations', by: 'Anthropic', when: 'Oct 2026' },
  { name: 'AWS Cloud Practitioner Essentials', by: 'Amazon Web Services', when: 'Oct 2026' },
  { name: 'Databricks Fundamentals', by: 'Databricks', when: 'Oct 2026' },
];

// Work in progress, shown under the case studies. No results are claimed until they exist.
export const ongoing = [
  {
    title: 'Sales analytics for Novartis Pharma Canada',
    context: 'McGill capstone with Novartis, Sep 2026 to present',
    role: 'Team lead and solutions architect, team of four',
    text: 'An AI-powered sales analytics solution: HCP segmentation, territory optimization and field activity insights in one decision-ready dashboard. I own the solution architecture, the client meetings and the statement of work.',
    stack: [] as string[],
  },
  {
    title: 'Origin: finding the change that caused a bug',
    context: 'Atlassian Codegeist 2026 hackathon, Nov 2026 to present',
    role: 'Project lead, team of two',
    text: 'A Jira and Bitbucket app. When a bug fix is merged, it traces the fixed lines back through the code history to the pull request that introduced the bug, then suggests the affected releases and any maintained branches still missing the fix. Nothing is written to Jira until a person confirms. Accuracy will be measured against a published dataset of developer-labelled bug origins.',
    stack: ['Atlassian Forge', 'Jira', 'Bitbucket'],
  },
];
