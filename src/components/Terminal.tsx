"use client";
import { useEffect, useState, useRef } from 'react';
import TerminalWriter from './TerminalWriter';

interface CommandEntry {
  type: 'input' | 'output' | 'error';
  content: string;
  timestamp: number;
}

const Terminal = () => {
  const finalValue = "Technology enthusiast and developer with a strong background in programming, cybersecurity, and mentoring.";
  const [blinkHidden, setBlinkHidden] = useState(false);
  const [typeBio, setTypeBio] = useState(false);
  const [showP, setShowP] = useState(false);
  const [commandHistory, setCommandHistory] = useState<CommandEntry[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [colourMode, setColourMode] = useState<'default' | 'single' | 'rainbow' | 'gradientRainbow'>('default');
  const [singleColour, setSingleColour] = useState('text-green-400');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const cleanText = (text: string) => {
    return text.replace(/(c\d|bold)/g, '').trim();
  };

  const parseColouredText = (text: string) => {
    const colourMap: { [key: string]: string } = {
      'c1': 'text-red-400',
      'c2': 'text-green-400',
      'c3': 'text-yellow-400',
      'c4': 'text-blue-400',
      'c5': 'text-purple-400',
      'c6': 'text-cyan-400',
      'c7': 'text-pink-400',
      'c8': 'text-orange-400',
      'c9': 'text-emerald-400',
      'bold': 'font-bold',
    };

    if (colourMode === 'single') {
      return <span className={singleColour}>{cleanText(text)}</span>;
    }

    if (colourMode === 'rainbow') {
      const rainbowColours = [
        'text-red-400', 'text-orange-400', 'text-yellow-400', 'text-green-400',
        'text-blue-400', 'text-purple-400', 'text-pink-400', 'text-cyan-400'
      ];
      return cleanText(text).split('').map((char, index) => (
        <span key={index} className={rainbowColours[index % rainbowColours.length]}>
          {char}
        </span>
      ));
    }

    if (colourMode === 'gradientRainbow') {
      return <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">{cleanText(text)}</span>;
    }

    let currentClass = 'text-gray-300';
    const parts = text.split(/(c\d|bold)(?=\w|$)/);
    const result = [];

    for (let part of parts) {
      if (colourMap[part]) {
        currentClass = colourMap[part];
      } else if (part) {
        result.push(<span key={result.length} className={currentClass}>{part}</span>);
      }
    }

    return <>{result.map((element, index) => (
      <span key={index}>{element}</span>
    ))}</>;
  };

  const commands: Record<string, { output: string[]; clearScreen?: boolean }> = {
    help: {
      output: [
        "Available commands:",
        "  whoami     - About me",
        "  skills     - Technical skills",
        "  projects   - Recent projects",
        "  education  - Educational background",
        "  contact    - Contact information",
        "  experience - Work experience",
        "  theme      - Change colour theme (default/single/rainbow/gradientRainbow)",
        "  colour     - Set single colour (red/blue/green/yellow/purple/cyan/pink/orange)",
        "  clear      - Clear terminal",
        "  help       - Show this help message",
      ],
    },
    whoami: {
      output: [finalValue],
    },
    skills: {
      output: [
        "Technical Skills:",
        "boldProgramming: c4Java, c5Python, c3JavaScript, c6TypeScript, c1C, c7C#, c8C++",
        "boldWeb Dev: c8HTML, c6CSS, c2Node.js, c9Next.js",
        "boldDatabase: c5SQL",
        "boldDevOps: c3Git, c4Docker, c7Grafana",
        "boldCybersecurity: c1Information Security, c1Reverse Engineering (c6IDA, c6Ghidra, c6Cheat Engine)",
      ],
    },
    projects: {
      output: [
        "Recent Projects:",
        "boldReddit Bot c8(Sep 2023): Developed a bot that automatically retrieves and displays the top post from a specific subreddit, creates a dedicated discussion thread, and includes a command to refresh and display recent top posts.",
        "boldRust Game Mods c8(Nov 2023 - Jan 2024): Custom c7C# mods for enhanced user experience and security.",
        "boldDiscord Bot c8(Jan 2024 - Mar 2024): c3JavaScript bot for server admin and security monitoring.",
        "boldPromptNexus AI c8(Apr 2024 - Present): c5AI app, ongoing contribution.",
        "boldRapidCard c8(Jan 2024 - Present): Language learning app with c5Python, c4FastAPI.",
        "boldCustoms c8(Jan 2024 - May 2024): Secure app with c5AI for customs processing.",
      ],
    },
    education: {
      output: [
        "Education:",
        "boldMaster's in Computer Science (c1Cybersecurity), c9University of Oslo",
        "boldBachelor's in Computer Science (c5AI), c9Kristiania University College",
      ],
    },
    experience: {
      output: [
        "Work Experience:",
        "boldKursinstruktor, c4Kristiania University College c8(Jan 2023 - May 2025): Mentored c2100+ students in programming.",
        "boldUtvikler, c4Tollvesenet c8(Jan 2024 - May 2024): Led web app development with c5AI automation.",
        "boldForstelinjesupport, c4Geenie Unity AS c8(2022 - Feb 2024): Provided tech support, optimised web apps.",
      ],
    },
    contact: {
      output: [
        "Contact Information:",
        "boldEmail: c9[email protected]",
        "boldLinkedIn: c6linkedin.com/",
        "boldGitHub: c6github.com/Yuzuhausagi",
      ],
    },
    clear: {
      output: [],
      clearScreen: true,
    },
    theme: {
      output: [
        "Colour Theme Options:",
        "  c9default        - Use original colourful theme",
        "  c9single         - Use single colour for all text",
        "  c9rainbow        - Apply rainbow colours to each character",
        "  c9gradientRainbow - Apply a gradient rainbow effect",
        "",
        "Usage: c6theme [mode] (e.g., 'theme gradientRainbow')",
        "Current theme: c4" + colourMode,
      ],
    },
    colour: {
      output: [
        "Available Colours for Single Mode:",
        "  c1red, c4blue, c2green, c3yellow, c5purple, c6cyan, c7pink, c8orange",
        "",
        "Usage: c6colour [colourname] (e.g., 'colour blue')",
        "Current single colour: c4" + singleColour.split('-')[1],
      ],
    },
  };

  useEffect(() => {
    async function allowWriting() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBlinkHidden(true);
    }
    allowWriting();
  }, []);

  useEffect(() => {
    if (initialLoad && typeBio) {
      const timer = setTimeout(() => {
        addCommand('whoami', true);
        setInitialLoad(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [initialLoad, typeBio]);

  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const addCommand = (command: string, isInitial = false) => {
    const cmd = command.toLowerCase().trim();
    const args = cmd.split(' ');
    const baseCmd = args[0];

    if (!isInitial) {
      setCommandHistory((prev) => [
        ...prev,
        { type: 'input', content: command, timestamp: Date.now() },
      ]);
    }

    if (baseCmd === 'theme') {
      if (args[1]) {
        const newMode = args[1].toLowerCase() as 'default' | 'single' | 'rainbow' | 'gradientrainbow';
        const validModes = ['default', 'single', 'rainbow', 'gradientrainbow'];
        if (validModes.includes(newMode)) {
          const mappedMode = newMode === 'gradientrainbow' ? 'gradientRainbow' : newMode.charAt(0).toUpperCase() + newMode.slice(1);
          setColourMode(mappedMode as 'default' | 'single' | 'rainbow' | 'gradientRainbow');
          setCommandHistory((prev) => [
            ...prev,
            { type: 'output', content: `Theme changed to: ${mappedMode}`, timestamp: Date.now() },
          ]);
        } else {
          setCommandHistory((prev) => [
            ...prev,
            { type: 'error', content: `Invalid theme '${args[1]}'. Use: default, single, rainbow, or gradientRainbow`, timestamp: Date.now() },
          ]);
        }
      } else {
        const outputLines = commands.theme.output.map(cleanText);
        setIsTyping(true);
        outputLines.forEach((line, index) => {
          setTimeout(() => {
            setCommandHistory((prev) => [
              ...prev,
              { type: 'output', content: line, timestamp: Date.now() + index },
            ]);
            if (index === outputLines.length - 1) setIsTyping(false);
          }, index * 100);
        });
        setTimeout(() => setShowP(true), (outputLines.length + 1) * 100);
      }
      return;
    }

    if (baseCmd === 'colour') {
      if (args[1]) {
        const colourMap: { [key: string]: string } = {
          red: 'text-red-400',
          blue: 'text-blue-400',
          green: 'text-green-400',
          yellow: 'text-yellow-400',
          purple: 'text-purple-400',
          cyan: 'text-cyan-400',
          pink: 'text-pink-400',
          orange: 'text-orange-400',
        };

        if (colourMap[args[1]]) {
          setSingleColour(colourMap[args[1]]);
          setCommandHistory((prev) => [
            ...prev,
            { type: 'output', content: `Single colour set to: ${args[1]}`, timestamp: Date.now() },
          ]);
        } else {
          setCommandHistory((prev) => [
            ...prev,
            { type: 'error', content: `Invalid colour '${args[1]}'. Available: red, blue, green, yellow, purple, cyan, pink, orange`, timestamp: Date.now() },
          ]);
        }
      } else {
        const outputLines = commands.colour.output.map(cleanText);
        setIsTyping(true);
        outputLines.forEach((line, index) => {
          setTimeout(() => {
            setCommandHistory((prev) => [
              ...prev,
              { type: 'output', content: line, timestamp: Date.now() + index },
            ]);
            if (index === outputLines.length - 1) setIsTyping(false);
          }, index * 100);
        });
        setTimeout(() => setShowP(true), (outputLines.length + 1) * 100);
      }
      return;
    }

    if (commands[baseCmd]) {
      if (commands[baseCmd].clearScreen) {
        setCommandHistory([]);
        setShowP(false);
      } else {
        setIsTyping(true);
        const outputLines = commands[baseCmd].output.map(cleanText);
        outputLines.forEach((line, index) => {
          setTimeout(() => {
            setCommandHistory((prev) => [
              ...prev,
              { type: 'output', content: line, timestamp: Date.now() + index },
            ]);
            if (index === outputLines.length - 1) {
              setIsTyping(false);
              setShowP(true);
            }
          }, index * 100);
        });
      }
    } else if (cmd !== '') {
      setCommandHistory((prev) => [
        ...prev,
        {
          type: 'error',
          content: `Command '${cmd}' not found. Type 'help' for available commands.`,
          timestamp: Date.now(),
        },
      ]);
      setShowP(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() && !isTyping) {
      addCommand(currentInput);
      setCurrentInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const availableCommands = Object.keys(commands).concat(['theme', 'colour']);
      const matches = availableCommands.filter((cmd) => cmd.startsWith(currentInput.toLowerCase()));
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    }
  };

  return (
    <div className="bg-gray-900 text-green-400 text-sm sm:text-base md:text-lg p-1 sm:p-2 md:p-3 rounded-lg hover:shadow-emerald-500 hover:shadow-md transition-shadow shadow-emerald-500/60 shadow mt-2 sm:mt-4 md:mt-6 w-full max-w-xs sm:max-w-sm md:max-w-2xl h-48 sm:h-64 md:h-80 flex flex-col">
      <div className="flex items-center bg-gray-800 p-1 sm:p-2 rounded-t-lg flex-shrink-0">
        <div className="flex space-x-1 sm:space-x-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-gray-400 ml-1 sm:ml-2 text-xs sm:text-sm">Yuzuhausagi@terminal: ~/portfolio</span>
      </div>
      <div
        ref={terminalRef}
        className="flex-1 p-1 sm:p-2 bg-gray-900 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600"
        style={{ scrollbarWidth: 'thin' }}
      >
        {initialLoad && (
          <div className="mb-1">
            <p className="text-green-400 text-left text-xs sm:text-sm md:text-base">
              $<span className={`ml-1 blink${blinkHidden ? ' hidden' : ''}`}>|</span>{' '}
              <TerminalWriter allowWrite={blinkHidden} onFinishedTyping={() => setTypeBio(true)} speed={50}>
                {cleanText('whoami')}
              </TerminalWriter>
            </p>
            <p className="ml-1 sm:ml-2 md:ml-4 text-left text-xs sm:text-sm md:text-base">
              <TerminalWriter allowWrite={typeBio} onFinishedTyping={() => setShowP(true)} speed={50}>
                {cleanText(finalValue)}
              </TerminalWriter>
            </p>
          </div>
        )}
        {commandHistory.map((entry, index) => (
          <div key={`${entry.timestamp}-${index}`} className="mb-1">
            {entry.type === 'input' && (
              <p className="text-green-400">
                <span className="text-emerald-300">$</span> {entry.content}
              </p>
            )}
            {entry.type === 'output' && (
              <p className="ml-1 sm:ml-2 md:ml-4 text-xs sm:text-sm md:text-base whitespace-pre-line">
                <TerminalWriter allowWrite={true} onFinishedTyping={() => {}} speed={50}>
                  {cleanText(entry.content)}
                </TerminalWriter>
              </p>
            )}
            {entry.type === 'error' && (
              <p className="text-red-400 ml-1 sm:ml-2 md:ml-4 text-xs sm:text-sm md:text-base">
                <TerminalWriter allowWrite={true} onFinishedTyping={() => {}} speed={50}>
                  {cleanText(entry.content)}
                </TerminalWriter>
              </p>
            )}
          </div>
        ))}
        {!initialLoad && (
          <div className="flex items-center">
            <span className="text-emerald-300 mr-1 sm:mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e);
                } else {
                  handleKeyDown(e);
                }
              }}
              className="bg-transparent outline-none text-green-400 flex-1 caret-green-400 text-xs sm:text-sm md:text-base"
              disabled={isTyping}
              placeholder={isTyping ? 'Processing...' : 'Type a command...'}
            />
            <span className={`ml-1 ${showCursor && !isTyping ? 'opacity-100' : 'opacity-0'} transition-opacity text-green-400`}>
              |
            </span>
          </div>
        )}
      </div>
      <div className="bg-gray-800 px-1 sm:px-2 py-1 sm:py-2 rounded-b-lg flex-shrink-0">
        <p className="text-gray-500 text-xs sm:text-sm">
          💡 Try: <span className="text-emerald-400">help</span>, <span className="text-emerald-400">theme gradientRainbow</span>, <span className="text-emerald-400">colour blue</span> |
          Current: <span className={`${colourMode === 'rainbow' ? 'bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent' : colourMode === 'gradientRainbow' ? 'bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent' : colourMode === 'single' ? singleColour : 'text-green-400'}`}>
            {colourMode}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Terminal;