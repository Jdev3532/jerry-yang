import { motion } from "framer-motion";

/**
 * Animated AI workflow diagram used as a hero background.
 * Bold, high-impact version: glowing nodes, thick gradient edges,
 * pulsing halos, bright animated data packets.
 */
export default function AIWorkflowBackground() {
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
        className="w-full h-full opacity-50"
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="hsl(225 95% 65%)" />
            <stop offset="50%" stopColor="hsl(250 90% 70%)" />
            <stop offset="100%" stopColor="hsl(285 90% 70%)" />
          </linearGradient>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(225 95% 60% / 0.95)" />
            <stop offset="60%" stopColor="hsl(270 80% 55% / 0.45)" />
            <stop offset="100%" stopColor="hsl(285 80% 50% / 0.05)" />
          </radialGradient>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="12" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Subtle grid */}
        <g stroke="hsl(225 60% 70% / 0.08)" strokeWidth="1">
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
                strokeWidth="3.5"
                strokeOpacity="0.95"
                filter="url(#glow)"
              />
              <motion.circle
                r="8"
                fill="hsl(195 100% 75%)"
                filter="url(#strongGlow)"
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

        {/* Feedback loop arc */}
        <path
          d="M 1130 300 C 1130 560, 90 560, 90 300"
          fill="none"
          stroke="hsl(160 90% 55%)"
          strokeWidth="2.5"
          strokeDasharray="6 8"
          strokeOpacity="0.9"
          filter="url(#glow)"
        />
        <text
          x="610"
          y="555"
          textAnchor="middle"
          fill="hsl(160 90% 65%)"
          fontSize="13"
          fontWeight="600"
          fontFamily="JetBrains Mono, monospace"
          opacity="1"
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
            <motion.circle
              cx={n.x}
              cy={n.y}
              fill="hsl(225 90% 60% / 0.15)"
              stroke="hsl(225 90% 65% / 0.5)"
              strokeWidth="1"
              animate={{ r: [46, 60, 46], opacity: [0.7, 0.2, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="40"
              fill="url(#nodeGrad)"
              stroke="hsl(225 95% 70%)"
              strokeWidth="2"
              filter="url(#strongGlow)"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="8"
              fill="hsl(195 100% 80%)"
              filter="url(#glow)"
            />
            <text
              x={n.x}
              y={n.y - 55}
              textAnchor="middle"
              fill="hsl(0 0% 100%)"
              fontSize="15"
              fontWeight="700"
              fontFamily="Space Grotesk, sans-serif"
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={n.y + 65}
              textAnchor="middle"
              fill="hsl(225 60% 85%)"
              fontSize="11"
              fontWeight="500"
              fontFamily="JetBrains Mono, monospace"
            >
              {n.sub}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Fade overlays so foreground text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-background/70" />
    </div>
  );
}
