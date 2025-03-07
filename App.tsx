import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Calculator from "@/pages/calculator";
import Header from "@/components/layout/Header";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Calculator} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
