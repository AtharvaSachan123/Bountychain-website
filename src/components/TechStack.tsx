import { motion } from 'framer-motion';

const technologies = [
  {
    category: 'Core',
    items: [
      { name: 'TypeScript', description: 'Type-safe development', color: '#FF6B35' },
      { name: 'Node.js 18+', description: 'Runtime environment', color: '#FFFFFF' },
      { name: 'Commander.js', description: 'CLI framework', color: '#FF8C42' },
    ],
  },
  {
    category: 'AI Integration',
    items: [
      { name: 'Neurolink', description: 'Unified AI API by Juspay', color: '#E85D04' },
      { name: '12+ Providers', description: 'OpenAI, Anthropic, Google, etc.', color: '#FFB347' },
    ],
  },
  {
    category: 'GitHub',
    items: [
      { name: 'REST API v3', description: 'Issue & PR management', color: '#FFFFFF' },
      { name: 'PAT Auth', description: 'Personal Access Tokens', color: '#FF8C42' },
    ],
  },
  {
    category: 'Blockchain',
    items: [
      { name: 'Solana', description: 'Fast, low-cost blockchain', color: '#FF6B35' },
      { name: 'SPL Tokens', description: 'NFT-style rewards', color: '#FFFFFF' },
      { name: 'Devnet', description: 'Test environment', color: '#E85D04' },
    ],
  },
];

const dataStructure = `{
  "repo": {
    "owner": "vercel",
    "repo": "next.js",
    "url": "https://github.com/vercel/next.js"
  },
  "bounties": {
    "bounty-123-1": {
      "id": "bounty-123-1",
      "title": "Add comprehensive README",
      "description": "...",
      "difficulty": "easy",
      "estimatedTime": "2-4 hours",
      "issue": 45,
      "status": "open",
      "createdAt": "2024-01-15T10:00:00Z"
    }
  },
  "lastScan": [...]
}`;

const TechStack = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-section">
          <span className="text-bounty-primary text-sm font-semibold tracking-wider uppercase">
            Technical Details
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Built with <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            BountyChain leverages cutting-edge technologies to deliver a seamless
            bounty management experience.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {technologies.map((tech, categoryIndex) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="gradient-border"
            >
              <div className="bg-bounty-dark/80 rounded-2xl p-6 h-full">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {tech.category}
                </h3>
                <div className="space-y-3">
                  {tech.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-bounty-gray/30 hover:bg-bounty-gray/50 transition-colors"
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <span className="text-white text-sm font-medium block">
                          {item.name}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Structure & Data Storage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Structure */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-border"
          >
            <div className="bg-bounty-dark/80 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Project Structure</h3>
              <div className="code-block text-sm">
                <pre className="overflow-x-auto">
                  <code className="text-gray-300">
{`bountychain-cli/
├── src/
│   ├── commands/         `}<span className="text-gray-500"># CLI commands</span>{`
│   │   ├── init.ts
│   │   ├── scan.ts
│   │   ├── create.ts
│   │   ├── list.ts
│   │   ├── verifyPR.ts
│   │   └── reward.ts
│   ├── github/           `}<span className="text-gray-500"># GitHub API</span>{`
│   │   ├── issues.ts
│   │   └── pr.ts
│   ├── ai/               `}<span className="text-gray-500"># AI integration</span>{`
│   │   └── runAI.ts
│   ├── solana/           `}<span className="text-gray-500"># Blockchain</span>{`
│   │   └── mintNFT.ts
│   ├── utils/            `}<span className="text-gray-500"># Utilities</span>{`
│   │   ├── config.ts
│   │   └── logger.ts
│   └── index.ts
├── data/
│   └── bounties.json     `}<span className="text-gray-500"># Local storage</span>{`
├── package.json
├── tsconfig.json
└── .env.example`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Data Storage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-border"
          >
            <div className="bg-bounty-dark/80 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Data Storage</h3>
              <p className="text-gray-400 text-sm mb-4">
                Bounties are stored locally in <code className="text-bounty-primary">data/bounties.json</code>:
              </p>
              <div className="code-block text-sm">
                <pre className="overflow-x-auto">
                  <code className="text-gray-300">{dataStructure}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'GitHub API Integration',
                points: [
                  'Uses GitHub REST API v3',
                  'Requires PAT with repo scope',
                  'Handles rate limiting with delays',
                ],
              },
              {
                title: 'AI Integration (Neurolink)',
                points: [
                  'Connects to local Neurolink instance',
                  'Falls back to mock if unavailable',
                  'Used for scanning & PR verification',
                ],
              },
              {
                title: 'Solana NFT Minting',
                points: [
                  'Uses Solana Devnet by default',
                  'Creates SPL tokens (0 decimals)',
                  'Auto-requests airdrop for fees',
                ],
              },
            ].map((item, i) => (
              <div key={i} className="gradient-border">
                <div className="bg-bounty-dark/80 rounded-2xl p-6 h-full">
                  <h4 className="font-semibold text-white mb-3">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-bounty-primary mt-0.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
