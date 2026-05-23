'use client'

import { ServicePageTemplate } from '@/components/service-page-template'
import {
  BuildingIcon,
  FileTextIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  GlobeIcon,
  ScaleIcon,
  CompassIcon,
  ListIcon,
  WrenchIcon,
  RocketIcon,
} from 'lucide-react'

export default function OnlineBusinessSetupPage() {
  return (
    <ServicePageTemplate
      badge="Online Business Setup"
      title="From idea to fully"
      titleAccent="launched business"
      subtitle="LLC formation, EIN, business banking, tax setup, contracts, payment processing, we handle the boring-but-critical stuff so you can focus on building, marketing, and growing."
      heroImage="/design-service.jpg"
      primaryCTA="Get a Setup Quote"
      secondaryCTA="See Checklist"
      stats={[
        { value: 600, suffix: '+', label: 'Businesses Launched' },
        { value: 50, suffix: '+', label: 'States Covered' },
        { value: 7, suffix: 'd', label: 'Avg. LLC Filing' },
        { value: 100, suffix: '%', label: 'Compliance Rate' },
      ]}
      featuresHeading="Everything to launch right."
      featuresSubheading="Every piece your business needs in the first 90 days, handled by people who've done this hundreds of times."
      features={[
        { icon: BuildingIcon, title: 'LLC / S-Corp Formation', description: 'State filing, registered agent, EIN, and operating agreement, fully white-glove.' },
        { icon: CreditCardIcon, title: 'Business Banking', description: 'Mercury, Relay, or Chase setup with multi-user roles and accounting integration.' },
        { icon: FileTextIcon, title: 'Contracts & Legal', description: 'Founder agreement, terms of service, privacy policy, NDA, and supplier contracts.' },
        { icon: ShieldCheckIcon, title: 'Compliance & Tax', description: 'Sales tax registration, BOI filing, 1099 setup, and quarterly tax planning.' },
        { icon: GlobeIcon, title: 'International Setup', description: 'Non-US founders: Wyoming/Delaware LLCs, ITIN, and Stripe Atlas alternatives.' },
        { icon: ScaleIcon, title: 'Trademark & IP', description: 'USPTO trademark filing, copyright registration, and IP strategy.' },
      ]}
      benefits={[
        "Done-for-you, we file every form, you only review and sign",
        'Same-day responses from licensed legal & tax partners',
        'Bundled pricing that beats DIY services like LegalZoom',
        'Quarterly tax planning included for 12 months',
        'Document vault for safekeeping of every formation document',
        'Direct Slack access to your operations lead',
      ]}
      processHeading="From idea to live business."
      processSubheading="A predictable 4-step process to a fully launched, fully compliant business, in 2–4 weeks."
      process={[
        { step: '01', title: 'Discovery', description: 'Entity choice, state selection, and ownership structure.', icon: CompassIcon },
        { step: '02', title: 'File & Form', description: 'LLC/S-Corp filing, EIN, banking, registered agent.', icon: ListIcon },
        { step: '03', title: 'Set Up', description: 'Contracts, payment processing, accounting, and compliance.', icon: WrenchIcon },
        { step: '04', title: 'Launch', description: 'Final checklist, document handover, ongoing support.', icon: RocketIcon },
      ]}
      pricingHeading="Business setup packages."
      pricingSubheading="Transparent flat-fee pricing, no hidden filing fees, no monthly add-ons."
      pricing={[
        {
          name: 'Solo Founder',
          price: '$899',
          priceSuffix: 'one-time',
          description: 'LLC formation done right.',
          features: ['LLC formation (state of choice)', 'EIN registration', 'Registered agent (1 year)', 'Operating agreement', 'Compliance calendar', 'Email support'],
        },
        {
          name: 'Launch-Ready',
          price: '$2,499',
          priceSuffix: 'one-time',
          description: 'Everything to take payments and start selling.',
          features: ['LLC + EIN + registered agent', 'Mercury / Relay banking', 'Stripe + PayPal setup', 'Terms, privacy, refund policy', 'Sales tax registration (3 states)', 'Bookkeeping setup', '60-day support'],
          popular: true,
        },
        {
          name: 'Premium Setup',
          price: '$5,999',
          priceSuffix: 'one-time',
          description: 'White-glove setup with legal & tax planning.',
          features: ['Multi-entity structuring', 'S-Corp election & payroll', 'Trademark filing (1 mark)', 'Sales tax (all states)', '12-month tax planning', 'Custom contracts (3)', 'CPA introduction', 'Annual review included'],
        },
      ]}
      faqs={[
        { question: 'Which state should I form my LLC in?', answer: "Usually your home state, unless you're a non-US founder (then Wyoming or Delaware). We'll walk you through the trade-offs based on your situation." },
        { question: 'How long does the whole process take?', answer: 'Solo Founder packages complete in 5–7 business days. Launch-Ready in 10–14 days. Premium Setup in 3–4 weeks.' },
        { question: 'Do you offer ongoing accounting?', answer: "Yes. Through our partner network we connect you with vetted CPAs. We don't markup their fees, you get direct rates." },
        { question: 'Can non-US founders use you?', answer: "Absolutely. We've launched 200+ businesses for international founders, Wyoming or Delaware LLC + ITIN + Mercury / Relay banking + Stripe." },
        { question: 'What if my business is regulated (food, finance, etc.)?', answer: 'We have specialized partners for regulated industries, FDA, FINRA, state licensing. Available as an add-on at any tier.' },
      ]}
      testimonials={[
        { name: 'Aarav Sharma', role: 'Founder, Quill Notes', quote: 'Filed LLC, EIN, Mercury, Stripe, everything done in 8 days. The compliance calendar alone saves me hours every quarter.' },
        { name: 'Hannah Lee', role: 'Solo Founder', quote: 'I tried LegalZoom first. Ace did it cheaper, faster, with actual humans answering. Should have started here.' },
        { name: 'Maya Robertson', role: 'DTC Founder', quote: 'Their S-Corp election and tax planning saved me $18k in year one. Pays for itself many times over.' },
      ]}
      ctaHeading="Ready to launch your business?"
      ctaSubheading="Free 30-min discovery call, we'll map the right entity, state, and timeline for your goals."
      ctaButton="Book Free Launch Consultation"
      techStack={['Mercury', 'Relay', 'Stripe', 'Stripe Atlas', 'Gusto', 'QuickBooks', 'Xero', 'TaxJar', 'Avalara', 'DocuSign']}
    />
  )
}
