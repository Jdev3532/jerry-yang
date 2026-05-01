import { motion } from "framer-motion";

/**
 * Animated AI workflow diagram used as a hero background.
 * Depicts: User Query → Embeddings → Vector DB / Retrieval → LLM (with Tools)
 *          → Guardrails / Eval → Response, with a feedback loop.
 * Pure SVG, theme-aware via currentColor + HSL tokens.
 */
export default function AIWorkflowBackground() {
  // Node positions on a 1200x600 viewBox
  const nodes = [
    { id: "user", x: 90, y: 300, label: "User Query", sub: "prompt" },
    { id: "embed", x: 290, y: 300, label: "Embeddings", sub: "text-embed-3" },
    { id: "vector", x: 490, y: 170, label: "Vector DB", sub: "pgvector" },
    { id: "tools", x: 490, y: 430, label: "Tools / APIs", sub: "function-call" },
    { id: "llm", x: 720, y: 300, label: "LLM", sub: "GPT-5 · Claude" },
    { id: "guard", x: 940, y: 300, label: "Guardrails", sub: "eval · safety" },
    { id: "out", x: 1130, y: 300, label: "Response", sub: "stream" },
  ];

  const edges: Array<{ from: string; to: string; delay: number }> = [
    { from: "user", to: "embed", delay: 0 },
    { from: "embed", to: "vector", delay: 0.4 },
    { from: "embed", to: "tools", delay: 0.6 },
    { from: "vector", to: "llm", delay: 0.8 },
    { from: "tools", to: "llm", delay: 1.0 },
    { from: "llm", to: "guard", delay: 1.3 },
    { from: "guard", to: "out", delay: 1.6 },
  ];

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-[0.22]"
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="hsl(225 84% 55%)" />
            <stop offset="100%" stopColor="hsl(270 60% 55%)" />
          </linearGradient>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(225 84% 55% / 0.5)" />
            <stop offset="100%" stopColor="hsl(270 60% 55% / 0.05)" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Subtle grid */}
        <g stroke="hsl(0 0% 100% / 0.04)" strokeWidth="1">
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 100} y1={0} x2={i * 100} y2={600} />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1={0} y1={i * 100} x2={1200} y2={i * 100} />
          ))}
        </g>

        {/* Edges */}
        {edges.map((e, idx) => {
          const a = nodeMap[e.from];
          const b = nodeMap[e.to];
          const midX = (a.x + b.x) / 2;
          const path = `M ${a.x} ${a.y} C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`;
          return (
            <g key={idx}>
              <path
                d={path}
                fill="none"
                stroke="url(#edgeGrad)"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
              {/* Animated packet */}
              <motion.circle
                r="4"
                fill="hsl(225 84% 65%)"
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 2.2,
                  delay: e.delay,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                }}
              >
                <animateMotion
                  dur="2.2s"
                  begin={`${e.delay}s`}
                  repeatCount="indefinite"
                  path={path}
                />
              </motion.circle>
            </g>
          );
        })}

        {/* Feedback loop arc: out -> user */}
        <path
          d="M 1130 300 C 1130 560, 90 560, 90 300"
          fill="none"
          stroke="hsl(160 84% 45%)"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.45"
        />
        <text
          x="610"
          y="555"
          textAnchor="middle"
          fill="hsl(160 84% 55%)"
          fontSize="11"
          fontFamily="JetBrains Mono, monospace"
          opacity="0.7"
        >
          feedback · evals · fine-tune
        </text>

        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 * i, duration: 0.5 }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r="38"
              fill="url(#nodeGrad)"
              stroke="hsl(225 84% 60% / 0.5)"
              strokeWidth="1"
              filter="url(#glow)"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="6"
              fill="hsl(225 84% 65%)"
            />
            <text
              x={n.x}
              y={n.y - 50}
              textAnchor="middle"
              fill="hsl(0 0% 95%)"
              fontSize="13"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="600"
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={n.y + 60}
              textAnchor="middle"
              fill="hsl(0 0% 70%)"
              fontSize="10"
              fontFamily="JetBrains Mono, monospace"
            >
              {n.sub}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Fade overlays so the diagram never competes with hero text */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
    </div>
  );
}