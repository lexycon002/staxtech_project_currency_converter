Great job completing your currency converter project! 🎉 Here's a professional and engaging **README.md** write-up you can use or tweak for GitHub, your portfolio, or anywhere else you showcase your work:



## 💱 Currency Converter App

This is a simple and interactive **Currency Converter** web app built with **React.js**. It allows users to convert between different currencies using **real-time exchange rates** fetched from an external API. The app also displays the flags of the selected countries for a more personalized experience.


### ✨ Features

* 🌍 Convert from one currency to another using real-time exchange rates
* 🚩 Auto-display of country flags alongside selected currencies
* 🔄 Swap feature to quickly reverse the conversion direction
* ⚛️ Built with **React Hooks** (`useState`, `useEffect`) for state and side-effect management
* 💡 Clean and responsive UI



### 🛠️ Technologies Used

* **React.js**
* **ExchangeRate API** – for fetching current exchange rates
* **CountryFlag API** – to display country flags
* **CSS** – for styling the app



### 📸 Screenshot

![ Project snipshot]("buildingStage.png")
![ Project snipshot]("finalProduct.png")



### 🧠 How It Works

* When the app loads, it fetches the list of currencies and the latest exchange rates using the **ExchangeRate API**.
* Users can select a currency to convert **from** and **to**, input an amount, and instantly see the converted value.
* Country flags are dynamically displayed using the **CountryFlag API**, enhancing the UI.
* `useState` is used to manage input values, currency selections, and results.
* `useEffect` handles API calls and updates the UI whenever the selected currencies or amount change.



