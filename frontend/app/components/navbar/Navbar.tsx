
import Link from 'next/link';
import UserNav from './UserNav';
import Image from 'next/image';


const Navbar = () => {

    return (
        <nav className="font-mono text-black w-full fixed top-0 left-0 border-b p-4 bg-navcover z-10">
                <div className="flex justify-between items-center">
                        <Link href="/" className='flex flex-row items-center px-2 space-x-2'>
                            <Image
                                src="/lock.jpeg"
                                width={50}
                                height={50}
                                alt="sqlite"
                                className='rounded-2xl'
                            />
                        </Link>
                    <div className='flex items-center space-x-6'>
                        <UserNav />
                    </div>
                </div>
        </nav>
    )
}

export default Navbar;