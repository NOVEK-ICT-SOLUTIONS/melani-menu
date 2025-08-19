import React from "react";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex flex-col items-center justify-center p-6">
      <Card className="max-w-lg w-full p-8 shadow-lg border-[#e6a346]/30">
        <h1 className="text-3xl font-bold text-[#5a6b31] mb-4 text-center">Welcome to NovekTech Digital Menus</h1>
        <p className="text-lg text-[#5a6b31] mb-6 text-center">
          We provide restaurants with beautiful, interactive digital menus for a modern dining experience. Easily manage your menu, get feedback, and delight your customers.
        </p>
        <div className="mb-6 text-center">
          <span className="inline-block bg-[#e6a346] text-white px-3 py-1 rounded-full text-sm font-semibold">Client Highlight: Melani Restaurant</span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Button className="bg-[#5a6b31] text-white w-full" asChild>
            <a href="/melani">View Melani Menu</a>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <a href="/admin">Go to Admin Dashboard</a>
          </Button>
        </div>
      </Card>
      <footer className="mt-8 text-xs text-[#5a6b31] text-center">
        &copy; {new Date().getFullYear()} NovekTech. All rights reserved.
      </footer>
    </div>
  );
}
