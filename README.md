# Cocktails App

## Installation

1. Clone the repository: `git clone https://github.com/your-username/cocktails-app.git`
2. Navigate to the project directory: `cd cocktails-app`
3. Install the dependencies: `npm install`

## Usage

1. Start the application: `npm start`
2. Open your browser and go to `http://localhost:5173`

## Google Authentication Setup

To enable user authentication with Google, follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Enable the **Google Sign-In API** for your project.
4. Go to the **Credentials** page and create a new **OAuth client ID**.
5. Configure the **Authorized JavaScript origins** and **Authorized redirect URIs** for your application.
6. Copy the generated **Client ID**.
7. In your project directory, create a new file called `.env` if it doesn't already exist.
8. Add the following line to the `.env` file, replacing `YOUR_CLIENT_ID` with the copied **Client ID**:

```
VITE_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
```

9. Save the `.env` file.

## Features

- Create new cocktail recipes
- Search for cocktail recipes by name or ingredients

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add your commit message'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

This is a project for creating and managing cocktail recipes.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/cocktails-app.git`
2. Navigate to the project directory: `cd cocktails-app`
3. Install the dependencies: `npm install`

## Usage

1. Start the application: `npm start`
2. Open your browser and go to `http://localhost:5173`

## Features

- Create new cocktail recipes
- Search for cocktail recipes by name or ingredients

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add your commit message'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
