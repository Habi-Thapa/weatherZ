# WeatherZ(Weather By Zip Code)

This project provides a simple web application to look up weather information based on zip codes. It's built with Vite, React, and Material-UI. The app defaults to the USA if no country code is specified.

## Prerequisites

This project uses Node.js for package management and to run the development server.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies:
   `npm install`

## Running the Application

To start the development server, run the following command:
`npm run dev`

## Usage

To search for weather information:

- Simply enter the zip code in the input field. If no country code is specified, the application assumes the zip code is for the USA.
- For non-USA postal codes, enter the postal code followed by a comma and the country code.

### Example

- For a NY,USA zip code: `10001`
- For a London,UK postal code: `E1 7HT,gb`

## Features

- Look up current weather by zip code or postal code.
- Automatically assumes USA as the default country.
- Supports international postal codes by specifying the country code.
