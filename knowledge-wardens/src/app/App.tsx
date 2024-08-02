'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/Button';

export default function App() {
  return (
    <Button onClick={() => signIn('github')}>
      GitHub
    </Button>
  );
}
