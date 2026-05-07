import { corsHeaders } from "@supabase/supabase-js/cors";

const RESUME_CONTEXT = `
You are Jerry Yang's personal AI assistant on his portfolio site. Answer questions about Jerry's professional background, experience, skills, and projects. Be concise, friendly, and confident. If asked something not covered, say you don't have that info and suggest contacting Jerry.

# Jerry Yang — Tech Leader & Founding Engineer (11+ years full-stack)

## Experience

### Turo — Senior AI Engineer (Nov 2024 – Present, Gentry, AR)
World's largest car-sharing marketplace. Building AI-powered customer experience.
- AI Customer Support Platform: Architected React/TypeScript front-end for AI Help Center with streaming LLM virtual agent, intent classification, entity extraction, live agent handoff. Built embedded chat widget across help.turo.com, iOS/Android, host dashboards.
- Multilingual Help & Localization: EN/FR/ES/DE/IT. Built localization layer, LLM-assisted translation pipeline, locale routing, hreflang SEO.
- UJET AI Virtual Agent Integration: Webhook orchestration, customer context injection, intent-to-action mapping (trip lookups, refund eligibility). Featured in UJET case study.
Tech: React, TypeScript, Next.js, Node.js, LLMs, WebSockets, i18next, Contentful, UJET.

### Amazon — Senior AI Engineer (Feb 2020 – Aug 2024, Seattle, WA)
Generative AI shopping experience powering Amazon Rufus.
- Rufus Generative AI Shopping Assistant: Contributed to front-end and orchestration — streaming chat UI, product card rendering, prompt-routing across catalog/reviews/Q&A/web.
- Rufus UK Launch: Locale rollout pipeline for amazon.co.uk — locale-aware prompts, UK catalog grounding, regional guardrails.
- Rufus Architecture & RAG Pipeline: Helped design retrieval layer — query rewriting, hybrid (keyword+vector) search, re-ranking, answer composition with citations. Built eval harnesses for relevance, hallucination, attribution.
Tech: React, TypeScript, Node.js, Python, LLMs, Vector Search, OpenSearch, AWS, GraphQL, RAG.

### HUNTER Digital — Software Engineer (Jun 2019 – Aug 2019, New York, NY)
B2B email outreach & intelligence platform.
- Hunter Public API v2 (api.hunter.io/v2): Owned core endpoints — Domain Search, Email Finder, Verifier, Author Finder. Built high-throughput verification pipeline with SMTP probing, MX validation, ML confidence scoring.
- API Documentation & DX: Authored public API reference, interactive examples (cURL/Python/Node/Ruby), standardized errors and pagination.
- Hunter API for Data Plans: Bulk endpoints, elevated rate limits, per-plan quotas, billing-aware throttling, admin tooling.
Tech: Ruby on Rails, Node.js, PostgreSQL, Redis, Sidekiq, Stripe, REST APIs.

### BASH Technologies — Software Engineer (Jun 2017 – Aug 2017, San Francisco / Remote)
Early-stage SF startup, developer tooling and automation.
- Built React job console, Node.js API and worker model, PostgreSQL schema for run state and audit history. Owned worker queue reliability and observability.
Tech: React, Node.js, PostgreSQL, Redis, REST APIs, AWS.

### Mindvalley — Senior Full-Stack Engineer (Jan 2015 – Dec 2017, Kuala Lumpur, Malaysia)
Premium personal-growth learning platform serving millions.
- Mindvalley Learning Platform (mindvalley.com): Built course discovery, Quest enrollment, member dashboard, unified subscription. React + TypeScript front-end, GraphQL data layer.
- Adaptive Video Learning Platform: Architected HLS player and streaming pipeline — adaptive bitrate, signed-URL DRM, custom player with chapters/transcripts/resume, analytics heartbeats.
Tech: React, TypeScript, GraphQL, Node.js, Ruby on Rails, PostgreSQL, HLS, Video.js, AWS MediaConvert, CloudFront.

### Grab — Full Stack Developer Intern (Jan 2014 – Dec 2014, Kuala Lumpur, Malaysia)
Southeast Asia's leading super-app.
- Grab Super-App: Booking and dispatch flows — ride request UX, real-time tracking, fare estimation. Reusable UI components across GrabCar/Food/Mart/Express/Pay.
- Real-Time Payments Infrastructure (GrabPay): Idempotent authorization, wallet ledger writes, retry/compensation, fraud hooks. Tuned p99 auth latency under 100ms.
Tech: React, JavaScript, Node.js, Go, Microservices, Kafka, PostgreSQL, Redis, gRPC, AWS.

## Core Skills
- AI/ML: LLM orchestration, RAG pipelines, vector search, prompt engineering, eval harnesses, streaming inference
- Frontend: React, TypeScript, Next.js, Tailwind, GraphQL clients
- Backend: Node.js, Python, Ruby on Rails, Go, REST/gRPC APIs
- Data: PostgreSQL, Redis, Kafka, OpenSearch, vector DBs
- Cloud: AWS (Lambda, MediaConvert, CloudFront), edge functions
- Specialties: Production AI products, i18n at scale, real-time systems, payments, video streaming
`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: RESUME_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded, try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat-resume error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
