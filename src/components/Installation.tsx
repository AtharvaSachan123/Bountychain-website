import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Copy,
  Terminal,
  Key,
  Settings,
  Package,
  ChevronRight,
} from 'lucide-react';

const Installation = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: 'Install BountyChain CLI',
      description: 'Install the CLI globally using npm or run it directly with npx.',
      commands: [
        { cmd: 'npm install -g bountychain-cli', label: 'Global install' },
        { cmd: 'npx bountychain-cli --help', label: 'Or use npx' },
      ],
      icon: Package,
    },
    {
      title: 'Set Up Neurolink AI',
      description:
        'BountyChain uses Neurolink as the AI engine. Run the setup wizard to configure your preferred AI provider.',
      commands: [
        { cmd: 'pnpm dlx @juspay/neurolink setup', label: 'Using pnpm' },
        { cmd: 'npx @juspay/neurolink setup', label: 'Using npx' },
      ],
      icon: Settings,
    },
    {
      title: 'Configure Environment',
      description:
        'Create a .env file with your GitHub Personal Access Token. Optionally add your Solana private key for NFT minting.',
      commands: [
        {
          cmd: `# .env file
GITHUB_TOKEN=ghp_xxxxxxxxxxxx
SOLANA_NETWORK=devnet
# Optional: SOLANA_PRIVATE_KEY=your_key`,
          label: 'Environment variables',
        },
      ],
      icon: Key,
    },
    {
      title: 'Start Using BountyChain',
      description:
        'Initialize with a GitHub repo and start creating AI-powered bounties!',
      commands: [
        { cmd: 'bounty init https://github.com/owner/repo', label: 'Initialize' },
        { cmd: 'bounty scan', label: 'Scan for bounties' },
      ],
      icon: Terminal,
    },
  ];

  const providers = [
    { name: 'OpenAI', models: 'GPT-4o, GPT-4o-mini, o1' },
    { name: 'Anthropic', models: 'Claude 3.5/3.7 Sonnet, Opus' },
    { name: 'Google AI', models: 'Gemini 2.5 Flash/Pro (Free tier!)' },
    { name: 'AWS Bedrock', models: 'Claude, Titan, Llama, Nova' },
    { name: 'Azure OpenAI', models: 'GPT models' },
    { name: 'Mistral AI', models: 'Mistral models' },
    { name: 'Ollama', models: 'Local models (Free!)' },
  ];

  return (
    <section id="installation" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-section">
          <span className="text-bounty-primary text-sm font-semibold tracking-wider uppercase">
            Installation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Get Started in <span className="gradient-text">Minutes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            BountyChain is easy to set up. Follow these steps to start creating
            AI-powered bounties for your repositories.
          </p>
        </div>

        {/* Prerequisites */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Prerequisites
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Node.js 18+',
              'npm or pnpm',
              'GitHub PAT',
              'AI Provider (via Neurolink)',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass"
              >
                <Check className="w-4 h-4 text-bounty-primary" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Installation Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="gradient-border"
            >
              <div className="bg-bounty-dark/80 rounded-2xl p-6 h-full">
                {/* Step Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-bounty-primary/20 to-bounty-secondary/20 flex-shrink-0">
                    <step.icon className="w-6 h-6 text-bounty-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-bounty-secondary">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 text-sm">{step.description}</p>

                {/* Commands */}
                <div className="space-y-3">
                  {step.commands.map((command, cmdIndex) => {
                    const uniqueIndex = index * 10 + cmdIndex;
                    return (
                      <div key={cmdIndex}>
                        <span className="text-xs text-gray-500 mb-1 block">
                          {command.label}
                        </span>
                        <div className="code-block group relative">
                          <pre className="text-sm overflow-x-auto">
                            <code className="text-bounty-primary whitespace-pre-wrap">
                              {command.cmd}
                            </code>
                          </pre>
                          <button
                            onClick={() => handleCopy(command.cmd, uniqueIndex)}
                            className="copy-btn absolute top-2 right-2 p-2 text-gray-500 hover:text-white transition-colors"
                          >
                            {copiedIndex === uniqueIndex ? (
                              <Check className="w-4 h-4 text-bounty-primary" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supported AI Providers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border"
        >
          <div className="bg-bounty-dark/80 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-2 text-center">
              Supported AI Providers
            </h3>
            <p className="text-gray-400 text-center mb-8">
              Neurolink gives you access to 12+ AI providers under one unified
              API
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {providers.map((provider, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-bounty-gray/50 hover:bg-bounty-gray transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ChevronRight className="w-4 h-4 text-bounty-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-semibold text-white">
                      {provider.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">{provider.models}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Installation;
