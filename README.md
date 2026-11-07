# 💱 Currency Converter

A responsive and user-friendly Currency Converter application built with **React.js**. This application allows users to convert an amount from one currency to another using predefined exchange rates.

The project demonstrates essential React concepts, including functional components, state management, memoization with `useMemo`, event handling, and reusable UI development.

## 🌟 Features

- **Amount Input:** Enter the amount you want to convert.
- **Multiple Currencies:** Select from four supported currencies:
  - USD – United States Dollar
  - EUR – Euro
  - GBP – British Pound
  - JPY – Japanese Yen
- **Currency Selection:** Choose the source and target currencies independently.
- **Instant Conversion:** Automatically calculate the converted amount when the input or currency selection changes.
- **Formatted Results:** Display conversion results with two decimal places and the target currency code.
- **Responsive Design:** Provides a clean interface across different screen sizes.
- **React Memoization:** Uses React's `useMemo` to optimize calculations and avoid unnecessary recalculation.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript (ES6+) | Conversion logic and application functionality |
| CSS3 | Styling and responsive design |
| HTML5 | Application structure |
| Vite | Development environment and build tool |
| Git & GitHub | Version control and project hosting |

## 💱 Supported Currencies

The application supports the following currencies with predefined exchange rates:

| Currency | Code |
|---|---|
| US Dollar | USD |
| Euro | EUR |
| British Pound | GBP |
| Japanese Yen | JPY |

**Note:** Exchange rates are predefined for this project. They are not live market exchange rates and may not reflect current financial values.

## 🚀 Getting Started

Follow these steps to run the project on your local computer.

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/Betty-1219/Build-currency-converter.git
```

### 2. Navigate to the Project Folder

```bash
cd Build-currency-converter
```

### 3. Install Dependencies

Make sure Node.js and npm are installed, then run:

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 📂 Project Structure

```text
Build-currency-converter/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── CurrencyConverter.jsx
│   ├── CurrencyConverter.css
│   ├── CurrencyConverter.test.jsx
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*The exact folder structure may vary depending on your local project setup.*

## ⚙️ How It Works

1. The user enters an amount in the number input field.
2. The user selects the currency to convert from.
3. The user selects the currency to convert to.
4. The application uses the predefined exchange rates to calculate the conversion.
5. React updates the displayed result whenever the relevant input changes.
6. The result is formatted to two decimal places.

### Example

If the user enters:

- Amount: 100
- From: USD
- To: EUR

The application calculates the equivalent amount using the configured exchange rates.

## 🧠 React Concepts Practiced

This project helped strengthen my understanding of:

- **Functional Components:** Creating reusable React components.
- **useState:** Managing input values and currency selections.
- **useMemo:** Memoizing calculations to improve rendering efficiency.
- **Event Handling:** Responding to user input and selection changes.
- **Conditional Rendering:** Displaying conversion results based on application state.
- **Component Export:** Exporting and reusing React components.

## 🧪 Testing

The project includes a test file:

```text
src/CurrencyConverter.test.jsx
```

The application can be checked against the project requirements, including:

- Rendering the amount input.
- Rendering both currency selection fields.
- Displaying the supported currency options.
- Calculating and formatting conversion results.
- Updating the displayed result when selections change.

Run the test command configured in your `package.json` to execute the tests.

## 🔮 Future Improvements

Possible improvements include:

- Integrating a live exchange-rate API.
- Supporting additional international currencies.
- Adding a currency swap button.
- Displaying historical exchange rates.
- Adding conversion history.
- Improving accessibility and keyboard navigation.
- Adding loading and error states for API requests.

## 👩‍💻 Author

**Betelhem Nurlachew**

Software Engineering Student at Addis Ababa Science and Technology University (AASTU).

- GitHub: [Betty-1219](https://github.com/Betty-1219)
- LinkedIn: [Betelhem Nurlachew](https://www.linkedin.com/in/betelhem-nurlachw-tech)

## 📄 License

This project was developed for educational and learning purposes.

---

⭐ If you find this project useful, feel free to explore the repository and share your feedback!

**Thank you for visiting my Currency Converter project!**
