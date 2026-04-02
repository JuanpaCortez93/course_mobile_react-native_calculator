# 🧮 Calculator App

A clean and functional calculator built with **React Native** and **Expo**, powered by **Bun**.

---

## 🚀 Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Bun](https://bun.sh/) — package manager & runtime
- TypeScript

---

## 📦 Installation

Make sure you have **Bun** installed. If not, install it first:

```bash
curl -fsSL https://bun.sh/install | bash
```

Then clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/calculator-app.git
cd calculator-app
bun install
```

---

## ▶️ Running the App

```bash
bun expo start
```

Once the dev server starts, you can open the app on:

- 📱 **Physical device** — scan the QR code with the Expo Go app
- 🤖 **Android emulator** — press `a`
- 🍎 **iOS simulator** — press `i`
- 🌐 **Web** — press `w`

---

## 📁 Project Structure

```
├── app/                  # App screens
├── components/           # Reusable UI components
│   └── CalculatorButton.tsx
├── hooks/                # Custom hooks
│   └── useCalculator.ts
├── styles/               # Global styles
└── constants/            # Colors and config
```

---

## ✨ Features

- Basic arithmetic operations: `+`, `-`, `×`, `÷`
- Decimal number support
- Toggle positive/negative numbers
- Percentage calculation
- Clear and delete functionality
- Responsive layout for different screen sizes
- 📳 **Haptic feedback** — tactile response on button press for a native feel
- 🧭 **Navigation bar** — smooth screen navigation using Expo Router

---

## 🛠️ Scripts

| Command                  | Description               |
| ------------------------ | ------------------------- |
| `bun install`            | Install all dependencies  |
| `bun expo start`         | Start the Expo dev server |
| `bun expo start --clear` | Start with cleared cache  |

---

## 📄 License

MIT
