import { apiClient } from './client';
import { ContactForm } from '@/lib/types';

export interface ContactResponse {
  success: boolean;
  message: string;
}

export const contactService = {
  async sendContactForm(data: ContactForm): Promise<ContactResponse> {
    return apiClient.post<ContactResponse>('/contact', data);
  },
};
