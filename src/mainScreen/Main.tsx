import Style from './Main.module.css'

import AsideLeft from './asideLeft/AsideLeft'
import AsideMain from './asideMain/AsideMain';

export default function Main() {
    return (
    <div className={Style.main}>
        <AsideLeft />
        <AsideMain />
    </div>
    )
}