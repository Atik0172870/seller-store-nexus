
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SellerDashboard from "./pages/SellerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import StorefrontSetup from "./pages/StorefrontSetup";
import ProductManagement from "./pages/ProductManagement";
import CategoryManagement from "./pages/CategoryManagement";
import OrderManagement from "./pages/OrderManagement";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import CommissionManagement from "./pages/CommissionManagement";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import LogisticsManagement from "./pages/LogisticsManagement";
import ReturnRefund from "./pages/ReturnRefund";
import ReviewsRatings from "./pages/ReviewsRatings";
import CampaignsPromotions from "./pages/CampaignsPromotions";
import Analytics from "./pages/Analytics";
import CustomerSupport from "./pages/CustomerSupport";
import LoyaltyProgram from "./pages/LoyaltyProgram";
import VouchersDiscounts from "./pages/VouchersDiscounts";
import AffiliateProgram from "./pages/AffiliateProgram";
import AdvertisementManagement from "./pages/AdvertisementManagement";
import Notifications from "./pages/Notifications";
import FlashSales from "./pages/FlashSales";
import ProductRecommendations from "./pages/ProductRecommendations";
import FraudDetection from "./pages/FraudDetection";
import DisputeManagement from "./pages/DisputeManagement";
import TaxInvoice from "./pages/TaxInvoice";
import PaymentSettlement from "./pages/PaymentSettlement";
import CMSPages from "./pages/CMSPages";
import MultiVendor from "./pages/MultiVendor";
import OpenBoxDelivery from "./pages/OpenBoxDelivery";
import BNPL from "./pages/BNPL";
import WarehouseFulfillment from "./pages/WarehouseFulfillment";
import DynamicPricing from "./pages/DynamicPricing";
import CustomerSegmentation from "./pages/CustomerSegmentation";
import GiftCards from "./pages/GiftCards";
import Auctions from "./pages/Auctions";
import SearchFilters from "./pages/SearchFilters";
import MultiLanguage from "./pages/MultiLanguage";
import SEOOptimization from "./pages/SEOOptimization";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <DataProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/seller-dashboard" element={<SellerDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/storefront-setup" element={<StorefrontSetup />} />
              <Route path="/product-management" element={<ProductManagement />} />
              <Route path="/category-management" element={<CategoryManagement />} />
              <Route path="/order-management" element={<OrderManagement />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/commission-management" element={<CommissionManagement />} />
              <Route path="/subscription-plans" element={<SubscriptionPlans />} />
              <Route path="/logistics-management" element={<LogisticsManagement />} />
              <Route path="/return-refund" element={<ReturnRefund />} />
              <Route path="/reviews-ratings" element={<ReviewsRatings />} />
              <Route path="/campaigns-promotions" element={<CampaignsPromotions />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/customer-support" element={<CustomerSupport />} />
              <Route path="/loyalty-program" element={<LoyaltyProgram />} />
              <Route path="/vouchers-discounts" element={<VouchersDiscounts />} />
              <Route path="/affiliate-program" element={<AffiliateProgram />} />
              <Route path="/advertisement-management" element={<AdvertisementManagement />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/flash-sales" element={<FlashSales />} />
              <Route path="/product-recommendations" element={<ProductRecommendations />} />
              <Route path="/fraud-detection" element={<FraudDetection />} />
              <Route path="/dispute-management" element={<DisputeManagement />} />
              <Route path="/tax-invoice" element={<TaxInvoice />} />
              <Route path="/payment-settlement" element={<PaymentSettlement />} />
              <Route path="/cms-pages" element={<CMSPages />} />
              <Route path="/multi-vendor" element={<MultiVendor />} />
              <Route path="/open-box-delivery" element={<OpenBoxDelivery />} />
              <Route path="/bnpl" element={<BNPL />} />
              <Route path="/warehouse-fulfillment" element={<WarehouseFulfillment />} />
              <Route path="/dynamic-pricing" element={<DynamicPricing />} />
              <Route path="/customer-segmentation" element={<CustomerSegmentation />} />
              <Route path="/gift-cards" element={<GiftCards />} />
              <Route path="/auctions" element={<Auctions />} />
              <Route path="/search-filters" element={<SearchFilters />} />
              <Route path="/multi-language" element={<MultiLanguage />} />
              <Route path="/seo-optimization" element={<SEOOptimization />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
