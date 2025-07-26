import Image from 'next/image'
import shadow from '@/assets/shadow.png'

interface IRedShadow {
    className?: string
}

export default function RedShadow({ className = "-top-0 -right-0" }: IRedShadow) {
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
