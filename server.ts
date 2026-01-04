import express from 'express';
import { z } from 'zod';

const SECRET_KEY = 'abracadabra';
const namesPreviouslySeen = new Set<string>();
let mostRecentName: string | null = null;

const app = express();
app.use(express.json());
app.get('/', (_req, res) => {
  res.send({ namesPreviouslySeen: namesPreviouslySeen.size, mostRecentName });
});

const zPostBody = z.any();
app.post('/', (req, res) => {
  const body = zPostBody.safeParse(req.body);
  if (!body.success || !body.data.key) {
    res.status(400).send({ error: 'Poorly-formed request' });
    return;
  }

  console.log({ seen: namesPreviouslySeen, body: body.data });
  for (let i = 0; i < SECRET_KEY.length; i += 1) {
    if (body.data.key[i] !== SECRET_KEY[i]) {
      res.status(403).send({ error: 'Incorrect key', correctPrefix: i });
      return;
    }
  }

  const namesPreviouslySeenCount = namesPreviouslySeen.size;
  const nameSeenBefore = namesPreviouslySeen.has(body.data.name);
  const lastMostRecentName = mostRecentName;
  if (!nameSeenBefore || body.data.force) {
    mostRecentName = body.data.name;
    namesPreviouslySeen.add(body.data.name);
  }

  res.send({
    message: `Hello ${body.data.name}`,
    nameSeenBefore,
    namesPreviouslySeen: namesPreviouslySeenCount,
    mostRecentName: lastMostRecentName,
  });
});

app.listen(8000, () => console.log(`Listening on port 8000`));
