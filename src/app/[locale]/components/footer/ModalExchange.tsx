'use client'
import { useState, useContext } from "react"
import { useCurrencyContext } from '@/context/CurrencyContext'
import { useExchangeRate} from '@/context/ExchangeRateContext'
import monedas from '../header/monedas.json'

function ModalExchange() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [amount, setAmount] = useState<string>('')
    const [fromCurrency, setFromCurrency] = useState('ARS')
    const [toCurrency, setToCurrency] = useState('USD')
    const [result, setResult] = useState<{
        amount: number;
        fromCurrency: string;
        toCurrency: string;
        rate: number;
        convertedAmount: number;
    } | null>(null);
    
    const { exchangeRate } = useCurrencyContext()

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setAmount('')
        setResult(null)
    }

    const getExchangeRate = (fromCurrency: string, toCurrency: string) => {
        if (fromCurrency === 'BRL') {
            return exchangeRate[toCurrency]
        }
        if (toCurrency === 'BRL') {
            return 1 / exchangeRate[fromCurrency]
        }
        return exchangeRate[toCurrency] / exchangeRate[fromCurrency]
    }

    const calculateExchange = () => {
        // Convertimos explicitamente el monto a número
        const amountNumber = parseFloat(amount);
        
        // Verificamos que el monto sea un número válido
        if (isNaN(amountNumber)) return;

        const rate = getExchangeRate(fromCurrency, toCurrency);
        const convertedAmount = amountNumber * rate;
        
        setResult({
            amount: amountNumber,
            fromCurrency,
            toCurrency,
            rate,
            convertedAmount
        });
    }
    

    return (
        <>
            <button 
                className="rounded-full p-2 bg-[#1f3838] border-[1px] hover:bg-gray-200"
                onClick={handleOpenModal}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z">
                    </path>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                    </path>
                </svg>
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-[#1f3838] rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-200">Conversor de Monedas</h2>
                            <button 
                                className="text-gray-400 hover:text-gray-200"
                                onClick={handleCloseModal}>
                                ✕
                            </button>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-300">Monto</label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Ingrese el monto"
                                    min="0"
                                    step="0.01"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-300">De</label>
                                <select
                                    value={fromCurrency}
                                    onChange={(e) => setFromCurrency(e.target.value)}
                                    className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    {Object.entries(monedas).map(([pais, moneda]) => {
                                    const currencyName = Object.keys(moneda)[0]; // Obtiene el nombre de la moneda
                                    return (
                                        <option key={pais} value={pais}>
                                            {currencyName} ({pais})
                                        </option>
                                    );
                                })}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-300">A</label>
                                <select
                                    value={toCurrency}
                                    onChange={(e) => setToCurrency(e.target.value)}
                                    className="w-full bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    {Object.entries(monedas).map(([pais, moneda]) => {
                                    const currencyName = Object.keys(moneda)[0]; // Obtiene el nombre de la moneda
                                    return (
                                        <option key={pais} value={pais}>
                                            {currencyName} ({pais})
                                        </option>
                                    );
                                })}
                                </select>
                            </div>

                            <button
                                onClick={calculateExchange}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                                Convertir
                            </button>
                        </div>

                        {result && (
                            <div className="mt-4 p-4 bg-gray-700 rounded-md">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-300">
                                        {result.amount} {result.fromCurrency} = 
                                    </span>
                                    <span className="text-blue-400 font-semibold">
                                        {result.convertedAmount.toFixed(2)} {result.toCurrency}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-400">
                                    Tasa de cambio: 1 {result.fromCurrency} = {result.rate.toFixed(4)} {result.toCurrency}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalExchange