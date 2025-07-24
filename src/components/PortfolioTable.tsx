import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react";

const portfolioItems = [
  { id: 1, name: "AAPL", type: "Stock", value: 45000, change: 5.2, updated: "2025-01-24" },
  { id: 2, name: "GOOGL", type: "Stock", value: 38000, change: -2.1, updated: "2025-01-24" },
  { id: 3, name: "MSFT", type: "Stock", value: 42000, change: 3.7, updated: "2025-01-24" },
  { id: 4, name: "SBI Fixed Deposit", type: "FD", value: 25000, change: 0.0, updated: "2025-01-20" },
  { id: 5, name: "HDFC Fixed Deposit", type: "FD", value: 15000, change: 0.0, updated: "2025-01-15" },
  { id: 6, name: "Savings Account", type: "Bank", value: 18000, change: 0.0, updated: "2025-01-24" },
  { id: 7, name: "Current Account", type: "Bank", value: 7000, change: 0.0, updated: "2025-01-24" },
];

const PortfolioTable = () => {
  const [sortBy, setSortBy] = useState<'value' | 'updated' | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleSort = (column: 'value' | 'updated') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const sortedItems = [...portfolioItems].sort((a, b) => {
    if (!sortBy) return 0;
    
    let aValue = sortBy === 'value' ? a.value : new Date(a.updated).getTime();
    let bValue = sortBy === 'value' ? b.value : new Date(b.updated).getTime();
    
    if (sortOrder === 'asc') {
      return aValue - bValue;
    }
    return bValue - aValue;
  });

  const getTypeVariant = (type: string) => {
    switch (type) {
      case 'Stock': return 'default';
      case 'FD': return 'secondary';
      case 'Bank': return 'outline';
      default: return 'default';
    }
  };

  return (
    <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card mb-8 animate-slide-up">
      <CardHeader>
        <CardTitle>Portfolio Holdings</CardTitle>
        <CardDescription>Complete breakdown of all assets</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead 
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSort('value')}
              >
                <div className="flex items-center gap-1">
                  Value
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Change</TableHead>
              <TableHead 
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSort('updated')}
              >
                <div className="flex items-center gap-1">
                  Updated
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedItems.map((item) => (
              <TableRow key={item.id} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <Badge variant={getTypeVariant(item.type)}>
                    {item.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono">
                  ${item.value.toLocaleString()}
                </TableCell>
                <TableCell>
                  {item.change !== 0 && (
                    <div className={`flex items-center gap-1 ${
                      item.change > 0 ? 'text-success' : 'text-destructive'
                    }`}>
                      {item.change > 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      {item.change > 0 ? '+' : ''}{item.change}%
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Date(item.updated).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PortfolioTable;