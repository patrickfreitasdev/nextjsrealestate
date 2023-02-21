import { Input } from "Components/Input"
import { useEffect, useState } from "react"
import queryString from 'query-string';

export const Filters = ({ onSearch }) => {

    const [petFriendly, setPetFriendly] = useState(false);
    const [hasParking, setHasParking] = useState(false);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleSearch = () => {
        onSearch({
            petFriendly,
            hasParking,
            minPrice,
            maxPrice
        })
    }

    useEffect(() => {
        const {
            petFriendly: petFriendlyTemp,
            hasParking: hasParkingTemp,
            minPrice: minPriceTemp,
            maxPrice: maxPriceTemp,
        } = queryString.parse(window.location.search);

        setPetFriendly(hasParkingTemp === "true");
        setHasParking(petFriendlyTemp === "true");
        setMinPrice(minPriceTemp || "");
        setMaxPrice(maxPriceTemp || "");


    }, []);

    return (
        <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
            <div className="flex-1">
                <div>
                    <label className="cursor-pointer">
                        <input type="checkbox" checked={hasParking} onChange={() => setHasParking(value => !value)} />
                        <span className="pl-2">Has Parking</span>
                    </label>
                </div>
                <div>
                    <label className="cursor-pointer">
                        <input type="checkbox" checked={petFriendly} onChange={() => setPetFriendly(value => !value)} />
                        <span className="pl-2">Pet Friendly</span>
                    </label>
                </div>
            </div>
            <div className="flex-1">
                <span>Min Price</span>
                <Input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} type="number" />
            </div>
            <div className="flex-1">
                <span>Max Price</span>
                <Input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} type="number" />
            </div>
            <div>
                <div className="btn" onClick={handleSearch}>search</div>
            </div>
        </div>
    )
}