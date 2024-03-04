import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OpenAI } from 'openai';

async function bootstrap() {
  const openai = new OpenAI({
    apiKey: 'sk-JGuglLSulwJ0XIZkW7PuY3ruGULyzsdXexHNb8KALxAjkIjC',
  });
  const app = await NestFactory.create(AppModule);
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-3.5-turbo',
  });
  console.log(completion.choices[0]);
  await app.listen(3000);
}
bootstrap();
