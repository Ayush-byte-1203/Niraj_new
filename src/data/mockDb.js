// Relational Mock Database for Niraj Trivedi CS (Practicing Company Secretaries)
// Single Source of Truth: https://niraj-seven.vercel.app

export const offices = [
  {
    id: "vadodara",
    city: "Head Office Vadodara",
    address: "218 – 220 Saffron Complex, Fatehgunj, Vadodara, 390002, Gujarat",
    phone: "0265-2784388",
    email: "csneerajtrivedi@gmail.com",
    coordinates: "22.3197, 73.1895",
    type: "Headquarters"
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    address: "B-2/304, Vishwas Flats, Behind J.G. International School, Gulab Tower Road, Thaltej, Ahmedabad - 380061",
    phone: "0265-2784388",
    email: "csneerajtrivedi@gmail.com",
    coordinates: "23.0500, 72.5186",
    type: "Branch Office"
  },
  // {
  //   id: "delhi",
  //   city: "Delhi",
  //   address: "Connaught Place, New Delhi, India",
  //   phone: "0265-2784388",
  //   email: "csneerajtrivedi@gmail.com",
  //   coordinates: "28.6139, 77.2090",
  //   type: "Associate Office"
  // }
];

export const practices = [
  {
    id: "ipo",
    name: "Initial Public Offerings (IPO)",
    shortDescription: "We provide comprehensive advisory services for companies planning to raise capital through an Initial Public Offering (IPO). Our team assists in due diligence, regulatory compliance, documentation and coordination with various intermediaries to ensure a smooth and successful listing process.",
    description: "We provide comprehensive advisory services for companies planning to raise capital through an Initial Public Offering (IPO). Our team assists in due diligence, regulatory compliance, documentation and coordination with various intermediaries to ensure a smooth and successful listing process.",
    details: "Our team provides end-to-end guidance for companies aspiring to list on the Main Board or SME Platform. We work closely with merchant bankers, legal advisors, underwriters, and stock exchanges to facilitate a seamless transition to a public company.",
    includes: [
      "Due diligence for IPOs and capital raising transactions",
      "Regulatory compliance under SEBI ICDR and Listing Regulations",
      "Documentation and drafting of offer documents and statutory filings",
      "Coordination with merchant bankers, stock exchanges, and intermediaries",
      "Main Board and SME Platform listing advisory"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "TrendingUp"
  },
  {
    id: "due-diligence",
    name: "Due Diligence",
    shortDescription: "Our due diligence services are designed to identify legal, regulatory and compliance risks associated with corporate transactions. We conduct detailed reviews and provide practical insights that enable clients to make informed business and investment decisions.",
    description: "Our due diligence services are designed to identify legal, regulatory and compliance risks associated with corporate transactions. We conduct detailed reviews and provide practical insights that enable clients to make informed business and investment decisions.",
    details: "We perform rigorous secretarial, legal, and compliance due diligence audits for mergers, acquisitions, private equity funding, and joint ventures, delivering comprehensive risk analysis and remediation strategies.",
    includes: [
      "Legal and secretarial due diligence for corporate transactions",
      "Identification of regulatory, statutory, and compliance risks",
      "Detailed reviews of corporate records, contracts, and filings",
      "Practical insights for informed business and investment decisions",
      "Due diligence reports for acquisitions, IPOs, and restructuring"
    ],
    leadPartnerId: "ashish-tripathi",
    icon: "Search"
  },
  {
    id: "nclt",
    name: "NCLT Representation (Companies Act, 2013 & Insolvency & Bankruptcy Code, 2016)",
    shortDescription: "We represent clients before the National Company Law Tribunal (NCLT) in matters arising under the Companies Act, 2013 and the Insolvency and Bankruptcy Code, 2016. Our team offers strategic advice and effective representation in corporate disputes, insolvency proceedings, mergers, compromises and other tribunal matters.",
    description: "We represent clients before the National Company Law Tribunal (NCLT) in matters arising under the Companies Act, 2013 and the Insolvency and Bankruptcy Code, 2016. Our team offers strategic advice and effective representation in corporate disputes, insolvency proceedings, mergers, compromises and other tribunal matters.",
    details: "With a dedicated NCLT and IBC desk established in Ahmedabad and Vadodara, we provide authoritative advocacy and strategic legal representation before NCLT benches and NCLAT across India.",
    includes: [
      "Representation before National Company Law Tribunal (NCLT) & NCLAT",
      "Matters under Companies Act, 2013 and Insolvency & Bankruptcy Code (IBC, 2016)",
      "Strategic advice and representation in insolvency and CIRP proceedings",
      "Mergers, compromises, arrangements, and capital reduction petitions",
      "Corporate disputes, oppression, and mismanagement litigation"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Scale"
  },
  {
    id: "fema",
    name: "FEMA Compliances",
    shortDescription: "We advise clients on compliance with the Foreign Exchange Management Act (FEMA), including Foreign Direct Investment (FDI), Overseas Direct Investment (ODI) and External Commercial Borrowings (ECB). Our services ensure that cross-border transactions are structured efficiently and remain fully compliant with RBI regulations.",
    description: "We advise clients on compliance with the Foreign Exchange Management Act (FEMA), including Foreign Direct Investment (FDI), Overseas Direct Investment (ODI) and External Commercial Borrowings (ECB). Our services ensure that cross-border transactions are structured efficiently and remain fully compliant with RBI regulations.",
    details: "Our FEMA advisory practice guides multinational enterprises and Indian corporations in navigating RBI regulations, foreign exchange structures, inbound/outbound investments, and statutory compounding.",
    includes: [
      "Foreign Direct Investment (FDI) advisory and statutory filings",
      "Overseas Direct Investment (ODI) structuring and compliance",
      "External Commercial Borrowings (ECB) advisory and reporting",
      "RBI compounding applications and representation for FEMA matters",
      "Cross-border transaction structuring in compliance with RBI guidelines"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Globe"
  },
  {
    id: "secretarial-audit",
    name: "Secretarial Audit",
    shortDescription: "We conduct secretarial audits to assess compliance with corporate laws, secretarial standards, and regulatory requirements. Our objective is to strengthen governance practices, identify compliance gaps and help organizations maintain the highest standards of corporate governance.",
    description: "We conduct secretarial audits to assess compliance with corporate laws, secretarial standards, and regulatory requirements. Our objective is to strengthen governance practices, identify compliance gaps and help organizations maintain the highest standards of corporate governance.",
    details: "Our secretarial audits provide independent verification of regulatory adherence, offering actionable recommendations to enhance board oversight and statutory compliance.",
    includes: [
      "Secretarial audits under Section 204 of the Companies Act, 2013",
      "Assessment of compliance with corporate laws and secretarial standards",
      "Corporate governance reviews and evaluation of board practices",
      "Identification of compliance gaps and actionable remediation",
      "Annual secretarial compliance reporting for listed and unlisted entities"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "ShieldCheck"
  },
  {
    id: "corporate-restructuring",
    name: "Corporate Restructuring",
    shortDescription: "We assist businesses in implementing corporate restructuring strategies that enhance operational efficiency and support long-term growth. Our services include mergers, demergers, amalgamations and other restructuring transactions while ensuring complete legal and regulatory compliance.",
    description: "We assist businesses in implementing corporate restructuring strategies that enhance operational efficiency and support long-term growth. Our services include mergers, demergers, amalgamations and other restructuring transactions while ensuring complete legal and regulatory compliance.",
    details: "We design and execute comprehensive restructuring schemes, advising boards on legal mechanics, regulatory approvals, and shareholder alignment.",
    includes: [
      "Mergers, demergers, and amalgamations",
      "Drafting and execution of schemes of arrangement and compromise",
      "Coordination with ROC, Regional Director, Official Liquidator, and NCLT",
      "Operational efficiency and corporate reorganization strategies",
      "Complete legal, statutory, and regulatory compliance throughout restructuring"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Briefcase"
  },
  {
    id: "capital-restructuring",
    name: "Capital Restructuring",
    shortDescription: "We advise companies on restructuring their capital through reduction of share capital, buy-backs, preferential allotments, rights issues and other capital management strategies. Our approach helps businesses achieve an optimal capital structure while complying with applicable laws.",
    description: "We advise companies on restructuring their capital through reduction of share capital, buy-backs, preferential allotments, rights issues and other capital management strategies. Our approach helps businesses achieve an optimal capital structure while complying with applicable laws.",
    details: "We assist clients in optimizing their balance sheets and shareholding structures through statutory capital reduction, equity buy-backs, and strategic capital raises.",
    includes: [
      "Reduction of share capital under the Companies Act, 2013",
      "Buy-back of securities and equity restructuring strategies",
      "Preferential allotments, private placements, and rights issues",
      "Bonus issues, ESOP structuring, and capital reorganization",
      "Statutory compliance and regulatory filings for capital modifications"
    ],
    leadPartnerId: "ashish-tripathi",
    icon: "BarChart"
  },
  {
    id: "change-in-management",
    name: "Change in Management",
    shortDescription: "We provide end-to-end advisory services for changes in management and corporate control, including regulatory approvals, statutory filings and corporate documentation. Our team ensures a seamless transition while maintaining compliance with all applicable legal requirements.",
    description: "We provide end-to-end advisory services for changes in management and corporate control, including regulatory approvals, statutory filings and corporate documentation. Our team ensures a seamless transition while maintaining compliance with all applicable legal requirements.",
    details: "We manage executive leadership transitions, share transfers, director onboarding/exits, and corporate takeovers with strict regulatory precision.",
    includes: [
      "End-to-end advisory for changes in management and corporate control",
      "Regulatory approvals, statutory ROC filings, and board documentation",
      "Share transfer facilitation and takeover code compliance",
      "Appointment, resignation, and remuneration structuring of managerial personnel",
      "Seamless management transition with complete legal compliance"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Users"
  },
  {
    id: "ipr",
    name: "Intellectual Property Law Services",
    shortDescription: "We assist businesses in protecting and managing their intellectual property rights, including patents, trademarks, copyrights, designs and GI Tag and related registrations. Our services help clients safeguard their innovations, strengthen brand value and protect valuable business assets.",
    description: "We assist businesses in protecting and managing their intellectual property rights, including patents, trademarks, copyrights, designs and GI Tag and related registrations. Our services help clients safeguard their innovations, strengthen brand value and protect valuable business assets.",
    details: "Our IP practice offers comprehensive trademark, copyright, design, and GI Tag registration, licensing advisory, and infringement representation to protect core brand equity.",
    includes: [
      "Protection and management of intellectual property rights",
      "Patents, trademarks, copyrights, designs, and GI Tag registrations",
      "Intellectual property licensing, assignment, and commercial agreements",
      "Infringement advisory, passing-off matters, and trademark registry representation",
      "Safeguarding innovation and strengthening corporate brand value"
    ],
    leadPartnerId: "mona-trivedi",
    icon: "Award"
  }
];

export const sectors = []; // Removed: No industries page on source site

export const people = [
  {
    id: "niraj-trivedi",
    name: "CS NIRAJ TRIVEDI",
    title: "PARTNER",
    officeId: "vadodara",
    linkedin: "https://www.linkedin.com/in/niraj-trivedi-5458a117",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
    bio: "Fellow member of ICSI and founder of this firm. With over 30 years of professional experience, he has built an outstanding reputation in the field of Corporate Law, advising clients on the matters relating to the Companies Act, 2013, Foreign Exchange Management Act, 1999 (“FEMA”), Securities and Exchange Board of India Act, 1992 and its Rules and Regulations, Foreign Contribution (Regulation)Act, 2010 (“FCRA”), Insolvency and Bankruptcy Code, 2016 (“IBC\"), etc.\n\nHe has served as the chairman of the Vadodara Chapter of ICSI and currently leads the overall function of the firm. Academically, he holds a B.Com. (Hons.), is an Associate Member of ACIS (U.K.), and possesses an LL.B. (Special), a Post Graduate Diploma in Cyber Law (PGDCL) and a Post Graduate Diploma in Labour Laws and Practice (PGDLP).\n\nAt present, he is represent clients before various authorities such as National Company Law Tribunals (“NCLT”), National Company Law Appellate Tribunal (“NCLAT”) Regional Director (“RD”), Registrar of Companies (“ROC\"), Reserve Bank of India (“RBI\"), Securities and Exchange Board of India (“SEBI”).\n\nIn addition to his advisory practice, he also involves in giving opinion on various matters of corporate laws and deliberating lectures at various platforms and Study Circles meeting organized by ICSI and ICAI.",
    practices: ["ipo", "nclt", "fema", "secretarial-audit", "corporate-restructuring", "change-in-management"],
    sectors: [],
    publications: [],
    roleType: "leader"
  },
  {
    id: "mona-trivedi",
    name: "ADV. MONA TRIVEDI",
    title: "LEGAL COUNSEL",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
    bio: "She is LLM (Gold Medalist) by qualification and brings over 25 years of professional experience in the field of Corporate Laws, Banking Regulation, Revenue Matters, Debt Recovery, Title Clearance, etc. Since the inception of TNT & Associates, she has played a pivotal role in the firm's legal and advisory practice, contributing significantly to its growth and reputation.\n\nShe is responsible for drafting and reviewing a wide range of legal documents including Applications, Petitions, Appeals, Scheme and other legal documents to be submitted with statutory authorities such as NCLT, NCLAT, SEBI, ROC, RD, RBI etc.",
    practices: ["ipr", "nclt"],
    sectors: [],
    publications: [],
    roleType: "leader"
  },
  {
    id: "ashish-tripathi",
    name: "CS ASHISH TRIPATHI",
    title: "PARTNER",
    officeId: "ahmedabad",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
    bio: "He is an Associate Company Secretary and senior partner of the firm, with over 15 years of professional experience in the field of Corporate Laws. His expertise spans corporate compliance, regulatory advisory, and representation before various statutory authorities.\n\nHe heads the firm's Ahmedabad office and is responsible for liaising with key regulatory and government authorities, including the Registrar of Companies (ROC), Regional Director (RD), National Company Law Tribunal (NCLT), and the Stamp Office.",
    practices: ["due-diligence", "capital-restructuring", "ipo"],
    sectors: [],
    publications: [],
    roleType: "leader"
  },
  {
    id: "samir-raval",
    name: "CS SAMIR RAVAL",
    title: "SENIOR ASSOCIATE",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop",
    bio: "He is a Commerce Graduate with LLB (Spl.) and a Fellow Company Secretary and having experience of around 35 years in the Corporate World. Throughout his career, he has held key leadership positions in the company secretarial and compliance functions of some of India's leading organizations.\n\nHe has served in the Company Secretarial Department of reputed companies such as Gujarat Industries Power Company Limited, Reliance Industries Limited, Reliance Infocomm Limited, Zee Learn Limited and JMC Projects (India) Limited, a Kalptaaru Group Company.\n\nHe possesses experience in the areas of Company Law, Corporate Governance, Corporate Restructuring, SEBI Act, 1992 and its Rules and Regulations, Corporate Compliance and Regulatory Advisory.",
    practices: ["ipo", "secretarial-audit", "corporate-restructuring"],
    sectors: [],
    publications: [],
    roleType: "expert"
  },
  {
    id: "ismail-shaikhjiwala",
    name: "CS ISMAIL SHAIKHJIWALA",
    title: "SENIOR ASSOCIATE",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop",
    bio: "He is an Associate Company Secretary with around two years of professional experience in the areas of Corporate Laws and Foreign Exchange Management Act (FEMA) compliances. He is actively involved in providing corporate advisory and compliance support to a diverse range of clients.\n\nHis core responsibilities include incorporation of companies and LLPs, conversion of companies and LLPs, and ensuring statutory compliances for private limited and unlisted companies under the Companies Act, 2013 and the Limited Liability Partnership Act, 2008.",
    practices: ["fema", "change-in-management"],
    sectors: [],
    publications: [],
    roleType: "expert"
  },
  {
    id: "vrund-bhrambhatt",
    name: "CS VRUND BRAHMBHATT",
    title: "ASSOCIATE",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop",
    bio: "He is an Associate Member of the Institute of Company Secretaries of India (ICSI) and a Bachelor of Commerce graduate. He possesses over two years of professional experience in the areas of Corporate Laws, FEMA, and Secretarial Compliances.\n\nHe is actively involved in handling matters relating to incorporation of Companies and LLPs, entity conversions, secretarial compliances, legal drafting, and regulatory filings. He also handles matters pertaining to the National Company Law Tribunal (NCLT), Regional Director (RD) and Registrar of Companies (ROC) and undertakes various corporate restructuring and compliance-related assignments.",
    practices: ["fema", "nclt", "corporate-restructuring"],
    sectors: [],
    publications: [],
    roleType: "expert"
  },
  {
    id: "vedant-parikh",
    name: "CS VEDANT PARIKH",
    title: "ASSOCIATE",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    bio: "He is a qualified Company Secretary with over two years of professional experience in the field of Corporate Laws. He has developed expertise in corporate compliance, due diligence and secretarial advisory services.\n\nHis core responsibilities include conducting due diligence for Initial Public Offerings (IPOs), incorporation and registration of companies, including compliances relating to GIFT City and undertaking secretarial audits for listed and unlisted companies. He also assists clients in ensuring regulatory compliance and maintaining high standards of corporate governance.",
    practices: ["ipo", "due-diligence", "secretarial-audit"],
    sectors: [],
    publications: [],
    roleType: "expert"
  },
  // {
  //   id: "shrimal-patel",
  //   name: "CS SHRIMAL PATEL",
  //   title: "ASSOCIATE",
  //   officeId: "ahmedabad",
  //   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop",
  //   bio: "He is an Associate Member of the Institute of Company Secretaries of India (ICSI) and a Commerce graduate. He possesses over two years of professional experience in the areas of Corporate Laws, FEMA and Secretarial Compliances.\n\nHis role involves providing advisory and compliance support across various statutory and regulatory frameworks, ensuring clients adhere to all applicable corporate and foreign exchange laws.",
  //   practices: ["fema", "secretarial-audit"],
  //   sectors: [],
  //   publications: [],
  //   roleType: "expert"
  // },
  {
    id: "riya-thakker",
    name: "MS. RIYA THAKKER",
    title: "ASSOCIATE",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
    bio: "She is Semi-Qualified Company Secretary and holds a master’s degree in commerce. She has over three years of professional experience in the field of Corporate Laws, FEMA and secretarial compliances.\n\nShe is actively involved in handling incorporation of Companies and LLPs, entity conversions, secretarial compliances, legal drafting and regulatory filings. She also assists clients in matters before the National Company Law Tribunal (NCLT), Regional Director (RD) and Registrar of Companies (ROC), providing efficient and compliant solutions across a wide range of corporate legal and regulatory matters.",
    practices: ["fema", "nclt"],
    sectors: [],
    publications: [],
    roleType: "expert"
  }
];

export const publications = []; // Removed: No publications/insights on source site
export const careers = []; // Removed: No careers on source site

export const awards = [
  { year: "Since 1994", title: "Corporate Compliance Leadership", body: "Practice established in Vadodara" }
];

export const aboutOverview = {
  headline: "Strategic Advisors – Navigating complexity with absolute compliance precision.",
  paragraphs: [
    "Established in 1999 by CS Neeraj Trivedi, TNT & Associates was founded with the vision of providing specialized company secretarial and corporate advisory services from Vadodara, Gujarat. What began as a focused professional practice has, over the years, evolved into a trusted corporate advisory firm serving businesses across diverse industries. The firm expanded its practice in 2005 to offer a wider range of services including SEBI regulations, FEMA compliances, corporate advisory and representation before various quasi-judicial authorities. This expansion enabled the firm to provide comprehensive solutions to clients navigating increasingly complex legal and regulatory requirements.",
    "In 2018, the firm strengthened its presence with the establishment of its Ahmedabad office and launched a dedicated practice for matters before the National Company Law Tribunal (NCLT) and under the Insolvency and Bankruptcy Code (IBC). These developments marked a significant milestone in the firm's journey towards becoming a full-service corporate advisory practice.",
    "Today, TNT & Associates has established a strong presence across India through its offices and associate network including Delhi. The firm proudly advises listed companies, multinational corporations, private enterprises, startups and emerging businesses, thus delivering practical and commercially driven solutions while upholding the highest standards of professionalism, integrity and client service.",
    "Over the decades, the firm is offering comprehensive corporate and regulatory advisory services with expertise in Initial Public Offerings (IPOs), Due Diligence, NCLT representation under the Companies Act, 2013 and the Insolvency and Bankruptcy Code, 2016 (IBC), FEMA compliances including FDI, ODI and ECB, Secretarial Audits, Corporate Restructuring, Capital Restructuring, Change of Management and Intellectual Property Law services.",
    "At TNT & Associates, our approach is built on understanding our clients' businesses, anticipating challenges and providing practical solutions that support informed decision making and sustainable growth. By combining technical expertise with commercial insight, we deliver advice that is both legally robust and business-oriented."
  ],
  body1: "Established in 1999 by CS Neeraj Trivedi, TNT & Associates was founded with the vision of providing specialized company secretarial and corporate advisory services from Vadodara, Gujarat. What began as a focused professional practice has, over the years, evolved into a trusted corporate advisory firm serving businesses across diverse industries.",
  body2: "Today, TNT & Associates has established a strong presence across India through its offices and associate network including Delhi, advising listed companies, multinational corporations, private enterprises, startups and emerging businesses."
};

export const visionMission = {
  vision: "At TNT & Associates, our vision is to be a trusted leader in Company Secretarial and Corporate Advisory Services by delivering excellence with integrity, professionalism and innovation. We aspire to empower businesses with sound governance, seamless compliance and strategic guidance enabling them to achieve sustainable growth while upholding the highest standards of ethics and corporate responsibility.",
  mission: "At TNT & Associates, our mission is to provide reliable, timely and value driven Company Secretarial and Corporate Advisory Services that help the businesses to navigate the evolving regulatory landscape with confidence. We are committed to delivering practical solutions and building long term relationships founded on trust, integrity and professional excellence."
};

export const leadershipMessage = {
  author: "CS NIRAJ TRIVEDI (PARTNER)",
  designation: "TNT & ASSOCIATES",
  quote: "Every business journey is shaped by opportunities, challenges and important decisions. At TNT & Associates, we believe that strong corporate governance and regulatory compliance are the cornerstone of every successful business. We are committed to helping businesses navigate challenges through sound corporate governance, regulatory compliance and practical advisory services. Our focus is on delivering reliable, strategic solutions while building lasting relationships founded on trust, transparency and consistent service. We sincerely thank our clients and stakeholders for their confidence in us and we look forward to being part of your growth story.",
  body: ""
};

export const achievementsMilestones = [
  {
    title: "IPOs & Capital Markets",
    body: "Successfully completed significant number of IPO’s, leading to listing on both the Main Board and SME Platform over the last few years."
  },
  {
    title: "Landmark Mergers",
    body: "Played an instrumental role in the merger of two Electricity Generation Companies under the Electricity Act (Independent of the Companies Act, 2013). The merger was subsequently recognized by Ministry of Corporate Affairs."
  },
  {
    title: "NCLT Representation",
    body: "Successfully completed various assignments before NCLT regarding mergers, corporate restructuring, capital reduction and oppression/ mismanagement cases."
  }
];

export const journeyTimeline = [
  { year: "1994", milestone: "Firm Establishment", narrative: "Founded by CS Niraj Trivedi with a vision to provide specialized corporate secretarial services in Vadodara." },
  { year: "2005", milestone: "Expansion of Services", narrative: "Broadened practice areas to include SEBI regulations, FEMA compliances, and appearances before quasi-judicial bodies." },
  { year: "2012", milestone: "Ahmedabad Branch", narrative: "Inaugurated a dedicated branch office in Ahmedabad to better serve the growing corporate sector in Gujarat." },
  { year: "2018", milestone: "NCLT & IBC Practice", narrative: "Established a specialized desk for Insolvency and Bankruptcy Code matters and robust representation before the NCLT." },
  { year: "Present", milestone: "National Presence", narrative: "Operating with associate offices in Delhi, serving multinational corporations and listed entities across India." }
];

export const corporateValues = [
  { title: "Integrity", body: "We hold the highest ethical standards ensuring honesty, transparency and accountability in every engagement." },
  { title: "Confidentiality", body: "We safeguard our client’s information with utmost care maintaining strict confidentiality and trust." },
  { title: "Professional Excellence", body: "We strive for accuracy, quality and continuous improvement while delivering services that meet the highest professional standards." },
  { title: "Timeliness", body: "We value our client’s time and are dedicated to delivering prompt, efficient, and dependable services." },
  { title: "Client Centric Approach", body: "We understand each client’s unique needs and provide practical and tailored solutions that support their business objectives." }
];

export const faqs = []; // Removed: No FAQs on source site

export const mediaCenter = []; // Removed: No media center on source site

export const generalSecretarialPractices = [
  "Promotion, formation, and incorporation of companies including Section 8 (Not for Profit Organization/NGO), Producer Companies, Chapter XXI Companies (Conversion into a Company) and matter relating therewith including choice of and type of companies, drafting of Memorandum and Articles of Associations and other documents. This includes conversion of partnership firm into company/ LLP and vice - vice.",
  "Advising on maintenance of Secretarial Records and Statutory Books and Registers.",
  "Annual filing including XBRL.",
  "Advising on timely compliance of statutory requirements under Corporate Laws by the companies (Private and Public) to avoid penal action and prosecution to the Companies and its Directors.",
  "Issuing status report on statutory/ legal compliance and Issuing Secretarial Compliance Report/ Due Diligence Report wherever it is necessary.",
  "Pre-certification of documents, returns etc. to be submitted with the office of Registrar of Companies, Regional Director, Ministry of Corporate Affairs etc.",
  "Appearing as an authorized representative before Central Government, Regional Director, Registrar of Companies, SEBI, SAT, NCLT and NCLAT on various matters on Corporate Law Related issues.",
  "Providing necessary guidance for transfer, transmission, transposition, dematerialization, re-materializationof shares and other securities etc. including action to be taken, correspondence with member’s and drafting affidavit, indemnity bond including necessary communication with Depositories and Depository Participants (DP).",
  "Advising and attending on conducting meeting of Board, Shareholdersand Court convened meeting and preparation of documents such as notice, explanatory statements, minutes, Directors’ Report, Corporate Governance Report, Business Responsibility Report, etc.",
  "Shifting of Registered Office of the Company from one State to another, Change of name of the company, Conversion of status of the company from private to public and vis-vis and to LLP. Drafting of various documents, petitions, affidavits, advertisements, letters, resolution, forms etc. for the same.",
  "Helping company in finalization of financial statements including Balance Sheets, Notes thereon.",
  "Providing guidance for Striking off or winding off the company and drafting of necessary resolutions, documents, forms etc.",
  "Advising and drafting documents on Buy Back of Securities for Listed and Unlisted Companies.",
  "To act as scrutinizer in case of Postal Ballot, Court Conveyed Meeting, Voting through Ballot / E Votingetc.",
  "Providing guidance on restructuring of company, which includes reduction of capital, merger, amalgamation, demerger and also to carry due diligence, etc.and to draft Scheme of Compromise and to provide incidental services to the company.",
  "Carrying Due Diligence of the company to make sure that the company has complied with the requirements of corporate laws and regulations made thereunder.",
  "Providing opinion on various corporate laws.",
  "Providing guidance on various issues relating to Corporate Social Responsibility (CSR) including drafting of Policy implement and monitor a cohesive CSR policy that is not only compliant with section 135 of the Act but also need-based, strategic, integrated with the value chains, iterative and geared towards business responsibility reporting. Based on our experience and research, we can offer significant value to our clients (at different stages of the CSR lifecycle). We have worked with good number of companies and have offered comprehensive and customizable services such as guidance notes along with enlightment of the concept of CSR, its applicability, framing of CSR Policy, annual Action Plan and its implementation for the financial year to help you comply with the provisions of CSR under the Companies Act, 2013"
];

export const coreStrengths = [
  {
    title: "Thorough Knowledge",
    desc: "The promoter and its associates have complete and thorough knowledge on the subject matter. As a result, the clients get proper and accurate guidance to protect from the legal action like penalty and prosecution."
  },
  {
    title: "Experience with Teamwork",
    desc: "The promoter of this firm has experience of around plus 30 years and its associates are equally holding experience in the field of Corporate Laws. Once the work is assigned to the firm, the same gets completed with full dedication and teamwork that to in reasonable time."
  },
  {
    title: "Time Punctuality",
    desc: "Time punctuality is very essence in compliances. Any delay under Corporate Laws may leads to penalty and prosecution. Timely compliance will surely protect the company and its directors from such penalties. We strictly ensure compliances are done timely and accurately."
  },
  {
    title: "Best Quality with Price",
    desc: "Due to our experienced, qualified, and dedicated team, the services being provided to clients are of the highest quality and at a reasonable fee, making our services value for money."
  }
];

export const testimonial = {
  quote: "The firm demonstrates a profound understanding of corporate law. Their meticulous approach to secretarial audits and governance frameworks has been instrumental in maintaining our compliance health.",
  author: "Board of Directors",
  company: "Client Enterprise"
};

export const achievements = [
  "Successfully completed a significant number of IPOs (on both the Main Board and SME Platform) during the last three years.",
  "Facilitated proceedings for the merger of an electricity generating company into another similar entity under the Electricity Act (independent of the Companies Act, 2013).",
  "Successfully completed various assignments before the NCLT regarding mergers, corporate restructuring, capital reduction, and oppression/mismanagement cases."
];
