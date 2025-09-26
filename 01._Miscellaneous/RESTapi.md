# RESTful API endpoints
**Planets** CRUD structure

| Http Method     | Endpoint       | beskrivelse                                                                                                  |
| --------------- | -------------- | -------------------------------------------------------------------------------------------------------------|
| **GET all**     | `/planets      | List over all planets, most general endpoint of all endpoints there are.                                     |
| **POST one**    | `/planets      | Create a new planet. Placed after `GET /planets` because most logical step after being able to list them.    |
| **GET one**     | `/planets/{id} | Show one chosen planet by id, one of the general endpoints.                                                  |
| **PUT one**     | `/planets/{id} | Replace one entire planet resource with new data. Standard full-update operation.                            |
| **PATCH one**   | `/planets/{id} | Partially updates an existing planet (e.g. changing name or size). More fine-grained alternative to updating.|
| **DELETE one**  | `/planets/{id} | Delete one chosen planet. This is the general delete method and last in RESTapi design because it represents the removal of the resource, the opposite of `POST`      |
