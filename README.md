# Spend Tracker

[Spend Tracker](https://dubbbb.github.io/empower-coding-exercise/) is a financial visualisation tool designed to help users track their daily spending habits and stay within set spending limits. The app provides insights into daily transactions and calculates cumulative spend over a given period.

## Features

- **View Accounts**: Users can view their connected accounts and the associated balances.
- **Transaction History**: Users can access transaction history for any selected account.
- **Spend Tracker Management**: Users can create, view, update, and remove spend trackers to monitor their expenditures.
- **Spending Visualization**: Users can visualise their spending over a predetermined period (currently weekly) to ensure they stay within budget limits.

## Assumptions

- **Connected Accounts**: Users are assumed to have at least one connected account, which contains transactions for proper functionality testing. Without an account, key features like spend tracking won't work as expected.
- **Authentication & Security**: The current implementation does not include user authentication; thus, it assumes a logged-in state for all operations. If built for real-world use, features like session management, API request security, and encryption would be added to comply with industry-standard security practices.
- **Mock Data for Development**: Mock data simulates API responses during development. These mocks would be replaced with real-time API calls if built for real-world use.
- **Desktop-First Design**: The application is designed for desktop use. Mobile applications for Android and iOS handle the mobile user experience, so no responsive design for mobile browsers is currently implemented.

## Future Improvements

- **Mobile Support**: Extend the current design to work seamlessly on mobile devices.
- **Real API Integration**: Replace mock data with real-time data from an API.
- **Enhanced Test Coverage**: Increase unit test coverage, including integration and end-to-end tests.
- **Authentication and Security**: Implement secure authentication protocols for user data and session management.
- **Validation and Error Handling**: Implement validation messages for invalid form submissions and error messages for failed API requests.

## Tech Stack

- **[Vite](https://vitejs.dev/)**: Fast build tool and development server.
- **[React](https://reactjs.org/)**: UI library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.
- **[Shadcn](https://shadcn.dev/)**: Component library with Tailwind integration for building consistent UI.
- **[Jest](https://jestjs.io/)**: JavaScript testing framework for unit tests.

## Folder Structure

```bash
src/
├── components/         # React components used in the app
├── pages/              # Page components and layouts
├── **/utils/           # Utility functions
└── **/*.test.ts        # Unit tests
```

## Getting Started

### Installation

To run the project locally, clone the repository and install the dependencies:

```bash
npm install
npm run install-client
```

### Development

To start the server and client:

```bash
npm run server
npm run client
```

### Unit Tests

To run the unit tests:

```bash
cd client
npx jest
```

## Acknowledgments

Thanks to the Empower team for providing the project brief and resources. Special thanks to the open-source community for the tools and libraries that made this project possible.
