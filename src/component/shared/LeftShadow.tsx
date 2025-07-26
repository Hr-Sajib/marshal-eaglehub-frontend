import Image from 'next/image'
import shadow from '@/assets/shadow.png'

interface IRedShadow {
    className?: string
}

export default function LeftShadow({ className = "-top-0 left-40" }: IRedShadow) {
    return (
        <div>
            <div className={`absolute  ${className}`}>
                <Image
                    src={shadow}
                    alt='shadow'
                    height={187}
                    width={439}
                />
            </div>
        </div>

    )
}
