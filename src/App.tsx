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

import SaaSDevelopment from "./services/SoftwareSolutions/SaasDevelopment/Index";
import CustomCRMDevelopment from "./services/SoftwareSolutions/CustomCRM/Index";
import ERPDevelopment from "./services/SoftwareSolutions/ERPDevelopment/Index";
import ARVRSolutions from "./services/SoftwareSolutions/AR-VR/Index";

import DigitalMarketing from "./services/Marketing/DigitalMarketing/Index";
import SeoOptimization from "./services/Marketing/SEOOptimization/Index";
import ContentWriting from "./services/Marketing/ContentWriting/Index";
import SocialMediaMarketing from "./services/Marketing/SocialMediaMarketing/Index";

//industries
import EScooterIndustry from "./Industries/Mobility-Transport/E-Scooter/Index";
import EVIndustry from "./Industries/Mobility-Transport/EVIndustry/Index";
import LogisticsIndustry from "./Industries/Mobility-Transport/LogisticsIndustry/Index";
import AviationIndustry from "./Industries/Mobility-Transport/Aviation/Index";

import FinanceIndustry from "./Industries/Business-Finance/Finance-Industry/Index";
import BankingIndustry from "./Industries/Business-Finance/Banking-Industry/Index";
import InsuranceIndustry from "./Industries/Business-Finance/Insurance-Industry/Index";
import PoliticsIndustry from "./Industries/Business-Finance/Politics-Industry/Index";
import HealthcareIndustry from "./Industries/Lifestyle-Others/Healthcare/Index";
import FoodDeliveryIndustry from "./Industries/Lifestyle-Others/food-delivery/Index";
import EducationIndustry from "./Industries/Lifestyle-Others/Education/Index";
import RealEstateIndustry from "./Industries/Lifestyle-Others/RealEstate/Index";
import GamesIndustry from "./Industries/More-Industries/games/Index";
import ECommerceIndustry from "./Industries/More-Industries/E-commerce/Index";
import AgricultureIndustry from "./Industries/More-Industries/Agriculture/Index";
import TourTravelIndustry from "./Industries/More-Industries/Tour-Travels/Index";
import SocialNetworkingIndustry from "./Industries/More-Industries/SocialNetworking/Index";
import QuotationCalculator from "./calculator";
import { RowsIcon } from "lucide-react";
import CareerPage from "./career";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>

          {/* COMMON LAYOUT */}
          <Route path="/" element={<AppLayout />}>
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
            <Route path="services/saas" element={<SaaSDevelopment />} />
            <Route path="services/crm" element={<CustomCRMDevelopment />} />
            <Route path="services/erp" element={<ERPDevelopment />} />
            <Route path="services/ar-vr" element={<ARVRSolutions />} />
            <Route path="services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="services/seo" element={<SeoOptimization />} />
            <Route path="services/content-writing" element={<ContentWriting />} />
            <Route path="services/social-media" element={<SocialMediaMarketing />} />

            {/* Industries */}
            <Route path="industries/e-scooter" element={<EScooterIndustry />} />
            <Route path="industries/ev" element={<EVIndustry />} />
            <Route path="industries/logistics" element={<LogisticsIndustry />} />
            <Route path="industries/aviation" element={<AviationIndustry />} />
            <Route path="industries/finance" element={<FinanceIndustry />} />
            <Route path="industries/banking" element={<BankingIndustry />} />
            <Route path="industries/insurance" element={<InsuranceIndustry />} />
            <Route path="industries/politics" element={<PoliticsIndustry />} />
            <Route path="industries/healthcare" element={<HealthcareIndustry />} />
            <Route path="industries/food-delivery" element={<FoodDeliveryIndustry />} />
            <Route path="industries/real-estate" element={<RealEstateIndustry />} />
            <Route path="industries/education" element={<EducationIndustry />} />
            <Route path="industries/games" element={<GamesIndustry />} />
            <Route path="industries/ecommerce" element={<ECommerceIndustry />} />
            <Route path="industries/agriculture" element={<AgricultureIndustry />} />
            <Route path="industries/travel" element={<TourTravelIndustry />} />
            <Route path="industries/social-networking" element={<  SocialNetworkingIndustry />} />
           {/* calculator */}
            <Route path="quotation/calculator" element={<  QuotationCalculator />} />
            <Route path="career" element={<  CareerPage />} />

          </Route>


          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes> 
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
