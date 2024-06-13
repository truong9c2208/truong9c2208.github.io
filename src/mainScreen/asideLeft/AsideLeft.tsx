import Style from "./AsideLeft.module.css"

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function AsideLeft() {
    return (
        <div className={Style["aside-left"]}>
            <div className={Style["title"]}>
                <p>Giới thiệu</p>
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
    )
}