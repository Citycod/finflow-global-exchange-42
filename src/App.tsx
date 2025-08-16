import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Banking from "./pages/Banking";
import Crypto from "./pages/Crypto";
import Trading from "./pages/Trading";
import SocialTools from "./pages/SocialTools";
import Space from "./pages/Space";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import SendMoney from "./pages/SendMoney";
import Deposit from "./pages/Deposit";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/*" element={
              <ProtectedRoute>
                <Layout>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/trading" element={<Trading />} />
                    <Route path="/social-tools" element={<SocialTools />} />
                    <Route path="/space" element={<Space />} />
                    <Route path="/banking" element={<Banking />} />
                    <Route path="/crypto" element={<Crypto />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/send" element={<SendMoney />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
