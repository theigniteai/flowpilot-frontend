import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Campaigns() {
  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-semibold mb-4">Campaign Manager</h1>
      <Tabs defaultValue="whatsapp" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
        </TabsList>

        <TabsContent value="whatsapp">
          <Card className="w-full">
            <CardContent className="space-y-4 p-4">
              <Input placeholder="Campaign Name" className="w-full" />
              <Input placeholder="Target Audience (Upload CSV)" type="file" className="w-full" />
              <Textarea placeholder="Write your WhatsApp message here..." rows={4} className="w-full" />
              <Input placeholder="Attach Image/Video (Optional)" type="file" className="w-full" />
              <Button className="w-full">Launch WhatsApp Campaign</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card className="w-full">
            <CardContent className="space-y-4 p-4">
              <Input placeholder="Campaign Name" className="w-full" />
              <Input placeholder="Target Audience (Upload CSV)" type="file" className="w-full" />
              <Input placeholder="Email Subject" className="w-full" />
              <Textarea placeholder="Write your email body here..." rows={6} className="w-full" />
              <Input placeholder="Attach File (PDF, Image, etc.)" type="file" className="w-full" />
              <Button className="w-full">Launch Email Campaign</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
