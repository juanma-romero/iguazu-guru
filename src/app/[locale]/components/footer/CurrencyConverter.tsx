'use client'

import { useState } from 'react'
import { useCurrency } from '../../../../context/CurrencyContext'
import { useTranslations } from 'next-intl'

interface FooterProps {
    isSticky?: boolean;
}

interface Currency {
    name: string
    code: string
    countryCode: string
}

export default function CurrencyConverter({ isSticky = true }: FooterProps) {
    const { currencies, exchangeRates, currentCurrency, convertPrice, formatPrice } = useCurrency()
    const t = useTranslations('MainNewHome')
    const [isExpanded, setIsExpanded] = useState(false)
    const [amount, setAmount] = useState<string>('1')
    const [fromCurrency, setFromCurrency] = useState<string>('USD')
    const [toCurrency, setToCurrency] = useState<string>('ARS')

    const handleConvert = () => {
        const numAmount = parseFloat(amount) || 0
        if (numAmount > 0 && exchangeRates) {
            return convertPrice(numAmount, fromCurrency, toCurrency)
        }
        return 0
    }

    const convertedAmount = handleConvert()

    if (isSticky) {
        // Compact version for sticky footer
        return (
            <div className="relative">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="card bg-iguazu-light p-3 rounded-lg shadow-sm text-center hover:shadow-md hover:bg-iguazu-teal hover:text-white transition-all duration-300 text-xs w-full"
                >
                    <div className="text-2xl mb-1">💲</div>
                    <h3 className="font-semibold text-sm text-iguazu-dark hover:text-white">
                        {t('moneda-titulo')}
                    </h3>
                </button>

                {/* Expanded converter modal */}
                {isExpanded && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-50"
                            onClick={() => setIsExpanded(false)}
                        />

                        {/* Converter modal */}
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50 min-w-[280px]">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-semibold text-iguazu-dark">Convertidor de Moneda</h4>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="space-y-3">
                                {/* Amount input */}
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">
                                        Monto
                                    </label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-iguazu-teal focus:border-transparent"
                                        placeholder="1"
                                        min="0"
                                        step="0.01"
                                    />
                                </div>

                                {/* From currency */}
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">
                                        De
                                    </label>
                                    <select
                                        value={fromCurrency}
                                        onChange={(e) => setFromCurrency(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-iguazu-teal focus:border-transparent"
                                    >
                                        {currencies.map((currency: Currency) => (
                                            <option key={currency.code} value={currency.code}>
                                                {currency.name} ({currency.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* To currency */}
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">
                                        A
                                    </label>
                                    <select
                                        value={toCurrency}
                                        onChange={(e) => setToCurrency(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-iguazu-teal focus:border-transparent"
                                    >
                                        {currencies.map((currency: Currency) => (
                                            <option key={currency.code} value={currency.code}>
                                                {currency.name} ({currency.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Result */}
                                {convertedAmount > 0 && (
                                    <div className="bg-iguazu-light p-3 rounded-md">
                                        <div className="text-sm text-gray-600">
                                            {amount} {fromCurrency} =
                                        </div>
                                        <div className="text-lg font-semibold text-iguazu-teal">
                                            {formatPrice(convertedAmount, toCurrency)}
                                        </div>
                                    </div>
                                )}

                                {/* Quick conversions for common tourist scenarios */}
                                <div className="border-t pt-3">
                                    <div className="text-xs font-medium text-gray-700 mb-2">Conversiones rápidas:</div>
                                    <div className="space-y-1 text-xs">
                                        <div className="flex justify-between">
                                            <span>1 USD → ARS:</span>
                                            <span className="font-medium">{exchangeRates ? formatPrice(convertPrice(1, 'USD', 'ARS'), 'ARS') : '...'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>1 USD → BRL:</span>
                                            <span className="font-medium">{exchangeRates ? formatPrice(convertPrice(1, 'USD', 'BRL'), 'BRL') : '...'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>1 USD → PYG:</span>
                                            <span className="font-medium">{exchangeRates ? formatPrice(convertPrice(1, 'USD', 'PYG'), 'PYG') : '...'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        )
    }

    // Full version for non-sticky footer
    return (
        <div className="card bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-2">💲</div>
            <h3 className="font-bold text-lg text-iguazu-dark mb-2">{t('moneda-titulo')}</h3>
            <p className="text-iguazu-teal text-sm mb-4">{t('moneda-descripcion')}</p>

            {/* Quick converter */}
            <div className="bg-iguazu-light p-4 rounded-md">
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <div className="text-gray-600">1 USD</div>
                        <div className="font-semibold text-iguazu-teal">
                            {exchangeRates ? formatPrice(convertPrice(1, 'USD', 'ARS'), 'ARS') : '...'}
                        </div>
                        <div className="text-xs text-gray-500">en ARS</div>
                    </div>
                    <div>
                        <div className="text-gray-600">1 USD</div>
                        <div className="font-semibold text-iguazu-teal">
                            {exchangeRates ? formatPrice(convertPrice(1, 'USD', 'BRL'), 'BRL') : '...'}
                        </div>
                        <div className="text-xs text-gray-500">en BRL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
