import React, { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  CalendarDays, 
  AlertCircle, 
  MessageCircle, 
  ExternalLink 
} from "lucide-react";
import { 
  noticesList, 
  Notice 
} from "./landing-database/noticesData";

const NoticesSection = () => {
  const [filter, setFilter] = useState<Notice['category'] | 'all'>('all');

  const getCategoryIcon = (category: Notice['category']) => {
    switch (category) {
      case 'event': return <CalendarDays className="w-5 h-5 text-blue-500" />;
      case 'announcement': return <Bell className="w-5 h-5 text-green-500" />;
      case 'meeting': return <MessageCircle className="w-5 h-5 text-purple-500" />;
      case 'urgent': return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const filteredNotices = filter === 'all' 
    ? noticesList 
    : noticesList.filter(notice => notice.category === filter);

  const renderNoticeCard = (notice: Notice) => (
    <Card key={notice.id} className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center space-x-4">
        {getCategoryIcon(notice.category)}
        <div>
          <CardTitle className="text-lg">{notice.title}</CardTitle>
          <CardDescription>{notice.date}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{notice.description}</p>
        {notice.link && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => window.open(notice.link, '_blank')}
          >
            Learn More <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Latest Notices
      </h2>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-8">
          <TabsTrigger 
            value="all" 
            onClick={() => setFilter('all')}
            className="flex items-center"
          >
            <Bell className="w-4 h-4 mr-2" /> All
          </TabsTrigger>
          <TabsTrigger 
            value="event" 
            onClick={() => setFilter('event')}
            className="flex items-center"
          >
            <CalendarDays className="w-4 h-4 mr-2" /> Events
          </TabsTrigger>
          <TabsTrigger 
            value="announcement" 
            onClick={() => setFilter('announcement')}
            className="flex items-center"
          >
            <Bell className="w-4 h-4 mr-2" /> Announcements
          </TabsTrigger>
          <TabsTrigger 
            value="meeting" 
            onClick={() => setFilter('meeting')}
            className="flex items-center"
          >
            <MessageCircle className="w-4 h-4 mr-2" /> Meetings
          </TabsTrigger>
          <TabsTrigger 
            value="urgent" 
            onClick={() => setFilter('urgent')}
            className="flex items-center"
          >
            <AlertCircle className="w-4 h-4 mr-2" /> Urgent
          </TabsTrigger>
        </TabsList>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map(renderNoticeCard)}
        </div>
      </Tabs>
    </section>
  );
};

export default NoticesSection;
