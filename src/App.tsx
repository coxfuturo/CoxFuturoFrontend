import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./AppLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./about/Index";
import Contact from "./contact/Index";
import UiUx from "./services/DesignWeb/UI&UX/UiUx";
import ProductDesign from "./services/DesignWeb/ProductDesign/Index";
import WebsiteDevelopment from "./services/DesignWeb/WebsiteDevelopment/Index";
import EcommerceWebsite from "./services/DesignWeb/Ecommerce/Index";
import CorporateWebsite from "./services/DesignWeb/CorporateWebsite/Index";
import CMSDevelopment from "./services/DesignWeb/CMSDevelopment/Index";
import ProgressiveWebApp from "./services/DesignWeb/ProgressiveWabApp/Index";
import MobileAppDevelopment from "./services/AppDevelopment/MobileAppDevelopment/Index";
import AndroidAppDevelopment from "./services/AppDevelopment/AndroidAppDevelopment/Index";
import IOSAppDevelopment from "./services/AppDevelopment/iOSAppDevelopment/Index";
import ReactNativeDevelopment from "./services/AppDevelopment/ReactNativeAppDevelopment/Index";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>

          {/* COMMON LAYOUT */}
          <Route path="/CoxFuture" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="About" element={<About />} />
             <Route path="ContactUs" element={<Contact />} />

            <Route path="services/ui-ux-design" element={<UiUx />} />
            <Route path="services/product-design" element={<ProductDesign />} />
            <Route path="services/website-development" element={<WebsiteDevelopment />} />
            <Route path="services/ecommerce" element={<EcommerceWebsite />} />
            <Route path="services/corporate-website" element={<CorporateWebsite />} />
            <Route path="services/cms-development" element={<CMSDevelopment />} />
            <Route path="services/pwa" element={<ProgressiveWebApp />} />
            <Route path="services/mobile-app" element={<MobileAppDevelopment />} />
            <Route path="services/android-app" element={<AndroidAppDevelopment />} />
            <Route path="services/ios-app" element={<IOSAppDevelopment />} />
            <Route path="services/react-native" element={<ReactNativeDevelopment />} />

          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
