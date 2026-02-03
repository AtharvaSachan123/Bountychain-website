import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Scan,
  GitPullRequest,
  Award,
  Brain,
  Github,
  Sparkles,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description:
      'Uses Neurolink AI to intelligently scan repositories and identify improvement opportunities, generating relevant bounty suggestions.',
    color: 'from-orange-500 to-amber-500',
    iconColor: 'text-orange-400',
  },
  {
    icon: Scan,
    title: 'Smart Scanning',
    description:
      'Automatically analyzes file structure, README content, and codebase to generate 5-10 bounty suggestions with difficulty levels.',
    color: 'from-bounty-primary to-orange-400',
    iconColor: 'text-bounty-primary',
  },
  {
    icon: Github,
    title: 'GitHub Integration',
    description:
      'Seamlessly creates GitHub issues with bounty labels, tracks progress, and links PRs to bounties automatically.',
    color: 'from-gray-400 to-gray-600',
    iconColor: 'text-gray-300',
  },
  {
    icon: GitPullRequest,
    title: 'PR Verification',
    description:
      'AI-powered verification determines if pull requests correctly solve bounties by analyzing diffs and implementations.',
    color: 'from-orange-600 to-red-500',
    iconColor: 'text-orange-500',
  },
  {
    icon: Award,
    title: 'NFT Rewards',
    description:
      'Mint unique NFT rewards on Solana Devnet for contributors who complete bounties. Includes Phantom wallet integration.',
    color: 'from-bounty-secondary to-amber-400',
    iconColor: 'text-bounty-secondary',
  },
  {
    icon: Sparkles,
    title: '12+ AI Providers',
    description:
      'Supports OpenAI, Anthropic, Google AI, AWS Bedrock, Azure, Mistral, Ollama, and more through Neurolink integration.',
    color: 'from-amber-400 to-orange-500',
    iconColor: 'text-amber-400',
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.feature-card');
    
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-section">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-bounty-primary text-sm font-semibold tracking-wider uppercase"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Everything You Need for{' '}
            <span className="gradient-text">Bounty Programs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            BountyChain combines AI intelligence, GitHub automation, and
            blockchain rewards into one powerful CLI tool.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card gradient-border group cursor-pointer"
            >
              <div className="relative bg-bounty-dark/80 backdrop-blur-sm rounded-2xl p-8 h-full">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-[1px] mb-6`}
                >
                  <div className="w-full h-full bg-bounty-dark rounded-xl flex items-center justify-center">
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 relative">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed relative">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <svg
                    className={`w-6 h-6 ${feature.iconColor}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
