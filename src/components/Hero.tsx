import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Terminal, Sparkles, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const installCommand = 'npm install -g bountychain-cli';

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      gsap.fromTo(
        chars,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.3,
        }
      );
    }

    // Terminal typing animation
    if (terminalRef.current) {
      gsap.fromTo(
        terminalRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 1,
        }
      );
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const titleText = 'BountyChain';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-bounty-primary" />
            <span className="text-sm text-gray-300">
              AI-Powered Open Source Bounties
            </span>
            <span className="px-2 py-0.5 text-xs bg-bounty-primary/20 text-bounty-primary rounded-full">
              v1.0.1
            </span>
          </motion.div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{ perspective: '1000px' }}
          >
            {titleText.split('').map((char, i) => (
              <span
                key={i}
                className="char inline-block gradient-text"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {char}
              </span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl"
            >
              CLI
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Transform your GitHub repositories into bounty programs.{' '}
            <span className="text-white">AI scans your code</span>,{' '}
            <span className="text-bounty-primary">creates bounties</span>,{' '}
            <span className="text-bounty-secondary">verifies PRs</span>, and{' '}
            <span className="text-white">rewards contributors with Solana NFTs</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#installation"
              className="btn-primary flex items-center gap-2 text-lg glow-hover"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#commands"
              className="btn-secondary flex items-center gap-2 text-lg"
            >
              <Terminal className="w-5 h-5" />
              View Commands
            </a>
          </motion.div>

          {/* Terminal Preview */}
          <motion.div
            ref={terminalRef}
            className="max-w-2xl mx-auto"
          >
            <div className="gradient-border glow">
              <div className="bg-bounty-dark rounded-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-bounty-gray/50 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-500 ml-2 font-mono">
                    Terminal
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-left">
                  {/* Install Command */}
                  <div className="flex items-center justify-between mb-4 group">
                    <div>
                      <span className="text-gray-500">$</span>{' '}
                      <span className="text-bounty-primary">{installCommand}</span>
                      <span className="terminal-cursor ml-1 text-white">▊</span>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="p-2 text-gray-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-bounty-primary" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Example Commands */}
                  <div className="space-y-3 text-sm">
                    <div className="text-gray-500">
                      # Initialize with a GitHub repo
                    </div>
                    <div>
                      <span className="text-gray-500">$</span>{' '}
                      <span className="text-white">bounty</span>{' '}
                      <span className="text-bounty-primary">init</span>{' '}
                      <span className="text-gray-300">
                        https://github.com/owner/repo
                      </span>
                    </div>
                    <div className="text-gray-500"># AI scans and creates bounties</div>
                    <div>
                      <span className="text-gray-500">$</span>{' '}
                      <span className="text-white">bounty</span>{' '}
                      <span className="text-bounty-primary">scan</span>{' '}
                      <span className="text-gray-500">&&</span>{' '}
                      <span className="text-white">bounty</span>{' '}
                      <span className="text-bounty-primary">create</span>
                    </div>
                    <div className="text-gray-500"># Reward contributors with NFTs</div>
                    <div>
                      <span className="text-gray-500">$</span>{' '}
                      <span className="text-white">bounty</span>{' '}
                      <span className="text-bounty-primary">reward</span>{' '}
                      <span className="text-white">contributor-name</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {[
              { label: 'AI Providers', value: '12+' },
              { label: 'Commands', value: '6' },
              { label: 'Network', value: 'Solana' },
              { label: 'License', value: 'MIT' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-bounty-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
