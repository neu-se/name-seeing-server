import { z } from 'zod';

/*
TASK 1: Give three cURL commands that make HTTP requests to the URL
https://robsimmons-nameseeingserver.web.val.run

 - A GET request that returns 200
 - A POST request that returns 200
 - A request that returns status 500 (Internal server error)

The code for that website is at
https://www.val.town/v/robsimmons/nameSeeingServer

*/

/* TASK 2: What is the correct Zod type for verifying input to the POST route? */
const zPostBody = z.any();

/* TASK 3: Give a Zod type describing the *response* to GET / requests */
const zGetResponse = z.any();

/* TASK 4: Give a Zod type describing the *response* to POST / requests when the status is 200 */
const zPostResponse = z.any();

/* TASK 5: Give a Zod type describing the *response* to POST / requests when the status is 400 or 403 */
const zPostErrorResponse = z.any();
