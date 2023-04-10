import { useState } from 'react';

function DarkModeButton() {
    const [darkMode, setDarkMode] = useState(false);

    const text = darkMode ? "🌔" : "🌒";
    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            <style jsx>{`
                button:before {
                    content: "${text}";
                }
                button:hover {
                    transform: rotate(180deg);
                    margin: 0;
                    padding: 0;
                    height: 2rem;
                    width: 2rem;
                    line-height: 2rem;
                    text-align: center;
                    align-self: center;
                    border: 0px solid #ffffff55;
                    background-color: #ffffff33;
                }
                button {
                    font-family: inherit;
                    font-size: inherit;
                    background: none;
                    border: 0px solid #ffffff55;
                    border-radius: 100%;
                    cursor: pointer;
                    transition: transform .3s ease-in-out;
                    margin: 0;
                    padding: 0;
                    height: 2rem;
                    width: 2rem;
                    line-height: 2rem;
                    text-align: center;
                    align-self: center;
                }
            `}</style>
        </button>
    )
}

export default DarkModeButton;
