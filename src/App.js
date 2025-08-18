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
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const revealText = () => {
      setIsVisible(true);
      setIdx(prev => prev + 1);
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
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="terminal-title">guest@deadsociety:~</div>
          </div>

          {/* Command Lines */}
          <div className="code-block">
            <div className="command-line">
              <span>guest@deadsociety</span>:<span>~</span>
              <span>$</span>
              <span>{idx === 0 ? currentText : commands[0]}</span>
              {showCursor && <span className="cursor">|</span>}
            </div>
            {isVisible && idx >= 1 && <div className="output-line">sahil kumar</div>}
          </div>

          {isVisible && idx >= 2 && (
            <div className="code-block">
              <div className="command-line">
                <span>guest@deadsociety</span>:<span>~</span>
                <span>$</span>
                <span>{idx === 2 ? currentText : commands[1]}</span>
                {showCursor && <span className="cursor">|</span>}
              </div>
              {idx >= 3 && (
                <div className="output-line">
                  <b>cs grad student with minor in cybersecurity</b>
                </div>
              )}
            </div>
          )}

          {isVisible && idx >= 4 && (
            <div className="code-block">
              <div className="command-line">
                <span>guest@deadsociety</span>:<span>~</span>
                <span>$</span>
                <span>{idx === 4 ? currentText : commands[2]}</span>
                {showCursor && <span className="cursor">|</span>}
              </div>
              {idx >= 5 && (
                <div className="output-line">
                  <b>intro.txt</b>
                </div>
              )}
            </div>
          )}

          {isVisible && idx >= 6 && (
            <div className="code-block">
              <div className="command-line">
                <span>guest@deadsociety</span>:<span>~</span>
                <span>$</span>
                <span>{idx === 6 ? currentText : commands[3]}</span>
                {showCursor && <span className="cursor">|</span>}
              </div>

              {idx >= 7 && (
                <div className="content-sections">
                  {/* ROOT VARIABLES */}
                  <div className="section">
                    <div className="code-block section-header">
                      <div>==============</div>
                      <div>ROOT VARIABLES</div>
                      <div>==============</div>
                    </div>
                    <div className="code-block">
                      <span>interests</span> = [
                      'Programming Languages', 'Distributed Systems', 'Cybersecurity']
                    </div>
                  </div>

                  {/* PROJECTS */}
                  <div className="section">
                    <div className="code-block section-header">
                      <div>================</div>
                      <div>PROJECTS</div>
                      <div>================</div>
                    </div>
                    <div className="code-block">
                      <div><b>Portfolio Website</b> - React terminal-style portfolio</div>
                      <div><b>AI Mock Interview Tool</b> - Voice-driven system</div>
                      <div><b>SIEM Lab</b> - Multi-VM security lab</div>
                    </div>
                  </div>

                  {/* EDUCATION */}
                  <div className="section">
                    <div className="code-block section-header">
                      <div>================</div>
                      <div>EDUCATION</div>
                      <div>================</div>
                    </div>
                    <div className="code-block">
                      <div>
                        <b>Btech in Information Technology</b>, Ramrao Adik Institute of Technology (2022-2026)
                      </div>
                      <div>Relevant coursework: Data Structures, Web Development, Databases</div>
                    </div>
                  </div>

                  {/* RESUME */}
                  <div className="section">
                    <div className="code-block section-header">
                      <div>================</div>
                      <div>RÉSUMÉ</div>
                      <div>================</div>
                    </div>
                    <div className="code-block section-content">
                      <a
                        href="/Sahilkumar.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-link resume-link"
                      >
                        resume
                      </a>
                    </div>
                  </div>

                  {/* BLOG */}
                  <div className="section">
                    <div className="code-block section-header">
                      <div>================</div>
                      <div>BLOG</div>
                      <div>================</div>
                    </div>
                    <div className="code-block section-content">
                      <a
                        href="https://lemonade-21.github.io/Blog-Page/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-link blog-link"
                      >
                        link
                      </a>
                    </div>
                  </div>

                  {/* CONTACT */}
                  <div className="section">
                    <div className="code-block section-header">
                      <div>================</div>
                      <div>CONTACT</div>
                      <div>================</div>
                    </div>
                    <div className="code-block section-content">
                      <a
                        href="https://github.com/lemonade-21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-link"
                      >
                        github
                      </a>{' '}
                      |{' '}
                      <a
                        href="https://www.linkedin.com/in/sahilkumarr21/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-link"
                      >
                        linkedin
                      </a>
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
