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
  incomeDetails, 
  expenseDetails, 
  donationList, 
  donationSubgroups,
  FinanceEntry,
  DonationSubgroup
} from "./landing-database/financeData";
import { IndianRupee } from "lucide-react";

const FinanceSection = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const renderFinanceTable = (entries: FinanceEntry[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map((entry, index) => (
          <TableRow key={index}>
            <TableCell>{entry.date}</TableCell>
            <TableCell>{entry.description}</TableCell>
            <TableCell className="text-right">
              <span className={
                entry.type === 'income' 
                  ? 'text-green-600' 
                  : entry.type === 'expense' 
                  ? 'text-red-600' 
                  : 'text-blue-600'
              }>
                {formatCurrency(entry.amount)}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderDonationSubgroupTable = (subgroups: DonationSubgroup[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Donor Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subgroups.flatMap((subgroup) => 
          subgroup.donors.map((donor, index) => (
            <TableRow key={`${subgroup.year}-${index}`}>
              <TableCell>{donor.name}</TableCell>
              <TableCell>{donor.category}</TableCell>
              <TableCell className="text-right">
                {formatCurrency(donor.amount)}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );

  const calculateTotal = (entries: FinanceEntry[]) => {
    return entries.reduce((total, entry) => total + entry.amount, 0);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Financial Transparency
      </h2>

      <Tabs defaultValue="income" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-xl mx-auto mb-8">
          <TabsTrigger value="income">Income</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
        </TabsList>

        <TabsContent value="income">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Income Details
                <span className="text-green-600 flex items-center">
                  <IndianRupee className="mr-2" />
                  {formatCurrency(calculateTotal(incomeDetails))}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderFinanceTable(incomeDetails)}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Expense Details
                <span className="text-red-600 flex items-center">
                  <IndianRupee className="mr-2" />
                  {formatCurrency(calculateTotal(expenseDetails))}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderFinanceTable(expenseDetails)}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donations">
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="list">Donation List</TabsTrigger>
              <TabsTrigger value="subgroup">2018-2021 Subgroup</TabsTrigger>
            </TabsList>

            <TabsContent value="list">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Donation List
                    <span className="text-blue-600 flex items-center">
                      <IndianRupee className="mr-2" />
                      {formatCurrency(calculateTotal(donationList))}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {renderFinanceTable(donationList)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subgroup">
              <Card>
                <CardHeader>
                  <CardTitle>Donation Subgroup (2018-2021)</CardTitle>
                </CardHeader>
                <CardContent>
                  {renderDonationSubgroupTable(donationSubgroups)}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default FinanceSection;
