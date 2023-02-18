import React from 'react';
import "./style.css"
interface Props {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<Props> = ({ theme, setTheme }) => {
    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
    return (
        <div className="heading">
            <h1>T O D O</h1>
            <button className="icon-btn" onClick={changeTheme}>
                {theme === 'dark' ?
                    <img src={process.env.PUBLIC_URL + "images/icon-sun.svg"} alt="" /> :
                    <img src={process.env.PUBLIC_URL + "images/icon-moon.svg"} alt="" />
                }
            </button>
        </div>
    );
}

export default Header;