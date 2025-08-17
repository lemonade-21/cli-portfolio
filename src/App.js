import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const commands = [
    'grep "root" /etc/group',
    'uname -a',
    'cd /home/sahil/ && ls',
    'cat intro.txt',
  ];
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(commands[0]);
  const [commandsIdx, setCommandsIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (text && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const revealText = () => {
      setIsVisible(true);
      setIdx(idx + 1);
      setCurrentText('');
      setCurrentIndex(0);
      setCommandsIdx(idx % 2 !== 0 ? commandsIdx : commandsIdx + 1);
      setText(commands[commandsIdx]);
    };
    const delay = 500 + idx * 100;
    const timeoutId = setTimeout(revealText, delay);

    return () => clearTimeout(timeoutId);
  }, [idx]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="App">
      <div className="body">
        <div className="terminal-window">
          {/* Header */}
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="terminal-title">sahil@portfolio:~</div>
          </div>

          {/* Welcome Section */}
          <div className="code-block">
            <div className="command-line">
              <span id="a">guest@deadsociety</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 0 ? currentText : commands[0]}</span>
              {showCursor && <span className="cursor">|</span>}
            </div>
            {isVisible && idx >= 1 && (
              <div className="output-line">
                <span id="g">sahil kumar</span>
              </div>
            )}
          </div>

          {/* System Info Section */}
          {isVisible && idx >= 2 && (
            <div className="code-block">
              <div className="command-line">
                <span id="a">guest@deadsociety</span>:<span id="b">~</span>
                <span id="c">$</span>
                <span id="z"> {idx === 2 ? currentText : commands[1]}</span>
                {showCursor && <span className="cursor">|</span>}
              </div>
              {isVisible && idx >= 3 && (
                <div className="output-line">
                  <span id="z" style={{ fontWeight: 'bold' }}>
                    cs grad student with minor in cybersecurity
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Directory Listing */}
          {isVisible && idx >= 4 && (
            <div className="code-block">
              <div className="command-line">
                <span id="a">guest@deadsociety</span>:<span id="b">~</span>
                <span id="c">$</span>
                <span id="z"> {idx === 4 ? currentText : commands[2]}</span>
                {showCursor && <span className="cursor">|</span>}
              </div>
              {isVisible && idx >= 5 && (
                <div className="output-line">
                  <span id="e" style={{ fontWeight: 'bold' }}>
                    intro.txt
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Main Content */}
          {isVisible && idx >= 6 && (
            <div className="code-block">
              <div className="command-line">
                <span id="a">guest@deadsociety</span>:<span id="b">~</span>
                <span id="c">$</span>
                <span id="z"> {idx === 6 ? currentText : commands[3]}</span>
                {showCursor && <span className="cursor">|</span>}
              </div>

              {isVisible && idx >= 7 && (
                <div className="content-sections">
                  {/* ROOT VARIABLES */}
                  <div className="section">
                    <div className="code-block" id="w">
                      <div>==============</div>
                      <div>ROOT VARIABLES</div>
                      <div>==============</div>
                    </div>
                    <div className="code-block">
                      <span id="f">interests</span>
                      <span id="z">
                        =['Programming Languages', 'Distributed Systems', 'Cybersecurity']
                      </span>
                    </div>
                  </div>

                  {/* PROJECTS SECTION */}
                  <div className="section">
                    <div className="code-block" id="w">
                      <div>================</div>
                      <div>PROJECTS</div>
                      <div>================</div>
                    </div>
                    <div className="code-block">
                      <div id="z">
                        <b>Portfolio Website</b> - React-based terminal-style personal portfolio
                      </div>
                      <div id="z">
                        <b>AI based mock interview tool</b> - Prepared a fully voice-driven system combining speech-to-text.
                      </div>
                      <div id="z">
                        <b>SIEM lab for Security analysts</b> - Built and configured a multi-VM security lab
                      </div>
                    </div>
                  </div>

                  {/* EDUCATION SECTION */}
                  <div className="section">
                    <div className="code-block" id="w">
                      <div>================</div>
                      <div>EDUCATION</div>
                      <div>================</div>
                    </div>
                    <div className="code-block">
                      <div id="z">
                        <b>Btech in Information Technology</b>, Ramrao Adik Institute of Technology (2022-2026)
                      </div>
                      <div id="z">
                        Relevant coursework: Data Structures, Web Development, Databases
                      </div>
                    </div>
                  </div>

                  {/* RESUME SECTION */}
                  <div className="section">
                    <div className="code-block" id="w">
                      <div>================</div>
                      <div>RÉSUMÉ</div>
                      <div>================</div>
                      <div id="z">
                        <a href="/SahilKumar.pdf" target="_blank" rel="noopener noreferrer">
                          resume
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* BLOG SECTION */}
                  <div className="section">
                    <div className="code-block" id="w">
                      <div>================</div>
                      <div>BLOG</div>
                      <div>================</div>
                      <div id="z">
                        [
                        <span id="link">
                          <a href="https://github.com/lemonade-21">link</a>
                        </span>
                        ]
                      </div>
                    </div>
                  </div>

                  {/* CONTACT SECTION */}
                  <div className="section">
                    <div className="code-block" id="w">
                      <div>================</div>
                      <div>CONTACT</div>
                      <div>================</div>
                      <div id="z">
                        [
                        <span id="link">
                          <a href="https://github.com/lemonade-21" target="blank">
                            github
                          </a>
                        </span>
                        ] [
                        <span id="link">
                          <a
                            href="https://www.linkedin.com/in/sahilkumarr21/"
                            target="blank"
                          >
                            linkedin
                          </a>
                        </span>
                        ]
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
