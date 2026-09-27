/** Resume content, taken from IdrisM_Resume.pdf (engineering) and Idris Mushtak Marketing.pdf (marketing). */

export type Mode = 'engineering' | 'marketing'

export type Role = {
  title: string
  org: string
  place: string
  period: string
  bullets: string[]
  tags?: string[]
}

/** A counted number, or a `text` highlight shown in place of the number. */
export type Stat = { value?: number; text?: string; prefix?: string; suffix?: string; label: string }

export type Resume = {
  label: string
  roles: string[]
  summary: string
  stats: Stat[]
  marquee: string[]
  experience: Role[]
  feature: { kicker: string; title: string; subtitle: string; bullets: string[]; tags: string[] }
  education: { school: string; degree: string; period: string; detail: string }
  skills: { group: string; items: string[] }[]
}

export const CONTACT = {
  name: 'Idris Mushtak',
  location: 'Amsterdam, NL',
  email: 'idrismushtak11@gmail.com',
  linkedin: 'https://linkedin.com/in/idris-mushtak',
  github: 'https://github.com/idris-mushtak',
}

export const RESUMES: Record<Mode, Resume> = {
  engineering: {
    label: 'Engineering',
    roles: ['AI Engineer', 'Founder', 'ML Researcher', 'Full-stack Builder'],
    summary:
      'AI student at Vrije Universiteit Amsterdam building AI products end to end, from diffusion-model research to agents that publish to real websites.',
    stats: [
      { value: 6, suffix: '+', label: 'years building software' },
      { value: 3, suffix: '', label: 'products founded and shipped' },
    ],
    marquee: ['PyTorch', 'CUDA', 'Diffusion Models', 'LoRA', 'CLIP', 'DINOv2', 'Next.js', 'Supabase', 'Cloudflare', 'Python', 'C/C++', 'Java'],
    experience: [
      {
        title: 'Founder: AI SEO/GEO Agent',
        org: 'TryNobu.com & Pointbase.cc',
        place: 'Amsterdam, NL',
        period: 'May 2026 – Present',
        bullets: [
          'Built and shipped an AI agent that automatically writes and publishes blog content to client websites to maintain SEO and AI answer engine (GEO) visibility, deployed on Cloudflare.',
          'Built a multi-CMS integration surface: native WordPress publishing via wp_insert_post() (not embed-based, for correct AI crawler visibility), plus Nango-managed OAuth for Webflow, Wix and BigCommerce, with a Shopify path still open. Each platform carries distinct publish semantics, auth refresh behavior and failure modes.',
          'Resolved Meta Business Manager integration issues blocking ad account access; DNS configured via Namecheap.',
        ],
        tags: ['Cloudflare', 'WordPress', 'OAuth', 'Agents'],
      },
      {
        title: 'Founder',
        org: 'FlowAds.ai',
        place: 'Amsterdam, NL',
        period: 'Jul 2025 – Jan 2026',
        bullets: [
          'Developed an AI-powered platform that turns raw marketing ideas into high-quality video ads within minutes, with a drag-and-drop editor for non-technical users.',
          'Integrated generative video and language models (Veo, Sora, Claude) to automate scriptwriting, scene generation and visual editing, cutting production time significantly.',
          'Benchmarked leading video generation models on cost per second and output quality to guide the platform’s model routing pipeline.',
        ],
        tags: ['Veo', 'Sora', 'Claude', 'Model routing'],
      },
      {
        title: 'Founder & Creative Director',
        org: 'Olé Creative Agency',
        place: 'Amsterdam, NL',
        period: '2024 – Present',
        bullets: [
          'Run a content and growth agency for creators and businesses with a combined 2M+ followers, managing content creation, script writing and growth strategy for accounts with 1M+ followers each.',
          'Built repeatable systems for narrative consistency, audience engagement and intellectual property protection across client brands.',
          'Grew a fresh account from 0 to 30K followers in under 3 months through targeted content strategy and posting cadence. Now 100K+.',
        ],
        tags: ['Growth', 'Content systems'],
      },
      {
        title: 'Web Developer',
        org: 'Freelance',
        place: 'Doha, QA',
        period: 'Jun 2020 – Aug 2021',
        bullets: ['Front-end development focused on UI/UX using Webflow and C/C++.', 'Back-end development for server-side application logic using Python.'],
        tags: ['Webflow', 'Python'],
      },
    ],
    feature: {
      kicker: 'Bachelor thesis · Vrije Universiteit Amsterdam · 2025 – 2026',
      title: 'One-Shot Brand Identity Conditioning for Text-to-Video Diffusion',
      subtitle: 'PyTorch · CUDA · Wan2.2 Video Diffusion · CLIP · DINOv2 · RunPod',
      bullets: [
        'Designed and ran a controlled, parameter-matched comparison of three brand identity conditioning methods (textual inversion, LoRA, and a custom CLIP+DINOv2 cross-attention adapter) on a frozen 5B-parameter video diffusion backbone, isolating mechanism from raw model capacity.',
        'Discovered a concept-bleed failure mode in the adapter’s unconditioned injection pathway via a calibrated hyperparameter sweep, independently confirmed across three quantitative metrics (CLIP-T, DINOv2 fidelity, OCR-based typography scoring).',
        'Built the full training and evaluation pipeline from scratch, including verification harnesses that caught silent training bugs (dtype mismatches, zero-gradient deadlocks) before they cost GPU budget.',
        'The corrected result reversed the naive ranking between methods, showing that raw reconstruction metrics can reward a visible failure mode as apparent success.',
      ],
      tags: ['Textual inversion', 'LoRA', 'Cross-attention adapter', 'Evaluation methodology'],
    },
    education: {
      school: 'Vrije Universiteit Amsterdam',
      degree: 'BSc Artificial Intelligence',
      period: '2023 – Oct 2026',
      detail:
        'Machine Learning, Deep Learning, Python Programming, Knowledge and Data, Intelligent Systems, Computational Thinking, Linear Algebra and Calculus, Conversational Agents.',
    },
    skills: [
      { group: 'Languages', items: ['Python', 'Java', 'C/C++'] },
      { group: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'CUDA', 'LoRA & adapter fine-tuning', 'Diffusion models', 'CLIP', 'DINOv2', 'Prolog'] },
      { group: 'Infrastructure', items: ['Git', 'GitHub Actions', 'Google Cloud', 'Vercel', 'Render', 'Supabase / Postgres', 'RunPod'] },
      { group: 'Web / No-code', items: ['Next.js', 'Bubble.io', 'Webflow', 'n8n', 'Namecheap DNS'] },
    ],
  },

  marketing: {
    label: 'Marketing',
    roles: ['Creative Director', 'Growth Strategist', 'Founder', 'Content Lead'],
    summary:
      'I’m an AI student and founder building useful things at the intersection of marketing, content and technology. I run a creative agency helping hospitality and lifestyle brands grow their social presence, alongside a content-protection service and an AI video-ad startup, and I’m still learning as I go.',
    stats: [
      { value: 96, suffix: 'K+', label: 'followers grown from zero in 8 months' },
      { value: 30, prefix: '+', suffix: '%', label: 'average monthly engagement growth for clients' },
      { value: 3, suffix: '', label: 'companies founded' },
    ],
    marquee: ['Social strategy', 'Content production', 'Creator partnerships', 'Hospitality', 'Lifestyle brands', 'Video ads', 'Brand protection', 'Growth'],
    experience: [
      {
        title: 'Founder & Creative Director',
        org: 'Olé Creative Agency',
        place: 'Amsterdam, NL',
        period: '2025 – Present',
        bullets: [
          'Lead social media strategy and content production for hospitality and lifestyle brands, growing engagement and follower counts across accounts.',
          'Manage social growth strategy and content partnerships for multiple influencers and creators (100K+ followers each), overseeing accounts with combined managed audiences in the millions.',
          'Helped clients grow average monthly engagement by over 30% through revised content and posting strategy.',
        ],
        tags: ['Social strategy', 'Creators', 'Hospitality'],
      },
      {
        title: 'Founder',
        org: 'FlowAds',
        place: 'Amsterdam, NL',
        period: 'Jul 2025 – Present',
        bullets: [
          'Building an AI video-advertising platform that converts raw marketing briefs into finished video ads within minutes, integrating generative models (Veo3, Sora, Claude) for scriptwriting, scene generation and visual editing.',
          'Designed a drag-and-drop editor giving non-technical users effortless ad customization and rapid turnaround.',
          'Piloting the platform with early hospitality and e-commerce clients to refine output quality and turnaround time.',
        ],
        tags: ['Video ads', 'AI creative', 'E-commerce'],
      },
      {
        title: 'Founder',
        org: 'Checkingg',
        place: 'Amsterdam, NL',
        period: '2025 – Present',
        bullets: [
          'Built and operate a content-protection service, drafting and filing formal DMCA takedown notices for creator clients against unauthorized redistribution sites.',
          'Built lightweight monitoring tools to help flag unauthorized re-uploads of client content across the web.',
        ],
        tags: ['Brand protection', 'DMCA', 'Monitoring'],
      },
    ],
    feature: {
      kicker: 'Side & technical projects',
      title: 'Where marketing meets machine learning',
      subtitle: 'Instagram · TikTok · Growth hacking · TensorFlow · Bubble.io · Whisper · Dialogflow',
      bullets: [
        'Social Media Manager (side project): ran social media for restaurants and influencers, growth-hacking their accounts to 100K+ followers through content strategy, trend timing and posting cadence.',
        'Sneaker Verification App: trained a TensorFlow/Keras deep learning classifier on augmented image data; shipped as a Bubble.io web app with AWS-backed image storage.',
        'Conversational & Multi-Agent Systems: built a voice-driven recipe assistant (Whisper, Dialogflow, Prolog filtering over 1,000 recipes) and a JADE-based multi-agent simulation using search algorithms for coordinated decision-making.',
      ],
      tags: ['Social media management', 'Growth hacking', 'Restaurants', 'Influencers', 'Deep learning', 'Voice AI'],
    },
    education: {
      school: 'Vrije Universiteit Amsterdam',
      degree: 'BSc Artificial Intelligence',
      period: 'Aug 2023 – Aug 2026',
      detail: 'Machine Learning, Knowledge & Data, Intelligent Systems, Conversational Agents, Computational Thinking, Linear Algebra & Calculus.',
    },
    skills: [
      { group: 'Growth & no-code', items: ['Bubble.io', 'Webflow', 'n8n', 'Zapier'] },
      { group: 'Languages / ML', items: ['Python', 'Java', 'C/C++', 'TensorFlow', 'PyTorch', 'Prolog'] },
      { group: 'Tools', items: ['Git', 'Google Cloud Platform'] },
    ],
  },
}
