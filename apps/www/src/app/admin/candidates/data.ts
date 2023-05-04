export type CitizenshipStatus =
  | 'CITIZEN'
  | 'PERMANENT_RESIDENT'
  | 'PERMANENT_RESIDENT_WIP'
  | 'WORK_PERMIT'
  | 'INELIGIBLE';

export interface Candidate {
  id: string;
  name: string;
  email: string;
  citizenship: CitizenshipStatus;
  num_years_exp: number;
  applications: number;
  classification: string;
  links: string[];
  locations: string[];
  skills: { name: string; num_years_exp: number }[];
}

export const candidateData: Candidate[] = [
  {
    id: '5ddd1c16-bf50-4fb7-8ab1-1ede035492e9',
    name: 'Andrea Kreiger',
    email: 'Elsie.Graham@hotmail.com',
    citizenship: 'CITIZEN',
    num_years_exp: 1,
    applications: 10,
    classification: 'Dev Ops Specialist',
    links: ['tedious-silo.com'],
    locations: ['Abbotsford', 'Agassiz', 'Oliver', 'Pemberton'],
    skills: [
      {
        name: 'PostgreSQL',
        num_years_exp: 3,
      },
      {
        name: 'Quality Assurance',
        num_years_exp: 1,
      },
      {
        name: 'RESTful API Development',
        num_years_exp: 4,
      },
      {
        name: 'TypeScript',
        num_years_exp: 1,
      },
      {
        name: 'Wimi',
        num_years_exp: 3,
      },
      {
        name: 'Scheme',
        num_years_exp: 3,
      },
      {
        name: 'Hugging Face Transformers',
        num_years_exp: 2,
      },
      {
        name: 'C',
        num_years_exp: 4,
      },
      {
        name: 'Scrum',
        num_years_exp: 1,
      },
      {
        name: 'Agile',
        num_years_exp: 1,
      },
    ],
  },
  {
    id: '892a80ca-88bc-4aa4-aba1-1f1a7a507f31',
    name: 'Bradford Altenwerth',
    email: 'Winnifred32@gmail.com',
    citizenship: 'INELIGIBLE',
    num_years_exp: 17,
    applications: 0,
    classification: 'Scrum Master Technical',
    links: ['bulky-recreation.info', 'enraged-alibi.name', 'unsteady-sorrow.com', 'sad-ovary.net'],
    locations: ['Merritt', 'Port Hardy', 'Squamish', 'Williams Lake'],
    skills: [
      {
        name: 'monday.com',
        num_years_exp: 1,
      },
      {
        name: 'TextMate',
        num_years_exp: 1,
      },
      {
        name: 'React Native',
        num_years_exp: 5,
      },
      {
        name: 'Neovim',
        num_years_exp: 5,
      },
      {
        name: 'Nuxt.js',
        num_years_exp: 2,
      },
      {
        name: 'Objective-C',
        num_years_exp: 4,
      },
      {
        name: 'Quality Assurance',
        num_years_exp: 2,
      },
      {
        name: 'Planview Projectplace or Clarizen',
        num_years_exp: 1,
      },
      {
        name: 'RESTful API Development',
        num_years_exp: 4,
      },
      {
        name: 'Python',
        num_years_exp: 2,
      },
    ],
  },
  {
    id: 'e99a93fa-bdd6-4c8a-8a7b-051906c33c81',
    name: 'Carlton Rutherford',
    email: 'Shannon14@hotmail.com',
    citizenship: 'PERMANENT_RESIDENT_WIP',
    num_years_exp: 17,
    applications: 5,
    classification: 'Product Manager',
    links: ['orderly-neck.com', 'criminal-toreador.name', 'incredible-speaking.biz'],
    locations: ['Clinton', 'Colwood', 'Hazelton', 'Valemount'],
    skills: [
      {
        name: 'Rust',
        num_years_exp: 2,
      },
      {
        name: 'Elasticsearch',
        num_years_exp: 3,
      },
      {
        name: 'Lua',
        num_years_exp: 4,
      },
      {
        name: 'iOS App Development',
        num_years_exp: 3,
      },
      {
        name: 'Flask',
        num_years_exp: 3,
      },
      {
        name: 'Fastify',
        num_years_exp: 3,
      },
      {
        name: 'Asana',
        num_years_exp: 4,
      },
      {
        name: 'Flow',
        num_years_exp: 4,
      },
      {
        name: 'Electron',
        num_years_exp: 5,
      },
      {
        name: 'Bash/Shell',
        num_years_exp: 5,
      },
    ],
  },
  {
    id: '13b39ccb-aa13-48fa-9a98-9b6685465185',
    name: 'Daisy Mueller',
    email: 'Ayla_Langworth78@gmail.com',
    citizenship: 'INELIGIBLE',
    num_years_exp: 15,
    applications: 10,
    classification: 'Senior User Experience Designer',
    links: ['unknown-jaw.info', 'real-directive.net'],
    locations: ['Barriere', 'Cache Creek', 'Campbell River', 'Valemount'],
    skills: [
      {
        name: 'Python',
        num_years_exp: 3,
      },
      {
        name: 'Microsoft Teams',
        num_years_exp: 1,
      },
      {
        name: 'Symphony',
        num_years_exp: 2,
      },
      {
        name: 'Oracle',
        num_years_exp: 5,
      },
      {
        name: 'PostgreSQL',
        num_years_exp: 5,
      },
      {
        name: 'Racket',
        num_years_exp: 3,
      },
      {
        name: 'PowerShell',
        num_years_exp: 4,
      },
      {
        name: 'Ionic',
        num_years_exp: 5,
      },
      {
        name: 'Apache Spark',
        num_years_exp: 1,
      },
      {
        name: 'monday.com',
        num_years_exp: 2,
      },
    ],
  },
  {
    id: '7deb7926-a4d6-4432-bf06-d3c059db9af9',
    name: 'Felipe Simonis',
    email: 'Marilou75@gmail.com',
    citizenship: 'PERMANENT_RESIDENT_WIP',
    num_years_exp: 15,
    applications: 8,
    classification: 'Product Manager',
    links: ['long-conflict.info', 'belated-internet.name', 'damaged-premise.org'],
    locations: ['Bella Coola', 'Chetwynd', 'Kootenay Lake', 'North Vancouver'],
    skills: [
      {
        name: 'Docker',
        num_years_exp: 1,
      },
      {
        name: 'Amazon Web Services',
        num_years_exp: 4,
      },
      {
        name: 'TypeScript',
        num_years_exp: 2,
      },
      {
        name: 'PureScript',
        num_years_exp: 2,
      },
      {
        name: 'PowerShell',
        num_years_exp: 1,
      },
      {
        name: 'Ansible',
        num_years_exp: 1,
      },
      {
        name: 'DigitalOcean',
        num_years_exp: 4,
      },
      {
        name: 'Android App Development',
        num_years_exp: 2,
      },
      {
        name: 'RStudio',
        num_years_exp: 5,
      },
      {
        name: 'Penetration Testing',
        num_years_exp: 4,
      },
    ],
  },
  {
    id: '3cfc8ab8-eb7e-4ebc-bbfa-79e681124fb6',
    name: 'Gerard Hackett',
    email: 'Rebeka24@yahoo.com',
    citizenship: 'PERMANENT_RESIDENT_WIP',
    num_years_exp: 13,
    applications: 8,
    classification: 'Site Reliability Specialist Lead',
    links: [],
    locations: ['Merritt', 'Nelson', 'Quesnel', 'White Rock'],
    skills: [
      {
        name: 'Adobe Creative Cloud',
        num_years_exp: 3,
      },
      {
        name: 'Rust',
        num_years_exp: 4,
      },
      {
        name: 'Microsoft Azure',
        num_years_exp: 4,
      },
      {
        name: 'Java',
        num_years_exp: 3,
      },
      {
        name: 'Erlang',
        num_years_exp: 2,
      },
      {
        name: 'Business Analysis',
        num_years_exp: 1,
      },
      {
        name: 'Angular',
        num_years_exp: 1,
      },
      {
        name: 'Gatsby',
        num_years_exp: 4,
      },
      {
        name: 'Amazon Web Services',
        num_years_exp: 5,
      },
      {
        name: 'Fortran',
        num_years_exp: 3,
      },
    ],
  },
  {
    id: 'fc3b8952-a819-4fbd-8bf9-6b6a5f591bc3',
    name: 'Glen Kuhn',
    email: 'Devyn41@yahoo.com',
    citizenship: 'INELIGIBLE',
    num_years_exp: 1,
    applications: 0,
    classification: 'Site Reliability Specialist',
    links: ['first-complicity.com', 'curvy-due.net'],
    locations: ['Chetwynd', 'Fort St John', 'Keremeos', 'Smithers'],
    skills: [
      {
        name: 'Firebase',
        num_years_exp: 4,
      },
      {
        name: 'Animation',
        num_years_exp: 4,
      },
      {
        name: 'Assembly',
        num_years_exp: 4,
      },
      {
        name: 'Tidyverse',
        num_years_exp: 2,
      },
      {
        name: 'COBOL',
        num_years_exp: 1,
      },
      {
        name: 'Design Systems',
        num_years_exp: 4,
      },
      {
        name: 'Coolfire Core',
        num_years_exp: 5,
      },
      {
        name: 'Angular',
        num_years_exp: 4,
      },
      {
        name: 'Asana',
        num_years_exp: 4,
      },
      {
        name: 'Back-End Development',
        num_years_exp: 1,
      },
    ],
  },
  {
    id: '9c0a8752-be7b-4b57-bd71-84c6efabe210',
    name: 'Grace Douglas',
    email: 'Karolann_Halvorson78@gmail.com',
    citizenship: 'WORK_PERMIT',
    num_years_exp: 13,
    applications: 5,
    classification: 'Full Stack Developer',
    links: [
      'educated-hundred.org',
      'tragic-kill.net',
      'known-randomization.name',
      'novel-sepal.net',
      'compassionate-outlaw.info',
    ],
    locations: ['Alexis Creek', 'Barriere', 'Houston', 'Vanderhoof'],
    skills: [
      {
        name: 'MongoDB',
        num_years_exp: 3,
      },
      {
        name: 'Groovy',
        num_years_exp: 5,
      },
      {
        name: 'Homebrew',
        num_years_exp: 2,
      },
      {
        name: 'IntelliJ',
        num_years_exp: 2,
      },
      {
        name: 'GoLand',
        num_years_exp: 5,
      },
      {
        name: '.NET',
        num_years_exp: 4,
      },
      {
        name: 'Rust',
        num_years_exp: 5,
      },
      {
        name: 'SAS',
        num_years_exp: 5,
      },
      {
        name: 'CLion',
        num_years_exp: 3,
      },
      {
        name: 'Google Chat',
        num_years_exp: 5,
      },
    ],
  },
  {
    id: 'b3f2fc54-0ba5-47da-a5c4-fe280aea6fd0',
    name: 'Jay Runte',
    email: 'Abagail_Altenwerth74@gmail.com',
    citizenship: 'PERMANENT_RESIDENT',
    num_years_exp: 21,
    applications: 8,
    classification: 'Site Reliability Specialist',
    links: ['personal-boolean.name', 'used-postfix.name', 'complex-ring.name', 'witty-homeland.org', 'runny-kayak.net'],
    locations: ['100 Mile House', 'Grand Forks', 'Port Alberni', 'Valemount'],
    skills: [
      {
        name: 'Neo4j',
        num_years_exp: 5,
      },
      {
        name: 'Symfony',
        num_years_exp: 2,
      },
      {
        name: 'Perl',
        num_years_exp: 5,
      },
      {
        name: 'Scheme',
        num_years_exp: 4,
      },
      {
        name: 'Wickr',
        num_years_exp: 2,
      },
      {
        name: 'SQLite',
        num_years_exp: 4,
      },
      {
        name: 'npm',
        num_years_exp: 4,
      },
      {
        name: 'Puppet',
        num_years_exp: 4,
      },
      {
        name: 'Vim',
        num_years_exp: 3,
      },
      {
        name: 'R',
        num_years_exp: 1,
      },
    ],
  },
  {
    id: 'f2092e51-e7f0-4e2c-8ab0-6361b371c61e',
    name: 'Jeffery Klein',
    email: 'Derrick.Cronin@yahoo.com',
    citizenship: 'INELIGIBLE',
    num_years_exp: 10,
    applications: 9,
    classification: 'Full Stack Developer',
    links: ['opulent-structure.org', 'clueless-leaker.info', 'growing-performance.info'],
    locations: ['Cache Creek', 'Castlegar', 'Clearwater', 'Fort St James'],
    skills: [
      {
        name: 'FastAPI',
        num_years_exp: 3,
      },
      {
        name: 'Microsoft Dynamics',
        num_years_exp: 4,
      },
      {
        name: 'Capacitor',
        num_years_exp: 3,
      },
      {
        name: 'Leankor',
        num_years_exp: 4,
      },
      {
        name: 'Docker',
        num_years_exp: 1,
      },
      {
        name: 'DingTalk (Teambition)',
        num_years_exp: 5,
      },
      {
        name: 'Design Systems',
        num_years_exp: 1,
      },
      {
        name: 'Flutter',
        num_years_exp: 4,
      },
      {
        name: 'Cassandra',
        num_years_exp: 2,
      },
      {
        name: 'Blazor',
        num_years_exp: 3,
      },
    ],
  },
  {
    id: '0e0692f9-7e03-4769-9d03-2ec9036461f5',
    name: 'Johnnie Jacobson',
    email: 'Nigel.OReilly75@hotmail.com',
    citizenship: 'WORK_PERMIT',
    num_years_exp: 21,
    applications: 10,
    classification: 'Full Stack Developer',
    links: [],
    locations: ['Nelson', 'Parksville', 'Port Moody', 'Powell River'],
    skills: [
      {
        name: 'Linode',
        num_years_exp: 3,
      },
      {
        name: 'PHP',
        num_years_exp: 2,
      },
      {
        name: 'Emacs',
        num_years_exp: 5,
      },
      {
        name: 'Julia',
        num_years_exp: 4,
      },
      {
        name: 'Firebase Realtime Database',
        num_years_exp: 4,
      },
      {
        name: 'Java',
        num_years_exp: 1,
      },
      {
        name: 'MATLAB',
        num_years_exp: 5,
      },
      {
        name: 'Kotlin',
        num_years_exp: 2,
      },
      {
        name: 'Illustration',
        num_years_exp: 5,
      },
      {
        name: 'Haskell',
        num_years_exp: 5,
      },
    ],
  },
  {
    id: '2bfca75c-e47b-4b20-8e2c-2d77229af0ef',
    name: 'Kerry Hilll',
    email: 'Victor.Nader@yahoo.com',
    citizenship: 'PERMANENT_RESIDENT',
    num_years_exp: 14,
    applications: 5,
    classification: 'Full Stack Developer',
    links: [
      'well-to-do-arcade.info',
      'unselfish-similarity.name',
      'obedient-restaurant.biz',
      'itchy-glance.biz',
      'doting-keyboard.net',
    ],
    locations: ['Atlin', 'Barriere', 'Maple Ridge', 'New Westminster'],
    skills: [
      {
        name: 'Svelte',
        num_years_exp: 1,
      },
      {
        name: 'DevOps',
        num_years_exp: 2,
      },
      {
        name: 'LMDB',
        num_years_exp: 1,
      },
      {
        name: 'Cisco Webex Teams',
        num_years_exp: 4,
      },
      {
        name: 'FastAPI',
        num_years_exp: 2,
      },
      {
        name: 'Domain-Specific Languages',
        num_years_exp: 1,
      },
      {
        name: '.NET',
        num_years_exp: 1,
      },
      {
        name: 'IntelliJ',
        num_years_exp: 3,
      },
      {
        name: 'CSS',
        num_years_exp: 3,
      },
      {
        name: 'Firebase Realtime Database',
        num_years_exp: 4,
      },
    ],
  },
  {
    id: '8132f891-01ac-4c7e-af42-3df3c92ed5aa',
    name: 'Lila Mosciski DDS',
    email: 'Keyon_Torphy@yahoo.com',
    citizenship: 'INELIGIBLE',
    num_years_exp: 5,
    applications: 10,
    classification: 'Product Manager',
    links: ['fearless-calf.org', 'artistic-mercury.net', 'trusting-cobweb.com'],
    locations: ['Chetwynd', 'Fort Nelson', 'Hope', 'Multiple Locations'],
    skills: [
      {
        name: 'Express',
        num_years_exp: 5,
      },
      {
        name: 'Lua',
        num_years_exp: 4,
      },
      {
        name: 'Gatsby',
        num_years_exp: 4,
      },
      {
        name: 'JavaScript',
        num_years_exp: 5,
      },
      {
        name: 'SASS',
        num_years_exp: 1,
      },
      {
        name: 'Erlang',
        num_years_exp: 1,
      },
      {
        name: 'OpenStack',
        num_years_exp: 3,
      },
      {
        name: 'React.js',
        num_years_exp: 1,
      },
      {
        name: 'FastAPI',
        num_years_exp: 5,
      },
      {
        name: 'LESS',
        num_years_exp: 3,
      },
    ],
  },
  {
    id: 'd8066c7d-c867-4d4e-a5bb-22e41da330e2',
    name: 'Miss Allen Jacobson',
    email: 'Linda38@hotmail.com',
    citizenship: 'WORK_PERMIT',
    num_years_exp: 18,
    applications: 10,
    classification: 'User Experience Designer',
    links: ['each-stopsign.info', 'monstrous-sideboard.biz', 'puzzling-maker.net', 'everlasting-snap.info'],
    locations: ['Atlin', 'Chilliwack', 'Kamloops', 'Smithers'],
    skills: [
      {
        name: 'Smartsheet',
        num_years_exp: 2,
      },
      {
        name: 'Android Studio',
        num_years_exp: 2,
      },
      {
        name: 'Cordova',
        num_years_exp: 4,
      },
      {
        name: 'Managed Hosting',
        num_years_exp: 3,
      },
      {
        name: 'Julia',
        num_years_exp: 4,
      },
      {
        name: 'Adobe Workfront',
        num_years_exp: 3,
      },
      {
        name: 'Fastify',
        num_years_exp: 5,
      },
      {
        name: 'Apache Spark',
        num_years_exp: 5,
      },
      {
        name: 'Figma',
        num_years_exp: 4,
      },
      {
        name: 'MATLAB',
        num_years_exp: 4,
      },
    ],
  },
  {
    id: '8d2c508e-a4ed-404a-a8db-f3b1999579a0',
    name: 'Ms. Stacy Jacobs',
    email: 'Kaylee40@gmail.com',
    citizenship: 'PERMANENT_RESIDENT',
    num_years_exp: 8,
    applications: 1,
    classification: 'Product Manager',
    links: ['accurate-cultivator.name', 'unused-fairy.org'],
    locations: ['100 Mile House', 'Barriere', 'Dawson Creek', 'Golden'],
    skills: [
      {
        name: 'Animation',
        num_years_exp: 4,
      },
      {
        name: 'Microsoft Dynamics',
        num_years_exp: 1,
      },
      {
        name: 'Kotlin',
        num_years_exp: 1,
      },
      {
        name: 'Android Studio',
        num_years_exp: 2,
      },
      {
        name: 'ASP.NET Core',
        num_years_exp: 4,
      },
      {
        name: 'Elm',
        num_years_exp: 4,
      },
      {
        name: 'Apache Spark',
        num_years_exp: 3,
      },
      {
        name: 'Data Analysis',
        num_years_exp: 1,
      },
      {
        name: 'Ruby on Rails',
        num_years_exp: 3,
      },
      {
        name: 'GoLand',
        num_years_exp: 4,
      },
    ],
  },
  {
    id: '0511f06a-6515-4d85-9060-749a6b38794c',
    name: 'Patty Hirthe',
    email: 'Eleazar.Dickens@yahoo.com',
    citizenship: 'PERMANENT_RESIDENT',
    num_years_exp: 24,
    applications: 5,
    classification: 'Dev Ops Specialist',
    links: [
      'feline-face.org',
      'rubbery-dance.name',
      'incomparable-instinct.name',
      'humongous-pipe.com',
      'worried-burning.info',
    ],
    locations: ['100 Mile House', 'Abbotsford', 'Grand Forks', 'Hazelton'],
    skills: [
      {
        name: 'F#',
        num_years_exp: 2,
      },
      {
        name: 'Hadoop',
        num_years_exp: 3,
      },
      {
        name: 'APL',
        num_years_exp: 4,
      },
      {
        name: 'Slack',
        num_years_exp: 2,
      },
      {
        name: 'Android Studio',
        num_years_exp: 2,
      },
      {
        name: 'Qt Creator',
        num_years_exp: 1,
      },
      {
        name: 'Nano',
        num_years_exp: 1,
      },
      {
        name: 'MongoDB',
        num_years_exp: 1,
      },
      {
        name: 'Figma',
        num_years_exp: 4,
      },
      {
        name: 'Rocketchat',
        num_years_exp: 4,
      },
    ],
  },
  {
    id: 'a58afb89-7328-43a8-b380-084fcae323b9',
    name: 'Roberto Gislason',
    email: 'Pasquale19@yahoo.com',
    citizenship: 'PERMANENT_RESIDENT_WIP',
    num_years_exp: 11,
    applications: 3,
    classification: 'Full Stack Developer',
    links: ['afraid-boot.org', 'gross-eviction.com'],
    locations: ['Alexis Creek', 'Ashcroft', 'Campbell River', 'Mission'],
    skills: [
      {
        name: 'Android Studio',
        num_years_exp: 5,
      },
      {
        name: 'Front-End Development',
        num_years_exp: 1,
      },
      {
        name: 'Functional Programming',
        num_years_exp: 3,
      },
      {
        name: 'LMDB',
        num_years_exp: 3,
      },
      {
        name: 'Go',
        num_years_exp: 1,
      },
      {
        name: 'Express',
        num_years_exp: 4,
      },
      {
        name: 'Ionic',
        num_years_exp: 2,
      },
      {
        name: 'Illustration',
        num_years_exp: 1,
      },
      {
        name: 'Elixir',
        num_years_exp: 2,
      },
      {
        name: 'iOS App Development',
        num_years_exp: 3,
      },
    ],
  },
  {
    id: '23cf5a9f-c15a-4aef-bdd3-262154335c06',
    name: 'Sally Lowe',
    email: 'Chauncey_Predovic65@gmail.com',
    citizenship: 'WORK_PERMIT',
    num_years_exp: 2,
    applications: 1,
    classification: 'Dev Ops Specialist',
    links: ['idolized-bloodflow.info', 'troubled-acupuncture.org'],
    locations: ['Alexis Creek', 'Langley', 'Pemberton', 'Powell River'],
    skills: [
      {
        name: 'monday.com',
        num_years_exp: 2,
      },
      {
        name: 'Notepad++',
        num_years_exp: 5,
      },
      {
        name: 'Racket',
        num_years_exp: 5,
      },
      {
        name: 'SAS',
        num_years_exp: 2,
      },
      {
        name: 'Tidyverse',
        num_years_exp: 3,
      },
      {
        name: 'Ruby on Rails',
        num_years_exp: 1,
      },
      {
        name: 'Microsoft Teams',
        num_years_exp: 5,
      },
      {
        name: 'Wireframing',
        num_years_exp: 5,
      },
      {
        name: 'Terraform',
        num_years_exp: 2,
      },
      {
        name: 'npm',
        num_years_exp: 2,
      },
    ],
  },
  {
    id: 'a5dead4b-275f-40cb-9c7d-3252563483e8',
    name: 'Stephen Kemmer',
    email: 'Alexander92@gmail.com',
    citizenship: 'INELIGIBLE',
    num_years_exp: 20,
    applications: 8,
    classification: 'Full Stack Developer',
    links: ['precious-witch-hunt.info', 'phony-necessity.net', 'monstrous-macrame.org'],
    locations: ['Hope', 'Invermere', 'Langley', 'Penticton'],
    skills: [
      {
        name: 'Microsoft Dynamics',
        num_years_exp: 3,
      },
      {
        name: 'Smartsheet',
        num_years_exp: 5,
      },
      {
        name: 'Unity 3D',
        num_years_exp: 1,
      },
      {
        name: 'Unify Circuit',
        num_years_exp: 2,
      },
      {
        name: 'Android App Development',
        num_years_exp: 5,
      },
      {
        name: 'Apache Kafka',
        num_years_exp: 5,
      },
      {
        name: 'Spyder',
        num_years_exp: 1,
      },
      {
        name: 'Windows',
        num_years_exp: 4,
      },
      {
        name: 'Deno',
        num_years_exp: 4,
      },
      {
        name: 'Atom',
        num_years_exp: 1,
      },
    ],
  },
  {
    id: '51603aa1-5b90-4226-a02c-1f7a147f48c4',
    name: 'Valerie Parisian',
    email: 'Salvador46@yahoo.com',
    citizenship: 'PERMANENT_RESIDENT_WIP',
    num_years_exp: 9,
    applications: 0,
    classification: 'User Experience Designer',
    links: ['impolite-claw.biz', 'wavy-field.net', 'mortified-infrastructure.net', 'shocked-volcano.net'],
    locations: ['Alexis Creek', 'Campbell River', 'Keremeos', 'Salt Spring Island'],
    skills: [
      {
        name: 'Go',
        num_years_exp: 1,
      },
      {
        name: 'Trello',
        num_years_exp: 4,
      },
      {
        name: 'Next.js',
        num_years_exp: 1,
      },
      {
        name: 'Play Framework',
        num_years_exp: 2,
      },
      {
        name: 'Object-Oriented Programming',
        num_years_exp: 2,
      },
      {
        name: 'Perl',
        num_years_exp: 4,
      },
      {
        name: 'Pandas',
        num_years_exp: 4,
      },
      {
        name: 'Microsoft Lists',
        num_years_exp: 1,
      },
      {
        name: 'RAD Studio (Delphi, C++ Builder)',
        num_years_exp: 1,
      },
      {
        name: 'Microsoft Dynamics',
        num_years_exp: 3,
      },
    ],
  },
];
