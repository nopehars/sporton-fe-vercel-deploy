'use client';

import Image from 'next/image';
import Button from '../ui/button';
import { FiRefreshCw } from 'react-icons/fi';

const OrderRejected = () => {
  return (
    <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto">
      <h2 className="text-2xl font-semibold mb-2">Order Rejected!!</h2>
      <p className="text-center mb-8">
        Sorry, your payment could not be processed. Please double-check your payment details and try again. If the issue persists, feel free to contact our customer support for assistance.
      </p>
    </div>
  );
};

export default OrderRejected;
