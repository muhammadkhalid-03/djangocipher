'use client';
import Link from 'next/link';

interface MenuLinkProps {
    label?: string;
    href: string;
    onClick: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({
    label,
    href,
    onClick
}) => {
    return (
        <Link href={href} passHref>
            <div 
                onClick={onClick}
                className="px-5 py-4 font-mono text-white cursor-pointer hover:bg-highlight transition rounded-lg"
                >
                {label}
            </div>
        </Link>
    )
}

export default MenuLink;