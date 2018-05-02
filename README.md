# Moro Lorenzo Gym Backend & SQL Database
## Requirements
1. NodeJS (8.1.0+) and NPM (5.7.1+)
2. PostgreSQL database
3. Docker or Docker Toolkit (Optional; For docker installation only)
## Installation and Usage
### Local
1. Clone this repository with `git clone <repository_link>`.
2. Create or edit the existing .env file
3. Add an environment variable named DATABASE_URL in the .env file and set the value to your PostgreSQL database url.  
E.g.:
> ```DATABASE_URL=postgres://<username>:<password>@<domain/ip>:<port>/<database_name>```
4. Add another environment variable named SESSION_SECRET in the .env file and set the value to any desired secret session key  
E.g.:
> ```SESSION_SECRET=<secret_key>```  
5. Add another environment variable named ADMIN_REGISTER_TOKEN in the .env file and set the value to any desired value which will be used as a code to allow admin registering
E.g.:
> ```ADMIN_REGISTER_TOKEN=<token_for_registering>```
6. Install node and npm if there is no existing installation (check with `node -v` and `npm-v`).
7. Open your terminal and `cd` to this project.
8. Run `npm install` to install all the dependencies for the project.
9. Run `npm start` to start the backend server.

### Docker
1. Install docker or the docker-toolkit if not yet installed.
2. Run `docker-compose pull`.
3. Run `docker-compose up -d`.

<!-- ## Resources
### List:
- admins
- logs  
- members  
- membership-packages
- messages
- persons (yes i know it should be people)
- sales-transactions
- visits
- walk-in-clients
### Available Request Types:
- #### `GET /<resource_name>`  
  - Returns all instances of the specified resource.
  - Returns an Array of JSON Objects.
  - Each JSON Object contains all the attributes specified in the model definitions inside the `/db/models` folder.
- #### `GET /<resource_name>/<id>`
  - Returns an instance of the specified resource depending on the given instance `id` column via url parameters.
  - Returns a JSON Object which contains all attributes specified in the model definition inside the `/db/models` folder.
- #### `POST /<resource_name>`
  - Required data for each resource can be found inside the `/resources/<resource_name>/<resource_name>.js` file.
  - Default values can be found in the `/db/models/<resource_name>.js` file
  - Creates an instance of the specified model/entity.
  - Returns the updated instance as a JSON Object with all its attributes as key-value pairs
- #### `PUT /<resource_name>/<id>`
  - Required data for each resource can be found inside the `/resources/<resource_name>/<resource_name>.js` file.
  - Default values can be found in the `/db/models/<resource_name>.js` file
  - Updates a selected instance wherein the row id is given in the url parameter `id`
  - Returns the updated instance as a JSON Object with all its attributes as key-value pairs
- #### `DELETE /<resource_name>`
  - Requires an Array of Strings/Integers of instance `ids` to be deleted 
- #### `DELETE /<resource_name>/<id>`
  - Deletes a selected instance wherein the row id is given in the url parameter `id`

- ***NOTE:*** Each model has 2 additional attributes `createdAt` and `updatedAt` which are two timestamp columns which represent creation timestamp, and update timestamp respectively. -->

## Contact Details
Dont hesitate to contact the creator of this project for bugs, errors, queries, inquiries, and job opportunities!
> Name: Levy V. Medina II  
> Contact Number: +63 9153260223  
> Email: levymedina3@gmail.com


