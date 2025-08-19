
import { useState } from 'react';
import { Coffee, Utensils, Cake, Star, Clock, MapPin, MessageCircle, Send, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { menuItems, categories, subcategories, restaurantInfo } from '@/data/menuData';
import type { MenuItem } from '@/types/menu';

// Icon mapping for dynamic rendering
const iconMap = {
  Coffee,
  Utensils,
  Cake
};

function Melani() {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [comment, setComment] = useState('');

  const filteredItems = menuItems.filter(item => item.category === activeCategory && item.isAvailable);
  
  // Group items by subcategory
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.subcategory]) {
      acc[item.subcategory] = [];
    }
    acc[item.subcategory].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  // Format price with Ethiopian Birr
  const formatPrice = (price: number) => {
    return `${price} ETB`;
  };

  const handleSubmitComment = () => {
    if (comment.trim()) {
      // Here you would typically send the comment to your backend
      console.log('Comment submitted:', { name: customerName, comment });
      setComment('');
      setCustomerName('');
      setIsCommentsOpen(false);
      // You could show a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e6a346]/30 shadow-sm mb-2">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#5a6b31] mb-1">{restaurantInfo.name}</h1>
            <p className="text-sm text-[#5a6b31] flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3" />
              {restaurantInfo.description}
            </p>
            <div className="flex items-center justify-center gap-4 mt-2 text-xs text-[#5a6b31]">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {restaurantInfo.hours}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#e6a346] text-[#e6a346]" />
                {restaurantInfo.rating} Rating
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-sm mx-auto px-4 pb-20">
        {/* Category Tabs */}
        <div className="flex gap-1 mb-3 p-1 bg-white/50 rounded-lg">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'bg-[#5a6b31] text-white shadow-md'
                    : 'bg-white text-[#5a6b31] hover:bg-[#5a6b31]/5'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {Object.entries(groupedItems).map(([subcategoryId, items]) => {
            const subcategoryLabel = subcategories[activeCategory as keyof typeof subcategories]
              .find(sub => sub.id === subcategoryId)?.label || subcategoryId;
            
            return (
              <div key={subcategoryId} className="space-y-4">
                {/* Section Header */}
                <div className="py-1">
                  <h2 className="text-xs font-semibold text-[#5a6b31] uppercase tracking-wide mb-2">
                    {subcategoryLabel}
                  </h2>
                </div>
                
                {/* Items in this subcategory */}
                <div className="space-y-2">
                  {items.map((item) => (
                    <Card key={item.id} className="overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-[#5a6b31]/20 hover:border-[#e6a346]/40">
                    <CardContent className="p-0">
                      <div className="flex">
                        {/* Item Image */}
                        <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-l-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          {item.isPopular && (
                            <Badge className="absolute top-0.5 left-0.5 bg-orange-500 text-white text-xs px-1 py-0">
                              Popular
                            </Badge>
                          )}
                          {item.isNew && (
                            <Badge className="absolute top-0.5 left-0.5 bg-[#5a6b31] text-white text-xs px-1 py-0">
                              New
                            </Badge>
                          )}
                        </div>

                        {/* Item Details */}
                        <div className="flex-1 p-2.5">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold text-gray-900 text-sm leading-tight pr-1">
                              {item.name}
                            </h3>
                            <span className="text-sm font-bold text-[#e6a346] flex-shrink-0">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show message if no items */}
        {Object.keys(groupedItems).length === 0 && (
          <div className="text-center py-4">
            <p className="text-[#5a6b31] text-sm">No items available in this category.</p>
          </div>
        )}
      </main>

      {/* Comments Section */}
      <div className="bottom-0 left-0 right-0 bg-white border-t border-[#5a6b31]/20 z-40">
        {/* Comments Button */}
        <div className="max-w-sm mx-auto px-4 py-3">
          <Dialog open={isCommentsOpen} onOpenChange={setIsCommentsOpen}>
            <DialogTrigger asChild>
              <Button 
                className="w-full bg-[#e6a346] hover:bg-[#d4932e] text-white shadow-sm"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Share Your Feedback
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm mx-auto">
              <DialogHeader>
                <DialogTitle className="text-[#5a6b31]">Share Your Feedback</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Your name (optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="border-[#5a6b31]/20 focus:border-[#e6a346]"
                />
                <Textarea
                  placeholder="Tell us about your experience..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="border-[#5a6b31]/20 focus:border-[#e6a346] min-h-[100px]"
                />
                <Button 
                  onClick={handleSubmitComment}
                  className="w-full bg-[#5a6b31] hover:bg-[#4f5f2b] text-white"
                  disabled={!comment.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Feedback
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Footer Info */}
        <div className="max-w-sm mx-auto px-4 pb-3 text-center border-t border-[#5a6b31]/10 pt-2">
          <p className="text-sm text-[#5a6b31] mb-2">
            Need assistance? Please ask your server
          </p>
          <p className="text-xs text-[#5a6b31] mb-2">
            All prices include tax • WiFi: {restaurantInfo.wifi}
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-[#5a6b31]">
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              {restaurantInfo.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Melani;
