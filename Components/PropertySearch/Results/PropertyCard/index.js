import { faBath, faBathtub, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import numeral from "numeral"

export const PropertyCard = ({ title, destination, bedrooms, bathroom, hasParking, petFriendly, price, image }) => {

    return (
        <Link href={destination} >
            <a className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
                <div className="d-flex w-full">
                    <Image src={image} height="200px" width="300px" objectFit="cover" alt="" />
                </div>
                <div className="mt-3 text-lg font-bold">
                    {title}
                </div>
                <div className="text-lg">
                    ${numeral(price).format("0,0")}
                </div>
                <div className="flex justify-between text-sm mt-3">
                    <div>
                        <FontAwesomeIcon icon={faBathtub} />
                        <span className="pl-2">{bathroom && bathroom || 0} bathroom</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBed} />
                        <span className="pl-2">{bedrooms && bedrooms || 0} bedrooms</span>
                    </div>
                </div>
                {(!!hasParking || !!petFriendly) &&
                    <div className="flex justify-between text-sm mt-3">
                        {hasParking &&
                            <div>
                                <FontAwesomeIcon icon={faCar} />
                                <span className="pl-2">Has Parking</span>

                            </div>
                        }
                        {petFriendly &&
                            <div>
                                <FontAwesomeIcon icon={faDog} />
                                <span className="pl-2">Pet Friendly</span>
                            </div>
                        }
                    </div>
                }
            </a>
        </Link>
    )
}