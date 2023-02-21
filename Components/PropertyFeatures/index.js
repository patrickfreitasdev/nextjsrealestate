import { usePageContext } from "Context/Page"
import numeral from "numeral";
import { FaBath, FaBed, FaCar, FaDog } from "react-icons/fa";

export const PropertyFeature = () => {

    const { propertyFeatures } = usePageContext();

    const { bathrooms, bedrooms, hasParking, petFriendly, price } = propertyFeatures;

    return (
        <div className="max-w-5xl mx-auto bg-white/[.8] text-black">
            <div className="grid grid-cols-2 p-4">
                <div className="flex-1">
                    <p className="flex items-center m-4"><FaBath /> <span className="pl-1 pr-1">{bathrooms}</span> bathrooms</p>
                </div>
                <div className="flex-1">
                    <p className="flex items-center m-4"><FaBed /> <span className="pl-1 pr-1">{bedrooms}</span> bedrooms</p>
                </div>
                {hasParking && (
                    <div className="flex-1">
                        <p className="flex items-center m-4"><FaCar className="mr-1"/> Has Parking</p>
                    </div>
                )}
                {petFriendly && (
                    <div className="flex-1">
                        <p className="flex items-center m-4"><FaDog className="mr-1"/> Pet Friendly</p>
                    </div>
                )}
            </div>
            <h3 className="text-center pb-10 font-bold text-5xl">
                    ${numeral(price).format("0,0")}
            </h3>
        </div>
    )
}