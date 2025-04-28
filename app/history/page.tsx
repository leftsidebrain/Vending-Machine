"use client";

import api from "@/lib/api";
import { Transaction } from "@/utils/type";
import Link from "next/link";
import { useEffect, useState } from "react";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.get("/transactions");
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  return (
    <main className="p-8  mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Riwayat Pembelian</h1>

      {transactions.length === 0 ? (
        <p className="text-center text-gray-600">Belum ada transaksi.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-center">NO</th>
                <th className="py-3 px-6 text-left">Nama Produk</th>
                <th className="py-3 px-6 text-left">Harga</th>
                <th className="py-3 px-6 text-left">Tanggal</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {transactions.map((trx, index) => (
                <tr
                  key={trx.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-center">{index + 1}</td>
                  <td className="py-3 px-6 text-left">{trx.productName}</td>
                  <td className="py-3 px-6 text-left">
                    Rp{trx.price.toLocaleString()}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {new Date(trx.date).toLocaleString("id-ID", {
                      dateStyle: "short",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default TransactionHistory;
