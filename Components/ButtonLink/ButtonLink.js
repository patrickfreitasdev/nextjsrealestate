import Link from "next/link"

export const ButtonLink = ({url, label}) => {
    return (
        <Link href={url}>
            <a className='btn'>
                {label}
            </a>
        </Link>)

}