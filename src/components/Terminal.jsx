import { useState, useRef, useEffect } from "react";

const COMMANDS = {
  help: {
    output: [
      { text: "Available commands:", cls: "cyan" },
      { text: "  about      → Who I am", cls: "" },
      { text: "  skills     → My AI/ML tech stack", cls: "" },
      { text: "  projects   → What I've built", cls: "" },
      { text: "  education  → My academic journey", cls: "" },
      { text: "  contact    → Get in touch", cls: "" },
      { text: "  clear      → Clear the terminal", cls: "" },
    ],
  },
  about: {
    output: [
      { text: "K LOKESH — AI Engineer", cls: "cyan" },
      { text: "──────────────────────────────────", cls: "" },
      { text: "Passionate about building intelligent AI systems.", cls: "" },
      { text: "Expertise: LLMs, NLP, Computer Vision, Deep Learning.", cls: "" },
      { text: "I turn data into impactful AI-powered solutions.", cls: "" },
    ],
  },
  skills: {
    output: [
      { text: "AI/ML Tech Stack:", cls: "cyan" },
      { text: "Core ML   → Python, TensorFlow, PyTorch, Keras, Scikit-learn", cls: "purple" },
      { text: "NLP/LLMs  → Hugging Face, LangChain, BERT, GPT, RAG, Transformers", cls: "purple" },
      { text: "Vision    → OpenCV, YOLOv8, CNNs", cls: "purple" },
      { text: "Data      → NumPy, Pandas, Matplotlib, Seaborn", cls: "purple" },
      { text: "Deploy    → FastAPI, Docker, MLflow, Streamlit, Django", cls: "purple" },
    ],
  },
  projects: {
    output: [
      { text: "AI Projects:", cls: "cyan" },
      { text: "01 → AI-Powered Chatbot with RAG (LangChain + HuggingFace)", cls: "yellow" },
      { text: "02 → Smart AI Timetable Generator", cls: "yellow" },
      { text: "03 → Real-Time Object Detection (YOLOv8 + OpenCV)", cls: "yellow" },
      { text: "04 → Sentiment Analysis NLP Pipeline (BERT + PyTorch)", cls: "yellow" },
    ],
  },
  education: {
    output: [
      { text: "Academic Journey:", cls: "cyan" },
      { text: "B.Tech AI&DS → Muthayammal Engineering College [Pursuing]", cls: "green" },
      { text: "HSC        → Sri Sarada Balamandir Boys [2022-2023]", cls: "green" },
      { text: "SSLC       → Sri Sarada Balamandir Boys [2020-2021]", cls: "green" },
    ],
  },
  contact: {
    output: [
      { text: "Get in touch:", cls: "cyan" },
      { text: "Email    → loki210905@gmail.com", cls: "" },
      { text: "LinkedIn → https://www.linkedin.com/in/lokesh-k-12360b2a5", cls: "" },
      { text: "GitHub   → https://github.com/yoursstarboy-21", cls: "" },
    ],
  },
};

const WELCOME = [
  { type: "output", text: "Welcome to K LOKESH's Interactive Terminal", cls: "cyan" },
  { type: "output", text: "Type 'help' to see available commands.", cls: "" },
];

export default function Terminal() {
  const [history, setHistory] = useState(WELCOME);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current)
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  const run = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const entry = [{ type: "cmd", text: cmd }];

    if (trimmed === "clear") {
      setHistory(WELCOME);
      return;
    }

    if (!trimmed) {
      setHistory((h) => [...h, ...entry]);
      return;
    }

    const result = COMMANDS[trimmed];
    if (result) {
      entry.push(...result.output.map((o) => ({ type: "output", ...o })));
    } else {
      entry.push({
        type: "output",
        text: `'${trimmed}': command not found. Type 'help' for a list.`,
        cls: "red",
      });
    }
    setHistory((h) => [...h, ...entry]);
    setCmdHistory((h) => [trimmed, ...h]);
    setHistIdx(-1);
  };

  const onKey = (e) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const idx = Math.min(histIdx + 1, cmdHistory.length - 1);
        setHistIdx(idx);
        setInput(cmdHistory[idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx > 0) {
        const idx = histIdx - 1;
        setHistIdx(idx);
        setInput(cmdHistory[idx]);
      } else {
        setHistIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="terminal-wrapper" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-titlebar">
        <span className="t-btn red" />
        <span className="t-btn yellow" />
        <span className="t-btn green" />
        <span className="terminal-path">lokesh@portfolio:~$</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((line, i) => {
          if (line.type === "cmd") {
            return (
              <p className="t-line" key={i}>
                <span className="t-prompt">lokesh@portfolio:~$ </span>
                <span className="t-cmd">{line.text}</span>
              </p>
            );
          }
          return (
            <p className={`t-line t-output ${line.cls || ""}`} key={i}>
              {line.text}
            </p>
          );
        })}
      </div>
      <div className="terminal-input-row">
        <span className="t-prompt">lokesh@portfolio:~$&nbsp;</span>
        <input
          ref={inputRef}
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="type a command..."
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal input"
        />
      </div>
    </div>
  );
}
