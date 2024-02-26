'use client';
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function WhatsAppCTA() {
  const phoneNumber = `+919860481010`;
  const accountName = 'Lahoti Textile';
  return (
    <FloatingWhatsApp phoneNumber={phoneNumber} accountName={accountName} />
  );
}
