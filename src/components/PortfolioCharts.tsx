import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const portfolioData = [
  { name: 'Stocks', value: 125000, color: 'hsl(231, 48%, 48%)' },
  { name: 'FDs', value: 40000, color: 'hsl(142, 71%, 45%)' },
  { name: 'Bank', value: 25000, color: 'hsl(250, 48%, 55%)' },
];

const monthlyData = [
  { month: 'Jan', value: 180000 },
  { month: 'Feb', value: 185000 },
  { month: 'Mar', value: 175000 },
  { month: 'Apr', value: 190000 },
  { month: 'May', value: 190000 },
  { month: 'Jun', value: 190000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card rounded-lg p-3 border shadow-md">
        <p className="text-card-foreground font-medium">
          {label}: ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const PortfolioCharts = () => {
  const totalValue = portfolioData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card animate-scale-in">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Portfolio Distribution
            <span className="text-2xl font-bold text-primary">
              ${totalValue.toLocaleString()}
            </span>
          </CardTitle>
          <CardDescription>Asset allocation breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={portfolioData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card animate-scale-in">
        <CardHeader>
          <CardTitle>Portfolio Growth</CardTitle>
          <CardDescription>6-month trend analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioCharts;