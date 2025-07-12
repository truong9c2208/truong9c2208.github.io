import Style from "./AsideLeft.module.css"

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function AsideLeft() {
    return (
        <div className={Style["aside-left"]}>
            <div className={Style["container"]}>
                <div className={Style["title"]}>
                    <p>About Me</p>
                </div>
                <div className={Style["information"]}>
                    <div className={Style["text-box"]}>
                        <BusinessCenterIcon />
                        <p>General Manager in <a href="https://www.facebook.com/xaviainternational" target="_blank">Xavia International</a></p>
                    </div>
                    <div className={Style["text-box"]}>
                        <SchoolIcon />
                        <p>Studied at <a href="https://portal.ptit.edu.vn/" target="_blank">Posts and Telecommunications Institute of Technology</a></p>
                    </div>
                    <div className={Style["text-box"]}>
                        <HomeIcon />
                        <p>Live in <b>Ha Noi</b></p>
                    </div>
                    <div className={Style["text-box"]}>
                        <LocationOnIcon />
                        <p>From <b>Son La</b></p>
                    </div>
                    <div className={Style["text-box"]}>
                        <FavoriteIcon />
                        <p>Single</p>
                    </div>
                </div>
            </div>
            <div className={Style["container"]} style={{ marginTop: `var(--margin-side)` }}>
                <div className={Style["title"]}>
                    Github Stats
                </div>
                <div className={Style["statistics"]}>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=truong9c2208&amp;theme=dark&amp;layout=compact&amp;count_private=true" alt="truong9c2208" />
                    <img src="https://github-readme-stats.vercel.app/api?username=truong9c2208&amp;theme=dark&amp;show_icons=true&amp;count_private=true" alt="truong9c2208" />
                    <img src="https://api.githubtrends.io/user/svg/truong9c2208/repos?time_range=one_year&include_private=True&group=private&loc_metric=changed&theme=dark" alt="truong9c2208" />
                </div>
            </div>
        </div>
    )
}