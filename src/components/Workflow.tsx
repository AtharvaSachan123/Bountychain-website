import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  GitBranch,
  Scan,
  FileText,
  GitPullRequest,
  CheckCircle,
  Award,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
  {
    icon: GitBranch,
    title: 'Initialize Repository',
    description: 'Connect BountyChain to your GitHub repository',
    command: 'bounty init <repo-url>',
    color: '#FF6B35',
  },
  {
    icon: Scan,
    title: 'AI Scan',
    description: 'Neurolink AI analyzes code and suggests improvements',
    command: 'bounty scan',
    color: '#FF8C42',
  },
  {
    icon: FileText,
    title: 'Create Bounties',
    description: 'Automatically create GitHub issues with bounty labels',
    command: 'bounty create',
    color: '#FFB347',
  },
  {
    icon: GitPullRequest,
    title: 'Submit PR',
    description: 'Contributors submit PRs referencing bounty issues',
    command: 'Fixes #bounty-issue',
    color: '#FFFFFF',
  },
  {
    icon: CheckCircle,
    title: 'Verify Solution',
    description: 'AI verifies if the PR correctly solves the bounty',
    command: 'bounty verify-pr <pr-url>',
    color: '#E85D04',
  },
  {
    icon: Award,
    title: 'Mint NFT Reward',
    description: 'Reward contributors with unique Solana NFTs',
    command: 'bounty reward <username>',
    color: '#FF6B35',
  },
];

const Workflow = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const steps = timelineRef.current.querySelectorAll('.workflow-step');
    const line = timelineRef.current.querySelector('.workflow-line');

    // Animate the connecting line
    if (line) {
      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      );
    }

    // Animate each step
    steps.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="workflow" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-section">
          <span className="text-bounty-primary text-sm font-semibold tracking-wider uppercase">
            Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Complete <span className="gradient-text">Bounty Lifecycle</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From repository initialization to NFT rewards - see how BountyChain
            automates the entire bounty workflow.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Connecting Line */}
          <div className="workflow-line absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bounty-primary via-bounty-secondary to-bounty-primary hidden lg:block" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`workflow-step relative lg:flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'
                  }`}
                >
                  <div
                    className={`gradient-border inline-block ${
                      index % 2 === 0 ? 'lg:ml-auto' : ''
                    }`}
                  >
                    <div className="bg-bounty-dark/80 backdrop-blur-sm rounded-2xl p-6 max-w-md">
                      {/* Step Number */}
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          index % 2 === 0 ? 'lg:justify-end' : ''
                        }`}
                      >
                        <span
                          className="text-xs font-mono px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: `${step.color}20`,
                            color: step.color,
                          }}
                        >
                          Step {index + 1}
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                        }`}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${step.color}20` }}
                        >
                          <step.icon
                            className="w-6 h-6"
                            style={{ color: step.color }}
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-gray-400 mb-4">{step.description}</p>

                      {/* Command */}
                      <div className="code-block text-sm">
                        <code style={{ color: step.color }}>{step.command}</code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="w-6 h-6 rounded-full border-4 border-bounty-darker"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="gradient-border inline-block">
            <div className="bg-bounty-dark/80 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Complete Workflow Example
              </h3>
              <div className="code-block text-left max-w-2xl mx-auto">
                <pre className="text-sm">
                  <code>
                    <span className="text-gray-500">
                      # Initialize with a repository
                    </span>
                    {'\n'}
                    <span className="text-bounty-primary">bounty init</span>{' '}
                    <span className="text-gray-300">
                      https://github.com/vercel/next.js
                    </span>
                    {'\n\n'}
                    <span className="text-gray-500">
                      # AI scans and creates bounties
                    </span>
                    {'\n'}
                    <span className="text-bounty-primary">bounty scan</span>
                    {'\n'}
                    <span className="text-bounty-primary">bounty create</span>
                    {'\n\n'}
                    <span className="text-gray-500">
                      # List all bounties
                    </span>
                    {'\n'}
                    <span className="text-bounty-primary">bounty list</span>
                    {'\n\n'}
                    <span className="text-gray-500">
                      # Verify a submitted PR
                    </span>
                    {'\n'}
                    <span className="text-bounty-primary">bounty verify-pr</span>{' '}
                    <span className="text-gray-300">
                      https://github.com/vercel/next.js/pull/123
                    </span>
                    {'\n\n'}
                    <span className="text-gray-500">
                      # Reward the contributor
                    </span>
                    {'\n'}
                    <span className="text-bounty-primary">bounty reward</span>{' '}
                    <span className="text-white">contributor-username</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
