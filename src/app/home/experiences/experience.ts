export interface Experience {
    enterprise: string;
    job: string;
    date: string;
    description: string[];
    stack: string[];
    link: string;
}

export const EXPERIENCES: Experience[] = [
    {
        enterprise: 'Assystem',
        job: 'Ingénieur FullStack',
        date: 'Septembre 2025 - Présent',
        description: [
            "Coordination des parties prenantes (métier, technique, externe)",
            "Suivi Agile des projets (planning, risques, livrables)",
            "Reporting hiérarchique (comptes rendus, plans d’action)",
            "Spécifications fonctionnelles et techniques (user stories, maquettes)",
            "Traduction des besoins métiers en solutions priorisées",
            "Conception & développement applicatif (front‑end, back‑end, API)",
            "Tests & documentation technique (unitaires, fonctionnels)",
            "Migrations applicatives (analyse d’impact, refonte technique)"
        ],
        stack: [
            'Angular/VueJs',
            'Python/(django-fastApi)',
            'Java/Spring Boot',
            'Pytest/JUnit',
            'PostgreSQL',
        ],
        link: 'https://www.assystem.com/fr/',
    },
    {
        enterprise: 'Paratonnerres',
        job: 'Développeur Full Stack',
        date: 'Avril 2025 - Septembre 2025',
        description: [
            "Développement Java/Angular de composants logiciels exposant des services REST",
            "Application desktop JavaFX/Spring pour l’analyse de risque foudre",
            "Architecture modulaire avec interface graphique et services REST en Spring",
            "Gestion des licences (PostgreSQL, Spring Boot, Angular)",
            "Pipeline CI/CD automatisé sur GitLab",
            "Notifications temps réel via RabbitMQ"
        ],
        stack: [
            'Angular',
            'Java/Spring Boot/JavaFX',
            'JUnit',
            'Hostinger',
            'GitHub Actions',
            'RabbitMQ',
            'PostgreSQL / SQLite',
        ],
        link: 'https://france-paratonnerres.com/',
    },
    {
        enterprise: 'MBOA DIGITAL',
        job: 'Développeur Full Stack',
        date: 'Avril 2024 - Août 2024',
        description: [
            "Développement d'une application de gestion d'un espace de coworking",
            "Gestion des réservations, souscriptions, produits et sessions",
            "Modélisation des données et des processus de paiement",
            "Mise en place de tests unitaires et systèmes",
            "Conception d’une architecture cloud évolutive basée sur AWS (serverless)",
            "Mise en place d’une chaîne CI/CD avec Bitbucket Pipelines"
        ],
        stack: [
            'Angular',
            'NestJS',
            'JestJS',
            'AWS (SQS, SNS, S3, Lambda, CloudFront)',
            'Bitbucket Pipelines',
            'Jira',
        ],
        link: 'https://mboadigital.tech/home',
    },
    {
        enterprise: 'Saint Jean',
        job: 'Assistant DSI',
        date: 'Septembre 2022 - Mars 2024',
        description: [
            "Conteneurisation et orchestration avec Docker",
            "Déploiement et configuration d'un serveur Moodle local",
            "Assistance à la gestion des équipes et des projets",
            "Supervision de développeurs juniors"
        ],
        stack: [
            'Java/Spring Boot',
            'Angular',
            'TailwindCSS',
            'Ionic',
            'Node.js',
            'Docker',
            'Moodle',
        ],
        link: 'https://institutsaintjean.org/',
    },
    {
        enterprise: 'Fond Routier',
        job: 'Technicien stagiaire / Développeur Full Stack',
        date: 'Juin 2021 - Août 2021',
        description: [
            "Application web Angular/Django pour automatiser les cours théoriques d’auto‑école",
            "Interface utilisateur & logique métier (intégration des modules pédagogiques côté serveur)",
            "Configuration des boîtes mail Outlook de l’entreprise",
            "Extension du réseau LAN et optimisation de l’infrastructure",
            "Support au parc informatique (maintenance et assistance)",
            "Installation de caméras de surveillance"
        ],
        stack: ["Angular", "Python / Django", "SQL"],
        link: 'https://fondsroutiercameroun.org/',
    },
    {
        enterprise: 'Fagiciel',
        job: 'Développeur PHP natif',
        date: 'Juin 2019 - Août 2019',
        description: [
            "Développement d’une application de gestion des arrivées des employés",
            "Connexion à la base de données",
            "Modélisation (UML - Merise)"
        ],
        stack: ['PHP', 'HTML', 'phpMyAdmin'],
        link: 'http://fagiciel.com/',
    }
];
