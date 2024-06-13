import Style from "./AsideMain.module.css"
import { ItemType } from "../../App"
import { useState, useMemo } from "react"

import Skill from "./categorys/skill/Skill"
import Achievement from "./categorys/achievement/Achievement"
import Project from "./categorys/project/Project"
import WorkExperience from "./categorys/workExperience/WorkExperience"

const items: ItemType[] = [
    { id: 1, name: 'Skill', component: <Skill /> },
    { id: 2, name: 'Achievement', component: <Achievement /> },
    { id: 3, name: 'Project', component: <Project /> },
    { id: 4, name: 'Work Experience', component: <WorkExperience /> }
]

export default function AsideMain() {
    const [id, setID] = useState(1);

    const item = useMemo(() => {
        return items.find(item => item.id === id)?.component
    }, [id])

    return (
        <div className={Style["aside-main"]}>
            <div className={Style["main-header"]}>
                {
                    items.map(item => (
                        <div key={item.id} className={Style["item"]}>
                            <button
                                key={item.id}
                                onClick={() => setID(item.id)}
                            >
                                <p style={id === item.id ? { borderColor: "var(--selected-color)" } : {}}>{item.name}</p>
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className={Style["main-body"]}>
                {item}
            </div>
        </div>
    )
}