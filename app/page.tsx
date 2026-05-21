export default function LearningRoadmapPage() {
  const aiPath = [
    {
      title: "Python + TypeScript foundation",
      note: "Learn the two most useful languages for AI apps, bots, dashboards, automation, and Web3 frontends.",
      links: [
        ["Python roadmap", "https://roadmap.sh/python"],
        ["TypeScript roadmap", "https://roadmap.sh/typescript"],
        ["GitHub Skills", "https://skills.github.com/"],
      ],
    },
    {
      title: "Backend APIs, databases, Git/GitHub",
      note: "Build the server-side skills needed for real AI products, trading bots, dashboards, and SaaS tools.",
      links: [
        ["Backend roadmap", "https://roadmap.sh/backend"],
        ["Node.js roadmap", "https://roadmap.sh/nodejs"],
        ["PostgreSQL roadmap", "https://roadmap.sh/postgresql-dba"],
      ],
    },
    {
      title: "Machine learning and deep learning basics",
      note: "Understand models, features, training, evaluation, neural networks, and embeddings before going deeper into LLMs.",
      links: [
        ["Machine Learning roadmap", "https://roadmap.sh/ml"],
        ["Andrew Ng ML Specialization", "https://www.coursera.org/specializations/machine-learning-introduction"],
        ["StatQuest YouTube", "https://www.youtube.com/@statquest"],
      ],
    },
    {
      title: "LLM apps, RAG, embeddings, vector databases",
      note: "Build document chat, codebase search, knowledge assistants, and retrieval systems with citations.",
      links: [
        ["AI Engineer roadmap", "https://roadmap.sh/ai-engineer"],
        ["Hugging Face LLM Course", "https://huggingface.co/learn/nlp-course"],
        ["DeepLearning.AI Courses", "https://www.deeplearning.ai/courses/"],
      ],
    },
    {
      title: "AI agents, tool calling, memory, workflows",
      note: "Create agents that can use tools, inspect repos, call APIs, run tasks, and help build/fix software.",
      links: [
        ["AI Agents roadmap", "https://roadmap.sh/ai-agents"],
        ["Hugging Face Agents Course", "https://huggingface.co/learn/agents-course"],
        ["LangChain Academy", "https://academy.langchain.com/"],
      ],
    },
    {
      title: "LLMOps/MLOps, evals, monitoring, deployment",
      note: "Move from demos to production with evals, observability, cost control, deployment, tracing, and model routing.",
      links: [
        ["MLOps roadmap", "https://roadmap.sh/mlops"],
        ["LangSmith", "https://www.langchain.com/langsmith"],
        ["Langfuse", "https://langfuse.com/"],
      ],
    },
    {
      title: "AI security, blockchain, Web3, trading systems",
      note: "Specialize in smart-contract audit agents, Polymarket bots, wallet analytics, prediction systems, and AI risk engines.",
      links: [
        ["Blockchain roadmap", "https://roadmap.sh/blockchain"],
        ["Cyber Security roadmap", "https://roadmap.sh/cyber-security"],
        ["AI Red Teaming roadmap", "https://roadmap.sh/ai-red-teaming"],
      ],
    },
  ];

  const freeCourses = [
    {
      title: "Hugging Face LLM Course",
      tag: "Open-source LLMs",
      url: "https://huggingface.co/learn/nlp-course",
      note: "Best free course for Transformers, tokenizers, datasets, fine-tuning, and open-source model workflows.",
    },
    {
      title: "Hugging Face AI Agents Course",
      tag: "Agents",
      url: "https://huggingface.co/learn/agents-course",
      note: "Covers tools, observations, smolagents, LlamaIndex, LangGraph, agentic RAG, evaluation, and final projects.",
    },
    {
      title: "Microsoft Generative AI for Beginners",
      tag: "Beginner GenAI",
      url: "https://github.com/microsoft/generative-ai-for-beginners",
      note: "Great first structured path for building generative AI apps with practical lessons.",
    },
    {
      title: "Stanford CS224N",
      tag: "NLP theory",
      url: "https://web.stanford.edu/class/cs224n/",
      note: "Best university-level NLP and transformer foundation after you know Python and ML basics.",
    },
    {
      title: "DeepLearning.AI Short Courses",
      tag: "LLM apps",
      url: "https://www.deeplearning.ai/short-courses/",
      note: "Short practical courses on RAG, agents, evaluation, LLMOps, prompt engineering, and GenAI apps.",
    },
    {
      title: "Cyfrin Updraft",
      tag: "Blockchain",
      url: "https://www.cyfrin.io/updraft",
      note: "One of the best free Web3 paths for Solidity, Foundry, Chainlink, DeFi, and smart contract security.",
    },
    {
      title: "Solidity by Example",
      tag: "Solidity",
      url: "https://solidity-by-example.org/",
      note: "Fast hands-on Solidity reference with small examples for smart contracts and Ethereum development.",
    },
    {
      title: "Chainlink Bootcamps",
      tag: "Oracles + Web3",
      url: "https://chain.link/bootcamp",
      note: "Good blockchain fundamentals, smart contracts, oracles, automation, and real-world data for contracts.",
    },
  ];

  const paidCourses = [
    {
      title: "Maven — End-to-End AI Engineering Bootcamp",
      url: "https://maven.com/swirl-ai/end-to-end-ai-engineering",
      note: "Best practical paid path for production AI apps, RAG, agents, architecture, and deployment.",
    },
    {
      title: "DeepLearning.AI Machine Learning Specialization",
      url: "https://www.coursera.org/specializations/machine-learning-introduction",
      note: "Best paid foundation for ML, supervised learning, neural networks, trees, clustering, and TensorFlow basics.",
    },
    {
      title: "DeepLearning.AI Generative AI for Software Development",
      url: "https://www.deeplearning.ai/specializations/generative-ai-for-software-development/",
      note: "Good paid path for using AI in coding, testing, debugging, documentation, and software workflows.",
    },
    {
      title: "RareSkills Solidity Bootcamp",
      url: "https://rareskills.io/solidity-bootcamp",
      note: "One of the strongest paid paths for Solidity, DeFi, Foundry, smart contract engineering, and security thinking.",
    },
    {
      title: "RareSkills Advanced Solidity + DeFi",
      url: "https://rareskills.io/courses/solidity-bootcamp",
      note: "Advanced DeFi, Solidity, protocol reasoning, and production smart contract engineering.",
    },
    {
      title: "ConsenSys Academy",
      url: "https://consensys.io/academy",
      note: "Reputable Ethereum-focused option for blockchain developer education and blockchain essentials.",
    },
  ];

  const youtubeChannels = [
    {
      name: "Andrej Karpathy",
      url: "https://www.youtube.com/@AndrejKarpathy",
      best: "Deep learning, GPT internals, neural networks from first principles.",
    },
    {
      name: "3Blue1Brown",
      url: "https://www.youtube.com/@3blue1brown",
      best: "Visual math, neural networks, linear algebra, calculus, intuition.",
    },
    {
      name: "StatQuest with Josh Starmer",
      url: "https://www.youtube.com/@statquest",
      best: "Statistics, machine learning, regression, trees, neural network basics.",
    },
    {
      name: "DeepLearning.AI",
      url: "https://www.youtube.com/@Deeplearningai",
      best: "Structured AI education, LLMs, GenAI, agents, interviews, and course previews.",
    },
    {
      name: "Hugging Face",
      url: "https://www.youtube.com/@HuggingFace",
      best: "Open-source AI, Transformers, datasets, agents, fine-tuning, model demos.",
    },
    {
      name: "LangChain",
      url: "https://www.youtube.com/@LangChain",
      best: "RAG, LangGraph, agents, tool calling, observability, production LLM apps.",
    },
    {
      name: "AssemblyAI",
      url: "https://www.youtube.com/@AssemblyAI",
      best: "Practical LLM app tutorials, RAG, Python, speech AI, embeddings, agents.",
    },
    {
      name: "Cole Medin",
      url: "https://www.youtube.com/@ColeMedin",
      best: "AI agents, automation, n8n, local AI, practical build workflows.",
    },
    {
      name: "Yannic Kilcher",
      url: "https://www.youtube.com/@YannicKilcher",
      best: "AI research papers, new model architectures, advanced AI concepts.",
    },
    {
      name: "Patrick Collins",
      url: "https://www.youtube.com/@PatrickAlphaC",
      best: "Solidity, Foundry, Chainlink, smart contract development, Web3 engineering.",
    },
    {
      name: "Cyfrin",
      url: "https://www.youtube.com/@CyfrinAudits",
      best: "Smart contract security, Solidity, auditing, Foundry, DeFi exploits.",
    },
    {
      name: "Chainlink",
      url: "https://www.youtube.com/@chainlinkofficial",
      best: "Oracles, CCIP, automation, data feeds, Web3 infrastructure.",
    },
    {
      name: "Finematics",
      url: "https://www.youtube.com/@Finematics",
      best: "DeFi, AMMs, lending, stablecoins, yield farming, crypto concepts explained visually.",
    },
    {
      name: "Ethereum Foundation",
      url: "https://www.youtube.com/@EthereumFoundation",
      best: "Ethereum protocol, Devcon talks, scaling, L2s, research, cryptography.",
    },
    {
      name: "ETHGlobal",
      url: "https://www.youtube.com/@ETHGlobal",
      best: "Hackathon workshops, Web3 builder demos, Ethereum developer tools.",
    },
  ];

  const videoPreviews = [
    {
      title: "Andrej Karpathy — Let's build GPT from scratch",
      url: "https://www.youtube.com/watch?v=kCc8FmEb1nY",
      embed: "https://www.youtube.com/embed/kCc8FmEb1nY",
      best: "Best single video for understanding how GPT-style models work in code.",
    },
    {
      title: "3Blue1Brown — But what is a neural network?",
      url: "https://www.youtube.com/watch?v=aircAruvnKk",
      embed: "https://www.youtube.com/embed/aircAruvnKk",
      best: "Best visual introduction to neural networks and the intuition behind learning.",
    },
    {
      title: "Stanford CS224N — NLP with Deep Learning playlist",
      url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ",
      embed: "https://www.youtube.com/embed/videoseries?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ",
      best: "University-level NLP, transformers, attention, embeddings, and language modeling.",
    },
    {
      title: "Microsoft — Generative AI for Beginners playlist",
      url: "https://www.youtube.com/playlist?list=PLlrxD0HtieHgJdiA08EVViP8D6hfDRXx8",
      embed: "https://www.youtube.com/embed/videoseries?list=PLlrxD0HtieHgJdiA08EVViP8D6hfDRXx8",
      best: "Beginner-friendly path for building generative AI applications.",
    },
    {
      title: "Patrick Collins — Solidity / Foundry full course",
      url: "https://www.youtube.com/watch?v=umepbfKp5rI",
      embed: "https://www.youtube.com/embed/umepbfKp5rI",
      best: "Deep Solidity, Foundry, Chainlink, and smart contract development course.",
    },
    {
      title: "MIT 6.S191 — Introduction to Deep Learning playlist",
      url: "https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI",
      embed: "https://www.youtube.com/embed/videoseries?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI",
      best: "Strong deep learning foundation from MIT, useful before serious LLM work.",
    },
  ];

  const universityPrograms = [
    {
      name: "Georgia Tech OMSCS",
      mode: "Online",
      url: "https://omscs.gatech.edu/",
      courseUrl: "https://omscs.gatech.edu/current-courses",
      best: "Best overall online CS degree for AI, systems, backend, ML, and credibility.",
    },
    {
      name: "UT Austin Online MS in Artificial Intelligence",
      mode: "Online",
      url: "https://cdso.utexas.edu/msai",
      courseUrl: "https://cdso.utexas.edu/msai#courses",
      best: "Best online AI-specific master’s path.",
    },
    {
      name: "UT Austin Online MS in Computer Science",
      mode: "Online",
      url: "https://cdso.utexas.edu/mscs",
      courseUrl: "https://cdso.utexas.edu/mscs#courses",
      best: "Best online general CS path if you want AI plus serious engineering depth.",
    },
    {
      name: "MITx MicroMasters in Statistics and Data Science",
      mode: "Online credential",
      url: "https://micromasters.mit.edu/ds/",
      courseUrl: "https://micromasters.mit.edu/ds/#courses",
      best: "Best math, statistics, ML, and quant foundation for trading bots and analytics.",
    },
    {
      name: "Imperial Online MSc Machine Learning and Data Science",
      mode: "Online",
      url: "https://www.imperial.ac.uk/study/courses/postgraduate-taught/machine-learning-data-science/",
      courseUrl: "https://www.imperial.ac.uk/study/courses/postgraduate-taught/machine-learning-data-science/",
      best: "High-prestige online ML and data science path from a top UK university.",
    },
    {
      name: "University of Nicosia MSc Blockchain and Digital Currency",
      mode: "Online",
      url: "https://www.unic.ac.cy/iff/education-and-training/master-degrees/msc-in-blockchain-and-digital-currency/",
      courseUrl: "https://www.unic.ac.cy/iff/education-and-training/master-degrees/msc-in-blockchain-and-digital-currency/",
      best: "Best blockchain-specific online university degree.",
    },
    {
      name: "Harvard Extension Data Science Master’s",
      mode: "Mostly online",
      url: "https://extension.harvard.edu/academics/programs/data-science-graduate-program/",
      courseUrl: "https://extension.harvard.edu/academics/programs/data-science-graduate-program/",
      best: "Flexible data science route with Harvard Extension courses and online-heavy delivery.",
    },
    {
      name: "Stanford Online AI Programs",
      mode: "Online / certificate",
      url: "https://online.stanford.edu/programs/artificial-intelligence-professional-program",
      courseUrl: "https://online.stanford.edu/programs/artificial-intelligence-professional-program",
      best: "Prestige AI courses and certificates without relocating to Stanford.",
    },
    {
      name: "UCL MSc Financial Technology",
      mode: "In person",
      url: "https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/financial-technology-msc",
      courseUrl: "https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/financial-technology-msc",
      best: "Best in-person path for AI, fintech, blockchain, algorithmic trading, and regulation.",
    },
  ];

  const roadmapLinks = [
    ["Computer Science", "https://roadmap.sh/computer-science"],
    ["Python", "https://roadmap.sh/python"],
    ["TypeScript", "https://roadmap.sh/typescript"],
    ["Git and GitHub", "https://roadmap.sh/git-github"],
    ["Backend", "https://roadmap.sh/backend"],
    ["Node.js", "https://roadmap.sh/nodejs"],
    ["React", "https://roadmap.sh/react"],
    ["Next.js", "https://roadmap.sh/nextjs"],
    ["PostgreSQL", "https://roadmap.sh/postgresql-dba"],
    ["API Design", "https://roadmap.sh/api-design"],
    ["System Design", "https://roadmap.sh/system-design"],
    ["AI Engineer", "https://roadmap.sh/ai-engineer"],
    ["Prompt Engineering", "https://roadmap.sh/prompt-engineering"],
    ["AI Agents", "https://roadmap.sh/ai-agents"],
    ["Machine Learning", "https://roadmap.sh/ml"],
    ["MLOps", "https://roadmap.sh/mlops"],
    ["Blockchain", "https://roadmap.sh/blockchain"],
    ["Cyber Security", "https://roadmap.sh/cyber-security"],
    ["DevOps", "https://roadmap.sh/devops"],
    ["DevSecOps", "https://roadmap.sh/devsecops"],
    ["Docker", "https://roadmap.sh/docker"],
    ["Linux", "https://roadmap.sh/linux"],
    ["AWS", "https://roadmap.sh/aws"],
    ["Software Architect", "https://roadmap.sh/software-architect"],
  ];

  const projects = [
    {
      title: "AI document chat with citations",
      links: [
        ["LlamaIndex docs", "https://docs.llamaindex.ai/"],
        ["LangChain RAG", "https://python.langchain.com/docs/tutorials/rag/"],
        ["Chroma DB", "https://www.trychroma.com/"],
      ],
    },
    {
      title: "GitHub repo audit and bug-fixing agent",
      links: [
        ["GitHub API", "https://docs.github.com/en/rest"],
        ["OpenAI tools", "https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models"],
        ["LangGraph", "https://langchain-ai.github.io/langgraph/"],
      ],
    },
    {
      title: "Polymarket research assistant using real market data",
      links: [
        ["Polymarket docs", "https://docs.polymarket.com/"],
        ["Polymarket CLOB API", "https://docs.polymarket.com/developers/CLOB/introduction"],
        ["Polymarket GitHub", "https://github.com/Polymarket"],
      ],
    },
    {
      title: "Smart contract audit agent with Foundry test generation",
      links: [
        ["Foundry Book", "https://book.getfoundry.sh/"],
        ["Solidity docs", "https://docs.soliditylang.org/"],
        ["Slither", "https://github.com/crytic/slither"],
      ],
    },
    {
      title: "AI trading brain that learns TP/SL behavior in paper mode",
      links: [
        ["FastAPI", "https://fastapi.tiangolo.com/"],
        ["PostgreSQL", "https://www.postgresql.org/docs/"],
        ["Langfuse", "https://langfuse.com/"],
      ],
    },
    {
      title: "AI + Web3 Quant Desk dashboard",
      links: [
        ["Next.js", "https://nextjs.org/docs"],
        ["Tailwind CSS", "https://tailwindcss.com/docs"],
        ["Recharts", "https://recharts.org/"],
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.25),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
            AI · LLMs · Agents · Blockchain · Web3 · Trading Systems
          </p>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            The Builder Roadmap for AI, LLMs and Blockchain
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A practical learning guide with direct links, courses, university programs, YouTube channels, video previews, and portfolio projects for building real AI agents, LLM apps, Web3 tools, smart-contract systems, trading bots, dashboards, and production software.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#roadmap" className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300">
              Start Roadmap
            </a>
            <a href="#videos" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Watch Previews
            </a>
            <a href="#courses" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              View Courses
            </a>
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Best AI path</h2>
          <p className="mt-4 text-slate-300">
            The strongest route is not pure prompt engineering or pure data science. The target is production AI engineering: build, deploy, monitor, and improve real AI systems.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiPath.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 font-black text-slate-950">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.note}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {step.links.map(([label, url]) => (
                  <a key={label} href={url} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 hover:bg-cyan-300/20">
                    {label} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">roadmap.sh route</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Use roadmap.sh as the structure: Computer Science → Backend → AI Engineer → AI Agents → MLOps → Blockchain → Cyber Security → DevSecOps → Software Architect.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {roadmapLinks.map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200">
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Video previews</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Start with these previews. They cover neural networks, GPT internals, NLP, deep learning, generative AI apps, and Solidity/Web3.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {videoPreviews.map((video) => (
            <div key={video.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="h-full w-full"
                  src={video.embed}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{video.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{video.best}</p>
                <a href={video.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300">
                  Open on YouTube ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Best free courses</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {freeCourses.map((course) => (
              <a key={course.title} href={course.url} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.06]">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">{course.tag}</span>
                <h3 className="mt-5 text-xl font-bold group-hover:text-cyan-200">{course.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{course.note}</p>
                <p className="mt-5 text-sm font-semibold text-cyan-300">Open course ↗</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Best paid courses</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paidCourses.map((course) => (
            <a key={course.title} href={course.url} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-300/50 hover:bg-white/[0.06]">
              <h3 className="text-xl font-bold text-purple-200">{course.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{course.note}</p>
              <p className="mt-5 text-sm font-semibold text-purple-300">View course ↗</p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Best universities and programs</h2>
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
            <div className="hidden grid-cols-12 bg-white/[0.06] px-5 py-4 text-sm font-bold text-slate-200 md:grid">
              <div className="col-span-3">Program</div>
              <div className="col-span-2">Mode</div>
              <div className="col-span-5">Best for</div>
              <div className="col-span-2">Links</div>
            </div>
            {universityPrograms.map((program) => (
              <div key={program.name} className="grid gap-3 border-t border-white/10 px-5 py-5 text-sm md:grid-cols-12">
                <div className="font-semibold text-cyan-200 md:col-span-3">{program.name}</div>
                <div className="text-slate-300 md:col-span-2">{program.mode}</div>
                <div className="text-slate-300 md:col-span-5">{program.best}</div>
                <div className="flex flex-wrap gap-2 md:col-span-2">
                  <a href={program.url} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 hover:bg-cyan-300/20">
                    Program ↗
                  </a>
                  <a href={program.courseUrl} target="_blank" rel="noreferrer" className="rounded-full border border-purple-300/20 bg-purple-300/10 px-3 py-1.5 text-xs font-semibold text-purple-200 hover:bg-purple-300/20">
                    Courses ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Best YouTube channels</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Every channel below is linked directly. Use the video previews above for immediate embedded watching.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {youtubeChannels.map((channel) => (
            <a key={channel.name} href={channel.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.06]">
              <h3 className="font-bold text-cyan-200">{channel.name} ↗</h3>
              <p className="mt-2 leading-6 text-slate-300">{channel.best}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Projects to build</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            The fastest way to learn is to build proof. Each project includes starter links to docs or tools.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6">
                <p className="text-sm font-black text-cyan-300">PROJECT {index + 1}</p>
                <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.links.map(([label, url]) => (
                    <a key={label} href={url} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-cyan-300/50 hover:text-cyan-200">
                      {label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 sm:p-12">
          <h2 className="text-3xl font-black">Final recommendation</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
            Aim to become an <strong>AI Agent Engineer / LLM Systems Engineer</strong>. Learn backend and systems first, then LLM apps, RAG, agents, LLMOps, blockchain, and security. The best academic route is Georgia Tech OMSCS or UT Austin Online AI/CS, combined with practical Web3 training from Cyfrin, RareSkills, Chainlink, Solidity, Foundry, and real portfolio projects.
          </p>
        </div>
      </section>
    </main>
  );
}
