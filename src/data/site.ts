// Everything about Tasnim that appears in more than one place lives here.
// Edit this file (and projects.ts) to update the site; the layout reads from them.

export const site = {
  name: 'Tasnim Hassan',
  first: 'Tasnim',
  role: 'Data science and AI',
  headline: 'Data science and AI, backed by four years in finance.',
  intro:
    'I build models and data products that answer business questions. Before my Master of Management in Analytics at McGill, I spent four years in finance in London at Informa, Stagwell and KPMG, so I know what decision-makers need from the numbers.',
  looking: 'Looking for roles in data science, technology consulting, strategy and digital transformation.',
  status:
    'Graduating from McGill in August 2027. Looking for roles in data science, technology consulting, strategy and digital transformation.',
  location: 'Montreal',
  eligibility: 'No sponsorship required',
  description:
    'Tasnim Hassan: data science and AI, backed by four years in finance at Informa, Stagwell and KPMG. McGill MMA. Looking for roles in data science, technology consulting, strategy and digital transformation.',
  email: 'tasnim.hassan@mail.mcgill.ca',
  linkedin: 'https://www.linkedin.com/in/tasnimhassan/',
  github: 'https://github.com/tasnimrh',
  repo: 'https://github.com/tasnimrh/tasnimrh.github.io',
  resume: '/Tasnim_Hassan_Resume.pdf',
  photo: '/tasnim.jpg',
};

// The numbers strip under the hero. Each one is backed by a project or the resume.
export const stats = [
  { figure: '36%', label: 'of late deliveries caught by checking 10% of orders', href: '/work/olist-late-delivery/' },
  { figure: '$0.48', label: 'for 821 model calls in an AI safety build', href: '/work/skillguard/' },
  { figure: '£70M', label: 'portfolio reported monthly at Informa', href: '#experience' },
  { figure: '4.0', label: 'GPA in McGill’s Master of Management in Analytics', href: '#education' },
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
        title: 'Team lead and solutions architect',
        when: 'Sep 2026 to present',
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
        when: 'May 2024 to Sep 2025',
        points: [
          'Owned month-end P&L and cash flow reporting for a £70M multi-entity portfolio, ensuring statutory compliance.',
          'Partnered with the CFO and 7+ cost centre heads to strengthen cost control and forecast accuracy.',
          'Built budgeting, forecasting and KPI tracking in SAP and TM1, improving reporting efficiency.',
        ],
      },
      {
        title: 'Interim Business Controller',
        when: 'Sep 2023 to Apr 2024',
        points: [
          'Directed end-to-end financial operations of a £30M business unit through a leadership transition.',
          'Delivered a 3-day IFRS close across P&L, balance sheet and cash flow; enforced accrual, VAT and CAPEX policy.',
          'Developed budgets, 3-year strategic models and incentive frameworks, improving forecast accuracy by 15%.',
        ],
      },
      {
        title: 'Graduate Finance Analyst',
        when: 'Aug 2022 to Aug 2023',
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
        when: 'Jan 2022 to Jul 2022',
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
        when: 'Jun 2021 to Aug 2021',
        points: ['Conducted benchmarking, data analysis and market research informing client transformation strategy.'],
      },
    ],
  },
];

export const education = [
  {
    org: 'McGill University, Desautels Faculty of Management',
    degree: 'Master of Management in Analytics',
    when: 'Jul 2026 to Aug 2027',
    detail: 'GPA 4.0/4.0. Entrance Scholarship. Coursework in enterprise data science, AI and deep learning, and multivariate statistics.',
  },
  {
    org: 'De Montfort University',
    degree: 'BA (Hons) Business Management and Finance',
    when: 'Sep 2018 to Jun 2021',
    detail: "First-Class Honours, top of cohort in major. Dean's List. DMU International Scholarship. Teaching assistant.",
  },
];

export const leadership = [
  {
    org: 'Thinkr Consulting',
    role: 'Consultant',
    when: 'Sep 2026 to present',
    text: 'Data-driven recommendations for OsteoVie, a multidisciplinary wellness clinic in Montreal.',
  },
  {
    org: 'McGill Case Competition Association',
    role: 'Vice President, Finance',
    when: 'Sep 2026 to present',
    text: 'Budgeting, sponsorship funds and spending for case competitions with universities worldwide.',
  },
  {
    org: 'Desautels Graduate Women’s Association',
    role: 'MMA Representative',
    when: 'Sep 2026 to present',
    text: 'Represents MMA students and co-organizes networking and leadership events for women in business.',
  },
];

export const certifications = [
  { name: 'AI Fluency: Framework and Foundations', by: 'Anthropic', when: 'Oct 2026' },
  { name: 'AWS Cloud Practitioner Essentials', by: 'Amazon Web Services', when: 'Oct 2026' },
  { name: 'Databricks Fundamentals accreditation', by: 'Databricks', when: 'Oct 2026' },
];

export const toolkit = [
  { group: 'Data and ML', items: ['Python', 'pandas', 'scikit-learn', 'R', 'SQL', 'Spark', 'Kafka', 'Docker', 'Git'] },
  { group: 'BI and reporting', items: ['Power BI', 'Tableau', 'Advanced Excel'] },
  { group: 'Finance systems', items: ['SAP', 'TM1', 'Salesforce', 'Sage'] },
];
