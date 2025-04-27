"use client";

import { MoneyInputProps } from "@/utils/type";
import React from "react";

const MoneyInput: React.FC<MoneyInputProps> = ({
  onInsert,
  onReset,
  total,
}) => {
  const moneyOptions = [2000, 5000, 10000, 20000, 50000];

  return (
    <div className="mt-8 mx-auto w-full lg:w-1/2 px-5">
      <h2 className="text-lg font-semibold mb-4 text-center text-black">
        Masukkan Uang
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 mb-3 md:grid-cols-3">
        {moneyOptions.map((money) => (
          <button
            key={money}
            onClick={() => onInsert(money)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700  min-w-[90px] w-full "
          >
            Rp{money.toLocaleString()}
          </button>
        ))}
      </div>
      <p className="mb-4 font-bold text-center text-black">
        Total: Rp{total.toLocaleString()}
      </p>
      <div className="text-center">
        <button
          onClick={onReset}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mx-auto w-full lg:w-1/2"
        >
          Kembalikan Uang
        </button>
      </div>
    </div>
  );
};

export default MoneyInput;
