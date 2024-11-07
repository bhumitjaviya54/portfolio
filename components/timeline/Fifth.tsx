import { motion } from "framer-motion"
import { FaNodeJs } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";

const Fifth = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full">
            <h3 className="flex gap-1 text-xl font-medium font-titleFont">
                <span className="py-1 tracking-wide text-textGreen"><FaNodeJs/></span>
                NodeJS
            </h3>
            <p className="mt-1 text-sm font-medium text-textDark">
                In Oct 2023
            </p>
            <ul>
                <li className="flex gap-2 text-base text-textDark">
                    <span className="mt-1 text-textGreen">
                        <TiArrowForward />
                    </span>
                    Node.js is a runtime environment that allows you to run JavaScript on the <br /> server side. Built on Chrome`s V8 engine, it`s known for handling many <br /> concurrent connections with high efficiency and is widely used for <br /> building scalable, fast, and network-heavy applications, like APIs <br /> and real-time services. It operates asynchronously, using an event- <br /> driven, non-blocking I/O model.
                </li>
            </ul>
        </motion.div>
    )
}

export default Fifth