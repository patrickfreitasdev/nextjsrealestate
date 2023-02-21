import { ButtonLink } from 'Components/ButtonLink';
import Link from 'next/link';
import { FaHeart, FaHouseUser } from 'react-icons/fa'

export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {

   

    return <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
        <div className="py-4 pl-5 flex text-pink-600">
            <FaHouseUser size={30} />
            <FaHeart size={30} />
        </div>
        <div className='flex flex-1 justify-end'>
            {(items || []).map(item => (
                <div key={item.id} className="hover:bg-slate-700 cursor-pointer relative group">
                    <div>
                        <Link href={item.destination}>
                            <a className='p-5 block'>{item.label}</a>
                        </Link>
                    </div>
                    {!!item.submenu &&
                        <div className='group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3'>
                            {item.submenu.map(item => (
                                <Link key={item.id} href={item.destination}>
                                    <a className='block whitespace-nowrap p-5 hover:bg-slate-700'>{item.label}</a>
                                </Link>
                            ))}
                        </div>
                    }
                </div>
            ))}
            <div className='ml-3 my-auto'>
                <ButtonLink url={callToActionDestination} label={callToActionLabel} />
            </div>
        </div>
    </div>
}