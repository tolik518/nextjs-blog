import { useState } from 'react';
import DarkTheme from './DarkTheme';

function getDarkModeFromLocalStorage() {
    // check if we are in the browser, since localstorage is not available on the server
    if (typeof window === "undefined") {
        return false;
    }
    const darkMode = localStorage.getItem("darkMode");

    // if darkMode is not set, set it and return false
    if (darkMode === null) {
        localStorage.setItem("darkMode", JSON.stringify(false));
        return false;
    }
    return JSON.parse(darkMode);
}

function DarkModeButton() {
    // we need state to trigger a re-render when the dark mode changes?
    const [darkMode, setDarkMode] = useState(getDarkModeFromLocalStorage());

    const toggleDarkMode = () => {
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
        setDarkMode(getDarkModeFromLocalStorage());
    }

    const text = darkMode ? "🌔" : "🌒";

    return (
        <div>
            <button onClick={() => toggleDarkMode()} suppressHydrationWarning>
            {darkMode && <DarkTheme/>}
            </button>
            <style jsx>{`
                div {
                    margin-right: 1rem;
                }

                button:before {
                    content: "${text}";
                }
                button:active {
                    transform: rotate(360deg);
                }
                button:hover {
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
                    transition-duration: 0.4s;
                    margin: 0;
                    padding: 0;
                    height: 2rem;
                    width: 2rem;
                    line-height: 2rem;
                    text-align: center;
                    align-self: center;
                }
            `}</style>
        </div>
    )
}

export default DarkModeButton;
