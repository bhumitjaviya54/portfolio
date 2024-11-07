import SectionTitle from "./SectionTitle"
import { AiOutlineJavaScript } from "react-icons/ai"
import { TbBrandNextjs, TbBrandTypescript, TbBrandFigma } from "react-icons/tb"
import { BiLogoReact, BiLogoNodejs, BiLogoTailwindCss } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { profileImg } from "@/public/assets/inedx";
import Image from "next/image";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col gap-8 py-10 mx-auto max-w-containerSmall lgl:py-32">
            <SectionTitle title="About Me" titleNo="01"/>
            <div className="flex flex-col gap-16 lgl:flex-row">
                <div className="flex flex-col w-full gap-4 text-base font-medium lgl:w-2/3 text-textDark">
                    <p>
                        Hello! My name is Bhumit Javiya. My interest in web development
                        started back in 2022. I am full-stack web developer.Currently,
                        I am pursuing computer engineering. I`ve started my work as
                        a fresher. I am learning MERN Stack for web-development.
                    </p>
                    <p>Here are a few Tools & Technologies I have been working with recenty:</p>
                    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiOutlineJavaScript />
                            </span>
                            JavaScript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <TbBrandNextjs />
                            </span>
                            Next.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <BiLogoReact />
                            </span>
                            React
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <BiLogoNodejs />
                            </span>
                            Node.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <TbBrandTypescript />
                            </span>
                            TypeScript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <SiMongodb />
                            </span>
                            MongoDB
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <BiLogoTailwindCss />
                            </span>
                            Tailwindcss
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <TbBrandFigma />
                            </span>
                            Figma
                        </li>
                    </ul>
                </div>
                <div className="relative w-full lgl:w-1/3 h-80 group">
                    <div className="absolute rounded-full w-[350px] -left-4 -top-6">
                        <div className="relative z-20 flex w-full h-full pl-6 lgl:pl-0">
                            <Image
                                className="object-cover h-full rounded-full"
                                src={profileImg}
                                alt="profileImg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
