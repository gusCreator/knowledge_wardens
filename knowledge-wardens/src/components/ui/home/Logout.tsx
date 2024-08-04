'use client';

import { Button } from '@/components/ui/Button';
import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <Button className="bg-yellow-500 text-black hover:bg-orange-600" onClick={() => signOut()}>
      Logout
    </Button>
  );
}
