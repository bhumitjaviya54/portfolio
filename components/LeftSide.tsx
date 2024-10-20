import { TbBrandGithub } from "react-icons/tb";
import {
    SlSocialLinkedin,
    SlSocialInstagram
} from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

const LeftSide = () => {
    return (
        <div className="flex flex-col items-center justify-end w-full h-full gap-4 text-textLight">
            <div className="flex flex-col gap-4">
                <a href="https://github.com/bhumitjaviya54" target="_blank">
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
                        <TbBrandGithub />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/javiya-bhumit-768245240/" target="_blank">
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
                        <SlSocialLinkedin />
                    </span>
                </a>
                <a href="https://x.com/bhumit_javiya" target="_blank">
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
                        <BsTwitterX />
                    </span>
                </a>
                <a href="https://www.instagram.com/bhumit__javiya/" target="_blank">
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
                        <SlSocialInstagram />
                    </span>
                </a>
            </div>
            <div className="w-[2px] h-32 bg-textDark"></div>
        </div>
    )
}

export default LeftSide
