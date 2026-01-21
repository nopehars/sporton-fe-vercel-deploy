'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiBox, FiCreditCard, FiLayers, FiLogOut, FiShoppingCart } from 'react-icons/fi';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Products',
      icon: FiBox,
      link: '/admin/products',
    },
    {
      name: 'Categories',
      icon: FiLayers,
      link: '/admin/categories',
    },
    {
      name: 'Transactions',
      icon: FiShoppingCart,
      link: '/admin/transactions',
    },
    {
      name: 'Bank Information',
      icon: FiCreditCard,
      link: '/admin/bank-information',
    },
  ];

  return (
    <aside className="fixed left-0 top-0 w-80 min-h-screen bg-white border-r border-gray-100 flex flex-col">
      <div className="py-8 px-14 border-b border-gray-100">
        <Image
          src="/images/logo-admin.webp"
          alt="logo admin"
          width={215}
          height={36}
        />
      </div>

      <div className="flex flex-col gap-2 mt-12 px-6">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.link || pathname.startsWith(item.link + '/');

          return (
            <Link
              href={item.link}
              key={index}
              className={`
                flex items-center gap-3 py-2 px-4.5 rounded-lg transition-colors duration-300
                ${isActive ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'}
              `}
            >
              <item.icon
                size={24}
                className={isActive ? 'text-primary' : ''}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
      <Link
        href="#"
        className="flex gap-3 font-medium mt-auto py-3 px-4.5 mx-5 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-300 rounded-lg mb-8"
      >
        <FiLogOut size={24} />
        Log Out
      </Link>
    </aside>
  );
};

export default Sidebar;
