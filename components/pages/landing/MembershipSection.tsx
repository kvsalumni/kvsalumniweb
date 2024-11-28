import React from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  goldenMembersList, 
  normalMembersList,
  MembershipEntry
} from "./landing-database/membershipData";
import { Crown, Users } from "lucide-react";

const MembershipSection = () => {
  const renderMembershipTable = (members: MembershipEntry[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Member ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Batch</TableHead>
          <TableHead>Current Designation</TableHead>
          <TableHead>Joined Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell>{member.id}</TableCell>
            <TableCell>
              <div className="flex items-center">
                {member.membershipType === 'golden' ? (
                  <Crown className="w-4 h-4 text-yellow-500 mr-2" />
                ) : (
                  <Users className="w-4 h-4 text-gray-500 mr-2" />
                )}
                {member.name}
              </div>
            </TableCell>
            <TableCell>{member.batch}</TableCell>
            <TableCell>{member.currentDesignation}</TableCell>
            <TableCell>{new Date(member.joinedDate).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Alumni Membership
      </h2>

      <Tabs defaultValue="golden" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="golden" className="flex items-center">
            <Crown className="w-4 h-4 mr-2" /> Golden Members
          </TabsTrigger>
          <TabsTrigger value="normal" className="flex items-center">
            <Users className="w-4 h-4 mr-2" /> Normal Members
          </TabsTrigger>
        </TabsList>

        <TabsContent value="golden">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown className="w-6 h-6 mr-2 text-yellow-500" />
                Golden Membership List
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderMembershipTable(goldenMembersList)}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="normal">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-gray-500" />
                Normal Membership List
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderMembershipTable(normalMembersList)}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default MembershipSection;
