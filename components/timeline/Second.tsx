import { motion } from "framer-motion"
import { TbVectorBezier } from "react-icons/tb";
import { TiArrowForward } from "react-icons/ti";

const Second = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full">
            <h3 className="flex gap-1 text-xl font-medium font-titleFont">
                <span className="py-1 tracking-wide text-textGreen"><TbVectorBezier /></span>
                Designed some web pages
            </h3>
            <p className="mt-1 text-sm font-medium text-textDark">
                In July 2022
            </p>
            <ul>
                <li className="flex gap-2 text-base text-textDark">
                    <span className="mt-1 text-textGreen">
                        <TiArrowForward />
                    </span>
                    Designed web pages involve creating visually appealing <br /> layouts and interfaces using HTML and CSS, focusing on <br /> user experience and aesthetics.
                </li>
            </ul>
        </motion.div>
    )
}

export default Second
