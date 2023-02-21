import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaCheck } from "react-icons/fa"

export const TickItem = ({ children }) => {

    return (
        <div className="grid grid-cols-[50px_1fr] gap-3">
            <div className="text-3xl text-green-500 flex justify-center items-center">
                <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <div>
                {children}
            </div>
        </div>
    )

}