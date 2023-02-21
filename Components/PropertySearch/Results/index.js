import { PropertyCard } from "./PropertyCard"

export const Results = ({ properties }) => {

    
    return (
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
            
            {properties.map(property => {
                return (
                    <PropertyCard 
                        key={property.databaseId} 
                        title={property.title} 
                        destination={property.uri} 
                        bedrooms={property.propertyFeatures.bedrooms} 
                        bathroom={property.propertyFeatures.bathroom} 
                        hasParking={property.propertyFeatures.hasParking} 
                        petFriendly={property.propertyFeatures.petFriendly} 
                        price={property.propertyFeatures.price}
                        image={property.featuredImage?.node?.sourceUrl}
                        />
                )
            })}
        </div>

    )
}