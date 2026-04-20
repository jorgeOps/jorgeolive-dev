'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card } from '@/components/ui/Card';
import { useState, FormEvent } from 'react';

interface ContactFormProps {
  translations: {
    name: string;
    email: string;
    business: string;
    message: string;
    send: string;
  };
}

export function ContactForm({ translations }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      business: formData.get('business'),
      message: formData.get('message'),
    };

    setTimeout(() => {
      console.log('Form data:', data);
      setStatus('success');

      setTimeout(() => {
        setStatus('idle');
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1000);
  };

  return (
    <Card elevation="high" className="p-8 lg:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          name="name"
          label={translations.name}
          required
          disabled={status === 'sending'}
        />

        <Input
          name="email"
          type="email"
          label={translations.email}
          required
          disabled={status === 'sending'}
        />

        <Input
          name="business"
          label={translations.business}
          disabled={status === 'sending'}
        />

        <Textarea
          name="message"
          label={translations.message}
          required
          disabled={status === 'sending'}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? '...' : status === 'success' ? '✓' : translations.send}
        </Button>

        {status === 'success' && (
          <p className="text-center font-sans text-body-lg text-primary">
            ¡Mensaje enviado! / Message sent!
          </p>
        )}
      </form>
    </Card>
  );
}
