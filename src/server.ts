import { fastify } from 'fastify';
import {  
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors';

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*', 
});

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.listen({ port: process.env.PORT? Number(process.env.PORT) : 3000 }).then(() => {
  console.log(`Port: ${process.env.PORT}`);
  console.log('Server is running on http://localhost:3000 !!!');
})