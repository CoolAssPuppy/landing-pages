import type { LegalPageConfig } from "@/types/page-config";

export const exampleRulesPage: LegalPageConfig = {
  type: "legal",
  slug: "example-rules",
  metadata: {
    title: "Official Rules for Giveaways & Sweepstakes - ACME Corp",
    description:
      "Official rules and regulations for ACME Corp giveaways and sweepstakes promotions.",
  },
  title: "ACME Corp official rules for giveaways and sweepstakes",
  effectiveDate: "January 1, 2026",
  preamble:
    "NO PURCHASE OR PAYMENT NECESSARY TO ENTER OR WIN. A PURCHASE OR PAYMENT WILL NOT INCREASE YOUR CHANCES OF WINNING. VOID WHERE PROHIBITED.",
  toc: [
    { id: "sponsor", label: "1. Sponsor" },
    { id: "promotion-period", label: "2. Promotion Period" },
    { id: "eligibility", label: "3. Eligibility" },
    { id: "how-to-enter", label: "4. How to Enter" },
    { id: "prizes", label: "5. Prizes" },
    { id: "winner-selection", label: "6. Winner Selection & Notification" },
    { id: "international-winners", label: "7. International Winners" },
    { id: "prize-substitution", label: "8. Prize Substitution" },
    { id: "odds", label: "9. Odds" },
    { id: "publicity", label: "10. Publicity" },
    { id: "privacy", label: "11. Privacy" },
    { id: "limitation-of-liability", label: "12. Limitation of Liability" },
    { id: "disputes", label: "13. Disputes & Governing Law" },
    { id: "sanctions", label: "14. Sanctions & Trade Compliance" },
    { id: "data-transfers", label: "15. Data Transfers" },
    { id: "force-majeure", label: "16. Force Majeure" },
    { id: "general-conditions", label: "17. General Conditions" },
    { id: "winners-list", label: "18. Winners List" },
  ],
  sections: [
    {
      id: "sponsor",
      title: "1. Sponsor",
      content: `
        <p>ACME Corp, Inc. ("Sponsor").</p>
      `,
    },
    {
      id: "promotion-period",
      title: "2. Promotion Period",
      content: `
        <p>The Promotion begins at the time and date announced at the applicable ACME Corp event or digital campaign and ends at the time specified in the Promotion materials (the "Promotion Period"). Sponsor's system is the official time-keeping device.</p>
      `,
    },
    {
      id: "eligibility",
      title: "3. Eligibility",
      content: `
        <p>The Promotion is open to legal residents of countries where such promotions are permitted by law, who are at least the age of majority in their jurisdiction of residence at the time of entry.</p>
        <p>The following are not eligible to enter or win:</p>
        <ul>
          <li>Employees, officers, and directors of Sponsor and its affiliates</li>
          <li>Contractors, marketing agencies, and vendors involved in administering the Promotion</li>
          <li>Immediate family members and household members of the above</li>
        </ul>
        <p>The Promotion is void in jurisdictions where sweepstakes are prohibited or materially restricted without filings, bonding, or government approvals, including but not limited to:</p>
        <ul>
          <li>Brazil</li>
          <li>Quebec (Canada)</li>
          <li>Italy</li>
          <li>Spain</li>
          <li>Russia</li>
          <li>Iran</li>
          <li>North Korea</li>
          <li>Syria</li>
          <li>Cuba</li>
          <li>Belarus</li>
          <li>Mainland China</li>
          <li>Crimea, Donetsk, and Luhansk regions of Ukraine</li>
          <li>Any jurisdiction subject to U.S., EU, or UN trade sanctions</li>
          <li>Any jurisdiction requiring registration, bonding, or regulatory approvals not obtained by Sponsor</li>
        </ul>
        <p>Sponsor reserves the right to disqualify any entrant whose participation is unlawful or non-compliant under local law.</p>
      `,
    },
    {
      id: "how-to-enter",
      title: "4. How to Enter",
      content: `
        <p>To enter, follow the instructions provided at the applicable ACME Corp event or promotional campaign, which may include:</p>
        <ul>
          <li>Scanning a badge at an ACME Corp booth</li>
          <li>Submitting an entry form</li>
          <li>Creating an ACME Corp account</li>
          <li>Completing a product action (e.g., launching a project, loading data)</li>
        </ul>
        <p>Limit: One (1) entry per person unless otherwise specified.</p>
        <p>Entries must be received during the Promotion Period.</p>
        <p>Automated, robotic, or scripted entries are prohibited.</p>
      `,
    },
    {
      id: "prizes",
      title: "5. Prizes",
      content: `
        <p>Prizes will be described in the Promotion materials and may include consumer electronics, merchandise, credits, or other items of value. Approximate Retail Value ("ARV") will be disclosed for each Promotion. Sponsor reserves the right to substitute a prize of equal or greater value if the advertised prize becomes unavailable or cannot be legally shipped or awarded in a winner's jurisdiction.</p>
      `,
    },
    {
      id: "winner-selection",
      title: "6. Winner Selection & Notification",
      content: `
        <p>Winners will be selected in a random drawing or other announced method at the time specified in the Promotion materials. Winners will be notified via the contact information provided at entry. Failure to respond within seven (7) days of notification may result in forfeiture, and an alternate winner may be selected.</p>
      `,
    },
    {
      id: "international-winners",
      title: "7. International Winners -- Taxes, Customs, and Duties",
      content: `
        <p>Winners are solely responsible for all taxes, customs duties, VAT, import fees, brokerage fees, and any other charges imposed by local authorities. Sponsor may require winners to complete tax forms or declarations as required by law. Sponsor will not be responsible for prizes delayed, seized, or rejected by customs or local authorities. If a prize cannot be legally delivered to a winner's country, Sponsor may substitute a prize of equal or greater value or award a cash or credit equivalent, at Sponsor's discretion.</p>
      `,
    },
    {
      id: "prize-substitution",
      title: "8. Prize Substitution & Local Compliance",
      content: `
        <p>Sponsor reserves the right to:</p>
        <ul>
          <li>Substitute prizes based on local availability or legal restrictions</li>
          <li>Modify the prize format (e.g., cash, store credit, digital gift card) for international winners</li>
          <li>Disqualify entries from jurisdictions where the Promotion cannot be lawfully administered</li>
        </ul>
      `,
    },
    {
      id: "odds",
      title: "9. Odds",
      content: `
        <p>Odds of winning depend on the number of eligible entries received.</p>
      `,
    },
    {
      id: "publicity",
      title: "10. Publicity",
      content: `
        <p>Except where prohibited by law, participation constitutes winner's consent to Sponsor's use of winner's name, likeness, city, country, and prize information for promotional purposes without additional compensation.</p>
      `,
    },
    {
      id: "privacy",
      title: "11. Privacy",
      content: `
        <p>Personal information collected in connection with the Promotion will be used in accordance with Sponsor's <a href="#">Privacy Policy</a>.</p>
      `,
    },
    {
      id: "limitation-of-liability",
      title: "12. Limitation of Liability",
      content: `
        <p>Sponsor is not responsible for:</p>
        <ul>
          <li>Lost, late, incomplete, or misdirected entries</li>
          <li>Technical failures of any kind</li>
          <li>Unauthorized human intervention</li>
          <li>Errors in the administration of the Promotion</li>
        </ul>
        <p>By entering, entrants release and hold harmless Sponsor from any claims arising out of participation or prize acceptance.</p>
      `,
    },
    {
      id: "disputes",
      title: "13. Disputes & Governing Law",
      content: `
        <p>All disputes shall be governed by the laws of the State of California, USA, without regard to conflict-of-law principles. Any dispute, claim, or controversy arising out of or relating to this Promotion shall be resolved by binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. All claims shall be resolved individually, without class actions. The arbitration shall be conducted in San Francisco, California. The arbitrator's decision shall be final and binding.</p>
      `,
    },
    {
      id: "sanctions",
      title: "14. Sanctions & Trade Compliance",
      content: `
        <p>Entrants represent and warrant that they are not located in, under the control of, or a resident of any country or territory subject to U.S., EU, or UN sanctions and are not listed on any government sanctions or restricted party lists.</p>
        <p>Sponsor reserves the right to disqualify any entrant or withhold any prize if awarding such prize would violate applicable trade or sanctions laws.</p>
      `,
    },
    {
      id: "data-transfers",
      title: "15. Data Transfers -- GDPR / UK GDPR",
      content: `
        <p>By entering, entrants consent to the transfer, processing, and storage of their personal data in the United States and other jurisdictions for purposes of administering the Promotion, selecting winners, awarding prizes, and related promotional activities.</p>
      `,
    },
    {
      id: "force-majeure",
      title: "16. Force Majeure / Regulatory Impossibility",
      content: `
        <p>Sponsor shall not be responsible for any failure or delay in performance due to events beyond its reasonable control, including but not limited to acts of God, war, terrorism, labor disputes, governmental orders, regulatory changes, public health emergencies, shipping disruptions, or technical failures.</p>
        <p>Sponsor reserves the right to modify, suspend, or cancel the Promotion if regulatory changes or governmental restrictions make lawful administration impracticable.</p>
      `,
    },
    {
      id: "general-conditions",
      title: "17. General Conditions",
      content: `
        <p>Sponsor reserves the right to cancel, modify, or suspend the Promotion if fraud, technical failure, or any other factor impairs the integrity of the Promotion. Sponsor's decisions are final.</p>
      `,
    },
    {
      id: "winners-list",
      title: "18. Winners List",
      content: `
        <p>For a copy of the winners list, send a request to:</p>
        <p><a href="mailto:legal@example.com">legal@example.com</a></p>
        <p>within sixty (60) days of the end of the Promotion.</p>
      `,
    },
  ],
};
