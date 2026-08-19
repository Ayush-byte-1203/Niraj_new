const fs = require('fs');

const path = '/Users/ayush/Downloads/niraj new design/src/data/mockDb.js';
let content = fs.readFileSync(path, 'utf8');

const newPractices = `export const practices = [
  {
    id: "ipo",
    name: "Initial Public Offering (IPO) Services",
    shortDescription: "We provide end-to-end professional assistance to companies undertaking an Initial Public Offering (IPO), with a strong focus on corporate, secretarial, regulatory and compliance requirements.",
    description: "We provide end-to-end professional assistance to companies undertaking an Initial Public Offering (IPO), with a strong focus on corporate, secretarial, regulatory and compliance requirements. Our team assists companies in preparing for the IPO process and navigating the regulatory framework applicable to public issues and listing of securities.",
    details: "",
    includes: [
      "IPO Due Diligence",
      "Corporate and Secretarial Due Diligence",
      "Assistance in preparation and review of IPO-related documents",
      "Regulatory and statutory compliance",
      "Coordination and assistance with SEBI and Stock Exchange requirement",
      "Corporate restructuring and capital restructuring in connection with IPOs",
      "Assistance with pre-IPO and post-IPO compliances",
      "Support throughout the IPO and listing process"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "TrendingUp"
  },
  {
    id: "llp",
    name: "Limited Liability Partnership Act",
    shortDescription: "We provide comprehensive legal, secretarial and regulatory services for Limited Liability Partnerships, assisting clients from incorporation and structuring to ongoing statutory compliances and corporate changes.",
    description: "We provide comprehensive legal, secretarial and regulatory services for Limited Liability Partnerships, assisting clients from incorporation and structuring to ongoing statutory compliances and corporate changes. Our services are tailored to meet the specific requirements of LLPs under the Limited Liability Partnership Act, 2008 and applicable rules and regulations.",
    details: "",
    includes: [
      "Assistance with incorporation, name approval, preparation of the LLP Agreement and statutory filings.",
      "Formation of LLP, conversion of Company into LLP or otherwise.",
      "Drafting, reviewing and modification of LLP Agreements in accordance with the requirements of the partners.",
      "Reconstitution of Partnership Deed including change in the capital, partners etc.",
      "Assistance with necessary approvals and filings for changes in the LLP's registered office, name, business activities, partners or capital of partners etc.",
      "Winding and striking off of LLP",
      "Guidance on timely submission of forms with the office of Registrar of Companies including Statutory and Event Based submission."
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Users"
  },
  {
    id: "sebi",
    name: "Securities and Exchange Board of India Act and Its Regulations",
    shortDescription: "We provide comprehensive advisory and compliance services in relation to the Securities and Exchange Board of India Act and the regulations, rules and guidelines issued thereunder.",
    description: "We provide comprehensive advisory and compliance services in relation to the Securities and Exchange Board of India Act and the regulations, rules and guidelines issued thereunder. Our services are aimed at helping companies, promoters, investors and other market participants understand and comply with the evolving securities regulatory framework.",
    details: "",
    includes: [
      "Providing guidance for Listing / Revocation of securities with stock exchanges.",
      "Providing guidance as required under the Listing Regulations and action to be taken by the company there under such as periodically compliance including compliances under Corporate Governance and Listing Regulation etc.",
      "Issue of shares/ securities as Bonus / Rights Issue /Public Issue (IPO/FPO), Private Placement, ESOP, QIBs, FIIs etc. including drafting of related documents and papers.",
      "Providing guidance in drafting of Prospectus/ Letter of Offer or other related documents and obtaining various approvals and getting the security listed with the stock exchanges etc. in association with Merchant Bankers.",
      "This includes providing guidance in respect of compliance under Listing Regulations and communication with SEBI/ Stock Exchanges for SME / Main Board.",
      "Providing proper guidance to the companies under SEBI Takeover code, Buy Back of securities, Insider Trading Regulation and drafting of various communication with the SEBI / Stock Exchanges / Shareholders in this connection. This includes drafting of application to be submitted to SEBI for seeking exemption under SAST, ICDR etc.",
      "Delisting of securities in compliance with the SEBI regulation."
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "BarChart"
  },
  {
    id: "fema",
    name: "Foreign Exchange Management Act",
    shortDescription: "We provide comprehensive advisory and compliance services under the Foreign Exchange Management Act, 1999 (FEMA) and the regulations, rules, notifications and directions issued thereunder.",
    description: "We provide comprehensive advisory and compliance services under the Foreign Exchange Management Act, 1999 (FEMA) and the regulations, rules, notifications and directions issued thereunder. We assist Indian and foreign businesses in navigating cross-border transactions and ensuring compliance with the applicable foreign exchange framework.",
    details: "",
    includes: [
      "Formation of Joint Venture (JV), Wholly Owned Subsidiary companies in and outside India in compliance with the requirements under Reserve Bank of India (RBI) / Department of Industrial Policy and Promotion (DIPP) and guideline framed thereunder.",
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
    name: "Foreign Contribution (Regulation) Act",
    shortDescription: "We provide advisory and compliance services under the Foreign Contribution Regulation Act, 2010 (FCRA) and the rules and regulations framed thereunder.",
    description: "We provide advisory and compliance services under the Foreign Contribution Regulation Act, 2010 (FCRA) and the rules and regulations framed thereunder. We assist eligible organisations in ensuring proper regulatory compliance while receiving, utilising and reporting foreign contributions in accordance with the applicable legal framework.",
    details: "",
    includes: [
      "Providing guidance on eligibility criteria for Registration and Prior Permission.",
      "Advising on and documentation required for Prior Permission, Registration, Condonation, Restoration, Shifting of Designated Bank, Renewal, change of constitution etc. of NGOs.",
      "Facilitate to obtain such Registration, Prior Permission, Condonation, Renewal etc. from the office of Ministry of Home Affairs -Delhi."
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Briefcase"
  },
  {
    id: "ibc",
    name: "Insolvency and Bankruptcy Code",
    shortDescription: "We provide comprehensive legal and advisory services in matters arising under the Insolvency and Bankruptcy Code, 2016 (IBC).",
    description: "We provide comprehensive legal and advisory services in matters arising under the Insolvency and Bankruptcy Code, 2016 (IBC). Our team assists corporate entities, creditors and other stakeholders in navigating insolvency proceedings, restructuring requirements and related proceedings before the adjudicating and appellate authorities.",
    details: "",
    includes: [
      "Drafting of Notice and application including Voluntary Liquidation under Insolvency Code.",
      "Appearing before NCLT and NCLAT for the matter under IBC.",
      "Assistance to Financial Creditors in matters relating to initiation of insolvency proceedings against corporate debtors.",
      "Assistance to Operational Creditors in initiating insolvency proceedings and responding to applications filed by Operational Creditors.",
      "Facilitating Resolution Professional, Liquidator in completion of process under Corporate Insolvency Resolution Process (CIRP), Liquidation Process etc."
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Scale"
  },
  {
    id: "banking",
    name: "Banking and Finance",
    shortDescription: "We provide comprehensive legal, regulatory and compliance services to banks, financial institutions and other regulated entities in relation to applicable banking laws and regulations.",
    description: "We provide comprehensive legal, regulatory and compliance services to banks, financial institutions and other regulated entities in relation to applicable banking laws and regulations, including the Banking Regulation Act, RBI directions and other relevant regulatory frameworks. Our services are designed to assist clients in meeting regulatory obligations, maintaining effective governance and addressing complex banking and financial matters.",
    details: "",
    includes: [
      "Providing Search Report based on documents available on MCA.",
      "Examine covenants contained in the loan agreement thoroughly and to check whether all notices required to be sent to the Financial Institutions and Banks have been complied and necessary approvals were obtained from the FI and Banks wherever required.",
      "Information about Memorandum and Articles of Association, borrowing powers and resolutions there under has been passed in proper manner or not by the company before availing loan.",
      "Providing Due Diligence Report as per RBI guideline"
    ],
    leadPartnerId: "ashish-tripathi",
    icon: "ShieldCheck"
  },
  {
    id: "audit",
    name: "Audit",
    shortDescription: "We provide specialized audit and compliance review services to help companies assess their compliance with applicable corporate laws, regulations and secretarial standards.",
    description: "We provide specialized audit and compliance review services to help companies assess their compliance with applicable corporate laws, regulations and secretarial standards. Our audit approach focuses on identifying compliance gaps, strengthening governance practices and providing practical recommendations for corrective measures.",
    details: "",
    includes: [
      "Due Diligence under Corporate Laws in case of Take Over, Change in Management, Joint Venture, IPO, QIB etc.",
      "Conducting Secretarial Audit in accordance with the Companies Act, 2013 and applicable regulations.",
      "Reconciliation of Share Capital Audit as per SEBI Guidelines",
      "Corporate Governance",
      "Annual Compliance of Corporate Laws as per SEBI guideline"
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Search"
  },
  {
    id: "ipr",
    name: "Intellectual Property Laws",
    shortDescription: "We provide advisory and legal support in matters relating to Intellectual Property Rights (IPR), helping businesses protect, manage and commercially utilise their intellectual assets.",
    description: "We provide advisory and legal support in matters relating to Intellectual Property Rights (IPR), helping businesses protect, manage and commercially utilise their intellectual assets. Our services cover the identification, registration, protection and enforcement of intellectual property rights in accordance with applicable laws.",
    details: "",
    includes: [
      "Advising on intellectual Property Licensing.",
      "Getting Trademark Registered.",
      "Advising on passing off/ infringement matter and to represent the case before Trademark Registry for getting the mark registered."
    ],
    leadPartnerId: "mona-trivedi",
    icon: "Award"
  },
  {
    id: "corporate-restructuring",
    name: "Corporate Restructuring",
    shortDescription: "We provide comprehensive advisory and implementation support for corporate restructuring transactions, helping businesses reorganize their corporate structure, ownership, operations and liabilities.",
    description: "We provide comprehensive advisory and implementation support for corporate restructuring transactions, helping businesses reorganize their corporate structure, ownership, operations and liabilities in accordance with their strategic and commercial objectives. Our team assists clients in navigating the legal, regulatory and procedural requirements involved in complex restructuring transactions.",
    details: "",
    includes: [
      "Advisory and assistance in relation to mergers, amalgamations and schemes of arrangement between companies.",
      "Assistance with demergers and re-organisation of business undertakings.",
      "Assistance with alteration and re-organisation of share capital, including reduction of share capital.",
      "Assistance in obtaining necessary approvals and completing statutory filings before the NCLT, ROC, Regional Director and other regulatory authorities.",
      "Assistance with implementation of approved restructuring arrangements and completion of consequential corporate and regulatory compliances."
    ],
    leadPartnerId: "niraj-trivedi",
    icon: "Briefcase"
  },
  {
    id: "capital-restructuring",
    name: "Capital Restructuring Services",
    shortDescription: "We advise companies on restructuring and reorganising their share capital and securities structure to meet their business, financial and strategic objectives.",
    description: "We advise companies on restructuring and reorganising their share capital and securities structure to meet their business, financial and strategic objectives. Our services cover a wide range of capital-related corporate actions, with assistance in fulfilling the applicable legal, regulatory and procedural requirements.",
    details: "",
    includes: [
      "Advisory and assistance in relation to reduction of share capital and the requisite regulatory and NCLT process.",
      "Assistance with buy-back of shares and other securities in accordance with applicable laws and regulations.",
      "Assistance with rights issues, preferential allotments, private placements and other permitted methods of raising share capital."
    ],
    leadPartnerId: "ashish-tripathi",
    icon: "BarChart"
  }
];`;

const startIndex = content.indexOf('export const practices = [');
const endIndex = content.indexOf('];', startIndex) + 2;

const newContent = content.slice(0, startIndex) + newPractices + content.slice(endIndex);

fs.writeFileSync(path, newContent);
console.log('Successfully updated practices array in mockDb.js');
