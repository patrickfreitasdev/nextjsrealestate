import Image from "next/image";

export const Gallery = ({ columns, crop, items }) => {
    let maxH = 0;
    let maxW = 0;

    if (crop) {
        items.forEach(item => {
            if (item.attributes.height > maxH) {
                maxH = item.attributes.height;
            }
            if (item.attributes.height > maxW) {
                maxW = item.attributes.height;
            }
        });
    }

    const columnW = 100 / columns;
    return (
        <div className="flex flex-wrap max-w-5xl mx-auto">
            {items.map(item => (
                <div key={item.id} style={{ width: `${columnW}%` }} className="p-2 flex-grow">
                    <Image src={item.attributes.url} height={maxH || item.attributes.height} width={maxW || item.attributes.width} alt={item.attributes.alt}
                        objectFit="cover" />
                </div>
            ))
            }
        </div >)
}