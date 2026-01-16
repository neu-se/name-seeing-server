import { z } from 'zod';

/*
TASK 1: Give five cURL commands that make HTTP requests to the URL
https://name-seeing-server.onrender.com

 - A GET request that returns the 200 status
 - A POST request that returns the 400 status
 - A POST request that returns the 200 status
 - A POST request that returns the data `{ "error": "Incorrect key", correctPrefix: 4 }`
 - A request that returns status 500 (Internal server error) by causing a JavaScript exception

The code for that website is at
https://github.com/neu-se/name-seeing-server/blob/main/server.ts

*/

/* TASK 2: What is the correct Zod type for verifying input to the POST route?
 * Replacing the current `zPostBody` validator with this validator should
 * ensure that the server will respond 403, 400, or 200, but never 500. It
 * should also ensure that the `namesPreviouslySeen` set will only ever
 * contain strings.
 */
const zPostBody = z.any();

/* TASK 3: Give a Zod type describing the possible *responses* to `GET /`
 * requests
 */
const zGetResponse = z.any();

/* TASK 4: Give a Zod type describing the possible *responses* to `POST /`
 * requests when the status is 200
 */
const zPostResponse = z.any();

/* TASK 5: Give a Zod type describing the possible *responses* to `POST /`
 * requests when the status is 400 or 403
 */
const zPostErrorResponse = z.any();
