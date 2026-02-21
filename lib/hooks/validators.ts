import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z
    .string()
    .email('Email inválido')
    .min(5, 'Email deve ter no mínimo 5 caracteres'),
  subject: z
    .string()
    .min(5, 'Assunto deve ter no mínimo 5 caracteres')
    .max(200, 'Assunto deve ter no máximo 200 caracteres'),
  message: z
    .string()
    .min(20, 'Mensagem deve ter no mínimo 20 caracteres')
    .max(1000, 'Mensagem deve ter no máximo 1000 caracteres'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
