import { API_KEY, RESOURCE_NAME } from '@/config';
import { createAzure } from '@ai-sdk/azure';
import { generateText } from 'ai';
// import { getServerSession } from 'next-auth';
// import { authConfig } from '@/app/api/auth/[...nextauth]/authConfig';

import { z } from 'zod';

const az = createAzure({
  resourceName: RESOURCE_NAME,
  apiKey: API_KEY,
});

const model = az('gpt-4o');

export async function POST(res: Request) {
  // const session = await getServerSession(authConfig);

  // if (!session) {
  //   return Response.json({ error: 'Unauthorized' }, { status: 401 });
  // }

  const formData = await res.formData();

  const request = z.object({
    course: z.string(),
    topicName: z.string(),
    topicDescription: z.string(),
    question: z.string(),
  });

  const validatedRequest = request.safeParse({
    course: formData.get('course')?.toString(),
    topicName: formData.get('topicName')?.toString(),
    topicDescription: formData.get('topicDescription')?.toString(),
    question: formData.get('question')?.toString(),
  });

  if (!validatedRequest.success) {
    return Response.json({ error: validatedRequest.error }, { status: 400 });
  }

  const response = await generateText({
    model,
    prompt: `The course is ${validatedRequest.data.course}, the topic is ${validatedRequest.data.topicName}, and the description is ${validatedRequest.data.topicDescription} and the question is ${validatedRequest.data.question}. Please provide an answer using between 20 and 30 words.`,
  });

  console.log(response);

  return Response.json({ answer: response.text });
}
