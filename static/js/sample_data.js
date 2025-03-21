/**
 * Sample contract data for training and testing the Contract Analysis System
 * This file contains structured sample contracts of different types
 */

const sampleContracts = [
  {
    id: "contract-001",
    title: "Software Development Agreement",
    type: "service_agreement",
    parties: ["ABC Tech Solutions", "XYZ Corporation"],
    effective_date: "2025-01-15",
    duration: "12 months",
    text: `SOFTWARE DEVELOPMENT AGREEMENT

This Software Development Agreement (the "Agreement") is entered into as of January 15, 2025 (the "Effective Date") by and between:

ABC Tech Solutions, a corporation organized under the laws of Delaware, with its principal place of business at 123 Tech Boulevard, San Francisco, CA 94105 ("Developer")

and

XYZ Corporation, a corporation organized under the laws of California, with its principal place of business at 456 Corporate Drive, Palo Alto, CA 94301 ("Client").

RECITALS

WHEREAS, Client desires to engage Developer to develop certain software applications and/or services as described in this Agreement; and

WHEREAS, Developer has the expertise and capability to develop the software and desires to develop the software for Client;

NOW, THEREFORE, in consideration of the mutual covenants, terms, and conditions set forth herein, and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows:

1. SERVICES

1.1 Services. Developer shall provide to Client the software development services ("Services") described in one or more statements of work to be issued by Client and accepted by Developer (each, a "Statement of Work" or "SOW"). Each SOW will be in substantially the form of Exhibit A and shall include: (a) a description of the Services to be performed; (b) a description of the software deliverables to be developed and delivered to Client ("Deliverables"); (c) the schedule for performance and delivery; and (d) the applicable fees and payment schedule.

1.2 Changes. Client may request changes to any SOW. If Client requests any change to a SOW, Developer shall notify Client if it believes that an adjustment in fees, schedule, Deliverables, or other matters is necessary. Any changes to a SOW, including any adjustment in fees, schedule, or Deliverables, must be in a written amendment to the SOW signed by both parties before implementation of the changes.

2. COMPENSATION

2.1 Fees. Client shall pay the fees as set forth in each SOW. If no fee schedule is specified in an SOW, Client shall pay for Services at Developer's then-current hourly rates.

2.2 Expenses. Client shall reimburse Developer for all reasonable expenses incurred in accordance with the SOW, provided that Developer submits receipts or other documentation.

2.3 Invoicing and Payment. Unless otherwise provided in a SOW, Developer shall invoice Client monthly for all fees and expenses. Client shall pay all invoiced amounts within thirty (30) days after the invoice date. Client shall pay interest on all late payments at the rate of 1.5% per month or the highest rate permissible under applicable law, calculated daily and compounded monthly.

3. INTELLECTUAL PROPERTY RIGHTS

3.1 Client Ownership. Subject to Developer's rights in the Developer Tools (defined below), all intellectual property rights, including copyrights, patents, patent disclosures, and inventions (whether patentable or not), trademarks, service marks, trade secrets, know-how, and other confidential information, trade dress, trade names, logos, corporate names, and domain names, together with all derivatives, modifications, and improvements thereof (collectively, "Intellectual Property Rights") in and to all Deliverables shall be owned by Client. Developer hereby irrevocably assigns to Client all right, title, and interest in and to the Deliverables.

3.2 Developer Tools. Notwithstanding Section 3.1, Developer retains all right, title, and interest in and to any tools, libraries, methodologies, processes, techniques, knowledge, and components used in developing the Deliverables that are Developer's proprietary information and were not specifically created for Client ("Developer Tools"). Developer hereby grants Client a non-exclusive, perpetual, irrevocable, royalty-free, worldwide license to use the Developer Tools solely in connection with the Deliverables.

4. CONFIDENTIALITY

4.1 Confidential Information. Each party acknowledges that it will have access to certain confidential information of the other party concerning the other party's business, plans, customers, technology, and products ("Confidential Information"). Confidential Information includes all information in tangible or intangible form that is marked or designated as confidential or that, under the circumstances, should reasonably be considered confidential.

4.2 Protection of Confidential Information. Each party agrees to (a) keep confidential all Confidential Information disclosed to it by the other party; (b) use the Confidential Information only for purposes of fulfilling its obligations under this Agreement; and (c) disclose such Confidential Information only to its employees, agents, and contractors who have a need to know such information and are bound by obligations of confidentiality at least as protective as those contained herein.

5. WARRANTIES

5.1 Developer Warranties. Developer warrants that (a) it will perform the Services in a professional and workmanlike manner in accordance with generally recognized industry standards; (b) for a period of ninety (90) days following delivery and acceptance by Client, the Deliverables will materially conform to the specifications set forth in the applicable SOW; (c) to the best of Developer's knowledge, the Deliverables will not infringe on any third party's intellectual property rights; and (d) it has the right to enter into this Agreement and to grant the rights and licenses granted herein.

6. TERM AND TERMINATION

6.1 Term. This Agreement begins on the Effective Date and continues for a period of twelve (12) months, unless terminated earlier in accordance with this Agreement.

6.2 Termination for Breach. Either party may terminate this Agreement if the other party breaches any material term of this Agreement and fails to cure such breach within thirty (30) days after receipt of written notice.

6.3 Effect of Termination. Upon termination, Client shall pay Developer for all Services rendered and expenses incurred up to the effective date of termination.

7. LIMITATION OF LIABILITY

EXCEPT FOR BREACH OF CONFIDENTIALITY OBLIGATIONS OR INTELLECTUAL PROPERTY RIGHTS, IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, OR PUNITIVE DAMAGES.

IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the Effective Date.

ABC Tech Solutions                       XYZ Corporation
By: _____________________                By: _____________________
Name: John Smith                         Name: Sarah Johnson
Title: CEO                              Title: CTO
Date: January 15, 2025                  Date: January 15, 2025`,
    key_clauses: {
      "Services": "Developer shall provide software development services as described in Statements of Work.",
      "Compensation": "Client shall pay fees as set forth in each SOW, reimburse expenses, and pay invoices within 30 days.",
      "Intellectual Property Rights": "Client owns all IP rights to deliverables; Developer retains rights to Developer Tools.",
      "Confidentiality": "Both parties must keep confidential information secret and use it only for purposes of the Agreement.",
      "Warranties": "Developer warrants professional services, conforming deliverables, non-infringement, and right to enter agreement.",
      "Term and Termination": "12-month term; termination for breach with 30-day cure period; payment for services upon termination.",
      "Limitation of Liability": "Neither party liable for consequential, incidental, indirect, exemplary, special, or punitive damages."
    },
    dates: [
      "January 15, 2025 (Effective Date)",
      "Twelve (12) months (Term)",
      "Thirty (30) days (Cure Period)",
      "Ninety (90) days (Warranty Period)"
    ],
    monetary_values: [
      "1.5% per month (Interest on Late Payments)"
    ]
  },
  {
    id: "contract-002",
    title: "Commercial Lease Agreement",
    type: "lease_agreement",
    parties: ["Commercial Properties LLC", "Retail Ventures Inc."],
    effective_date: "2025-02-01",
    duration: "5 years",
    text: `COMMERCIAL LEASE AGREEMENT

THIS LEASE AGREEMENT (the "Lease") is made and entered into as of February 1, 2025 (the "Effective Date"), by and between Commercial Properties LLC, a limited liability company organized under the laws of New York, with its principal place of business at 789 Landlord Plaza, Suite 500, New York, NY 10001 ("Landlord"), and Retail Ventures Inc., a corporation organized under the laws of New York with its principal place of business at 321 Business Road, Brooklyn, NY 11201 ("Tenant").

1. PREMISES

1.1 Leased Premises. Landlord hereby leases to Tenant, and Tenant hereby leases from Landlord, that certain commercial space consisting of approximately 2,500 square feet, known as Suite 101, located at 555 Commerce Street, New York, NY 10013 (the "Premises").

1.2 Common Areas. Tenant shall have non-exclusive use of common areas including lobbies, hallways, elevators, restrooms, and parking areas.

2. TERM

2.1 Lease Term. The term of this Lease shall be for five (5) years, commencing on March 1, 2025 (the "Commencement Date") and ending on February 28, 2030 (the "Expiration Date"), unless earlier terminated as provided herein.

2.2 Option to Renew. Tenant shall have one (1) option to extend the term of this Lease for an additional period of three (3) years, provided that Tenant is not in default at the time of exercise of such option and has not been in default more than twice during the initial term. Tenant must provide written notice to Landlord of its intent to exercise this option at least six (6) months prior to the Expiration Date.

3. RENT

3.1 Base Rent. Tenant shall pay to Landlord as base rent for the Premises the sum of $8,500.00 per month ("Base Rent"), payable in advance on the first day of each calendar month during the term of this Lease.

3.2 Security Deposit. Upon execution of this Lease, Tenant shall deposit with Landlord the sum of $17,000.00, equal to two months' Base Rent, as security for Tenant's faithful performance of its obligations under this Lease ("Security Deposit").

3.3 Additional Rent. In addition to Base Rent, Tenant shall pay as additional rent a proportionate share (based on the ratio of the Premises' square footage to the Building's total leasable square footage) of all Operating Expenses. "Operating Expenses" include all costs of operating, maintaining, repairing, and replacing all portions of the Building, including but not limited to:

(a) Real estate taxes and assessments;
(b) Insurance premiums;
(c) Utilities not separately metered;
(d) Maintenance, repair, and replacement costs;
(e) Property management fees; and
(f) Capital improvements amortized over their useful life.

4. USE OF PREMISES

4.1 Permitted Use. The Premises shall be used and occupied by Tenant solely for retail sales of clothing and accessories and for no other purpose without Landlord's prior written consent.

4.2 Compliance with Laws. Tenant shall comply with all laws, ordinances, orders, rules, and regulations of governmental authorities applicable to Tenant's use of the Premises.

5. MAINTENANCE AND REPAIRS

5.1 Landlord's Obligations. Landlord shall maintain in good condition and repair the structural portions of the Building, including the foundation, exterior walls, and roof, as well as common areas.

5.2 Tenant's Obligations. Tenant shall, at its sole cost and expense, maintain the interior of the Premises in good condition and repair, including all fixtures, electrical systems, plumbing, and HVAC systems.

6. ALTERATIONS

6.1 Tenant Improvements. Tenant shall not make any alterations, additions, or improvements to the Premises without Landlord's prior written consent, which consent shall not be unreasonably withheld for non-structural alterations costing less than $10,000.00.

7. INSURANCE

7.1 Tenant's Insurance. Tenant shall maintain commercial general liability insurance with limits of not less than $2,000,000.00 per occurrence, property insurance covering Tenant's personal property, and worker's compensation insurance as required by law.

7.2 Landlord's Insurance. Landlord shall maintain property insurance on the Building and commercial general liability insurance for the common areas.

8. ASSIGNMENT AND SUBLETTING

8.1 Consent Required. Tenant shall not assign this Lease or sublet all or any portion of the Premises without Landlord's prior written consent, which consent shall not be unreasonably withheld.

9. DEFAULT

9.1 Tenant Default. The occurrence of any of the following shall constitute a default by Tenant:

(a) Failure to pay rent within five (5) days after due date;
(b) Failure to perform any other provision of this Lease if not cured within thirty (30) days after written notice;
(c) Abandonment of the Premises; or
(d) Bankruptcy or insolvency of Tenant.

9.2 Remedies. In the event of any default by Tenant, Landlord may:

(a) Terminate this Lease;
(b) Recover all damages caused by Tenant's default;
(c) Re-enter and take possession of the Premises; or
(d) Pursue any other remedy available at law or in equity.

10. INDEMNIFICATION

10.1 Tenant's Indemnification. Tenant shall indemnify, defend, and hold Landlord harmless from any claims, liabilities, damages, and expenses arising from Tenant's use of the Premises or from any activity permitted by Tenant in or about the Premises.

11. SURRENDER

11.1 Condition of Premises. Upon expiration or termination of this Lease, Tenant shall surrender the Premises in good condition, reasonable wear and tear excepted.

IN WITNESS WHEREOF, the parties hereto have executed this Lease as of the Effective Date.

Commercial Properties LLC                Retail Ventures Inc.
By: _____________________                By: _____________________
Name: Michael Brown                      Name: Jennifer Lee
Title: Managing Member                   Title: President
Date: February 1, 2025                   Date: February 1, 2025`,
    key_clauses: {
      "Premises": "2,500 square feet commercial space at 555 Commerce Street, Suite 101, New York, NY.",
      "Term": "5-year lease from March 1, 2025 to February 28, 2030, with one 3-year renewal option.",
      "Rent": "$8,500 monthly base rent plus proportionate share of operating expenses; $17,000 security deposit.",
      "Use of Premises": "Solely for retail sales of clothing and accessories; compliance with laws required.",
      "Maintenance": "Landlord maintains structure and common areas; Tenant maintains interior and systems.",
      "Alterations": "Tenant needs landlord consent for alterations; non-structural alterations under $10,000 reasonably approved.",
      "Insurance": "Tenant must maintain $2M liability insurance and property insurance for personal items.",
      "Assignment and Subletting": "Landlord's consent required, not to be unreasonably withheld.",
      "Default": "Default occurs for non-payment after 5 days, other breaches uncured after 30 days, abandonment, or bankruptcy."
    },
    dates: [
      "February 1, 2025 (Effective Date)",
      "March 1, 2025 (Commencement Date)",
      "February 28, 2030 (Expiration Date)",
      "Six (6) months prior (Notice for Renewal Option)",
      "Five (5) days (Grace Period for Rent)",
      "Thirty (30) days (Cure Period for Non-monetary Default)"
    ],
    monetary_values: [
      "$8,500.00 per month (Base Rent)",
      "$17,000.00 (Security Deposit)",
      "$10,000.00 (Threshold for Alterations Approval)",
      "$2,000,000.00 (Liability Insurance Minimum)"
    ]
  },
  {
    id: "contract-003",
    title: "Employment Agreement",
    type: "employment_agreement",
    parties: ["Tech Innovations Inc.", "Jane Doe"],
    effective_date: "2025-03-15",
    duration: "Indefinite",
    text: `EMPLOYMENT AGREEMENT

This Employment Agreement (the "Agreement") is made and entered into as of March 15, 2025 (the "Effective Date"), by and between:

Tech Innovations Inc., a Delaware corporation with its principal place of business at 987 Innovation Parkway, Austin, TX 78701 (the "Company")

and

Jane Doe, residing at 654 Talent Lane, Austin, TX 78703 (the "Employee").

The parties agree as follows:

1. EMPLOYMENT

1.1 Position and Duties. The Company hereby employs Employee, and Employee hereby accepts employment with the Company, as Chief Technology Officer (CTO). Employee shall perform all duties and responsibilities inherent in the position of Chief Technology Officer, including those specified in the job description attached as Exhibit A, as well as any other duties reasonably assigned by the Company's CEO and Board of Directors.

1.2 Full Time and Attention. Employee shall devote Employee's full business time, attention, and energies to the performance of Employee's duties for the Company.

2. TERM

2.1 Commencement. Employee's employment under this Agreement shall commence on April 1, 2025 (the "Start Date").

2.2 At-Will Employment. Employee's employment with the Company is "at-will," meaning that either the Company or Employee may terminate this Agreement and the employment relationship at any time, with or without cause, subject to the provisions of Section 5 below.

3. COMPENSATION AND BENEFITS

3.1 Base Salary. The Company shall pay Employee a base salary of $225,000 per year (the "Base Salary"), payable in equal installments in accordance with the Company's regular payroll practices, less applicable withholdings and deductions.

3.2 Annual Bonus. Employee shall be eligible to receive an annual performance bonus of up to 30% of Employee's Base Salary (the "Annual Bonus"), based on achievement of individual and Company performance goals established by the Board of Directors. The Annual Bonus, if any, shall be paid within 90 days following the end of the Company's fiscal year.

3.3 Equity. Subject to approval by the Company's Board of Directors, Employee shall be granted an option to purchase 100,000 shares of the Company's common stock (the "Option") under the Company's Stock Option Plan (the "Plan"). The Option shall vest over four (4) years, with 25% vesting after one year of continuous service from the Start Date, and the remainder vesting in equal monthly installments over the following 36 months of continuous service.

3.4 Benefits. Employee shall be eligible to participate in all employee benefit plans, programs, and arrangements that the Company makes available to its similarly situated employees generally, subject to the terms and conditions of such plans, programs, and arrangements.

3.5 Vacation. Employee shall be entitled to four (4) weeks of paid vacation per year, accrued in accordance with the Company's vacation policy.

3.6 Business Expenses. The Company shall reimburse Employee for all reasonable business expenses incurred in the performance of Employee's duties, in accordance with the Company's expense reimbursement policies.

4. PROPRIETARY INFORMATION AND INVENTIONS

4.1 Proprietary Information Agreement. As a condition of employment, Employee shall sign and comply with the Company's standard Employee Proprietary Information and Inventions Agreement (the "PIIA"), which is attached as Exhibit B and incorporated herein by reference.

5. TERMINATION

5.1 Termination without Cause. If the Company terminates Employee's employment without Cause (as defined below), the Company shall provide Employee with:

(a) Accrued Obligations, including any earned but unpaid Base Salary, unused vacation, and reimbursable expenses; and

(b) Severance Pay equal to six (6) months of Employee's Base Salary, payable in accordance with the Company's regular payroll schedule, subject to Employee's execution of a separation agreement containing a general release of claims in a form acceptable to the Company.

5.2 Termination for Cause. If the Company terminates Employee's employment for Cause, the Company shall provide Employee with only the Accrued Obligations. "Cause" means:

(a) Employee's material breach of this Agreement or the PIIA;
(b) Employee's commission of a felony or any crime involving moral turpitude;
(c) Employee's gross negligence or willful misconduct in the performance of duties;
(d) Employee's failure to perform the essential functions of Employee's position; or
(e) Employee's violation of any material Company policy.

5.3 Resignation. If Employee resigns, the Company shall provide Employee with only the Accrued Obligations.

6. RESTRICTIVE COVENANTS

6.1 Non-Competition. During employment and for twelve (12) months thereafter, Employee shall not, directly or indirectly, engage in any business that competes with the Company's business.

6.2 Non-Solicitation. During employment and for twelve (12) months thereafter, Employee shall not, directly or indirectly, solicit or attempt to solicit any employee, consultant, or customer of the Company.

7. GENERAL PROVISIONS

7.1 Governing Law. This Agreement shall be governed by and construed in accordance with the laws of the State of Texas, without giving effect to any choice of law or conflict of law provisions.

7.2 Dispute Resolution. Any dispute arising out of or relating to this Agreement shall be resolved by confidential arbitration conducted in Austin, Texas in accordance with the rules of the American Arbitration Association.

7.3 Entire Agreement. This Agreement, together with the PIIA and any other exhibits referenced herein, constitutes the entire agreement between the parties relating to this subject matter and supersedes all prior or contemporaneous agreements and understandings, whether written or oral.

7.4 Amendment. This Agreement may be amended or modified only by a written instrument signed by Employee and by a duly authorized representative of the Company.

IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the Effective Date.

Tech Innovations Inc.                     Employee
By: _____________________                 _____________________
Name: Robert Wilson                       Jane Doe
Title: CEO                                
Date: March 15, 2025                      Date: March 15, 2025`,
    key_clauses: {
      "Employment": "Jane Doe hired as CTO, must devote full business time and attention to duties.",
      "Term": "At-will employment starting April 1, 2025; either party may terminate with or without cause.",
      "Compensation": "$225,000 base salary, up to 30% annual bonus, option for 100,000 shares vesting over 4 years.",
      "Benefits": "Standard employee benefits, 4 weeks paid vacation, reasonable business expense reimbursement.",
      "Proprietary Information": "Employee must sign and comply with Proprietary Information and Inventions Agreement.",
      "Termination": "Without cause: 6 months severance; For cause or resignation: only accrued obligations.",
      "Restrictive Covenants": "12-month non-compete and non-solicitation periods after employment ends.",
      "Dispute Resolution": "Disputes resolved by confidential arbitration in Austin, Texas."
    },
    dates: [
      "March 15, 2025 (Effective Date)",
      "April 1, 2025 (Start Date)",
      "Four (4) years (Equity Vesting Period)",
      "Six (6) months (Severance Period)",
      "Twelve (12) months (Non-compete and Non-solicitation Period)"
    ],
    monetary_values: [
      "$225,000 per year (Base Salary)",
      "30% of Base Salary (Maximum Annual Bonus)",
      "100,000 shares (Stock Option Grant)"
    ]
  },
  {
    id: "contract-004",
    title: "Non-Disclosure Agreement",
    type: "nda",
    parties: ["Innovative Research Labs", "Global Pharmaceuticals Inc."],
    effective_date: "2025-04-10",
    duration: "3 years",
    text: `MUTUAL NON-DISCLOSURE AGREEMENT

This Mutual Non-Disclosure Agreement (the "Agreement") is entered into as of April 10, 2025 (the "Effective Date") by and between:

Innovative Research Labs, a corporation organized under the laws of Massachusetts, with its principal place of business at 555 Science Park Drive, Cambridge, MA 02142 ("IRL")

and

Global Pharmaceuticals Inc., a corporation organized under the laws of New Jersey, with its principal place of business at 789 Medical Plaza, Princeton, NJ 08540 ("GPI").

Each of IRL and GPI may be referred to individually as a "Party" and collectively as the "Parties."

RECITALS

WHEREAS, the Parties wish to explore a potential business relationship relating to the development of novel therapeutics (the "Purpose"); and

WHEREAS, in connection with the Purpose, each Party may disclose to the other certain confidential and proprietary information, and the Parties wish to protect such information in accordance with this Agreement;

NOW, THEREFORE, in consideration of the mutual covenants, terms, and conditions set forth herein, and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the Parties agree as follows:

1. DEFINITION OF CONFIDENTIAL INFORMATION

1.1 "Confidential Information" means all non-public, confidential, or proprietary information disclosed by a Party (the "Disclosing Party") to the other Party (the "Receiving Party"), in any form or medium, whether oral, written, electronic, or otherwise, and whether or not marked, designated, or otherwise identified as "confidential," including but not limited to:

(a) all information concerning the Disclosing Party's past, present, and future business affairs, including finances, products, services, research, development, inventions, processes, specifications, designs, drawings, technology, marketing, customers, and suppliers;

(b) the Disclosing Party's technical know-how, trade secrets, formulas, compositions, techniques, algorithms, software programs, source code, data, and other proprietary rights; and

(c) any third-party information that the Disclosing Party is obligated to keep confidential.

1.2 Exclusions. Confidential Information does not include information that:

(a) is or becomes generally available to the public other than through a breach of this Agreement by the Receiving Party;

(b) was known to the Receiving Party prior to its disclosure by the Disclosing Party, as evidenced by written records;

(c) becomes available to the Receiving Party on a non-confidential basis from a source other than the Disclosing Party, provided that such source is not bound by a confidentiality agreement with the Disclosing Party; or

(d) is independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information, as evidenced by written records.

2. OBLIGATIONS OF RECEIVING PARTY

2.1 Protection of Confidential Information. The Receiving Party shall:

(a) keep the Disclosing Party's Confidential Information strictly confidential;

(b) use the Disclosing Party's Confidential Information solely for the Purpose and not for any other purpose, including any competitive or commercial purpose;

(c) not disclose the Disclosing Party's Confidential Information to any third party without the Disclosing Party's prior written consent;

(d) limit access to the Disclosing Party's Confidential Information to its employees, agents, and representatives who (i) need to know such information for the Purpose, (ii) are informed of its confidential nature, and (iii) are bound by confidentiality obligations at least as restrictive as those contained in this Agreement; and

(e) protect the Disclosing Party's Confidential Information with at least the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care.

2.2 Required Disclosures. If the Receiving Party is required by law, court order, or governmental authority to disclose any Confidential Information, the Receiving Party shall:

(a) promptly notify the Disclosing Party in writing of such requirement;

(b) cooperate with the Disclosing Party in seeking a protective order or other appropriate remedy; and

(c) disclose only that portion of the Confidential Information that is legally required to be disclosed.

3. TERM AND TERMINATION

3.1 Term. This Agreement will remain in effect for three (3) years from the Effective Date, unless terminated earlier by mutual agreement of the Parties.

3.2 Survival. Notwithstanding the termination of this Agreement, the confidentiality obligations set forth in this Agreement shall survive for a period of five (5) years from the date of disclosure of the Confidential Information.

3.3 Return or Destruction. Upon the termination of this Agreement or at the Disclosing Party's request, the Receiving Party shall promptly return to the Disclosing Party or destroy all Confidential Information in its possession, including all copies, notes, or derivatives thereof, and certify in writing that it has done so.

4. REMEDIES

4.1 Equitable Relief. Each Party acknowledges that a breach of this Agreement may cause the other Party irreparable harm for which monetary damages would be inadequate. Accordingly, either Party may seek injunctive or other equitable relief to prevent or remedy a breach of this Agreement, without the necessity of posting a bond.

4.2 Cumulative Remedies. The rights and remedies provided under this Agreement are cumulative and are in addition to, not in lieu of, any other rights and remedies available under law or in equity.

5. GENERAL PROVISIONS

5.1 No License. Nothing in this Agreement shall be construed as granting any right, license, or interest in or to any intellectual property rights of either Party.

5.2 No Obligation. This Agreement does not obligate either Party to disclose any Confidential Information or to enter into any other agreement or business relationship.

5.3 Governing Law. This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws principles.

5.4 Entire Agreement. This Agreement constitutes the entire agreement between the Parties with respect to the subject matter hereof and supersedes all prior or contemporaneous understandings and agreements, whether written or oral.

5.5 Amendments. This Agreement may only be amended, modified, or supplemented by an agreement in writing signed by each Party.

5.6 Counterparts. This Agreement may be executed in counterparts, each of which shall be deemed an original, but all of which together shall be deemed to be one and the same agreement.

IN WITNESS WHEREOF, the Parties hereto have executed this Agreement as of the Effective Date.

Innovative Research Labs                 Global Pharmaceuticals Inc.
By: _____________________                By: _____________________
Name: Dr. Emily Chen                     Name: Dr. Mark Thompson
Title: CEO                               Title: VP of Research
Date: April 10, 2025                     Date: April 10, 2025`,
    key_clauses: {
      "Definition of Confidential Information": "All non-public, confidential, proprietary information in any form, with exclusions for publicly available information, previously known information, information from other sources, and independently developed information.",
      "Obligations of Receiving Party": "Keep information confidential, use only for specified purpose, limit disclosure, protect with reasonable care, and follow protocol for legally required disclosures.",
      "Term and Termination": "3-year agreement term with 5-year survival of confidentiality obligations; return or destroy all confidential information upon termination.",
      "Remedies": "Parties may seek injunctive relief for breaches without posting bond; remedies are cumulative and in addition to other legal remedies.",
      "No License": "No rights or licenses to intellectual property are granted.",
      "No Obligation": "No obligation to disclose information or enter business relationships."
    },
    dates: [
      "April 10, 2025 (Effective Date)",
      "Three (3) years (Agreement Term)",
      "Five (5) years from disclosure (Survival of Confidentiality Obligations)"
    ],
    monetary_values: []
  },
  {
    id: "contract-005",
    title: "Master Services Agreement",
    type: "service_agreement",
    parties: ["DataCloud Services", "Enterprise Solutions Corp."],
    effective_date: "2025-05-01",
    duration: "2 years",
    text: `MASTER SERVICES AGREEMENT

This Master Services Agreement (the "Agreement") is made and entered into as of May 1, 2025 (the "Effective Date") by and between:

DataCloud Services, a corporation organized under the laws of California, with its principal place of business at 123 Cloud Drive, San Jose, CA 95134 ("Service Provider")

and

Enterprise Solutions Corp., a corporation organized under the laws of Illinois, with its principal place of business at 456 Corporate Boulevard, Chicago, IL 60601 ("Client").

1. SERVICES

1.1 Services. Service Provider shall provide to Client the services ("Services") described in one or more statements of work to be executed by both parties (each, a "Statement of Work" or "SOW"). Each SOW shall include: (a) a description of the Services to be performed; (b) the schedule for performance; (c) the deliverables to be provided to Client ("Deliverables"); (d) the fees and payment schedule; and (e) any other terms specific to the Services to be provided. Each SOW shall be incorporated into and form part of this Agreement.

1.2 Performance Standards. Service Provider shall perform the Services in a professional, workmanlike manner in accordance with industry standards and the specific requirements set forth in the applicable SOW.

1.3 Changes. Either party may request changes to a SOW. All changes must be mutually agreed upon in writing. If a change affects the pricing, schedule, or other terms, the parties shall agree on an equitable adjustment to the affected terms.

2. FEES AND PAYMENT

2.1 Fees. Client shall pay Service Provider the fees set forth in each SOW. Fees may be structured as fixed fees, time and materials, subscription fees, or as otherwise specified in the applicable SOW.

2.2 Expenses. Client shall reimburse Service Provider for all reasonable, pre-approved, out-of-pocket expenses incurred in connection with the Services.

2.3 Invoicing and Payment. Unless otherwise specified in a SOW, Service Provider shall invoice Client monthly for fees and expenses. Client shall pay all undisputed amounts within thirty (30) days after receipt of each invoice. All payments are non-refundable except as expressly provided in this Agreement.

2.4 Taxes. All fees are exclusive of taxes. Client shall be responsible for all sales, use, and excise taxes, and any other similar taxes, duties, and charges imposed by any federal, state, or local governmental entity on the Services, excluding taxes based on Service Provider's net income.

3. TERM AND TERMINATION

3.1 Term. This Agreement shall commence on the Effective Date and continue for a period of two (2) years, unless earlier terminated as provided herein (the "Initial Term"). Thereafter, this Agreement shall automatically renew for successive one (1) year periods (each, a "Renewal Term" and together with the Initial Term, the "Term"), unless either party provides written notice of non-renewal at least sixty (60) days prior to the end of the then-current Term.

3.2 Termination for Cause. Either party may terminate this Agreement or any SOW if the other party materially breaches this Agreement or any SOW and fails to cure such breach within thirty (30) days after receiving written notice thereof.

3.3 Termination for Convenience. Unless otherwise specified in a SOW, Client may terminate any SOW for convenience upon thirty (30) days' prior written notice to Service Provider, subject to payment of any termination fees specified in the applicable SOW.

3.4 Effect of Termination. Upon termination of this Agreement or any SOW, Client shall pay Service Provider for all Services performed and expenses incurred up to the effective date of termination. Sections 4, 5, 6, 7, and 9 shall survive the termination of this Agreement.

4. INTELLECTUAL PROPERTY RIGHTS

4.1 Client Materials. Client shall retain all right, title, and interest in and to any materials, data, or information provided by Client to Service Provider for use in connection with the Services ("Client Materials").

4.2 Service Provider Materials. Service Provider shall retain all right, title, and interest in and to any methodologies, processes, techniques, ideas, concepts, trade secrets, know-how, tools, frameworks, software, and other intellectual property developed, owned, or licensed by Service Provider prior to or independent of this Agreement ("Service Provider Materials"). Service Provider hereby grants Client a non-exclusive, non-transferable, non-sublicensable license to use the Service Provider Materials solely in connection with the Deliverables during the Term.

4.3 Deliverables. Subject to Client's payment of all fees due under this Agreement, Service Provider hereby assigns to Client all right, title, and interest in and to the Deliverables, excluding any Service Provider Materials contained therein.

5. CONFIDENTIALITY

5.1 Confidential Information. "Confidential Information" means any non-public information disclosed by one party (the "Disclosing Party") to the other party (the "Receiving Party") that is designated as confidential or that, given the nature of the information or circumstances of disclosure, should reasonably be understood to be confidential.

5.2 Protection of Confidential Information. The Receiving Party shall: (a) use the Disclosing Party's Confidential Information solely for the purpose of performing its obligations or exercising its rights under this Agreement; (b) not disclose the Disclosing Party's Confidential Information to any third party without the Disclosing Party's prior written consent; and (c) protect the Disclosing Party's Confidential Information from unauthorized use or disclosure using at least the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care.

5.3 Exceptions. The obligations in Section 5.2 shall not apply to information that: (a) is or becomes generally available to the public other than as a result of a breach of this Agreement; (b) was known to the Receiving Party prior to its disclosure by the Disclosing Party; (c) becomes known to the Receiving Party from a source other than the Disclosing Party without breach of any obligation of confidentiality; or (d) is independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information.

6. REPRESENTATIONS AND WARRANTIES

6.1 Mutual Representations and Warranties. Each party represents and warrants that: (a) it has the full power and authority to enter into this Agreement and perform its obligations hereunder; and (b) it shall comply with all laws applicable to its performance under this Agreement.

6.2 Service Provider Warranties. Service Provider represents and warrants that: (a) the Services will be performed in a professional and workmanlike manner in accordance with industry standards; (b) the Deliverables will conform to the specifications set forth in the applicable SOW for a period of thirty (30) days after acceptance; and (c) to the best of Service Provider's knowledge, the Deliverables will not infringe any third party intellectual property rights.

6.3 Disclaimer. EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, NEITHER PARTY MAKES ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.

7. LIMITATION OF LIABILITY

7.1 Limitation of Liability. EXCEPT FOR BREACHES OF SECTION 5 (CONFIDENTIALITY) OR A PARTY'S INDEMNIFICATION OBLIGATIONS UNDER SECTION 8, NEITHER PARTY SHALL BE LIABLE TO THE OTHER PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOST PROFITS, LOST REVENUE, OR LOSS OF BUSINESS OPPORTUNITY, WHETHER IN AN ACTION IN CONTRACT, TORT, OR OTHERWISE, EVEN IF THE OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

7.2 Cap on Liability. EXCEPT FOR BREACHES OF SECTION 5 (CONFIDENTIALITY) OR A PARTY'S INDEMNIFICATION OBLIGATIONS UNDER SECTION 8, EACH PARTY'S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT, WHETHER IN CONTRACT, TORT, OR OTHERWISE, SHALL NOT EXCEED THE AMOUNT PAID BY CLIENT TO SERVICE PROVIDER UNDER THE APPLICABLE SOW DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.

8. INDEMNIFICATION

8.1 Service Provider Indemnification. Service Provider shall defend, indemnify, and hold harmless Client from and against any third-party claims, actions, suits, or proceedings, and any damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or resulting from: (a) Service Provider's breach of any representation, warranty, or covenant under this Agreement; or (b) any allegation that the Deliverables infringe any third-party intellectual property rights.

8.2 Client Indemnification. Client shall defend, indemnify, and hold harmless Service Provider from and against any third-party claims, actions, suits, or proceedings, and any damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or resulting from: (a) Client's breach of any representation, warranty, or covenant under this Agreement; or (b) any allegation that the Client Materials infringe any third-party intellectual property rights.

9. GENERAL PROVISIONS

9.1 Independent Contractors. The relationship of the parties is that of independent contractors. Nothing in this Agreement shall be construed to create a partnership, joint venture, or agency relationship between the parties.

9.2 Force Majeure. Neither party shall be liable for any failure or delay in performance under this Agreement due to causes beyond that party's reasonable control, including acts of God, acts of government, flood, fire, earthquakes, civil unrest, acts of terror, strikes or other labor problems, or Internet service provider failures or delays.

9.3 Assignment. Neither party may assign this Agreement or any of its rights or obligations hereunder without the prior written consent of the other party, except that either party may assign this Agreement to its successor in interest in connection with a merger, acquisition, or sale of all or substantially all of its assets. Any purported assignment in violation of this Section shall be void.

9.4 Notices. All notices under this Agreement shall be in writing and shall be deemed given when delivered personally, sent by confirmed email, or sent by certified or registered mail, return receipt requested, to the address specified by the recipient party.

9.5 Governing Law. This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws principles.

9.6 Entire Agreement. This Agreement, including all SOWs, constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior and contemporaneous agreements, proposals, or representations, written or oral, concerning its subject matter.

9.7 Severability. If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions of this Agreement shall remain in full force and effect.

9.8 Waiver. No waiver of any breach of this Agreement shall be a waiver of any other breach, and no waiver shall be effective unless made in writing and signed by an authorized representative of the waiving party.

9.9 Counterparts. This Agreement may be executed in counterparts, each of which shall be deemed an original, but all of which together shall constitute one and the same instrument.

IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the Effective Date.

DataCloud Services                     Enterprise Solutions Corp.
By: _____________________              By: _____________________
Name: David Martinez                   Name: Susan Williams
Title: CEO                            Title: CIO
Date: May 1, 2025                     Date: May 1, 2025`,
    key_clauses: {
      "Services": "Service Provider will provide services described in Statements of Work, performed to professional standards.",
      "Fees and Payment": "Client pays fees in SOW, reimburses approved expenses, pays undisputed amounts within 30 days of invoice.",
      "Term and Termination": "2-year initial term with automatic 1-year renewals; either party can terminate for cause with 30-day cure period; Client can terminate for convenience with 30 days' notice.",
      "Intellectual Property Rights": "Client retains rights to Client Materials; Service Provider retains rights to pre-existing IP; Client owns Deliverables upon payment.",
      "Confidentiality": "Parties must protect Confidential Information, use only for Agreement purposes, with standard exclusions.",
      "Warranties": "Services performed professionally; Deliverables conform to specifications for 30 days; no infringement of third-party IP.",
      "Limitation of Liability": "No indirect damages; liability capped at fees paid in previous 12 months, except for confidentiality breaches and indemnification.",
      "Indemnification": "Service Provider indemnifies Client against third-party claims for breach or IP infringement; Client similarly indemnifies Service Provider."
    },
    dates: [
      "May 1, 2025 (Effective Date)",
      "Two (2) years (Initial Term)",
      "One (1) year periods (Renewal Terms)",
      "Sixty (60) days (Notice of Non-renewal)",
      "Thirty (30) days (Cure Period for Breach)",
      "Thirty (30) days (Termination for Convenience Notice)",
      "Thirty (30) days (Warranty Period for Deliverables)",
      "Twelve (12) months (Liability Calculation Period)"
    ],
    monetary_values: []
  }
];

// Sample utility functions for working with the contract data
function getContractById(id) {
  return sampleContracts.find(contract => contract.id === id);
}

function getContractsByType(type) {
  return sampleContracts.filter(contract => contract.type === type);
}

function getContractsByParty(partyName) {
  return sampleContracts.filter(contract => 
    contract.parties.some(party => party.includes(partyName))
  );
}

function searchContractText(searchTerm) {
  return sampleContracts.filter(contract => 
    contract.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
}