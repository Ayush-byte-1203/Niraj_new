// Relational Mock Database for Niraj Trivedi CS (Practicing Company Secretaries)
// Single Source of Truth: https://niraj-seven.vercel.app

export const offices = [
  {
    id: "vadodara",
    city: "Head Office Vadodara",
    address: "Prominent Commercial Area, Vadodara, Gujarat 390001, India",
    phone: "+91 982 424 8079",
    email: "info@nirajtrivedi-cs.com",
    coordinates: "22.3072, 73.1812",
    type: "Headquarters"
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    address: "Navrangpura, Ahmedabad, Gujarat, India",
    phone: "+91 982 424 8079",
    email: "info@nirajtrivedi-cs.com",
    coordinates: "23.0225, 72.5714",
    type: "Branch Office"
  },
  {
    id: "delhi",
    city: "Delhi",
    address: "Connaught Place, New Delhi, India",
    phone: "+91 982 424 8079",
    email: "info@nirajtrivedi-cs.com",
    coordinates: "28.6139, 77.2090",
    type: "Associate Office"
  }
];

export const practices = [
  {
    id: "llp",
    name: "LIMITED LIABILITY PARTNERSHIP ACT",
    shortDescription: "Formation of LLP, conversion of Company into LLP or otherwise, deed reconstitution, and filings.",
    description: "We provide comprehensive secretarial services for LLPs, from initial formation to conversion, restructuring, and compliance filings.",
    details: "Services include: Formation of LLP, conversion of Company into LLP or otherwise. Reconstitution of Partnership Deed including change in the capital, partners etc. Change of Name, place of business, partners, capital of the partners etc. Winding and striking off of LLP. Guidance on timely submission of forms with the office of Registrar of Companies including Statutory and Event Based submission.",
    includes: [
      "Formation of LLP, conversion of Company into LLP or otherwise.",
      "Reconstitution of Partnership Deed including change in the capital, partners etc.",
      "Change of Name, place of business, partners, capital of the partners etc",
      "Winding and striking off of LLP",
      "Guidance on timely submission of forms with the office of Registrar of Companies including Statutory and Event Based submission."
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Folder"
  },
  {
    id: "sebi",
    name: "SECURITIES AND EXCHANGE BOARD OF INDIA ACT AND ITS REGULATION",
    shortDescription: "Listing / revocation of securities, SME / Main Board compliance, IPOs, and Takeover Code.",
    description: "Expert guidance on SEBI regulations, stock exchange listing rules, IPO/FPO processing, and Corporate Governance codes.",
    details: "Services include: Providing guidance for Listing / Revocation of securities with stock exchanges. Providing guidance as required under the Listing Regulations and action to be taken by the company there under such as periodically compliance including compliances under Corporate Governance and Listing Regulation etc. Issue of shares/ securities as Bonus / Right Issue /Public Issue (IPO/FPO), Private Placement, ESOP, QIBs, FIIs etc. Delisting of securities in compliance with the SEBI regulation.",
    includes: [
      "Providing guidance for Listing / Revocation of securities with stock exchanges.",
      "Providing guidance as required under the Listing Regulationsand action to be taken by the company there under such as periodically compliance including compliances under Corporate Governance and Listing Regulation etc.",
      "Issue of shares/ securities as Bonus / Right Issue /Public Issue (IPO/FPO), Private Placement, ESOP, QIBs, FIIs etc. including drafting of related documents and papers.",
      "Providing guidance in drafting of Prospectus/ Letter of Offer or other related documents and obtaining various approvals and getting the security listed with the stock exchanges etc. in association with Merchant Bankers.",
      "This includes providing guidance in respect of compliance under Listing Regulation and communication with SEBI/ Stock Exchanges for SME / Main Board.",
      "Providing proper guidance to the companies under SEBI Takeover code, Buy Back of securities, Insider Trading Regulation and drafting of various communication with the SEBI / Stock Exchanges / Shareholders in this connection. This includes drafting of application to be submitted to SEBI for seeking exemption under SAST, ICDR etc.",
      "Delisting of securities in compliance with the SEBI regulation."
    ],
    leadPartnerId: "ashish-tripathi",
    icon: "TrendingUp"
  },
  {
    id: "ipr",
    name: "INTELLECTUAL PROPERTY RIGHTS",
    shortDescription: "Trademark registration, IP licensing, and infringement representation.",
    description: "Securing and managing corporate intellectual property, trademarks, and licensing covenants.",
    details: "Services include: Advising on intellectual Property Licensing. Getting Trade Mark Registered. Advising on passing off/ infringement matter and to represent the case before Trade Mark Registry for getting the mark registered.",
    includes: [
      "Advising on intellectual Property Licensing.",
      "Getting Trade Mark Registered.",
      "Advising on passing off/ infringement matter and to represent the case before Trade Mark Registry for getting the mark registered."
    ],
    leadPartnerId: "mona-trivedi",
    icon: "Award"
  },
  {
    id: "fema",
    name: "FOREIGN EXCHANGE MANAGEMENT ACT",
    shortDescription: "Joint Venture formation, Wholly Owned Subsidiaries, and RBI compounding applications.",
    description: "Compliance advisory under RBI and DIPP guidelines for foreign direct investment and outbound capital allocations.",
    details: "Services include: Formation of Joint Venture (JV), Wholly Owned Subsidiary companies in and outside India in compliance with the requirements under Reserve Bank of India (RBI) / Department of Industrial Policy and Promotion (DIPP) and guideline framed thereunder. Providing guidance on inbound & outbound investments. Compounding Application before Reserve Bank of India in case of violation under FEMA.",
    includes: [
      "Formation of Joint Venture (JV), Wholly Owned Subsidiary companiesin and outside India in compliance with the requirements under Reserve Bank of India (RBI) / Department of Industrial Policy and Promotion (DIPP) and guideline framed thereunder.",
      "Providing guidance on inbound & outbound investments.",
      "Issue, transfer of shares to Foreigners and other Non-Resident Indians (NRI’s) under Automatic / Approval Route and providing guidance in deciding issue price.",
      "Drafting of documentation to be submitted with concerned authorities thereunder.",
      "Opening of Branch office in India and abroad and getting permission from Reserve Bank of India.",
      "Consent / Approval of Secretariat of Industrial Approval (SIA) / Foreign Investment Promotion Board (FIPB) under Approval Route.",
      "Compounding Application before Reserve Bank of India in case of violation under FEMA such as FDI and ECB guideline etc."
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Globe"
  },
  {
    id: "fcra",
    name: "FOREIGN CONTRIBUTION (REGULATION) ACT",
    shortDescription: "NGO registrations, designated bank accounts shifting, and MHA filings.",
    description: "Guidance on registration eligibility and documentation for NGOs seeking foreign contributions.",
    details: "Services include: Providing guidance on eligibility criteria for Registration & Prior Permission. Advising on and documentation required for Prior Permission, Registration, Condonation, Restoration, Shifting of Designated Bank, Renewal, change of constitution etc. of NGOs.",
    includes: [
      "Providing guidance on eligibility criteria for Registration& Prior Permission.",
      "Advising on and documentation required for Prior Permission, Registration, Condonation, Restoration, Shifting of Designated Bank, Renewal, change of constitution etc. of NGOs.",
      "Facilitate to obtain such Registration, Prior Permission, Condonation, Renewaletc. from the office of Ministry of Home Affairs – Delhi."
    ],
    leadPartnerId: "mona-trivedi",
    icon: "ShieldCheck"
  },
  {
    id: "ibc",
    name: "INSOLVENCY AND BANKRUPTCY CODE",
    shortDescription: "Voluntary liquidation, NCLT/NCLAT representations, and Creditor process facilitation.",
    description: "Legal drafting and representation before tribunals under the Insolvency and Bankruptcy Code, 2016.",
    details: "Services include: Drafting of Notice and application including Voluntary Liquidation under Insolvency Code. Appearing before NCLT and NCLAT for the matter under IBC. Facilitating Committee of Creditors, Resolution Professional, Liquidator in completion of process under Corporate Insolvency Resolution Process (CIRP), Liquidation Process etc.",
    includes: [
      "Drafting of Notice and application including Voluntary Liquidation under Insolvency Code.",
      "Appearing before NCLT and NCLAT for the matter under IBC.",
      "Facilitating Committee of Creditors, Resolution Professional, Liquidator in completion of process under Corporate Insolvency Resolution Process (CIRP), Liquidation Process etc."
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "FileText"
  },
  {
    id: "banking",
    name: "BANKS AND FINANCIAL INSTITUTIONS",
    shortDescription: "MCA search reports, borrowing resolutions audits, and Due Diligence Reports.",
    description: "Examination of loan agreement covenants and corporate compliance verification before availing bank credit.",
    details: "Services include: Providing Search Report based on documents available on MCA. Examine covenants contained in the loan agreement thoroughly and to check whether all notices required to be sent to the FI and Banks have been complied. Providing Due Diligence Report as per RBI guideline.",
    includes: [
      "Providing Search Report based on documents available on MCA.",
      "Examine covenants contained in the loan agreement thoroughly and to check whether all notices required to be sent to the FI and Banks have been complied and necessary approvals were obtained from the FI and Banks wherever required.",
      "Information about Memorandum and Articles of Association, Borrowing powers and resolutions there under has been passed in proper manner or not by the company before availing loan.",
      "Providing Due Diligence Report as per RBI guideline"
    ],
    leadPartnerId: "ashish-tripathi",
    icon: "Briefcase"
  },
  {
    id: "audit",
    name: "AUDIT",
    shortDescription: "Secretarial audits under Section 204, SEBI reconciliation, and governance audits.",
    description: "Conducting independent statutory audits to verify corporate compliance health and governance metrics.",
    details: "Services include: Due Diligence under Corporate Laws in case of Take Over, Change in Management, Joint Venture, IPO, QIB etc. Reconciliation of Share Capital Audit as per SEBI Guidelines. Corporate Governance. Annual Compliance of Corporate Laws. Secretarial Audit under Section 204.",
    includes: [
      "Due Diligence under Corporate Laws in case of Take Over, Change in Management, Joint Venture, IPO, QIB etc.",
      "Reconciliation of Share Capital Audit as per SEBI Guidelines",
      "Corporate Governance",
      "Annual Compliance of Corporate Laws as per SEBI guideline",
      "Secretarial Audit"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "ShieldAlert"
  },
  {
    id: "representation",
    name: "APPEARANCE BEFORE",
    shortDescription: "Appearing before NCLT, NCLAT, SEBI, SAT, Regional Directors, ROC, and RBI.",
    description: "Representation before quasi-judicial bodies and corporate regulators on compliance issues.",
    details: "We represent clients before: Securities Exchange Board of India (SEBI), Securities Appellate Tribunal (SAT), Stock Exchanges, Regional Director (RD), Registrar of Companies (ROC), Ministry of Corporate Affairs – Delhi (HQ), Reserve Bank of India, Secretarial for Industrial Approval (SIA), National Company Law Tribunal / Appellate Tribunal (NCLT and NCLAT).",
    includes: [
      "Securities Exchange Board of India (SEBI)",
      "Securities Appellate Tribunal (SAT)",
      "Stock Exchanges",
      "Regional Director (RD)",
      "Registrar of Companies (ROC)",
      "Ministry of Corporate Affairs – Delhi (HQ)",
      "Reserve Bank of India",
      "Secretarial for Industrial Approval (SIA)",
      "National Company Law Tribunal / Appellate Tribunal (NCLT and NCLAT)"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Scale"
  },
  {
    id: "clientele",
    name: "CLIENTAL",
    shortDescription: "Serving Public/Private Companies, NPOs/NGOs, NBFCs, and Banks.",
    description: "A wide corporate and institutional client base built over three decades of professional excellence.",
    details: "Our clientele includes: Public /Private Limited Companies, NPOs/NGOs, Government / Public Sector Companies, Joint Venture Companies, Multinational Companies, Limited Liability Partnerships (LLPs), Non Banking Financial Companies (NBFCs), Partnership Firms, Banks.",
    includes: [
      "Public /Private Limited Companies",
      "NPOs/NGOs",
      "Government / Public Sector Companies",
      "Joint Venture Companies",
      "Multinational Companies",
      "Limited Liability Partnerships (LLPs)",
      "Non Banking Financial Companies (NBFCs)",
      "Partnership Firms",
      "Banks"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Users"
  }
];

export const sectors = []; // Removed: No industries page on source site

export const people = [
  {
    id: "niraj-trivedi",
    name: "CS NIRAJ TRIVEDI",
    title: "Founder & Leader",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
    bio: "CS NIRAJ TRIVEDI is a Fellow member of ICSI and founder of this firm, having extensive knowledge and experience of more than 30 years in the field of Corporate Laws such as the Companies Act, 2013, Foreign Exchange Management Act, 1999 (“FEMA”), Securities and Exchange Board of India Act, 1992 (along with its Rules and Regulations), Foreign Contribution (Regulation) Act, 2010 (“FCRA”), and the Insolvency and Bankruptcy Code, 2016 (“IBC”), among others.\n\nHe was the past Chairman of the Vadodara Chapter of ICSI and is in charge of the overall functioning of the firm. He holds a B.Com. (Honours), is an Associate Member of ACIS (U.K.), and also holds an LL.B. (Special), a Post Graduate Diploma in Cyber Law (PGDCL), and a Post Graduate Diploma in Labour Laws and Practice (PGDLP).\n\nAt present, he represents clients before various statutory authorities such as the National Company Law Tribunals (“NCLT”), National Company Law Appellate Tribunal (“NCLAT”), Regional Directors (“RD”), Registrars of Companies (“ROC”), Reserve Bank of India (“RBI”), and SEBI.\n\nHe is also actively involved in providing professional opinions on complex matters of corporate law, and frequently delivers lectures at various platforms and Study Circle meetings organized by ICSI and ICAI.",
    practices: ["llp", "fema", "ibc", "audit", "representation"],
    sectors: [],
    publications: [],
    roleType: "leader"
  },
  {
    id: "mona-trivedi",
    name: "ADV. MONA TRIVEDI",
    title: "Head of Legal & Drafting",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
    bio: "She is an LL.M. (Gold Medalist) by qualification with around 25 years of experience in the fields of Corporate Laws, Banking Regulation, Revenue Matters, Debt Recovery, and Title Clearance. She has been associated with the firm since its inception and handles the drafting of various applications, petitions, appeals, schemes, and other legal documents to be submitted to statutory authorities such as NCLT, NCLAT, SEBI, ROC, RD, and RBI.",
    practices: ["ipr", "fcra"],
    sectors: [],
    publications: [],
    roleType: "leader"
  },
  {
    id: "ashish-tripathi",
    name: "CS ASHISH TRIPATHI",
    title: "Head of Ahmedabad Branch",
    officeId: "ahmedabad",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
    bio: "He is an Associate Company Secretary and a senior partner of the firm with around 15 years of experience in Corporate Laws. He heads the Ahmedabad office and manages liaising with various statutory authorities at Ahmedabad and Gandhinagar, including the ROC, RD, NCLT, and the Stamp Office.",
    practices: ["sebi", "banking"],
    sectors: [],
    publications: [],
    roleType: "expert"
  },
  {
    id: "samir-raval",
    name: "CS SAMIR RAVAL",
    title: "Associate",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop",
    bio: "",
    practices: [],
    sectors: [],
    publications: [],
    roleType: "expert"
  },
  {
    id: "vrund-bhrambhatt",
    name: "CS VRUND BHRAMBHATT",
    title: "Associate",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop",
    bio: "",
    practices: [],
    sectors: [],
    publications: [],
    roleType: "expert"
  },
  {
    id: "riya-shah",
    name: "RIYA SHAH",
    title: "Associate",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=2000&auto=format&fit=crop",
    bio: "",
    practices: [],
    sectors: [],
    publications: [],
    roleType: "expert"
  },
  {
    id: "ismail-shaikhjiwala",
    name: "CS ISMAIL SHAIKHJIWALA",
    title: "Associate",
    officeId: "vadodara",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop",
    bio: "He is an Associate Company Secretary with around two years of experience in the field of Corporate Laws and FEMA. He handles company formation, company/LLP conversion, and legal compliances for all unlisted and private limited companies under the Companies Act, 2013, and the LLP Act.",
    practices: ["llp", "fema"],
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
  headline: "A Legacy of Excellence & Integrity",
  body1: "We are the firm of Practicing Company Secretaries (PCS) engaged in multi-disciplinary services rendering to various clients Corporates, Banks/FIs, Non Profit Organizations (NGOs), Firms etc. in India.",
  body2: "At present our firm comprising of five qualified, dedicated and experienced Company Secretaries including Founder Promoter Niraj Trivedi."
};

export const visionMission = {
  vision: "To render professional company secretarial support of the highest quality at a reasonable fee, making our services value for money.",
  mission: "To deliver ethical, precise, and business-centric Company Secretary services that empower enterprises to remain compliant, confident, and growth-ready in a dynamic regulatory environment."
};

export const leadershipMessage = {
  author: "CS NIRAJ TRIVEDI",
  designation: "Founder & Leader",
  quote: "Corporate governance is not a mere set of statutory rules; it is the absolute foundation of corporate trust, investor faith, and long-term enterprise sustainability.",
  body: "Over the last three decades, we have partnered with public and private corporations, government units, and NGOs to ensure seamless alignment with evolving MCA, SEBI, and RBI compliance rules."
};

export const journeyTimeline = [
  { year: "1994", milestone: "Firm Establishment", narrative: "Founded by CS Niraj Trivedi with a vision to provide specialized corporate secretarial services in Vadodara." },
  { year: "2005", milestone: "Expansion of Services", narrative: "Broadened practice areas to include SEBI regulations, FEMA compliances, and appearances before quasi-judicial bodies." },
  { year: "2012", milestone: "Ahmedabad Branch", narrative: "Inaugurated a dedicated branch office in Ahmedabad to better serve the growing corporate sector in Gujarat." },
  { year: "2018", milestone: "NCLT & IBC Practice", narrative: "Established a specialized desk for Insolvency and Bankruptcy Code matters and robust representation before the NCLT." },
  { year: "Present", milestone: "National Presence", narrative: "Operating with associate offices in Delhi, serving multinational corporations and listed entities across India." }
];

export const corporateValues = [
  { title: "Integrity", body: "Absolute transparency and adherence to the ICSI code of conduct." },
  { title: "Confidentiality", body: "Uncompromising protection of client data and strategic information." },
  { title: "Partnership", body: "Acting as true stakeholders in the sustainable growth of our clients." },
  { title: "Excellence", body: "Delivering meticulous accuracy in every legal and statutory filing." }
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
