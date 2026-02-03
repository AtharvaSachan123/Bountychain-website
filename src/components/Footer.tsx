import { motion } from 'framer-motion';
import { Github, ExternalLink, Heart, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#installation' },
        { name: 'Commands', href: '#commands' },
        { name: 'Workflow', href: '#workflow' },
        { name: 'Features', href: '#features' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'GitHub', href: 'https://github.com/AtharvaSachan123/bountychain', external: true },
        { name: 'npm Package', href: 'https://www.npmjs.com/package/bountychain-cli', external: true },
        { name: 'Neurolink', href: 'https://github.com/juspay/neurolink', external: true },
        { name: 'Solana', href: 'https://solana.com', external: true },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'MIT License', href: 'https://github.com/AtharvaSachan123/bountychain/blob/main/LICENSE', external: true },
        { name: 'Contributing', href: 'https://github.com/AtharvaSachan123/bountychain#contributing', external: true },
      ],
    },
  ];

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-bounty-primary to-bounty-secondary rounded-lg" />
                <div className="absolute inset-[2px] bg-bounty-darker rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">B</span>
                </div>
              </div>
              <span className="text-xl font-bold text-white">
                Bounty<span className="gradient-text">Chain</span>
              </span>
            </motion.a>

            <p className="text-gray-400 mb-6 max-w-sm">
              AI-Powered GitHub Bounties with Solana NFT Rewards. Transform your
              repositories into incentivized contribution programs.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/AtharvaSachan123/bountychain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-bounty-gray/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-bounty-gray transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-bounty-gray/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-bounty-gray transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-bounty-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      {link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Install */}
        <div className="mb-12">
          <div className="gradient-border">
            <div className="bg-bounty-dark/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-semibold mb-1">
                  Ready to get started?
                </h4>
                <p className="text-gray-400 text-sm">
                  Install BountyChain CLI and create your first bounty in minutes.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <code className="px-4 py-2 rounded-lg bg-bounty-gray text-bounty-primary font-mono text-sm">
                  npm install -g bountychain-cli
                </code>
                <motion.a
                  href="#installation"
                  className="btn-primary text-sm whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} BountyChain. MIT License. Built with{' '}
            <Heart className="w-4 h-4 inline text-red-500" /> for the Web3
            community.
          </p>
          <p className="text-gray-500 text-sm">
            Powered by{' '}
            <a
              href="https://github.com/juspay/neurolink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bounty-secondary hover:underline"
            >
              Neurolink AI
            </a>{' '}
            &{' '}
            <a
              href="https://solana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bounty-primary hover:underline"
            >
              Solana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
