import { motion } from "framer-motion"
import { RiJavascriptFill } from "react-icons/ri";
import { TiArrowForward } from "react-icons/ti";

const Third = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full">
            <h3 className="flex gap-1 text-xl font-medium font-titleFont">
                <span className="py-1 tracking-wide text-textGreen"><RiJavascriptFill /></span>
                Learing JavaScript
            </h3>
            <p className="mt-1 text-sm font-medium text-textDark">
                In June 2023
            </p>
            <ul>
                <li className="flex gap-2 text-base text-textDark">
                    <span className="mt-1 text-textGreen">
                        <TiArrowForward />
                    </span>
                    JavaScript is a programming language used to make web pages  <br /> interactive. It powers dynamic content, like animations and <br /> interactive forms, and runs both in browsers and on servers <br /> (with Node.js). It`s essential for modern web development.
                </li>
            </ul>
        </motion.div>
    )
}

export default Third