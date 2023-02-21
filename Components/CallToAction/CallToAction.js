import { ButtonLink } from "Components/ButtonLink"

export const CallToAction = ({buttonLabel, align = "left", destination}) => {

    const alignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }

    return (<div className={alignMap[align]}>
        <ButtonLink url={destination} label={buttonLabel}/>
    </div>)

}