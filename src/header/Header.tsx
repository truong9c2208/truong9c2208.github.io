import Style from "./Header.module.css";
import { useCallback, useState } from "react";

import coverImage from "../assets/cover-image.jpg";
import avatar from "../assets/avatar.jpg";

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

export default function Header() {
    const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('light');

    const toggleColorScheme = useCallback(() => {
        setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
        document.documentElement.setAttribute('data-color-scheme', colorScheme);
    }, [colorScheme])

    return (
        <div className={Style.header}>
            <div className={Style["upper-half"]}>
                <div className={Style["cover-image"]}>
                    <img srcSet={coverImage} alt="Maii-San" />
                    <div className={Style["color-scheme"]}>
                        <button onClick={toggleColorScheme}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="device-theme"><path fillRule="evenodd" d="M10.6338 0.90947C11.4028 0.189743 12.5981 0.189742 13.3671 0.90947L15.6927 3.0861L18.8763 3.19143C19.9289 3.22625 20.7742 4.07152 20.809 5.1242L20.9144 8.30774L23.091 10.6333C23.8107 11.4023 23.8107 12.5977 23.091 13.3667L20.9144 15.6923L20.809 18.8758C20.7742 19.9285 19.9289 20.7738 18.8763 20.8086L15.6927 20.9139L13.3671 23.0905C12.5981 23.8103 11.4028 23.8103 10.6338 23.0905L8.30819 20.9139L5.12464 20.8086C4.07197 20.7738 3.2267 19.9285 3.19187 18.8758L3.08654 15.6923L0.909913 13.3667C0.190186 12.5977 0.190185 11.4023 0.909912 10.6333L3.08654 8.30774L3.19187 5.1242C3.2267 4.07152 4.07196 3.22625 5.12464 3.19143L8.30819 3.0861L10.6338 0.90947ZM8.58287 5.6352C9.47214 5.22705 10.4609 5 11.5 5C15.366 5 18.5 8.13401 18.5 12C18.5 15.866 15.366 19 11.5 19C10.4609 19 9.47214 18.7729 8.58287 18.3648C8.22768 18.2018 8 17.8468 8 17.456C8 17.0651 8.22768 16.7101 8.58287 16.5471C10.3064 15.7561 11.5 14.0164 11.5 12C11.5 9.98362 10.3064 8.24392 8.58287 7.45289C8.22768 7.28987 8 6.93486 8 6.54404C8 6.15322 8.22768 5.79822 8.58287 5.6352Z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={Style["lower-half"]}>
                <div className={Style["user"]}>
                    <div className={Style["avatar"]}>
                        <img srcSet={avatar} alt="Mai-San" />
                    </div>
                    <div className={Style["user-info"]}>
                        <div className={Style["user-name"]}>
                            <p>Shibaa</p>
                        </div>
                        <div className={Style["status"]}>
                            <p>Software Developer</p>
                        </div>
                    </div>
                </div>
                <div className={Style["contact"]}>
                    <div className={Style["contact-button"]}>
                        <a href="https://www.facebook.com/shibasama.dev" target="_blank">
                            <FacebookIcon />
                            <div className={Style["contact-text"]}>Facebook</div>
                        </a>
                    </div>
                    <div className={Style["contact-button"]}>
                        <a href="https://www.github.com/truong9c2208" target="_blank">
                            <GitHubIcon />
                            <div className={Style["contact-text"]}>Github</div>
                        </a>
                    </div>
                    <div className={Style["contact-button"]}>
                        <a href="https://www.x.com/shibamini07" target="_blank">
                            <XIcon />
                            <div className={Style["contact-text"]}>Twitter</div>
                        </a>
                    </div>
                    <div className={Style["contact-button"]}>
                        <a href="https://discordapp.com/users/847101281277444166" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.867 33.867" id="discord"><path d="M11.343 5.177c-1.076 0-4.32 1.316-4.902 1.579-.582.263-1.228 1.084-1.961 2.439-.734 1.355-1.323 2.939-2.28 5.269-.956 2.33-1.179 6.822-1.147 8.193.032 1.371.189 2.442 1.594 3.253 1.404.81 2.646 1.658 3.953 2.168 1.308.51 2.2.877 2.806.367.606-.51 1.005-1.403 1.005-1.403s.574-.797-.51-1.275c-1.084-.479-1.626-.814-1.579-1.308.048-.494.127-.765.398-.701.271.064.91 1.211 3.365 1.737s4.848.447 4.848.447 2.394.08 4.849-.447c2.455-.526 3.093-1.673 3.364-1.737.271-.064.35.207.398.7.048.495-.494.83-1.578 1.309-1.084.478-.51 1.275-.51 1.275s.399.892 1.005 1.403c.605.51 1.498.143 2.805-.367 1.307-.51 2.55-1.357 3.954-2.168 1.405-.811 1.562-1.882 1.594-3.253.032-1.37-.191-5.863-1.148-8.193-.956-2.33-1.546-3.914-2.28-5.269-.732-1.355-1.379-2.176-1.96-2.44-.582-.262-3.827-1.578-4.903-1.578-1.076 0-1.394.75-1.394.75l-.375.829s-2.52-.479-3.804-.48c-1.284 0-3.837.48-3.837.48l-.375-.83s-.318-.749-1.395-.749zm.117 9.948h.04c1.569 0 2.84 1.373 2.84 3.066 0 1.694-1.271 3.066-2.84 3.066s-2.84-1.372-2.84-3.066c-.001-1.677 1.247-3.043 2.8-3.066zm10.907 0h.04c1.553.023 2.8 1.39 2.8 3.066 0 1.694-1.271 3.066-2.84 3.066-1.57 0-2.84-1.372-2.84-3.066 0-1.693 1.27-3.066 2.84-3.066z" paintOrder="fill markers stroke"></path></svg>
                            <div className={Style["contact-text"]}>Discord</div>
                        </a>
                    </div>
                    {/* <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="facebook"><path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path></svg>
                        Facebook
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.867 33.867" id="discord"><path d="M11.343 5.177c-1.076 0-4.32 1.316-4.902 1.579-.582.263-1.228 1.084-1.961 2.439-.734 1.355-1.323 2.939-2.28 5.269-.956 2.33-1.179 6.822-1.147 8.193.032 1.371.189 2.442 1.594 3.253 1.404.81 2.646 1.658 3.953 2.168 1.308.51 2.2.877 2.806.367.606-.51 1.005-1.403 1.005-1.403s.574-.797-.51-1.275c-1.084-.479-1.626-.814-1.579-1.308.048-.494.127-.765.398-.701.271.064.91 1.211 3.365 1.737s4.848.447 4.848.447 2.394.08 4.849-.447c2.455-.526 3.093-1.673 3.364-1.737.271-.064.35.207.398.7.048.495-.494.83-1.578 1.309-1.084.478-.51 1.275-.51 1.275s.399.892 1.005 1.403c.605.51 1.498.143 2.805-.367 1.307-.51 2.55-1.357 3.954-2.168 1.405-.811 1.562-1.882 1.594-3.253.032-1.37-.191-5.863-1.148-8.193-.956-2.33-1.546-3.914-2.28-5.269-.732-1.355-1.379-2.176-1.96-2.44-.582-.262-3.827-1.578-4.903-1.578-1.076 0-1.394.75-1.394.75l-.375.829s-2.52-.479-3.804-.48c-1.284 0-3.837.48-3.837.48l-.375-.83s-.318-.749-1.395-.749zm.117 9.948h.04c1.569 0 2.84 1.373 2.84 3.066 0 1.694-1.271 3.066-2.84 3.066s-2.84-1.372-2.84-3.066c-.001-1.677 1.247-3.043 2.8-3.066zm10.907 0h.04c1.553.023 2.8 1.39 2.8 3.066 0 1.694-1.271 3.066-2.84 3.066-1.57 0-2.84-1.372-2.84-3.066 0-1.693 1.27-3.066 2.84-3.066z" paintOrder="fill markers stroke"></path></svg>
                        Discord
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="twitter"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path></svg>
                        Twitter
                    </a>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="github"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
                        Github
                    </a> */}
                </div>
            </div>
        </div>
    )
}