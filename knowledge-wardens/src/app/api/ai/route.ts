import { API_KEY, RESOURCE_NAME } from '@/config';
import { createAzure } from '@ai-sdk/azure';
import { generateText } from 'ai';
import { getServerSession } from 'next-auth';
import { authConfig } from '../auth/[...nextauth]/authConfig';

const az = createAzure({
  resourceName: RESOURCE_NAME,
  apiKey: API_KEY,
});

const model = az('gpt-35-turbo');

export async function GET() {
  const session = await getServerSession(authConfig);

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { text } = await generateText({
    model,
    prompt: 'hola, este es un test de promt',
  });

  return Response.json(text);
}
