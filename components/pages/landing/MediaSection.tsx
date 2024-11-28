import React, { useState } from "react";
import Image from "next/image";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Images, 
  Video, 
  Users, 
  Calendar, 
  Maximize2 
} from "lucide-react";
import { 
  mediaGallery, 
  MediaItem 
} from "./landing-database/mediaData";

const MediaSection = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<MediaItem['category'] | 'all'>('all');

  const filteredMedia = filter === 'all' 
    ? mediaGallery 
    : mediaGallery.filter(media => media.category === filter);

  const openMediaDialog = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  const closeMediaDialog = () => {
    setSelectedMedia(null);
  };

  const renderMediaGrid = () => (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredMedia.map((media) => (
        <Card 
          key={media.id} 
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => openMediaDialog(media)}
        >
          <CardContent className="p-0 relative">
            <div className="relative w-full aspect-video">
              <Image 
                src={media.mediaUrl} 
                alt={media.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded flex items-center">
                {media.type === 'photo' ? (
                  <Images className="w-4 h-4 mr-2" />
                ) : (
                  <Video className="w-4 h-4 mr-2" />
                )}
                <span className="text-xs">{media.year}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{media.title}</h3>
              {media.description && (
                <p className="text-sm text-muted-foreground">{media.description}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderMediaDialog = () => {
    if (!selectedMedia) return null;

    return (
      <Dialog open={!!selectedMedia} onOpenChange={closeMediaDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedMedia.title}</DialogTitle>
          </DialogHeader>
          <div className="w-full aspect-video relative">
            {selectedMedia.type === 'photo' ? (
              <Image 
                src={selectedMedia.mediaUrl} 
                alt={selectedMedia.title}
                fill
                className="object-contain"
              />
            ) : (
              <video 
                controls 
                className="w-full h-full"
                src={selectedMedia.mediaUrl}
              />
            )}
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-muted-foreground" />
              <span>{selectedMedia.year}</span>
            </div>
            <div className="flex items-center">
              <Maximize2 className="w-5 h-5 mr-2 text-muted-foreground" />
              <span>{selectedMedia.type === 'photo' ? 'Photo' : 'Video'}</span>
            </div>
          </div>
          {selectedMedia.description && (
            <p className="text-muted-foreground mt-2">
              {selectedMedia.description}
            </p>
          )}
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Alumni Media Gallery
      </h2>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-xl mx-auto mb-8">
          <TabsTrigger 
            value="all" 
            onClick={() => setFilter('all')}
            className="flex items-center"
          >
            <Users className="w-4 h-4 mr-2" /> All
          </TabsTrigger>
          <TabsTrigger 
            value="alumni-meet" 
            onClick={() => setFilter('alumni-meet')}
            className="flex items-center"
          >
            <Images className="w-4 h-4 mr-2" /> Alumni Meet
          </TabsTrigger>
          <TabsTrigger 
            value="memories" 
            onClick={() => setFilter('memories')}
            className="flex items-center"
          >
            <Images className="w-4 h-4 mr-2" /> Memories
          </TabsTrigger>
          <TabsTrigger 
            value="event" 
            onClick={() => setFilter('event')}
            className="flex items-center"
          >
            <Video className="w-4 h-4 mr-2" /> Events
          </TabsTrigger>
        </TabsList>

        {renderMediaGrid()}
        {renderMediaDialog()}
      </Tabs>
    </section>
  );
};

export default MediaSection;
