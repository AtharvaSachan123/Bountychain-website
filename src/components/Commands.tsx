import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ChevronDown, Terminal } from 'lucide-react';

interface Command {
  name: string;
  syntax: string;
  description: string;
  options?: { flag: string; description: string }[];
  example: string;
  details: string[];
}

const commands: Command[] = [
  {
    name: 'bounty init',
    syntax: 'bounty init <repo-url>',
    description: 'Initialize BountyChain with a GitHub repository.',
    example: 'bounty init https://github.com/vercel/next.js',
    details: [
      'Validates the GitHub URL format',
      'Verifies repository access with your token',
      'Saves configuration for subsequent commands',
      'Creates local data directory if needed',
    ],
  },
  {
    name: 'bounty scan',
    syntax: 'bounty scan',
    description:
      'Use AI to analyze the repository and generate bounty suggestions.',
    example: 'bounty scan',
    details: [
      'Fetches repository file structure',
      'Retrieves README content for context',
      'Sends to Neurolink AI for intelligent analysis',
      'Generates 5-10 bounty suggestions with titles, descriptions, difficulty levels, and estimated time',
    ],
  },
  {
    name: 'bounty create',
    syntax: 'bounty create',
    description: 'Create GitHub issues from the last scan results.',
    example: 'bounty create',
    details: [
      'Takes bounties from the last scan',
      'Creates GitHub issues with bounty labels',
      'Stores mapping of bounty ID to issue number',
      'Adds formatted bounty details to each issue',
    ],
  },
  {
    name: 'bounty list',
    syntax: 'bounty list [options]',
    description: 'Display all bounties and their status.',
    options: [
      { flag: '-s, --status <status>', description: 'Filter by status (open, claimed, completed)' },
    ],
    example: 'bounty list --status open',
    details: [
      'Shows all bounties in a formatted table',
      'Displays bounty ID, title, difficulty, and status',
      'Filter by status: open, claimed, or completed',
      'Shows linked GitHub issue numbers',
    ],
  },
  {
    name: 'bounty verify-pr',
    syntax: 'bounty verify-pr <pr-url>',
    description: 'Verify if a Pull Request correctly solves a bounty.',
    example: 'bounty verify-pr https://github.com/owner/repo/pull/123',
    details: [
      'Fetches PR details and diff from GitHub',
      'Detects linked issue (looks for "Fixes #xx" or "Closes #xx")',
      'Sends PR diff to AI for intelligent verification',
      'Updates bounty status if verification passes',
      'Adds detailed comment to PR with results',
    ],
  },
  {
    name: 'bounty reward',
    syntax: 'bounty reward <github-username> [options]',
    description: 'Mint an NFT reward for completing a bounty.',
    options: [
      { flag: '-w, --wallet <address>', description: "Recipient's Solana wallet address" },
      { flag: '-b, --bounty <id>', description: 'Specific bounty ID to reward' },
    ],
    example: 'bounty reward octocat --wallet <solana-address>',
    details: [
      'Finds completed bounty for the specified user',
      'Mints unique NFT on Solana Devnet',
      'Returns mint address and Solana explorer link',
      'Generates QR code text for Phantom wallet import',
      'Auto-requests airdrop for transaction fees if needed',
    ],
  },
];

const Commands = () => {
  const [expandedCommand, setExpandedCommand] = useState<string | null>(
    'bounty init'
  );
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <section id="commands" className="relative py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-section">
          <span className="text-bounty-primary text-sm font-semibold tracking-wider uppercase">
            Commands Reference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Powerful <span className="gradient-text">CLI Commands</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            BountyChain provides six intuitive commands to manage your entire
            bounty workflow from initialization to NFT rewards.
          </p>
        </div>

        {/* Commands Accordion */}
        <div className="space-y-4">
          {commands.map((command, index) => (
            <motion.div
              key={command.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="gradient-border"
            >
              <div className="bg-bounty-dark/80 rounded-2xl overflow-hidden">
                {/* Command Header */}
                <button
                  onClick={() =>
                    setExpandedCommand(
                      expandedCommand === command.name ? null : command.name
                    )
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-bounty-gray/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-bounty-primary/10">
                      <Terminal className="w-5 h-5 text-bounty-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-white font-mono">
                        {command.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-0.5">
                        {command.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      rotate: expandedCommand === command.name ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedCommand === command.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        {/* Syntax */}
                        <div className="mb-4">
                          <span className="text-xs text-gray-500 uppercase tracking-wider">
                            Syntax
                          </span>
                          <div className="mt-2 code-block group relative">
                            <code className="text-bounty-primary font-mono">
                              {command.syntax}
                            </code>
                            <button
                              onClick={() => handleCopy(command.syntax)}
                              className="copy-btn absolute top-2 right-2 p-1.5 text-gray-500 hover:text-white"
                            >
                              {copiedCommand === command.syntax ? (
                                <Check className="w-4 h-4 text-bounty-primary" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Options */}
                        {command.options && (
                          <div className="mb-4">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">
                              Options
                            </span>
                            <div className="mt-2 space-y-2">
                              {command.options.map((opt, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 p-3 rounded-lg bg-bounty-gray/30"
                                >
                                  <code className="text-bounty-secondary font-mono text-sm whitespace-nowrap">
                                    {opt.flag}
                                  </code>
                                  <span className="text-gray-400 text-sm">
                                    {opt.description}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Example */}
                        <div className="mb-4">
                          <span className="text-xs text-gray-500 uppercase tracking-wider">
                            Example
                          </span>
                          <div className="mt-2 code-block group relative">
                            <code className="text-yellow-400 font-mono">
                              $ {command.example}
                            </code>
                            <button
                              onClick={() => handleCopy(command.example)}
                              className="copy-btn absolute top-2 right-2 p-1.5 text-gray-500 hover:text-white"
                            >
                              {copiedCommand === command.example ? (
                                <Check className="w-4 h-4 text-bounty-primary" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* What it does */}
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">
                            What it does
                          </span>
                          <ul className="mt-2 space-y-2">
                            {command.details.map((detail, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-gray-400 text-sm"
                              >
                                <span className="text-bounty-primary mt-1">
                                  •
                                </span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commands;
