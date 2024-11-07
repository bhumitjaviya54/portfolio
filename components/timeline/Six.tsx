import { motion } from "framer-motion"
import { FaNodeJs } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";

const Six = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full">
            <h3 className="flex gap-1 text-xl font-medium font-titleFont">
                <span className="py-1 tracking-wide text-textGreen"><FaNodeJs /></span>
                MongoDB
            </h3>
            <p className="mt-1 text-sm font-medium text-textDark">
                In Feb 2024
            </p>
            <ul>
                <li className="flex gap-2 text-base text-textDark">
                    <span className="mt-1 text-textGreen">
                        <TiArrowForward />
                    </span>
                    MongoDB is a NoSQL, document-oriented database that stores data <br /> in flexible, JSON-like documents. It`s designed for scalability, high <br /> performance, and handling large volumes of unstructured data, <br /> making it popular for modern applications that require quick, <br /> iterative development and dynamic schema adjustments.
                </li>
            </ul>
        </motion.div>
    )
}

export default Six