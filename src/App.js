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

  return (
    <div className="App">
      <div className="body">
        <div className="code-block">
          <div>
            <span id="a">guest@optimus</span>:<span id="b">~</span>
            <span id="c">$</span>
            <span id="z"> {idx === 0 ? currentText : commands[0]}</span>
          </div>
          {isVisible && idx >= 1 && <span id="g">sahil kumar</span>}
        </div>

        {isVisible && idx >= 2 && (
          <div className="code-block">
            <div>
              <span id="a">guest@optimus</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 2 ? currentText : commands[1]}</span>
            </div>
            {isVisible && idx >= 3 && (
              <span id="z" style={{ fontWeight: 'bold' }}>
                cs grad student with minor in cybersecurity
              </span>
            )}
          </div>
        )}

        {isVisible && idx >= 4 && (
          <div className="code-block">
            <div>
              <span id="a">guest@optimus</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 4 ? currentText : commands[2]}</span>
            </div>
            {isVisible && idx >= 5 && (
              <span id="e" style={{ fontWeight: 'bold' }}>
                intro.txt
              </span>
            )}
          </div>
        )}

        {isVisible && idx >= 6 && (
          <div className="code-block">
            <div>
              <span id="a">guest@optimus</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 6 ? currentText : commands[3]}</span>
            </div>

            {isVisible && idx >= 7 && (
              <>
                {/* ROOT VARIABLES */}
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

                {/* PROJECTS SECTION */}
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

                {/* EDUCATION SECTION */}
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

                {/* RESUME SECTION */}
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

                {/* BLOG SECTION */}
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

                {/* CONTACT SECTION */}
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
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
