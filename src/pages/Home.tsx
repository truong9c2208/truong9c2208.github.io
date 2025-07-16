import Style from './Home.module.css';
import { Element } from 'react-scroll';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Heading, Text, Tooltip, IconButton, Grid, Card, AspectRatio, Badge, Button } from '@radix-ui/themes';

import tsIcon from "./../assets/icons/ts.svg";
import jsIcon from "./../assets/icons/js.svg";
import nodeJSIcon from "./../assets/icons/node-js.svg";
import reactIcon from "./../assets/icons/react.svg";
import goIcon from "./../assets/icons/go.svg";
import cppIcon from "./../assets/icons/cpp.svg";
import javaIcon from "./../assets/icons/java.svg";
import pyIcon from "./../assets/icons/python.svg";
import rustIcon from "./../assets/icons/rust.svg";
import luaIcon from "./../assets/icons/lua.svg";
import sqlIcon from "./../assets/icons/sql.svg";
import mongoIcon from "./../assets/icons/mongo.svg";

import banner from "./../assets/banner.png";
import avartar from "./../assets/avatar.png";
import maii from "./../assets/background.jpg";
import xaviaTeam from "./../assets/projects/xaviaTeam.png";
import xaviaBot from "./../assets/projects/xaviaBot.png";
import babyWolf from "./../assets/projects/babyWolf.png";
import zcaJS from "./../assets/projects/zcajs.jpg";
import luquyCity from "./../assets/projects/luquyCity.png";

import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoFill, PiRabbitLight } from "react-icons/pi";
import { IoIosMail, IoLogoTwitter } from "react-icons/io";
import { BaseButtonProps } from '@radix-ui/themes/components/_internal/base-button';

const thirdPlaceSvg = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="third-place"><path d="M32,9c-8.27,0-15,6.73-15,15c0,8.27,6.73,15,15,15s15-6.73,15-15C47,15.73,40.27,9,32,9z M37.25,27.25
		c0,2.895-2.355,5.25-5.25,5.25c-2.123,0-4.025-1.267-4.846-3.228c-0.426-1.019,0.054-2.19,1.073-2.617
		c1.017-0.429,2.19,0.054,2.617,1.073C31.04,28.197,31.494,28.5,32,28.5c0.689,0,1.25-0.561,1.25-1.25S32.689,26,32,26
		c-1.104,0-2-0.896-2-2s0.896-2,2-2c0.689,0,1.25-0.561,1.25-1.25S32.689,19.5,32,19.5c-0.506,0-0.959,0.302-1.154,0.77
		c-0.426,1.019-1.596,1.5-2.617,1.075c-1.019-0.426-1.5-1.597-1.075-2.617C27.974,16.767,29.875,15.5,32,15.5
		c2.895,0,5.25,2.355,5.25,5.25c0,1.226-0.423,2.355-1.13,3.25C36.827,24.895,37.25,26.024,37.25,27.25z"></path><path d="M57.59,52.55l-7.01-15.02C53.36,33.73,55,29.05,55,24C55,11.32,44.68,1,32,1S9,11.32,9,24c0,5.05,1.64,9.73,4.42,13.53
		L6.41,52.55C6.1,53.22,6.18,54,6.63,54.59c0.44,0.59,1.17,0.89,1.9,0.78l9.37-1.43l4.93,8.1c0.36,0.6,1.01,0.96,1.71,0.96h0.11
		c0.74-0.04,1.39-0.49,1.7-1.15L32,49.73l5.65,12.12c0.31,0.66,0.96,1.11,1.7,1.15h0.11c0.7,0,1.35-0.36,1.71-0.96l4.93-8.1
		l9.37,1.43c0.73,0.11,1.46-0.19,1.91-0.78C57.82,54,57.9,53.22,57.59,52.55z M32,43c-10.48,0-19-8.52-19-19S21.52,5,32,5
		s19,8.52,19,19S42.48,43,32,43z"></path></svg>

const ListContact = [
    {
        name: "Github",
        icon: <PiGithubLogoFill />,
        url: "https://github.com/truong9c2208"
    },
    {
        name: "Email",
        icon: <IoIosMail />,
        url: "mailto:shibamini@proton.me"
    },
    {
        name: "Discord",
        icon: <FaDiscord />,
        url: "https://discordapp.com/users/847101281277444166"
    },
    {
        name: "Twitter",
        icon: <IoLogoTwitter />,
        url: "https://x.com/shibamini07"
    },
    {
        name: "Telegram",
        icon: <FaTelegramPlane />,
        url: "https://t.me/Shibaa05"
    }
]

const Info = [
    {
        name: "Specialization",
        text: "Software Developer",
    },
    {
        name: "Experience Level",
        text: "Intermediate",
    },
    {
        name: "Education",
        text: "PTIT" // Posts and Telecommunications Institute of Technology
    },
    {
        name: "Location",
        text: "Vietnam",
    }
]

const skills: {
    name: string,
    icon: string,
    description: string,
    color: BaseButtonProps["color"],
    textColor: string
}[] = [
        {
            name: "TypeScript",
            icon: tsIcon,
            description: "luv this :3",
            color: "blue",
            textColor: "#007acc"
        },
        {
            name: "JavaScript",
            icon: jsIcon,
            description: "ughh... i have to use this",
            color: "yellow",
            textColor: "#f7df1e"
        },
        {
            name: "Node.js",
            icon: nodeJSIcon,
            description: "backend dev ~~",
            color: "green",
            textColor: "#3c873a"
        },
        {
            name: "Java",
            icon: javaIcon,
            description: "shh... i dont want to use this",
            color: "red",
            textColor: "#777bb4"
        },
        {
            name: "Python",
            icon: pyIcon,
            description: "fk this shit",
            color: "yellow",
            textColor: "#a179dc"
        },
        {
            name: "C++",
            icon: cppIcon,
            description: "algorithm candidate cuz her..",
            color: "blue",
            textColor: "#649ad2"
        },
        {
            name: "Go",
            icon: goIcon,
            description: "a little bit",
            color: "cyan",
            textColor: "#00add8"
        },
        {
            name: "Rust",
            icon: rustIcon,
            description: "beginner aghhhh",
            color: "gold",
            textColor: "#696161ff"
        },
        {
            name: "Lua",
            icon: luaIcon,
            description: "idk why i'm using this",
            color: "sky",
            textColor: "#2c2d72"
        },
        {
            name: "React (Native)",
            icon: reactIcon,
            description: "trying to better at this shit!!!!",
            color: "indigo",
            textColor: "#61dafb"
        },
        {
            name: "SQL",
            icon: sqlIcon,
            description: "must use this shit for some things",
            color: "yellow",
            textColor: "#e34f26"
        },
        {
            name: "MongoDB",
            icon: mongoIcon,
            description: "prefer this shit",
            color: "green",
            textColor: "#4db33d"
        }
    ]

const Projects = [
    {
        image: xaviaTeam,
        name: "Xavia Team",
        description: "My team",
        type: "Team",
        tech: [
            "TypeScript",
            "Node.js"
        ],
        buttons: [
            {
                name: "Github",
                url: "https://github.com/XaviaTeam"
            }
        ]
    },
    {
        image: xaviaBot,
        name: "Xavia Bot",
        description: "Simple chat bot for facebook",
        type: "Bot chat",
        tech: [
            "TypeScript",
            "Node.js"
        ],
        buttons: [
            {
                name: "Github",
                url: "https://github.com/XaviaTeam/XaviaBot"
            }
        ]
    },
    {
        image: babyWolf,
        name: "Baby Wolf",
        description: "I made this cuz her...",
        type: "Bot chat",
        tech: [
            "TypeScript",
            "Node.js"
        ],
        buttons: [
            {
                name: "Github",
                url: "https://github.com/XaviaTeam/BabyWolf-ChatBot"
            }
        ]
    },
    {
        image: zcaJS,
        name: "ZCA JS",
        description: "A simple JavaScript library for interacting with zalo,",
        type: "API",
        tech: [
            "TypeScript",
            "Node.js"
        ],
        buttons: [
            {
                name: "Github",
                url: "https://github.com/RFS-ADRENO/zca-js"
            }
        ]
    },
    {
        image: luquyCity,
        name: "LuQuy City",
        description: "A personal project that I am currently working on",
        type: "Game Server",
        tech: [
            "Lua",
            "Node.js",
            "TypeScript",
            "React (Native)"
        ],
        buttons: [
            {
                name: "Website",
                url: "https://luquyrp.site/home"
            }
        ]
    }
]

export default function HomePage() {
    return (
        <div className={Style.HomePage}>
            <Element name="home" className={Style.Main}>
                <ParallaxBanner
                    layers={[{ image: banner, speed: -20, className: Style.BannerInner }]}
                    className={Style.Banner}
                />
                <div className={Style.Info}>
                    <Heading className={Style.Heading} size="9">
                        Shibaa
                    </Heading>
                    <Text className={Style.Description} size="3" color="gray">
                        im Shibaa (aka TruongMini) - just a dev who does everything i luv... and i love her too <PiRabbitLight />
                    </Text>
                    <div className={Style.ListContact}>
                        {ListContact.map((item, index) => (
                            <Tooltip key={index} content={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <IconButton variant="outline" size="4" color="amber">
                                        {item.icon}
                                    </IconButton>
                                </a>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </Element>
            <Element name="about" className={Style.Section}>
                <Heading className={Style.SectionHeading} size="6">
                    About Me
                </Heading>
                <Text className={Style.SectionDescription} size="3" color="gray">
                    some thing about me u should know
                </Text>
                <div className={Style.AboutContainer}>
                    <div className={Style.AboutLeftSide}>
                        <div className={Style.AboutLeftInfo}>
                            <img src={avartar} alt="Avatar" />
                            <Text className={Style.Name} size="7">
                                Shibaa
                            </Text>
                            <Text className={Style.Bio} size="3" color="brown">
                                Software Developer
                            </Text>

                            <div className={Style.Achievements}>
                                <div className={Style.AchievementItem}>
                                    <div className={Style.AchievementContent}>
                                        <div className={Style.AchievementIcon}>
                                            {thirdPlaceSvg}
                                        </div>
                                        <Text size="4" color="gray" style={{ textAlign: 'center' }}>
                                            Excellent student at the provincial level <b>2022</b>
                                        </Text>
                                    </div>
                                </div>
                                <div className={Style.AchievementItem}>
                                    <div className={Style.AchievementContent}>
                                        <div className={Style.AchievementIcon}>
                                            {thirdPlaceSvg}
                                        </div>
                                        <Text size="4" color="gray" style={{ textAlign: 'center' }}>
                                            Provincial level science and technology <b>2022</b>
                                        </Text>
                                    </div>
                                </div>
                                <div className={Style.AchievementItem}>
                                    <div className={Style.AchievementContent}>
                                        <div className={Style.AchievementIcon}>
                                            {thirdPlaceSvg}
                                        </div>
                                        <Text size="4" color="gray" style={{ textAlign: 'center' }}>
                                            Excellent student at the provincial level <b>2023</b>
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Style.AboutRightSide}>
                        <Text className={Style.AboutText} size="3" color="gray">
                            hi i'm Shibaa, a university student majoring in
                            information technology at Posts and Telecommunications
                            Institute of Technology. i have been self-taught in
                            programming since high school and have contributed quite
                            a few projects to the community.
                        </Text>
                        <div className={Style.BackgroundImage}>
                            <img src={maii} alt="Background" />
                        </div>
                        <Grid
                            className={Style.InfoGrid}
                            columns={{
                                initial: "1",
                                md: "2",
                                sm: "2",
                                xs: "1"
                            }}
                            gap={{
                                initial: "1",
                                md: "4",
                                sm: "2",
                                xs: "1"
                            }}
                        >
                            {Info.map((item, index) => (
                                <div key={index} className={Style.InfoItem}>
                                    <Text size="2" color="gray">
                                        {item.name}
                                    </Text>
                                    <Text size="4" weight={"bold"}>
                                        {item.text}
                                    </Text>
                                </div>
                            ))}
                        </Grid>
                    </div>
                </div>
            </Element>
            <Element name="skills" className={Style.Section}>
                <Heading className={Style.SectionHeading} size="6">
                    Skills
                </Heading>
                <Text className={Style.SectionDescription} size="3" color="gray">
                    i can do a little bit of everything... but i can do it well
                </Text>
                <Grid
                    columns={{
                        initial: "1",
                        md: "3",
                        sm: "2",
                        xs: "1"
                    }}
                    gap={{
                        initial: "1",
                        md: "3",
                        sm: "2",
                        xs: "1"
                    }}
                    style={{ width: '90%', margin: '2rem 0' }}
                >
                    {skills.map((skill, index) => (
                        <Card variant="surface" key={index} className={Style.TechCard} style={{ backgroundColor: '#080808' }}>
                            <IconButton size="4" color={skill.color} variant="soft">
                                <img src={skill.icon} alt={skill.name} className={Style.TechLogo} />
                            </IconButton>
                            <div>
                                <Heading style={{ "--text-color": skill.textColor } as React.CSSProperties} className={"PrettyTitle"} size="4">
                                    {skill.name}
                                </Heading>
                                <Text style={{ marginTop: '0.2rem' }} as="div" color="gray" size="1">
                                    {skill.description}
                                </Text>
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Element>
            <Element name="projects" className={Style.Section}>
                <Heading className={Style.SectionHeading} size="6">
                    Projects
                </Heading>
                <Text className={Style.SectionDescription} size="3" color="gray">
                    i made some things.. heh
                </Text>
                <Grid
                    columns={{
                        initial: "1",
                        md: "3",
                        sm: "2",
                        xs: "1"
                    }}
                    gap={{
                        initial: "1",
                        md: "3",
                        sm: "2",
                        xs: "1"
                    }}
                    gapX="3"
                    gapY="3"
                    style={{ width: '90%', margin: '2rem 0' }}
                >
                    {Projects.map((project, index) => (
                        <Card variant="surface" key={index} className={Style.Projects}>
                            <AspectRatio ratio={16 / 9}>
                                <img src={project.image} alt={project.name} className={Style.ProjectImage} />
                                <div className={Style.ProjectTech}>
                                    {project.tech.map((tech, index) => (
                                        <Badge variant="outline" key={index} size="1" className={Style.ProjectTechItem}>
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </AspectRatio>

                            <div className={Style.ProjectInfo}>
                                <Heading size="3" className={"PrettyTitle"}>
                                    {project.name} <Badge size="1">{project.type}</Badge>
                                </Heading>
                                <Text size="1" color="gray" className={Style.ProjectDescription}>
                                    {project.description}
                                </Text>
                            </div>
                            <div className={Style.Action}>
                                {project.buttons.map((button, index) => (
                                    <a href={button.url} target="_blank" rel="noreferrer">
                                        <Button size="1" key={index} variant="surface" className={Style.ProjectButton}>
                                            {button.name}
                                        </Button>
                                    </a>
                                ))}
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Element>
        </div>
    )
}