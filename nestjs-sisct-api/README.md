# NestJS SISCT API

This project is a NestJS application that provides a CRUD REST API for managing various entities defined in the `sisct.sql` file. The application is structured into modules, each corresponding to a specific entity, allowing for organized and maintainable code.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete operations for all entities.
- **Modular Architecture**: Each entity has its own module, service, and controller.
- **TypeScript**: The project is built using TypeScript, providing type safety and better development experience.
- **Database Integration**: The application is designed to interact with a database, with entities defined according to the database schema.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nestjs-sisct-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the application, run the following command:
```
npm run start
```

The application will be running on `http://localhost:3000`.

## API Endpoints

The following endpoints are available:

- **Cadastro Nacional**
  - `GET /cadastro-nacional`
  - `POST /cadastro-nacional`
  - `GET /cadastro-nacional/:id`
  - `PUT /cadastro-nacional/:id`
  - `DELETE /cadastro-nacional/:id`

- **Cadastro Nacional Endereco**
  - `GET /cadastro-nacional-endereco`
  - `POST /cadastro-nacional-endereco`
  - `GET /cadastro-nacional-endereco/:id`
  - `PUT /cadastro-nacional-endereco/:id`
  - `DELETE /cadastro-nacional-endereco/:id`

- **Cadastro Nacional Mapa de Vagas**
  - `GET /cadastro-nacional-mapa-de-vagas`
  - `POST /cadastro-nacional-mapa-de-vagas`
  - `GET /cadastro-nacional-mapa-de-vagas/:id`
  - `PUT /cadastro-nacional-mapa-de-vagas/:id`
  - `DELETE /cadastro-nacional-mapa-de-vagas/:id`

- **Cadastro Nacional Representante Legal**
  - `GET /cadastro-nacional-representante-legal`
  - `POST /cadastro-nacional-representante-legal`
  - `GET /cadastro-nacional-representante-legal/:id`
  - `PUT /cadastro-nacional-representante-legal/:id`
  - `DELETE /cadastro-nacional-representante-legal/:id`

- **Municipio**
  - `GET /municipio`
  - `POST /municipio`
  - `GET /municipio/:id`
  - `PUT /municipio/:id`
  - `DELETE /municipio/:id`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.