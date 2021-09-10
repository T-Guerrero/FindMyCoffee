# FindMyCoffee

## About

FindMyCoffee is a system designed for search and review Coffee Shops near your location. It was made in Semana Super FullStack powered by Onebitcode.

## Technologies

### Backend
  * Ruby on Rails
  * PostgreSQL
  * Postgis
  * Requisições HTTP
  * Google Place API
  
### Frontend
  * React
    * Styled Components
    * React Rating Stars
  * Axios
  * Google Maps API
  
## Running

### Backend
  Run the following commands to start the backend server at `localhost:3001`:
  ```bash
  $> bundle install
  $> rails s -p 3001
  ```

### Frontend
  Run the following commands to start the frontend server at `localhost:3000`:
  ```bash
  $> yarn install
  $> yarn start
  ```

## Note
  You have to hire the following services at Google Cloud Plataform:
  
  * Places API
  * Maps Javascript API
  
  Generate the API Key and set it in `.env` at frontend root and in `rails credentials` at backend.
  
