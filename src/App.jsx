import { useState, useEffect } from "react";
import "./App.css";

// Expertise tags with tooltips
const expertiseTags = {
  nl: [
    { name: "Python", tooltip: "Mijn favoriete programmeertaal voor AI en data science projecten" },
    { name: "RAG", tooltip: "Retrieval Augmented Generation: AI die antwoorden baseert op jouw eigen documenten" },
    { name: "LLMs", tooltip: "Large Language Models zoals ChatGPT en Claude, de motor achter moderne AI-assistenten" },
    { name: "AI Agents", tooltip: "Autonome AI-systemen die taken zelfstandig kunnen uitvoeren" },
    { name: "Vector Databases", tooltip: "Databases voor semantisch zoeken in grote hoeveelheden tekst" },
    { name: "Prompt Engineering", tooltip: "De kunst van het schrijven van effectieve AI-instructies" },
    { name: "Google Cloud", tooltip: "Cloud platform voor schaalbare en veilige AI-oplossingen" },
    { name: "Docker", tooltip: "Containerisatie voor consistente en reproduceerbare deployments" },
    { name: "Cloud Security", tooltip: "Beveiligingsmaatregelen voor data en systemen in de cloud" },
  ],
  en: [
    { name: "Python", tooltip: "My go-to programming language for AI and data science projects" },
    { name: "RAG", tooltip: "Retrieval Augmented Generation: AI that answers based on your own documents" },
    { name: "LLMs", tooltip: "Large Language Models like ChatGPT and Claude, the engine behind modern AI assistants" },
    { name: "AI Agents", tooltip: "Autonomous AI systems that can execute tasks independently" },
    { name: "Vector Databases", tooltip: "Databases for semantic search across large amounts of text" },
    { name: "Prompt Engineering", tooltip: "The art of writing effective AI instructions" },
    { name: "Google Cloud", tooltip: "Cloud platform for scalable and secure AI solutions" },
    { name: "Docker", tooltip: "Containerization for consistent and reproducible deployments" },
    { name: "Cloud Security", tooltip: "Security measures for data and systems in the cloud" },
  ],
};

// Translations
const translations = {
  nl: {
    nav: {
      over: "Over",
      werk: "Werk",
      aanpak: "Aanpak",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      label: "AI Engineer",
      title: "Ik bouw AI-systemen die ",
      highlight: "kennis toegankelijk",
      titleEnd: " maken",
      subtitle: "Van complexe documentatie naar betrouwbare antwoorden. Voor teams die vertrouwen op expertise en helderheid.",
      cta: "Neem contact op",
      ctaSecondary: "Bekijk werk →",
      scroll: "Scroll",
    },
    about: {
      label: "Over mij",
      title: "AI Engineer die techniek én business begrijpt",
      text1: "Met meer dan 15 jaar ervaring in zowel technische als commerciële rollen weet ik wat er speelt aan beide kanten van de tafel. Ik bouw AI-kennissystemen en chatbots die complexe documentatie vertalen naar snelle, betrouwbare antwoorden. De techniek moet kloppen, maar het moet ook iets opleveren.",
      text2: "Geen proof-of-concept dat in een la verdwijnt, maar werkende oplossingen die waarde leveren. Minder herhaalvragen, snellere doorlooptijden. En medewerkers die weer tijd hebben voor werk dat er écht toe doet. Privacy en databeveiliging neem ik vanaf dag één mee.",
      stats: {
        experience: "Jaar ervaring",
        projects: "Projecten",
        location: "Gebaseerd",
      },
    },
    quote: {
      text1: "AI vervangt geen mensen,",
      text2: "het geeft ze superkrachten.",
      subtext: "Technologie die experts beter en sneller maakt in wat ze doen.",
    },
    work: {
      label: "Projecten",
      title: "Geselecteerd werk",
      intro: "Klik op een project voor meer details over de aanpak en resultaten.",
    },
    approach: {
      label: "Werkwijze",
      title: "Van vraag naar werkend systeem",
      intro: "AI-projecten vragen om een andere aanpak dan traditionele software. Ik werk in korte iteraties, test vroeg met echte data en houd je continu op de hoogte. Privacy en databeveiliging staan daarbij altijd voorop.",
      steps: [
        {
          title: "Discovery",
          desc: "We brengen samen jouw doel, beschikbare data en mogelijke risico's in kaart. Privacy en compliance worden direct meegenomen. Na dit gesprek weet je precies wat mogelijk is.",
        },
        {
          title: "Prototype",
          desc: "Snel een werkend prototype bouwen met jouw eigen data. Geen PowerPoint, maar iets waar je direct mee kunt testen. Zo zien we snel of de aanpak werkt.",
        },
        {
          title: "Implementatie",
          desc: "Na goedkeuring bouwen we het volledige systeem. Inclusief integraties, guardrails en uitgebreide tests. Je krijgt regelmatig updates en kunt tussentijds feedback geven.",
        },
        {
          title: "Evalueren & Tweaken",
          desc: "AI-systemen worden beter door gebruik. We meten de resultaten, analyseren waar het beter kan en finetunen continu. Dit is geen eenmalig project, maar een doorlopend proces van verbetering.",
        },
      ],
    },
    blog: {
      label: "Blog",
      title: "Inzichten & artikelen",
      intro: "Klik op een artikel om verder te lezen.",
    },
    contact: {
      label: "Contact",
      title: "Laten we samenwerken",
      intro: "Nieuwsgierig hoe AI jouw kennisprocessen kan verbeteren? Vul het formulier in of plan direct een gesprek.",
      schedule: "Plan een gesprek",
      or: "of",
      form: {
        name: "Naam",
        company: "Bedrijf",
        email: "E-mail",
        message: "Bericht",
        submit: "Verstuur bericht",
        success: "Bedankt voor je bericht!",
        successSub: "Ik neem binnen 2 werkdagen contact met je op.",
        privacy: "Je gegevens worden alleen gebruikt om contact met je op te nemen en worden niet gedeeld met derden.",
      },
    },
    footer: {
      copyright: "© 2026 Ralph van der Linden",
      kvk: "KVK 90506995",
    },
  },
  en: {
    nav: {
      over: "About",
      werk: "Work",
      aanpak: "Approach",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      label: "AI Engineer",
      title: "I build AI systems that make ",
      highlight: "knowledge accessible",
      titleEnd: "",
      subtitle: "From complex documentation to reliable answers. For teams that rely on expertise and clarity.",
      cta: "Get in touch",
      ctaSecondary: "View work →",
      scroll: "Scroll",
    },
    about: {
      label: "About me",
      title: "AI Engineer who understands tech and business",
      text1: "With over 15 years of experience in both technical and commercial roles, I understand what matters on both sides of the table. I build AI knowledge systems and chatbots that transform complex documentation into fast, reliable answers. The tech needs to work, but it also needs to deliver results.",
      text2: "No proof-of-concept that ends up in a drawer, but working solutions that deliver value. Fewer repetitive questions, faster turnaround times. And employees who have time again for work that truly matters. Privacy and data security are baked in from day one.",
      stats: {
        experience: "Years experience",
        projects: "Projects",
        location: "Based",
      },
    },
    quote: {
      text1: "AI doesn't replace people,",
      text2: "it gives them superpowers.",
      subtext: "Technology that makes experts better and faster at what they do.",
    },
    work: {
      label: "Projects",
      title: "Selected work",
      intro: "Click on a project for more details about the approach and results.",
    },
    approach: {
      label: "Approach",
      title: "From question to working system",
      intro: "AI projects require a different approach than traditional software. I work in short iterations, test early with real data, and keep you informed throughout. Privacy and data security are always a priority.",
      steps: [
        {
          title: "Discovery",
          desc: "Together we map out your goal, available data, and potential risks. Privacy and compliance are considered from the start. After this conversation, you'll know exactly what's possible.",
        },
        {
          title: "Prototype",
          desc: "Quickly building a working prototype with your own data. No PowerPoint, but something you can test directly. This way we quickly see if the approach works.",
        },
        {
          title: "Implementation",
          desc: "After approval, we build the complete system. Including integrations, guardrails, and extensive testing. You receive regular updates and can provide feedback along the way.",
        },
        {
          title: "Evaluate & Tweak",
          desc: "AI systems improve through use. We measure results, analyze where improvements can be made, and continuously fine-tune. This isn't a one-time project, but an ongoing process of improvement.",
        },
      ],
    },
    blog: {
      label: "Blog",
      title: "Insights & articles",
      intro: "Click on an article to read more.",
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      intro: "Curious how AI can improve your knowledge processes? Fill out the form or schedule a call directly.",
      schedule: "Schedule a call",
      or: "or",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        message: "Message",
        submit: "Send message",
        success: "Thanks for your message!",
        successSub: "I'll get back to you within 2 business days.",
        privacy: "Your data is only used to contact you and is not shared with third parties.",
      },
    },
    footer: {
      copyright: "© 2026 Ralph van der Linden",
      kvk: "KVK 90506995",
    },
  },
};

const projectsData = {
  nl: [
    {
      id: 1,
      title: "Vliegschool Kennisassistent",
      category: "Educatie & Luchtvaart",
      description: "Slimme studiehulp voor vliegleerlingen die 24/7 vragen beantwoordt over theorie en examenstof.",
      details: "Een chatbot die fungeert als persoonlijke 'wingman' voor PPL-studenten. Het systeem doorzoekt lesstof, CBR-exameneisen, Europese luchtvaartwetgeving en richtlijnen van brancheorganisaties. Studenten krijgen direct antwoord op vragen over meteorologie, navigatie of procedures. Ze studeren efficiënter en slagen vaker in één keer.",
      tech: ["GPT-4", "Python", "RAG"],
    },
    {
      id: 2,
      title: "Smart Ticket Triage",
      category: "Webhosting & Support",
      description: "Automatische e-mailclassificatie en antwoordgeneratie voor een hostingprovider.",
      details: "Inkomende supportmails worden automatisch gecategoriseerd en waar mogelijk direct beantwoord. Standaardvragen over wachtwoord-resets, DNS-instellingen of facturen worden binnen seconden afgehandeld. Complexere issues gaan met context naar de juiste medewerker. Het supportteam besteedt nu 40% minder tijd aan repetitieve vragen en kan zich richten op klanten die écht hulp nodig hebben.",
      tech: ["GPT-4", "Email API", "Python"],
    },
    {
      id: 3,
      title: "HR Kennisportaal",
      category: "Human Resources",
      description: "Automatische beantwoording van HR-vragen op basis van CAO en bedrijfsbeleid.",
      details: "HR-medewerkers ontvangen dagelijks tientallen vragen over verlof, secundaire arbeidsvoorwaarden en bedrijfsregelingen. Dit systeem doorzoekt de CAO en het intranet en stelt conceptantwoorden op. De HR-adviseur reviewt en verstuurt. Alle data blijft binnen de eigen infrastructuur van het bedrijf. De responstijd daalde met 70%, ook bij piekdrukte.",
      tech: ["Python", "Microsoft Azure", "GPT-4"],
    },
  ],
  en: [
    {
      id: 1,
      title: "Flight School Knowledge Assistant",
      category: "Education & Aviation",
      description: "Smart study aid for flight students that answers questions about theory and exam material 24/7.",
      details: "A chatbot that serves as a personal 'wingman' for PPL students. The system searches through course materials, exam requirements, European aviation legislation, and industry guidelines. Students get instant answers to questions about meteorology, navigation, or procedures. They study more efficiently and pass more often on the first try.",
      tech: ["GPT-4", "Python", "RAG"],
    },
    {
      id: 2,
      title: "Smart Ticket Triage",
      category: "Web Hosting & Support",
      description: "Automatic email classification and response generation for a hosting provider.",
      details: "Incoming support emails are automatically categorized and answered where possible. Standard questions about password resets, DNS settings, or invoices are handled within seconds. More complex issues are forwarded with context to the right team member. The support team now spends 40% less time on repetitive questions and can focus on customers who truly need help.",
      tech: ["GPT-4", "Email API", "Python"],
    },
    {
      id: 3,
      title: "HR Knowledge Portal",
      category: "Human Resources",
      description: "Automatic answering of HR questions based on collective agreements and company policy.",
      details: "HR staff receive dozens of questions daily about leave, benefits, and company policies. This system searches the collective agreement and intranet and drafts answers. The HR advisor reviews and sends. All data stays within the company's own infrastructure. Response time dropped by 70%, even during peak times.",
      tech: ["Python", "Microsoft Azure", "GPT-4"],
    },
  ],
};

const blogPostsData = {
  nl: [
    {
      id: 1,
      title: "Hoe RAG aspirant piloten helpt sneller te slagen",
      date: "15 jan 2026",
      excerpt: "Een kijkje achter de schermen van de Vliegschool Kennisassistent en waarom RAG hier perfect werkt.",
      content: "Bij het bouwen van de Vliegschool Kennisassistent was de uitdaging helder: hoe help je PPL-studenten door een berg aan lesstof, exameneisen en regelgeving? De oplossing: Retrieval Augmented Generation (RAG). In plaats van te vertrouwen op wat het model 'weet', doorzoekt het systeem eerst de complete database met CBR-leerdoelen, Europese luchtvaartwetgeving en lesmateriaal. Daardoor krijgen studenten nauwkeurige antwoorden mét bronvermelding. Ze weten niet alleen het antwoord, maar ook waar ze het kunnen verifiëren.",
    },
    {
      id: 2,
      title: "E-mail triage met AI: 40% minder repetitief werk",
      date: "8 jan 2026",
      excerpt: "Hoe automatische classificatie en antwoordgeneratie het supportteam van een hostingprovider transformeerde.",
      content: "Supportteams besteden vaak het grootste deel van hun tijd aan dezelfde vragen: wachtwoord-resets, DNS-uitleg, facturatie. Bij de Smart Ticket Triage voor een webhostingbedrijf bouwde ik een systeem dat inkomende mails automatisch classificeert en waar mogelijk direct beantwoordt. Belangrijk: niet proberen álles te automatiseren. Het systeem herkent wanneer een vraag te complex is en stuurt deze met relevante context door naar de juiste medewerker. Het supportteam bespaart nu 40% van hun tijd.",
    },
    {
      id: 3,
      title: "HR-vragen beantwoorden met AI: CAO als kennisbron",
      date: "20 dec 2025",
      excerpt: "Waarom een HR Kennisportaal meer is dan een chatbot, en hoe je consistente antwoorden garandeert.",
      content: "HR-afdelingen worstelen vaak met dezelfde uitdaging: tientallen vragen per dag over verlof, arbeidsvoorwaarden en bedrijfsregelingen. Het HR Kennisportaal dat ik bouwde doorzoekt automatisch de CAO en het intranet om conceptantwoorden op te stellen. Cruciaal: de HR-adviseur blijft in control en reviewt elk antwoord voordat het verstuurd wordt. Dit zorgt voor 70% snellere responstijden én consistente antwoorden. De mens blijft centraal, maar krijgt AI als superpower.",
    },
  ],
  en: [
    {
      id: 1,
      title: "How RAG helps flight students pass faster",
      date: "Jan 15, 2026",
      excerpt: "A behind-the-scenes look at the Flight School Knowledge Assistant and why RAG works perfectly here.",
      content: "When building the Flight School Knowledge Assistant, the challenge was clear: how do you help PPL students navigate a mountain of course material, exam requirements, and regulations? The solution: Retrieval Augmented Generation (RAG). Instead of relying on what the model 'knows', the system first searches the complete database with exam requirements, European aviation legislation, and study materials. This way, students get accurate answers with source citations. They know not only the answer, but also where to verify it.",
    },
    {
      id: 2,
      title: "Email triage with AI: 40% less repetitive work",
      date: "Jan 8, 2026",
      excerpt: "How automatic classification and response generation transformed a hosting provider's support team.",
      content: "Support teams often spend most of their time on the same questions: password resets, DNS explanations, billing. For the Smart Ticket Triage at a web hosting company, I built a system that automatically classifies incoming emails and answers them directly where possible. Important: not trying to automate everything. The system recognizes when a question is too complex and forwards it with relevant context to the right team member. The support team now saves 40% of their time.",
    },
    {
      id: 3,
      title: "Answering HR questions with AI: Collective agreement as knowledge source",
      date: "Dec 20, 2025",
      excerpt: "Why an HR Knowledge Portal is more than a chatbot, and how to guarantee consistent answers.",
      content: "HR departments often struggle with the same challenge: dozens of questions per day about leave, benefits, and company policies. The HR Knowledge Portal I built automatically searches the collective agreement and intranet to draft answers. Crucial: the HR advisor stays in control and reviews each answer before it's sent. This results in 70% faster response times and consistent answers. The human remains central, but gets AI as a superpower.",
    },
  ],
};

function App() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lang, setLang] = useState("nl");

  // Detect browser language
  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && !browserLang.startsWith("nl")) {
      setLang("en");
    }
  }, []);

  const t = translations[lang];
  const projects = projectsData[lang];
  const blogPosts = blogPostsData[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const toggleBlog = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/meeeybzq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setFormSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site">
      {/* Header */}
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="container header__inner">
          <a href="#" className="logo">
            <img src="/images/logo-small.webp" alt="R" className="logo__icon" />
            <span className="logo__text logo__text--full">Ralph van der Linden</span>
            <span className="logo__text logo__text--short">Ralph</span>
          </a>
          <nav className="nav">
            <a href="#over">{t.nav.over}</a>
            <a href="#werk">{t.nav.werk}</a>
            <a href="#aanpak">{t.nav.aanpak}</a>
            <a href="#blog">{t.nav.blog}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="header__socials">
            <button 
              className="lang-toggle" 
              onClick={() => setLang(lang === "nl" ? "en" : "nl")}
              aria-label="Toggle language"
            >
              {lang === "nl" ? "EN" : "NL"}
            </button>
            <a href="https://www.linkedin.com/in/ralphvanderlinden/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/GetcloudyNL/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__blob hero__blob--1"></div>
          <div className="hero__blob hero__blob--2"></div>
          <div className="hero__blob hero__blob--3"></div>
          <svg className="hero__lines" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <path className="hero__line" d="M-100,400 Q300,100 600,400 T1300,400" />
            <path className="hero__line hero__line--2" d="M-100,500 Q400,200 700,450 T1300,350" />
            <path className="hero__line hero__line--3" d="M-100,300 Q200,500 500,350 T1300,450" />
          </svg>
        </div>
        <div className="container">
          <div className="hero__content">
            <span className="hero__label">{t.hero.label}</span>
            <h1 className="hero__title">
              {t.hero.title}<span className="highlight">{t.hero.highlight}</span>{t.hero.titleEnd}
            </h1>
            <p className="hero__subtitle">{t.hero.subtitle}</p>
            <div className="hero__cta">
              <a href="#contact" className="btn btn--primary">{t.hero.cta}</a>
              <a href="#werk" className="btn btn--ghost">{t.hero.ctaSecondary}</a>
            </div>
          </div>
        </div>
        <a href="#over" className="hero__scroll">
          <span>{t.hero.scroll}</span>
          <div className="hero__scroll-line"></div>
          <svg className="hero__scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </section>

      {/* Over */}
      <section id="over" className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <p className="label">{t.about.label}</p>
              <h2>{t.about.title}</h2>
              <p className="text--secondary">{t.about.text1}</p>
              <p className="text--secondary">{t.about.text2}</p>
              <div className="stats">
                <div className="stat">
                  <span className="stat__value">15+</span>
                  <span className="stat__label">{t.about.stats.experience}</span>
                </div>
                <div className="stat">
                  <span className="stat__value">25+</span>
                  <span className="stat__label">{t.about.stats.projects}</span>
                </div>
                <div className="stat">
                  <span className="stat__value">NL</span>
                  <span className="stat__label">{t.about.stats.location}</span>
                </div>
              </div>
              <div className="expertise">
                {expertiseTags[lang].map((tag, index) => (
                  <span key={index} className="expertise__tag" data-tooltip={tag.tooltip}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="about-photo">
              <img src="/images/ralph.webp" alt="Ralph van der Linden" className="photo" />
              <div className="badges">
                <img src="/images/badge-datalumina.webp" alt="Datalumina Certified AI Engineer" className="badge" />
                <img src="/images/badge-google-cloud.webp" alt="Google Cloud Digital Leader" className="badge" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="quote-banner">
        <img src="/images/inbetween.webp" alt="" className="quote-banner__bg" />
        <div className="quote-banner__overlay"></div>
        <div className="quote-banner__content">
          <blockquote className="quote-banner__quote">
            "{t.quote.text1}<br className="quote-break" />{t.quote.text2}"
          </blockquote>
          <p className="quote-banner__subtext">{t.quote.subtext}</p>
        </div>
      </section>

      {/* Werk */}
      <section id="werk" className="section section--dark">
        <div className="container">
          <p className="label">{t.work.label}</p>
          <h2>{t.work.title}</h2>
          <p className="text--secondary section__intro">{t.work.intro}</p>
          <div className="projects">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`project ${expandedProject === project.id ? "project--expanded" : ""}`}
              >
                <button 
                  className="project__header"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={expandedProject === project.id}
                >
                  <span className="project__number">0{project.id}</span>
                  <div className="project__summary">
                    <span className="project__category">{project.category}</span>
                    <h3 className="project__title">{project.title}</h3>
                    <p className="project__desc">{project.description}</p>
                  </div>
                  <span className="project__toggle">
                    {expandedProject === project.id ? "−" : "+"}
                  </span>
                </button>
                <div className="project__details">
                  <div className="project__details-inner">
                    <p>{project.details}</p>
                    <div className="project__tech">
                      {project.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"><div className="container"><hr /></div></div>

      {/* Aanpak */}
      <section id="aanpak" className="section">
        <div className="container">
          <div className="approach-header">
            <p className="label">{t.approach.label}</p>
            <h2>{t.approach.title}</h2>
            <p className="text--secondary approach-header__intro">{t.approach.intro}</p>
          </div>
          <div className="steps-grid">
            {t.approach.steps.map((step, index) => (
              <div className="step-card" key={index}>
                <span className="step-card__number">0{index + 1}</span>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"><div className="container"><hr /></div></div>

      {/* Blog */}
      <section id="blog" className="section section--dark">
        <div className="container">
          <p className="label">{t.blog.label}</p>
          <h2>{t.blog.title}</h2>
          <p className="text--secondary section__intro">{t.blog.intro}</p>
          <div className="blog-list">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className={`blog-item ${expandedBlog === post.id ? "blog-item--expanded" : ""}`}
              >
                <button 
                  className="blog-item__header"
                  onClick={() => toggleBlog(post.id)}
                  aria-expanded={expandedBlog === post.id}
                >
                  <span className="blog-item__date">{post.date}</span>
                  <div className="blog-item__summary">
                    <h3 className="blog-item__title">{post.title}</h3>
                    <p className="blog-item__excerpt">{post.excerpt}</p>
                  </div>
                  <span className="blog-item__toggle">
                    {expandedBlog === post.id ? "−" : "+"}
                  </span>
                </button>
                <div className="blog-item__content">
                  <div className="blog-item__content-inner">
                    <p>{post.content}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section--accent">
        <div className="container contact">
          <div className="contact__text">
            <p className="label label--dark">{t.contact.label}</p>
            <h2>{t.contact.title}</h2>
            <p className="text--secondary">{t.contact.intro}</p>
            <a 
              href="https://calendar.app.google/fJ5fnrcM6eYrYJej9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn--schedule"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {t.contact.schedule}
            </a>
            <div className="contact__socials">
              <a href="https://www.linkedin.com/in/ralphvanderlinden/" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/GetcloudyNL/" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          {formSubmitted ? (
            <div className="contact__form">
              <div className="form-success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>{t.contact.form.success}</h3>
                <p>{t.contact.form.successSub}</p>
              </div>
            </div>
          ) : (
            <form 
              className="contact__form" 
              onSubmit={handleSubmit}
            >
              {/* Honeypot field for spam protection - hidden from users */}
              <input 
                type="text" 
                name="_gotcha" 
                style={{ display: 'none' }} 
                tabIndex="-1" 
                autoComplete="off" 
              />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t.contact.form.name} <span className="required">*</span></label>
                  <input type="text" id="name" name="name" required disabled={isSubmitting} />
                </div>
                <div className="form-group">
                  <label htmlFor="company">{t.contact.form.company} <span className="required">*</span></label>
                  <input type="text" id="company" name="company" required disabled={isSubmitting} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.contact.form.email} <span className="required">*</span></label>
                <input type="email" id="email" name="email" required disabled={isSubmitting} />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.contact.form.message} <span className="required">*</span></label>
                <textarea id="message" name="message" rows="4" required disabled={isSubmitting}></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--full" disabled={isSubmitting}>
                {isSubmitting ? (lang === "nl" ? "Versturen..." : "Sending...") : t.contact.form.submit}
              </button>
              <p className="form-privacy">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                {t.contact.form.privacy}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.kvk}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
