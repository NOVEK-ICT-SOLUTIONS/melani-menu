import React from "react";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[#5a6b31] mb-8">NovekTech Admin</h2>
        <nav className="flex flex-col gap-4">
          <a href="/admin" className="text-[#5a6b31] font-semibold">Dashboard</a>
          <a href="/admin/restaurants" className="text-gray-700 hover:text-[#e6a346]">Restaurants</a>
          <a href="/admin/settings" className="text-gray-700 hover:text-[#e6a346]">Settings</a>
        </nav>
        <div className="mt-auto pt-8">
          <Button variant="outline" className="w-full">Logout</Button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold text-[#5a6b31] mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center">
            <h2 className="text-lg font-semibold text-[#e6a346] mb-2">Total Restaurants</h2>
            <p className="text-3xl font-bold text-[#5a6b31]">1</p>
          </Card>
          <Card className="p-6 text-center">
            <h2 className="text-lg font-semibold text-[#e6a346] mb-2">Active Menus</h2>
            <p className="text-3xl font-bold text-[#5a6b31]">1</p>
          </Card>
          <Card className="p-6 text-center">
            <h2 className="text-lg font-semibold text-[#e6a346] mb-2">Feedback Received</h2>
            <p className="text-3xl font-bold text-[#5a6b31]">12</p>
          </Card>
        </div>
        <Card className="p-6 mb-6">
          <h2 className="text-lg font-bold text-[#5a6b31] mb-4">Recent Activity</h2>
          <ul className="text-sm text-gray-700 list-disc pl-5">
            <li>Melani menu updated</li>
            <li>New feedback received</li>
            <li>Restaurant added: Melani</li>
          </ul>
        </Card>
      </main>
    </div>
  );
}


