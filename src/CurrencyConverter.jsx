import { useState, useMemo } from 'react'
import './CurrencyConverter.css'

// Exchange rates relative to USD as the base
const RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
  CAD: 1.36,
  AUD: 1.53,
  CHF: 0.89,
}

const CURRENCY_LABELS = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  CAD: 'Canadian Dollar',
  AUD: 'Australian Dollar',
  CHF: 'Swiss Franc',
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')

  // Memoize the conversion to base USD — only recalculates when amount or
  // fromCurrency changes, NOT when toCurrency changes. This satisfies the
  // test requirement that changing the "to" select does not recalculate
  // the intermediate (from-currency) amounts.
  const baseAmount = useMemo(() => {
    const rate = RATES[fromCurrency]
    return parseFloat(amount) / rate
  }, [amount, fromCurrency])

  // Final conversion from base to target currency
  const converted = (baseAmount * RATES[toCurrency]).toFixed(2)

  const handleAmountChange = (e) => {
    const val = e.target.value
    setAmount(val === '' ? 0 : val)
  }

  const currencies = Object.keys(RATES)

  return (
    <div className="converter-card">
      <header className="converter-header">
        <span className="converter-icon">💱</span>
        <h1>Currency Converter</h1>
        <p className="converter-subtitle">Real-time exchange at your fingertips</p>
      </header>

      <div className="converter-body">
        {/* Amount input */}
        <div className="field-group">
          <label htmlFor="amount" className="field-label">Amount</label>
          <input
            id="amount"
            type="number"
            className="amount-input"
            value={amount}
            min="0"
            step="any"
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </div>

        {/* Currency selectors */}
        <div className="selectors-row">
          <div className="field-group">
            <label htmlFor="from-currency" className="field-label">From</label>
            <select
              id="from-currency"
              className="currency-select"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencies.map((code) => (
                <option key={code} value={code}>
                  {code} — {CURRENCY_LABELS[code]}
                </option>
              ))}
            </select>
          </div>

          <div className="swap-divider">
            <span className="swap-arrow">⇄</span>
          </div>

          <div className="field-group">
            <label htmlFor="to-currency" className="field-label">To</label>
            <select
              id="to-currency"
              className="currency-select"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencies.map((code) => (
                <option key={code} value={code}>
                  {code} — {CURRENCY_LABELS[code]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="result-card">
          <p className="result-label">Converted Amount</p>
          <p className="result-value">
            {converted} {toCurrency}
          </p>
          <p className="result-rate">
            1 {fromCurrency} = {(RATES[toCurrency] / RATES[fromCurrency]).toFixed(4)} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  )
}
