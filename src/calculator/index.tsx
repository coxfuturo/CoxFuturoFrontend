'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    CheckCircle,
    Sparkles,
    PenTool,
    Code,
    Smartphone,
    BarChart3,
    Download,
    Calculator,
    FileText,
    Layers,
    AlertCircle,
    Copy,
    Calendar,
    Users,
    Clock,
    X,
    Edit,
    Save,
    Plus,
    Minus,
    Trash2,
    IndianRupee,
    DollarSign,
    Euro,
    Building,
    Server,
    Globe,
    Shield,
    Cloud,
    Database,
    Cpu,
    Lock,
    Activity,
    GitBranch,
    Terminal,
    Box,
    HardDrive,
    Network,
    Key,
    Eye
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Initial Services Data with all categories
const SERVICE_DATA = [
    {
        category: "Design & Web Development",
        icon: PenTool,
        items: [
            {
                id: "uiux",
                name: "UI/UX Design",
                basePrice: 25000,
                description: "User-centric interface design with wireframes & prototypes",
                baseTime: "3-4 weeks",
                defaultSelected: true,
                category: "Design",
                hasFigma: true,
                figmaPages: 5,
                figmaPricePerPage: 2000
            },
            {
                id: "wireframe",
                name: "Wireframing",
                basePrice: 12000,
                description: "Basic layout structure and user flow planning",
                baseTime: "1-2 weeks",
                defaultSelected: false,
                category: "Design"
            },
            {
                id: "designSystem",
                name: "Design System",
                basePrice: 18000,
                description: "Complete design language with components & guidelines",
                baseTime: "3-4 weeks",
                defaultSelected: false,
                category: "Design"
            }
        ]
    },
    {
        category: "Website Development",
        icon: Code,
        items: [
            {
                id: "corporate",
                name: "Corporate Website",
                basePrice: 35000,
                description: "Professional business website with CMS integration",
                baseTime: "4-5 weeks",
                defaultSelected: true,
                category: "Development"
            },
            {
                id: "cms",
                name: "Custom CMS Development",
                basePrice: 45000,
                description: "Tailored content management system",
                baseTime: "5-6 weeks",
                defaultSelected: false,
                category: "Development"
            },
            {
                id: "ecommerce",
                name: "E-Commerce Platform",
                basePrice: 65000,
                description: "Full-featured online store with payment integration",
                baseTime: "8-10 weeks",
                defaultSelected: false,
                category: "Development"
            }
        ]
    },
    {
        category: "App Development",
        icon: Smartphone,
        items: [
            {
                id: "android",
                name: "Android Application",
                basePrice: 85000,
                description: "Native Android app development",
                baseTime: "10-12 weeks",
                defaultSelected: false,
                category: "Development"
            },
            {
                id: "ios",
                name: "iOS Application",
                basePrice: 95000,
                description: "Native iOS app development",
                baseTime: "10-12 weeks",
                defaultSelected: false,
                category: "Development"
            },
            {
                id: "reactnative",
                name: "Cross-Platform App",
                basePrice: 120000,
                description: "React Native app for both iOS & Android",
                baseTime: "12-16 weeks",
                defaultSelected: false,
                category: "Development"
            }
        ]
    },
    {
        category: "Infrastructure & Hosting",
        icon: Server,
        items: [
            {
                id: "shared_hosting",
                name: "Shared Hosting Setup",
                basePrice: 5000,
                description: "Basic shared hosting setup with cPanel",
                baseTime: "1-2 days",
                defaultSelected: false,
                category: "Infrastructure",
                recurring: true,
                billingCycle: "yearly",
                pricePerYear: 5000
            },
            {
                id: "vps_hosting",
                name: "VPS Hosting Setup",
                basePrice: 15000,
                description: "Virtual Private Server setup with control panel",
                baseTime: "2-3 days",
                defaultSelected: false,
                category: "Infrastructure",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 2500
            },
            {
                id: "dedicated_server",
                name: "Dedicated Server Setup",
                basePrice: 30000,
                description: "Dedicated server configuration & optimization",
                baseTime: "3-5 days",
                defaultSelected: false,
                category: "Infrastructure",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 15000
            },
            {
                id: "cloud_hosting",
                name: "Cloud Hosting (AWS/Azure)",
                basePrice: 20000,
                description: "Cloud infrastructure setup on AWS/Azure/GCP",
                baseTime: "3-4 days",
                defaultSelected: false,
                category: "Infrastructure",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: "Variable"
            }
        ]
    },
    {
        category: "Domain & SSL",
        icon: Globe,
        items: [
            {
                id: "domain_registration",
                name: "Domain Registration",
                basePrice: 1200,
                description: ".com/.in/.org domain registration for 1 year",
                baseTime: "1 day",
                defaultSelected: false,
                category: "Domain",
                recurring: true,
                billingCycle: "yearly",
                pricePerYear: 1200
            },
            {
                id: "domain_transfer",
                name: "Domain Transfer",
                basePrice: 800,
                description: "Transfer domain to our management",
                baseTime: "3-5 days",
                defaultSelected: false,
                category: "Domain"
            },
            {
                id: "ssl_certificate",
                name: "SSL Certificate",
                basePrice: 3000,
                description: "Standard SSL certificate installation",
                baseTime: "1 day",
                defaultSelected: false,
                category: "Domain",
                recurring: true,
                billingCycle: "yearly",
                pricePerYear: 3000
            },
            {
                id: "wildcard_ssl",
                name: "Wildcard SSL Certificate",
                basePrice: 8000,
                description: "Wildcard SSL for multiple subdomains",
                baseTime: "1 day",
                defaultSelected: false,
                category: "Domain",
                recurring: true,
                billingCycle: "yearly",
                pricePerYear: 8000
            }
        ]
    },
    {
        category: "Security Services",
        icon: Shield,
        items: [
            {
                id: "security_audit",
                name: "Security Audit",
                basePrice: 25000,
                description: "Comprehensive security audit & vulnerability assessment",
                baseTime: "2-3 weeks",
                defaultSelected: false,
                category: "Security"
            },
            {
                id: "penetration_testing",
                name: "Penetration Testing",
                basePrice: 45000,
                description: "Ethical hacking & penetration testing",
                baseTime: "3-4 weeks",
                defaultSelected: false,
                category: "Security"
            },
            {
                id: "firewall_setup",
                name: "Firewall Setup",
                basePrice: 15000,
                description: "Web Application Firewall (WAF) configuration",
                baseTime: "3-5 days",
                defaultSelected: false,
                category: "Security"
            },
            {
                id: "security_monitoring",
                name: "Security Monitoring",
                basePrice: 12000,
                description: "24/7 security monitoring & alert system",
                baseTime: "Setup in 1 week",
                defaultSelected: false,
                category: "Security",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 8000
            },
            {
                id: "ddos_protection",
                name: "DDoS Protection",
                basePrice: 18000,
                description: "DDoS mitigation & protection setup",
                baseTime: "2-3 days",
                defaultSelected: false,
                category: "Security",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 5000
            }
        ]
    },
    {
        category: "DevOps & Deployment",
        icon: GitBranch,
        items: [
            {
                id: "ci_cd_setup",
                name: "CI/CD Pipeline Setup",
                basePrice: 25000,
                description: "Continuous Integration & Deployment pipeline",
                baseTime: "1-2 weeks",
                defaultSelected: false,
                category: "DevOps"
            },
            {
                id: "docker_setup",
                name: "Docker Containerization",
                basePrice: 20000,
                description: "Docker container setup & orchestration",
                baseTime: "1-2 weeks",
                defaultSelected: false,
                category: "DevOps"
            },
            {
                id: "kubernetes_setup",
                name: "Kubernetes Setup",
                basePrice: 35000,
                description: "Kubernetes cluster setup & management",
                baseTime: "2-3 weeks",
                defaultSelected: false,
                category: "DevOps"
            },
            {
                id: "monitoring_setup",
                name: "Monitoring & Logging",
                basePrice: 18000,
                description: "Monitoring stack setup (Prometheus, Grafana, ELK)",
                baseTime: "1-2 weeks",
                defaultSelected: false,
                category: "DevOps"
            },
            {
                id: "backup_setup",
                name: "Backup & Disaster Recovery",
                basePrice: 15000,
                description: "Automated backup system & recovery plan",
                baseTime: "1 week",
                defaultSelected: false,
                category: "DevOps"
            }
        ]
    },
    {
        category: "Database Services",
        icon: Database,
        items: [
            {
                id: "database_design",
                name: "Database Design",
                basePrice: 20000,
                description: "Database schema design & optimization",
                baseTime: "2-3 weeks",
                defaultSelected: false,
                category: "Database"
            },
            {
                id: "database_migration",
                name: "Database Migration",
                basePrice: 15000,
                description: "Database migration & data transfer",
                baseTime: "1-2 weeks",
                defaultSelected: false,
                category: "Database"
            },
            {
                id: "database_optimization",
                name: "Database Optimization",
                basePrice: 12000,
                description: "Database performance tuning & optimization",
                baseTime: "1 week",
                defaultSelected: false,
                category: "Database"
            },
            {
                id: "database_backup",
                name: "Database Backup Setup",
                basePrice: 8000,
                description: "Automated database backup system",
                baseTime: "3-5 days",
                defaultSelected: false,
                category: "Database"
            }
        ]
    },
    {
        category: "Digital Marketing",
        icon: BarChart3,
        items: [
            {
                id: "seo",
                name: "SEO Optimization",
                basePrice: 18000,
                description: "Search engine optimization & ranking improvement",
                baseTime: "Ongoing",
                defaultSelected: false,
                category: "Marketing",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 15000
            },
            {
                id: "smm",
                name: "Social Media Marketing",
                basePrice: 25000,
                description: "Monthly social media management & campaigns",
                baseTime: "Monthly",
                defaultSelected: false,
                category: "Marketing",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 25000
            },
            {
                id: "content",
                name: "Content Strategy",
                basePrice: 15000,
                description: "Content planning, creation & calendar management",
                baseTime: "Ongoing",
                defaultSelected: false,
                category: "Marketing",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 12000
            },
            {
                id: "ppc_management",
                name: "PPC Campaign Management",
                basePrice: 20000,
                description: "Google Ads/Facebook Ads management",
                baseTime: "Monthly",
                defaultSelected: false,
                category: "Marketing",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 15000
            }
        ]
    },
    {
        category: "Maintenance & Support",
        icon: Activity,
        items: [
            {
                id: "monthly_maintenance",
                name: "Monthly Maintenance",
                basePrice: 12000,
                description: "Monthly updates, backups & performance monitoring",
                baseTime: "Ongoing",
                defaultSelected: false,
                category: "Maintenance",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 12000
            },
            {
                id: "technical_support",
                name: "Technical Support",
                basePrice: 8000,
                description: "24/7 technical support & troubleshooting",
                baseTime: "Ongoing",
                defaultSelected: false,
                category: "Maintenance",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 8000
            },
            {
                id: "bug_fixes",
                name: "Bug Fixes & Updates",
                basePrice: 10000,
                description: "Monthly bug fixes & minor updates",
                baseTime: "Ongoing",
                defaultSelected: false,
                category: "Maintenance",
                recurring: true,
                billingCycle: "monthly",
                pricePerMonth: 10000
            }
        ]
    }
];

export default function QuotationCalculator() {
    const [selected, setSelected] = useState({});
    const [taxRate, setTaxRate] = useState(18);
    const [clientName, setClientName] = useState("Acme Corporation");
    const [projectName, setProjectName] = useState("Corporate Website Redesign");
    const [currency, setCurrency] = useState("₹");
    const [discount, setDiscount] = useState(0);
    const [totalWeeks, setTotalWeeks] = useState(0);
    const [loading, setLoading] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [recurringBillingPeriod, setRecurringBillingPeriod] = useState(12); // Months
    const { toast } = useToast();
    const containerRef = useRef(null);

    // Initialize with default selected services
    useEffect(() => {
        const defaultSelected = {};
        SERVICE_DATA.forEach(group => {
            group.items.forEach(item => {
                if (item.defaultSelected) {
                    defaultSelected[item.id] = {
                        ...item,
                        customPrice: item.basePrice,
                        customTime: item.baseTime,
                        quantity: 1,
                        figmaPages: item.hasFigma ? item.figmaPages : 0,
                        figmaPricePerPage: item.hasFigma ? item.figmaPricePerPage : 0,
                        customDescription: item.description,
                        isRecurring: item.recurring || false,
                        billingCycle: item.billingCycle || 'one-time',
                        recurringPrice: item.pricePerMonth || item.pricePerYear || 0
                    };
                }
            });
        });
        setSelected(defaultSelected);
    }, []);

    // Calculate total timeline
    useEffect(() => {
        let weeks = 0;

        Object.values(selected).forEach(service => {
            const timeMatch = service.customTime.match(/(\d+)/);
            if (timeMatch) {
                weeks += parseInt(timeMatch[1]);
            } else if (service.customTime.includes('weeks')) {
                weeks += 2;
            } else if (service.customTime.includes('Month')) {
                weeks += 4;
            }

            if (service.hasFigma && service.figmaPages > 0) {
                weeks += Math.ceil(service.figmaPages / 5);
            }
        });

        setTotalWeeks(Math.max(4, weeks));
    }, [selected]);

    const toggleItem = (id, item) => {
        setSelected((prev) => {
            const copy = { ...prev };
            if (copy[id]) {
                delete copy[id];
                toast({
                    title: "Service Removed",
                    description: `${item.name} removed from quotation`,
                });
            } else {
                copy[id] = {
                    ...item,
                    customPrice: item.basePrice,
                    customTime: item.baseTime,
                    quantity: 1,
                    figmaPages: item.hasFigma ? item.figmaPages : 0,
                    figmaPricePerPage: item.hasFigma ? item.figmaPricePerPage : 0,
                    customDescription: item.description,
                    isRecurring: item.recurring || false,
                    billingCycle: item.billingCycle || 'one-time',
                    recurringPrice: item.pricePerMonth || item.pricePerYear || 0
                };
                toast({
                    title: "Service Added",
                    description: `${item.name} added to quotation`,
                });
            }
            return copy;
        });
    };

    const updateQuantity = (id, increment) => {
        setSelected((prev) => {
            const copy = { ...prev };
            if (copy[id]) {
                const newQuantity = Math.max(1, copy[id].quantity + increment);
                copy[id] = {
                    ...copy[id],
                    quantity: newQuantity
                };
            }
            return copy;
        });
    };

    const updateFigmaPages = (id, pages) => {
        setSelected((prev) => {
            const copy = { ...prev };
            if (copy[id] && copy[id].hasFigma) {
                copy[id] = {
                    ...copy[id],
                    figmaPages: Math.max(0, pages)
                };
            }
            return copy;
        });
    };

    const openEditDialog = (serviceId) => {
        if (selected[serviceId]) {
            setEditingService(serviceId);
            setEditDialogOpen(true);
        }
    };

    const saveServiceEdit = (formData) => {
        setSelected((prev) => {
            const copy = { ...prev };
            if (copy[editingService]) {
                copy[editingService] = {
                    ...copy[editingService],
                    customPrice: formData.price,
                    customTime: formData.time,
                    customDescription: formData.description,
                    figmaPages: formData.figmaPages || 0,
                    figmaPricePerPage: formData.figmaPricePerPage || 2000,
                    isRecurring: formData.isRecurring || false,
                    billingCycle: formData.billingCycle || 'one-time',
                    recurringPrice: formData.recurringPrice || 0
                };
            }
            return copy;
        });

        toast({
            title: "Service Updated",
            description: "Service details have been updated",
        });
        setEditDialogOpen(false);
    };

    const removeItem = (id) => {
        const serviceName = selected[id]?.name || 'Service';
        setSelected((prev) => {
            const copy = { ...prev };
            if (copy[id]) {
                delete copy[id];
            }
            return copy;
        });
        toast({
            title: "Service Removed",
            description: `${serviceName} removed from quotation`,
        });
    };

    // Calculate totals
    const servicesTotal = Object.values(selected).reduce(
        (sum, s) => {
            const servicePrice = s.customPrice * (s.quantity || 1);
            const figmaPrice = s.hasFigma ? s.figmaPages * s.figmaPricePerPage : 0;
            return sum + servicePrice + figmaPrice;
        },
        0
    );

    // Calculate recurring costs
    const recurringTotal = Object.values(selected).reduce(
        (sum, s) => {
            if (s.isRecurring) {
                let recurringPrice = 0;
                if (s.billingCycle === 'monthly') {
                    recurringPrice = (s.recurringPrice || 0) * recurringBillingPeriod;
                } else if (s.billingCycle === 'yearly') {
                    const years = Math.ceil(recurringBillingPeriod / 12);
                    recurringPrice = (s.recurringPrice || 0) * years;
                }
                return sum + recurringPrice;
            }
            return sum;
        },
        0
    );

    const subtotal = servicesTotal + recurringTotal;
    const discountAmount = (subtotal * discount) / 100;
    const taxableAmount = subtotal - discountAmount;
    const taxAmount = (taxableAmount * taxRate) / 100;
    const grandTotal = taxableAmount + taxAmount;

    const selectedCount = Object.keys(selected).length;
    const progress = Math.min(100, (selectedCount / 15) * 100);

   // दो नए फंक्शन जोड़ें
const downloadPDF = async () => {
    if (selectedCount === 0) {
        toast({
            title: "No Services Selected",
            description: "Please select at least one service to generate quotation",
            variant: "destructive"
        });
        return;
    }

    setLoading(true);

    try {
        const quotationData = {
            clientName,
            projectName,
            date: new Date().toLocaleDateString('en-IN'),
            quoteNumber: `CFT-${Math.floor(1000 + Math.random() * 9000)}`,
            services: Object.values(selected).map(s => ({
                name: s.name,
                basePrice: s.basePrice,
                customPrice: s.customPrice,
                quantity: s.quantity || 1,
                total: s.customPrice * (s.quantity || 1),
                estimatedTime: s.customTime,
                description: s.customDescription,
                hasFigma: s.hasFigma,
                figmaDetails: s.hasFigma ? {
                    pages: s.figmaPages,
                    pricePerPage: s.figmaPricePerPage,
                    total: s.figmaPages * s.figmaPricePerPage
                } : null,
                isRecurring: s.isRecurring,
                billingCycle: s.billingCycle,
                recurringPrice: s.recurringPrice || 0,
                recurringTotal: s.isRecurring ? (s.billingCycle === 'monthly' ?
                    (s.recurringPrice * recurringBillingPeriod) :
                    (s.billingCycle === 'yearly' ?
                        (s.recurringPrice * Math.ceil(recurringBillingPeriod / 12)) :
                        0)) : 0
            })),
            financials: {
                subtotal,
                discount: {
                    percentage: discount,
                    amount: discountAmount
                },
                taxableAmount,
                tax: {
                    percentage: taxRate,
                    amount: taxAmount
                },
                grandTotal
            },
            recurringPeriod: `${recurringBillingPeriod} months`,
            timeline: `${totalWeeks} weeks`,
            currency
        };

        const content = generateQuotationHTML(quotationData);

        // केवल डाउनलोड करें
        const blob = new Blob([content], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Quotation_${clientName.replace(/\s+/g, '_')}_${Date.now()}.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        toast({
            title: "Quotation Downloaded",
            description: "HTML file has been downloaded successfully",
        });

    } catch (error) {
        console.error('Download error:', error);
        toast({
            title: "Download Failed",
            description: "Failed to download quotation. Please try again.",
            variant: "destructive"
        });
    } finally {
        setLoading(false);
    }
};

// नया फंक्शन: प्रिंट/प्रिव्यू के लिए
const previewQuotation = () => {
    if (selectedCount === 0) {
        toast({
            title: "No Services Selected",
            description: "Please select at least one service to generate quotation",
            variant: "destructive"
        });
        return;
    }

    try {
        const quotationData = {
            clientName,
            projectName,
            date: new Date().toLocaleDateString('en-IN'),
            quoteNumber: `CFT-${Math.floor(1000 + Math.random() * 9000)}`,
            services: Object.values(selected).map(s => ({
                name: s.name,
                basePrice: s.basePrice,
                customPrice: s.customPrice,
                quantity: s.quantity || 1,
                total: s.customPrice * (s.quantity || 1),
                estimatedTime: s.customTime,
                description: s.customDescription,
                hasFigma: s.hasFigma,
                figmaDetails: s.hasFigma ? {
                    pages: s.figmaPages,
                    pricePerPage: s.figmaPricePerPage,
                    total: s.figmaPages * s.figmaPricePerPage
                } : null,
                isRecurring: s.isRecurring,
                billingCycle: s.billingCycle,
                recurringPrice: s.recurringPrice || 0,
                recurringTotal: s.isRecurring ? (s.billingCycle === 'monthly' ?
                    (s.recurringPrice * recurringBillingPeriod) :
                    (s.billingCycle === 'yearly' ?
                        (s.recurringPrice * Math.ceil(recurringBillingPeriod / 12)) :
                        0)) : 0
            })),
            financials: {
                subtotal,
                discount: {
                    percentage: discount,
                    amount: discountAmount
                },
                taxableAmount,
                tax: {
                    percentage: taxRate,
                    amount: taxAmount
                },
                grandTotal
            },
            recurringPeriod: `${recurringBillingPeriod} months`,
            timeline: `${totalWeeks} weeks`,
            currency
        };

        const content = generateQuotationHTML(quotationData);
        
        // नई विंडो में खोलें (प्रिंट के लिए)
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(content);
            printWindow.document.close();
            
            // थोड़ा समय देने के बाद प्रिंट डायलॉग दिखाएं
            setTimeout(() => {
                printWindow.print();
            }, 500);
        }

    } catch (error) {
        console.error('Preview error:', error);
        toast({
            title: "Preview Failed",
            description: "Failed to open preview. Please try again.",
            variant: "destructive"
        });
    }
};

    const generateQuotationHTML = (data) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quotation - ${data.clientName}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: #fff;
            padding: 20px;
        }
        
        .container {
            max-width: 210mm;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.05);
            border-radius: 8px;
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            color: white;
            padding: 30px 40px;
            text-align: center;
        }
        
        .company-name {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 5px;
        }
        
        .company-tagline {
            font-size: 14px;
            opacity: 0.9;
            margin-bottom: 20px;
        }
        
        .contact-info {
            font-size: 12px;
            opacity: 0.8;
        }
        
        .client-info {
            padding: 25px 40px;
            background: #f8fafc;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
        
        .info-item strong {
            display: block;
            color: #4f46e5;
            font-size: 12px;
            margin-bottom: 4px;
            font-weight: 600;
        }
        
        .info-item span {
            font-weight: 500;
            color: #1f2937;
        }
        
        .services-section {
            padding: 25px 40px;
        }
        
        .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #4f46e5;
            margin-bottom: 20px;
            padding-bottom: 8px;
            border-bottom: 2px solid #4f46e5;
        }
        
        .service-item {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .service-item:last-child {
            border-bottom: none;
        }
        
        .service-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 10px;
        }
        
        .service-name {
            font-weight: 600;
            color: #1f2937;
            font-size: 15px;
        }
        
        .service-price {
            font-weight: 700;
            color: #4f46e5;
            font-size: 15px;
        }
        
        .service-details {
            font-size: 13px;
            color: #6b7280;
            margin-bottom: 8px;
            line-height: 1.5;
        }
        
        .service-description {
            font-size: 13px;
            color: #6b7280;
            margin-top: 5px;
            line-height: 1.4;
        }
        
        .recurring-badge {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 3px 10px;
            border-radius: 12px;
            font-size: 11px;
            margin-left: 8px;
            font-weight: 500;
        }
        
        .figma-details {
            background: #e0e7ff;
            padding: 8px 12px;
            border-radius: 6px;
            margin-top: 8px;
            font-size: 13px;
            color: #4f46e5;
            border-left: 3px solid #4f46e5;
        }
        
        .recurring-details {
            background: #d1fae5;
            padding: 8px 12px;
            border-radius: 6px;
            margin-top: 8px;
            font-size: 13px;
            color: #059669;
            border-left: 3px solid #10b981;
        }
        
        .summary-section {
            padding: 25px 40px;
            background: #f8fafc;
        }
        
        .summary-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        
        .summary-table td {
            padding: 10px 0;
            color: #4b5563;
            font-size: 14px;
        }
        
        .summary-table tr.total td {
            border-top: 2px solid #4f46e5;
            padding-top: 15px;
            font-weight: 600;
            color: #1f2937;
            font-size: 16px;
        }
        
        .total-amount {
            font-size: 24px;
            color: #4f46e5;
            font-weight: 700;
        }
        
        .text-right {
            text-align: right;
        }
        
        .text-left {
            text-align: left;
        }
        
        .summary-divider {
            height: 1px;
            background: #e5e7eb;
            margin: 8px 0;
        }
        
        .highlight {
            background: #e0e7ff;
            padding: 8px 12px;
            border-radius: 6px;
            margin: 10px 0;
            border: 1px solid #c7d2fe;
        }
        
        .notes {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
        }
        
        .notes h4 {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #4f46e5;
        }
        
        .notes ul {
            list-style: none;
            font-size: 12px;
            color: #6b7280;
            padding-left: 0;
        }
        
        .notes li {
            margin-bottom: 6px;
            position: relative;
            padding-left: 20px;
        }
        
        .notes li:before {
            content: "•";
            position: absolute;
            left: 8px;
            color: #4f46e5;
            font-weight: bold;
        }
        
        .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 11px;
            color: #9ca3af;
            padding: 20px;
            border-top: 1px solid #e5e7eb;
        }
        
        .color-indigo {
            color: #4f46e5;
        }
        
        .color-emerald {
            color: #10b981;
        }
        
        .color-slate {
            color: #64748b;
        }
        
        .bg-indigo-50 {
            background-color: #e0e7ff;
        }
        
        .bg-emerald-50 {
            background-color: #d1fae5;
        }
        
        /* Print styles */
        @media print {
            body {
                padding: 0;
                margin: 0;
                font-size: 12px;
            }
            
            .container {
                max-width: 100%;
                box-shadow: none;
                border-radius: 0;
            }
            
            .header {
                padding: 20px 30px;
            }
            
            .company-name {
                font-size: 24px;
            }
            
            .client-info,
            .services-section,
            .summary-section {
                padding: 20px 30px;
            }
            
            .service-item {
                padding-bottom: 12px;
                margin-bottom: 12px;
            }
            
            .total-amount {
                font-size: 20px;
            }
            
            .notes {
                margin-top: 20px;
                padding-top: 15px;
            }
            
            .footer {
                margin-top: 20px;
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="company-name">CoxFuture Technologies</div>
            <div class="company-tagline">Complete Digital Solutions Provider</div>
            <div class="contact-info">info@coxfuture.com | +91 92177 90770 | www.coxfuture.com</div>
        </div>
        
        <div class="client-info">
            <div class="info-grid">
                <div class="info-item">
                    <strong>Client Name</strong>
                    <span>${data.clientName}</span>
                </div>
                <div class="info-item">
                    <strong>Project Name</strong>
                    <span>${data.projectName}</span>
                </div>
                <div class="info-item">
                    <strong>Quotation Date</strong>
                    <span>${data.date}</span>
                </div>
                <div class="info-item">
                    <strong>Quotation Number</strong>
                    <span>${data.quoteNumber}</span>
                </div>
            </div>
        </div>
        
        <div class="services-section">
            <h3 class="section-title">Services Breakdown</h3>
            
            ${data.services.map(service => `
                <div class="service-item">
                    <div class="service-header">
                        <div class="service-name">
                            ${service.name} 
                            ${service.isRecurring ? `<span class="recurring-badge">${service.billingCycle.toUpperCase()}</span>` : ''}
                        </div>
                        <div class="service-price">${data.currency} ${(service.total + (service.recurringTotal || 0)).toLocaleString('en-IN')}</div>
                    </div>
                    
                    <div class="service-details">
                        <strong class="color-indigo">Time:</strong> ${service.estimatedTime} | 
                        <strong class="color-indigo">Setup:</strong> ${data.currency} ${service.customPrice.toLocaleString('en-IN')}
                    </div>
                    
                    ${service.description ? `
                        <div class="service-description">${service.description}</div>
                    ` : ''}
                    
                    ${service.hasFigma && service.figmaDetails ? `
                        <div class="figma-details">
                            <strong>Figma Design:</strong> ${service.figmaDetails.pages} pages 
                            @ ${data.currency}${service.figmaDetails.pricePerPage}/page = 
                            ${data.currency} ${service.figmaDetails.total.toLocaleString('en-IN')}
                        </div>
                    ` : ''}
                    
                    ${service.isRecurring ? `
                        <div class="recurring-details">
                            <strong>Recurring (${service.billingCycle}):</strong> 
                            ${data.currency} ${service.recurringPrice.toLocaleString('en-IN')} 
                            for ${data.recurringPeriod}
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
        
        <div class="summary-section">
            <h3 class="section-title">Financial Summary</h3>
            
            <div class="highlight">
                <table class="summary-table">
                    <tr>
                        <td class="text-left">One-Time Services Total</td>
                        <td class="text-right">${data.currency} ${data.financials.subtotal.toLocaleString('en-IN')}</td>
                    </tr>
                    
                    ${data.services.some(s => s.isRecurring) ? `
                    <tr>
                        <td class="text-left color-emerald">Recurring Services (${data.recurringPeriod})</td>
                        <td class="text-right color-emerald">${data.currency} ${data.services.filter(s => s.isRecurring).reduce((sum, s) => sum + (s.recurringTotal || 0), 0).toLocaleString('en-IN')}</td>
                    </tr>
                    ` : ''}
                </table>
            </div>
            
            <table class="summary-table">
                ${data.financials.discount.percentage > 0 ? `
                <tr>
                    <td class="text-left">Discount (${data.financials.discount.percentage}%)</td>
                    <td class="text-right color-emerald">- ${data.currency} ${data.financials.discount.amount.toLocaleString('en-IN')}</td>
                </tr>
                ` : ''}
                
                <tr>
                    <td class="text-left">Taxable Amount</td>
                    <td class="text-right">${data.currency} ${data.financials.taxableAmount.toLocaleString('en-IN')}</td>
                </tr>
                
                <tr>
                    <td class="text-left">GST @ ${data.financials.tax.percentage}%</td>
                    <td class="text-right">${data.currency} ${data.financials.tax.amount.toLocaleString('en-IN')}</td>
                </tr>
                
                <tr class="total">
                    <td class="text-left">TOTAL AMOUNT</td>
                    <td class="text-right total-amount">${data.currency} ${data.financials.grandTotal.toLocaleString('en-IN')}</td>
                </tr>
            </table>
            
            <div class="notes">
                <h4>Notes & Terms:</h4>
                <ul>
                    <li>This quotation is valid for 15 days from the date of issue</li>
                    <li>Estimated project timeline: ${data.timeline}</li>
                    <li>One-time setup costs are billed upfront</li>
                    <li>Recurring services billed ${data.recurringPeriod} in advance</li>
                    <li>30% advance payment required to commence the project</li>
                    <li>Any changes in scope will be billed separately</li>
                    <li>Final deliverables include source files and documentation</li>
                    <li>SSL certificates and domain registrations require annual renewal</li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p>Thank you for choosing CoxFuture Technologies! We look forward to working with you.</p>
            <p class="color-slate" style="margin-top: 10px;">
                Generated on ${new Date().toLocaleDateString('en-IN', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}
            </p>
        </div>
    </div>
    
    <script>
        window.onload = function() {
            setTimeout(() => {
                window.print();
            }, 500);
        };
    </script>
</body>
</html>
    `;
};
    const copyToClipboard = () => {
        const summary = `
QUOTATION SUMMARY
=================
Client: ${clientName}
Project: ${projectName}
Date: ${new Date().toLocaleDateString('en-IN')}
Quote #: CFT-${Math.floor(1000 + Math.random() * 9000)}

SERVICES:
${Object.values(selected).map(s => `
• ${s.name} 
  Time: ${s.customTime}
  One-Time Setup: ${currency}${s.customPrice.toLocaleString('en-IN')}
  ${s.isRecurring ? `Recurring (${s.billingCycle}): ${currency}${s.recurringPrice.toLocaleString('en-IN')}` : ''}
  Total: ${currency}${(s.customPrice * (s.quantity || 1)).toLocaleString('en-IN')}
  ${s.hasFigma ? `Figma: ${s.figmaPages} pages @ ${currency}${s.figmaPricePerPage}/page = ${currency}${(s.figmaPages * s.figmaPricePerPage).toLocaleString('en-IN')}` : ''}
`).join('\n')}

CALCULATION:
────────────
One-Time Services: ${currency}${servicesTotal.toLocaleString('en-IN')}
Recurring Services (${recurringBillingPeriod} months): ${currency}${recurringTotal.toLocaleString('en-IN')}
Subtotal: ${currency}${subtotal.toLocaleString('en-IN')}
Discount (${discount}%): -${currency}${discountAmount.toLocaleString('en-IN')}
Taxable Amount: ${currency}${taxableAmount.toLocaleString('en-IN')}
GST @ ${taxRate}%: ${currency}${taxAmount.toLocaleString('en-IN')}
────────────────────
GRAND TOTAL: ${currency}${grandTotal.toLocaleString('en-IN')}

Estimated Timeline: ${totalWeeks} weeks
Valid Until: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')}

Terms & Conditions Apply.
    `.trim();

        navigator.clipboard.writeText(summary);
        toast({
            title: "Summary Copied",
            description: "Quotation summary copied to clipboard",
        });
    };

    const resetQuotation = () => {
        setSelected({});
        setDiscount(0);
        setTaxRate(18);
        setRecurringBillingPeriod(12);
        toast({
            title: "Quotation Reset",
            description: "All selections have been cleared",
        });
    };

    const formatCurrency = (amount) => {
        return `${currency} ${amount.toLocaleString('en-IN')}`;
    };

    const getServiceTotal = (service) => {
        const servicePrice = service.customPrice * (service.quantity || 1);
        const figmaPrice = service.hasFigma ? service.figmaPages * service.figmaPricePerPage : 0;
        return servicePrice + figmaPrice;
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Design': return <PenTool className="w-5 h-5 text-indigo-600" />;
            case 'Development': return <Code className="w-5 h-5 text-indigo-600" />;
            case 'Infrastructure': return <Server className="w-5 h-5 text-indigo-600" />;
            case 'Domain': return <Globe className="w-5 h-5 text-indigo-600" />;
            case 'Security': return <Shield className="w-5 h-5 text-indigo-600" />;
            case 'DevOps': return <GitBranch className="w-5 h-5 text-indigo-600" />;
            case 'Database': return <Database className="w-5 h-5 text-indigo-600" />;
            case 'Marketing': return <BarChart3 className="w-5 h-5 text-indigo-600" />;
            case 'Maintenance': return <Activity className="w-5 h-5 text-indigo-600" />;
            default: return <Box className="w-5 h-5 text-indigo-600" />;
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Edit Service Dialog */}
            <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
                <DialogContent className="sm:max-w-[500px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-slate-900">Edit Service Details</DialogTitle>
                        <DialogDescription className="text-slate-600">
                            Customize the price, time, and description for this service.
                        </DialogDescription>
                    </DialogHeader>

                    {editingService && selected[editingService] && (
                        <EditServiceForm
                            service={selected[editingService]}
                            onSave={saveServiceEdit}
                            onCancel={() => setEditDialogOpen(false)}
                            currency={currency}
                            recurringBillingPeriod={recurringBillingPeriod}
                            setRecurringBillingPeriod={setRecurringBillingPeriod}
                        />
                    )}
                </DialogContent>
            </Dialog>

            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 text-base">
                            <Sparkles className="w-5 h-5 mr-2 text-white" />
                            Complete Project Quotation System
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Professional Quotation
                            <span className="block text-indigo-300 mt-2">Builder & Manager</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Generate comprehensive project quotations with infrastructure, security, DevOps, and recurring services.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                                <Server className="w-4 h-4 text-indigo-300" />
                                <span className="text-sm">Infrastructure</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                                <Shield className="w-4 h-4 text-indigo-300" />
                                <span className="text-sm">Security</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                                <GitBranch className="w-4 h-4 text-indigo-300" />
                                <span className="text-sm">DevOps</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                                <Globe className="w-4 h-4 text-indigo-300" />
                                <span className="text-sm">Domains</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 md:py-12 -mt-8 md:-mt-12 relative z-20">
                <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Left Column - Configuration */}
                    <div className="lg:col-span-2 space-y-6 md:space-y-8">
                        {/* Client & Project Info */}
                        <Card className="border-slate-200 shadow-lg bg-gradient-to-br from-white to-slate-50">
                            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                <CardTitle className="flex items-center gap-3 text-slate-900">
                                    <Building className="w-6 h-6 text-indigo-600" />
                                    Client & Project Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="clientName" className="text-slate-700 font-medium">
                                            Client Name *
                                        </Label>
                                        <Input
                                            id="clientName"
                                            value={clientName}
                                            onChange={(e) => setClientName(e.target.value)}
                                            className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                                            placeholder="Enter client name"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="projectName" className="text-slate-700 font-medium">
                                            Project Name *
                                        </Label>
                                        <Input
                                            id="projectName"
                                            value={projectName}
                                            onChange={(e) => setProjectName(e.target.value)}
                                            className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                                            placeholder="Enter project name"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recurring Billing Period */}
                        <Card className="border-slate-200 shadow-lg bg-gradient-to-br from-white to-slate-50">
                            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                <CardTitle className="flex items-center gap-3 text-slate-900">
                                    <Calendar className="w-6 h-6 text-indigo-600" />
                                    Recurring Services Period
                                </CardTitle>
                                <CardDescription className="text-slate-600">
                                    Set billing period for recurring services (hosting, SSL, maintenance, etc.)
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-slate-700 font-medium">
                                            Billing Period for Recurring Services
                                        </Label>
                                        <Badge variant="outline" className="text-indigo-700 border-indigo-300">
                                            {recurringBillingPeriod} months
                                        </Badge>
                                    </div>

                                    <div className="flex items-center justify-center gap-6">
                                        {[3, 6, 12, 24].map((months) => (
                                            <Button
                                                key={months}
                                                variant={recurringBillingPeriod === months ? "default" : "outline"}
                                                onClick={() => setRecurringBillingPeriod(months)}
                                                className={
                                                    recurringBillingPeriod === months
                                                        ? "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                                                        : "bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                                                }

                                            >
                                                {months} {months === 1 ? 'Month' : 'Months'}
                                            </Button>
                                        ))}
                                    </div>

                                    <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                                        <p>Recurring services will be billed for <strong>{recurringBillingPeriod} months</strong> in advance.</p>
                                        <p className="mt-1">Includes: Hosting, SSL certificates, Domain renewals, Maintenance plans, Security monitoring.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Services Selection */}
                        <Card className="border-slate-200 shadow-lg bg-gradient-to-br from-white to-slate-50">
                            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="flex items-center gap-3 text-slate-900">
                                            <Layers className="w-6 h-6 text-indigo-600" />
                                            Select Services
                                        </CardTitle>
                                        <CardDescription className="text-slate-600">
                                            {selectedCount} services selected • {formatCurrency(servicesTotal + recurringTotal)}
                                        </CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-slate-700">Currency:</span>
                                        <Select value={currency} onValueChange={setCurrency}>
                                            <SelectTrigger className="w-38 h-8 text-slate-900 bg-white border-slate-300">
                                                <SelectValue placeholder="Currency" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white border-slate-200">
                                                <SelectItem value="₹" className="text-slate-900 hover:bg-slate-100">
                                                    <div className="flex items-center gap-2">
                                                        <IndianRupee className="w-4 h-4" />
                                                        <span>INR (₹)</span>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="$" className="text-slate-900 hover:bg-slate-100">
                                                    <div className="flex items-center gap-2">
                                                        <DollarSign className="w-4 h-4" />
                                                        <span>USD ($)</span>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="€" className="text-slate-900 hover:bg-slate-100">
                                                    <div className="flex items-center gap-2">
                                                        <Euro className="w-4 h-4" />
                                                        <span>EUR (€)</span>
                                                    </div>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <Tabs defaultValue="all" className="w-full">
                                    <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6 bg-slate-100 overflow-x-auto">
                                        <TabsTrigger value="all" className="text-slate-700 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                                            All
                                        </TabsTrigger>
                                        <TabsTrigger value="Infrastructure" className="text-slate-700 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                                            Infrastructure
                                        </TabsTrigger>
                                        <TabsTrigger value="Security" className="text-slate-700 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                                            Security
                                        </TabsTrigger>
                                        <TabsTrigger value="DevOps" className="text-slate-700 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                                            DevOps
                                        </TabsTrigger>
                                        <TabsTrigger value="Database" className="text-slate-700 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                                            Database
                                        </TabsTrigger>
                                        <TabsTrigger value="selected" className="text-slate-700 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                                            Selected ({selectedCount})
                                        </TabsTrigger>
                                    </TabsList>

                                    {/* All Services Tab */}
                                    <TabsContent value="all" className="space-y-8">
                                        {SERVICE_DATA.map((group, i) => (
                                            <div key={i} className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-indigo-100 rounded-lg">
                                                            <group.icon className="w-5 h-5 text-indigo-600" />
                                                        </div>
                                                        <h3 className="text-lg md:text-xl font-bold text-slate-900">
                                                            {group.category}
                                                        </h3>
                                                    </div>
                                                    <Badge variant="outline" className="text-indigo-700 border-indigo-300 bg-indigo-50">
                                                        {group.items.filter(item => selected[item.id]).length}/{group.items.length} selected
                                                    </Badge>
                                                </div>

                                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                                                    {group.items.map((item) => {
                                                        const isSelected = selected[item.id];
                                                        const serviceTotal = isSelected ? getServiceTotal(selected[item.id]) : 0;

                                                        return (
                                                            <motion.div
                                                                key={item.id}
                                                                whileHover={{ y: -4 }}
                                                                whileTap={{ scale: 0.98 }}
                                                                onClick={() => toggleItem(item.id, item)}
                                                                className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 bg-white
                                  ${isSelected
                                                                        ? "border-indigo-500 bg-gradient-to-br from-indigo-50 to-white shadow-lg shadow-indigo-100"
                                                                        : "border-slate-200 hover:border-indigo-300 hover:shadow-md"
                                                                    }`}
                                                            >
                                                                <div className="flex justify-between items-start mb-3">
                                                                    <div>
                                                                        <h4 className="font-bold text-slate-900 text-sm">
                                                                            {item.name}
                                                                        </h4>
                                                                        {item.recurring && (
                                                                            <Badge variant="secondary" className="mt-1 text-xs bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                                                                {item.billingCycle === 'monthly' ? 'Monthly' : 'Yearly'} Billing
                                                                            </Badge>
                                                                        )}
                                                                    </div>
                                                                    {isSelected && (
                                                                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                                                    )}
                                                                </div>

                                                                <p className="text-xs text-slate-600 mb-3 line-clamp-2">
                                                                    {item.description}
                                                                </p>

                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center">
                                                                        <span className="text-xs text-slate-600">Setup:</span>
                                                                        <span className="text-xs font-medium text-slate-900">
                                                                            {formatCurrency(item.basePrice)}
                                                                        </span>
                                                                    </div>

                                                                    {item.recurring && (
                                                                        <div className="flex justify-between items-center">
                                                                            <span className="text-xs text-slate-600">Recurring:</span>
                                                                            <span className="text-xs font-bold text-emerald-600">
                                                                                {item.billingCycle === 'monthly'
                                                                                    ? `${formatCurrency(item.pricePerMonth)}/month`
                                                                                    : `${formatCurrency(item.pricePerYear)}/year`
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    )}

                                                                    <div className="flex items-center justify-between">
                                                                        <div className="flex items-center gap-1 text-xs text-slate-600">
                                                                            <Clock className="w-3 h-3" />
                                                                            {item.baseTime}
                                                                        </div>

                                                                        <Badge
                                                                            variant={isSelected ? "default" : "outline"}
                                                                            className={isSelected
                                                                                ? "bg-indigo-600 hover:bg-indigo-700 text-xs text-white"
                                                                                : "text-xs text-slate-700 border-slate-300 bg-slate-50"
                                                                            }
                                                                        >
                                                                            {isSelected ? "Selected" : "Add"}
                                                                        </Badge>
                                                                    </div>
                                                                </div>

                                                                {isSelected && (
                                                                    <div className="absolute -top-2 -right-2">
                                                                        <Button
                                                                            size="sm"
                                                                            variant="secondary"
                                                                            className="h-6 w-6 p-0 rounded-full bg-white border border-indigo-300 hover:bg-indigo-50 shadow-sm"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                openEditDialog(item.id);
                                                                            }}
                                                                        >
                                                                            <Edit className="w-3 h-3 text-indigo-600" />
                                                                        </Button>
                                                                    </div>
                                                                )}
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </TabsContent>

                                    {/* Category Tabs */}
                                    {['Infrastructure', 'Security', 'DevOps', 'Database'].map(category => (
                                        <TabsContent key={category} value={category}>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-indigo-100 rounded-lg">
                                                            {getCategoryIcon(category)}
                                                        </div>
                                                        <h3 className="text-xl font-bold text-slate-900">
                                                            {category} Services
                                                        </h3>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {SERVICE_DATA.flatMap(group =>
                                                        group.items.filter(item => item.category === category)
                                                    ).map((item) => {
                                                        const isSelected = selected[item.id];

                                                        return (
                                                            <motion.div
                                                                key={item.id}
                                                                whileHover={{ y: -4 }}
                                                                onClick={() => toggleItem(item.id, item)}
                                                                className={`cursor-pointer rounded-lg border-2 p-5 transition-all bg-white
                                  ${isSelected
                                                                        ? "border-indigo-500 bg-gradient-to-br from-indigo-50 to-white shadow-lg"
                                                                        : "border-slate-200 hover:border-indigo-300"
                                                                    }`}
                                                            >
                                                                <div className="flex justify-between items-start mb-3">
                                                                    <div>
                                                                        <h4 className="font-bold text-slate-900">
                                                                            {item.name}
                                                                        </h4>
                                                                        {item.recurring && (
                                                                            <Badge variant="secondary" className="mt-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                                                                {item.billingCycle === 'monthly' ? 'Monthly Billing' : 'Yearly Billing'}
                                                                            </Badge>
                                                                        )}
                                                                    </div>
                                                                    {isSelected && (
                                                                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                                    )}
                                                                </div>

                                                                <div className="space-y-2 mb-4">
                                                                    <div className="text-lg font-bold text-indigo-600">
                                                                        Setup: {formatCurrency(item.basePrice)}
                                                                    </div>

                                                                    {item.recurring && (
                                                                        <div className="text-sm font-bold text-emerald-600">
                                                                            {item.billingCycle === 'monthly'
                                                                                ? `Monthly: ${formatCurrency(item.pricePerMonth)}`
                                                                                : `Yearly: ${formatCurrency(item.pricePerYear)}`
                                                                            }
                                                                        </div>
                                                                    )}

                                                                    <div className="text-xs text-slate-600">
                                                                        Timeline: {item.baseTime}
                                                                    </div>

                                                                    <p className="text-sm text-slate-600 mt-2">
                                                                        {item.description}
                                                                    </p>
                                                                </div>

                                                                <div className="flex items-center justify-between">
                                                                    <Badge
                                                                        variant={isSelected ? "default" : "outline"}
                                                                        className={isSelected
                                                                            ? "bg-indigo-600 text-white"
                                                                            : "text-slate-700 border-slate-300 bg-slate-50"
                                                                        }
                                                                    >
                                                                        {isSelected ? "Selected" : "Select"}
                                                                    </Badge>

                                                                    {isSelected && (
                                                                        <Button
                                                                            size="sm"
                                                                            variant="ghost"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                openEditDialog(item.id);
                                                                            }}
                                                                            className="h-8 px-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                                                                        >
                                                                            <Edit className="w-3 h-3 mr-1" />
                                                                            Edit
                                                                        </Button>
                                                                    )}
                                                                </div>
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </TabsContent>
                                    ))}

                                    {/* Selected Services Tab */}
                                    <TabsContent value="selected">
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold text-slate-900">Customize Selected Services</h3>

                                            {selectedCount > 0 ? (
                                                <div className="space-y-4">
                                                    {Object.entries(selected).map(([id, service]) => (
                                                        <Card key={id} className="border-indigo-200 bg-gradient-to-r from-white to-slate-50">
                                                            <CardContent className="p-4">
                                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                                    <div className="flex-1">
                                                                        <div className="flex items-start justify-between">
                                                                            <div>
                                                                                <h4 className="font-bold text-slate-900">{service.name}</h4>
                                                                                <p className="text-sm text-slate-600 mt-1">{service.customDescription}</p>
                                                                                {service.isRecurring && (
                                                                                    <Badge className="mt-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                                                                        {service.billingCycle === 'monthly'
                                                                                            ? `Monthly: ${formatCurrency(service.recurringPrice)}`
                                                                                            : `Yearly: ${formatCurrency(service.recurringPrice)}`
                                                                                        }
                                                                                    </Badge>
                                                                                )}
                                                                            </div>

                                                                            <Button
                                                                                size="sm"
                                                                                variant="ghost"
                                                                                onClick={() => openEditDialog(id)}
                                                                                className="ml-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                                                                            >
                                                                                <Edit className="w-4 h-4 mr-1" />
                                                                                Edit
                                                                            </Button>
                                                                        </div>

                                                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                                                            <div>
                                                                                <Label className="text-xs text-slate-600">Quantity</Label>
                                                                                <div className="flex items-center gap-2 mt-1">
                                                                                    <Button
                                                                                        size="sm"
                                                                                        variant="outline"
                                                                                        onClick={() => updateQuantity(id, -1)}
                                                                                        disabled={service.quantity <= 1}
                                                                                        className="h-8 w-8 p-0 border-slate-300 text-slate-700 hover:bg-slate-50"
                                                                                    >
                                                                                        <Minus className="w-3 h-3" />
                                                                                    </Button>
                                                                                    <span className="font-medium w-8 text-center text-slate-900">{service.quantity}</span>
                                                                                    <Button
                                                                                        size="sm"
                                                                                        variant="outline"
                                                                                        onClick={() => updateQuantity(id, 1)}
                                                                                        className="h-8 w-8 p-0 border-slate-300 text-slate-700 hover:bg-slate-50"
                                                                                    >
                                                                                        <Plus className="w-3 h-3" />
                                                                                    </Button>
                                                                                </div>
                                                                            </div>

                                                                            <div>
                                                                                <Label className="text-xs text-slate-600">Setup Cost</Label>
                                                                                <div className="font-bold text-indigo-600 mt-1">
                                                                                    {formatCurrency(service.customPrice)}
                                                                                </div>
                                                                            </div>

                                                                            <div>
                                                                                <Label className="text-xs text-slate-600">Timeline</Label>
                                                                                <div className="font-medium text-slate-900 mt-1">
                                                                                    {service.customTime}
                                                                                </div>
                                                                            </div>

                                                                            <div>
                                                                                <Label className="text-xs text-slate-600">Service Total</Label>
                                                                                <div className="font-bold text-emerald-600 mt-1">
                                                                                    {formatCurrency(getServiceTotal(service))}
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        {service.hasFigma && (
                                                                            <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                                                                                <div className="flex items-center justify-between">
                                                                                    <div>
                                                                                        <h5 className="font-medium text-slate-900">Figma Design</h5>
                                                                                        <p className="text-xs text-slate-600">
                                                                                            {service.figmaPages} pages @ {formatCurrency(service.figmaPricePerPage)}/page
                                                                                        </p>
                                                                                    </div>

                                                                                    <div className="flex items-center gap-2">
                                                                                        <Button
                                                                                            size="sm"
                                                                                            variant="outline"
                                                                                            onClick={() => updateFigmaPages(id, service.figmaPages - 1)}
                                                                                            disabled={service.figmaPages <= 0}
                                                                                            className="h-8 w-8 p-0 border-slate-300 text-slate-700 hover:bg-slate-50"
                                                                                        >
                                                                                            <Minus className="w-3 h-3" />
                                                                                        </Button>
                                                                                        <span className="font-medium w-12 text-center text-slate-900">
                                                                                            {service.figmaPages} pages
                                                                                        </span>
                                                                                        <Button
                                                                                            size="sm"
                                                                                            variant="outline"
                                                                                            onClick={() => updateFigmaPages(id, service.figmaPages + 1)}
                                                                                            className="h-8 w-8 p-0 border-slate-300 text-slate-700 hover:bg-slate-50"
                                                                                        >
                                                                                            <Plus className="w-3 h-3" />
                                                                                        </Button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="text-right mt-2">
                                                                                    <span className="text-sm font-bold text-indigo-600">
                                                                                        Figma Total: {formatCurrency(service.figmaPages * service.figmaPricePerPage)}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        {service.isRecurring && (
                                                                            <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                                                                                <div className="flex items-center justify-between">
                                                                                    <div>
                                                                                        <h5 className="font-medium text-slate-900">Recurring Billing</h5>
                                                                                        <p className="text-xs text-slate-600">
                                                                                            {service.billingCycle === 'monthly'
                                                                                                ? `${formatCurrency(service.recurringPrice)} per month`
                                                                                                : `${formatCurrency(service.recurringPrice)} per year`
                                                                                            }
                                                                                        </p>
                                                                                    </div>
                                                                                    <div className="text-right">
                                                                                        <span className="text-sm font-bold text-emerald-600">
                                                                                            {service.billingCycle === 'monthly'
                                                                                                ? `${formatCurrency(service.recurringPrice * recurringBillingPeriod)} for ${recurringBillingPeriod} months`
                                                                                                : `${formatCurrency(service.recurringPrice * Math.ceil(recurringBillingPeriod / 12))} for ${recurringBillingPeriod} months`
                                                                                            }
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    <Button
                                                                        size="sm"
                                                                        variant="ghost"
                                                                        onClick={() => removeItem(id)}
                                                                        className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 self-start"
                                                                    >
                                                                        <Trash2 className="w-4 h-4" />
                                                                    </Button>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-center py-12 text-slate-500 border-2 border-dashed border-slate-300 rounded-lg bg-gradient-to-br from-white to-slate-50">
                                                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                                    <p className="text-lg text-slate-700">No services selected yet</p>
                                                    <p className="text-sm mt-2 text-slate-600">Select services from the other tabs</p>
                                                </div>
                                            )}
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>

                        {/* Financial Configuration */}
                        <Card className="border-slate-200 shadow-lg bg-gradient-to-br from-white to-slate-50">
                            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                <CardTitle className="flex items-center gap-3 text-slate-900">
                                    <Calculator className="w-6 h-6 text-indigo-600" />
                                    Financial Configuration
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 md:space-y-8 pt-6">
                                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="taxRate" className="text-slate-700 font-medium">
                                            Tax Rate (GST)
                                        </Label>
                                        <div className="flex items-center gap-3">
                                            <Input
                                                id="taxRate"
                                                type="number"
                                                min="0"
                                                max="30"
                                                value={taxRate}
                                                onChange={(e) => setTaxRate(+e.target.value)}
                                                className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500"
                                            />
                                            <span className="text-slate-600">%</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="discount" className="text-slate-700 font-medium">
                                            Discount
                                        </Label>
                                        <div className="flex items-center gap-3">
                                            <Input
                                                id="discount"
                                                type="number"
                                                min="0"
                                                max="100"
                                                value={discount}
                                                onChange={(e) => setDiscount(+e.target.value)}
                                                className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500"
                                            />
                                            <span className="text-slate-600">%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-indigo-100 dark:border-slate-700">
                                    <h4 className="font-bold text-slate-900 mb-2">Quick Actions</h4>
                                    <div className="flex flex-wrap gap-2 ">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setDiscount(5)}
                                            className={`bg-white dark:bg-slate-900 
                        border-slate-300 dark:border-slate-600
                        text-slate-700 dark:text-slate-200
                        hover:bg-slate-100 dark:hover:bg-slate-800
                        ${discount === 5
                                                    ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-300 text-indigo-700 dark:text-indigo-300"
                                                    : ""
                                                }`}
                                        >
                                            5% Discount
                                        </Button>

                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setDiscount(10)}
                                            className={`bg-white dark:bg-slate-900 
                        border-slate-300 dark:border-slate-600
                        text-slate-700 dark:text-slate-200
                        hover:bg-slate-100 dark:hover:bg-slate-800
                        ${discount === 10
                                                    ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-300 text-indigo-700 dark:text-indigo-300"
                                                    : ""
                                                }`}
                                        >
                                            10% Discount
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setTaxRate(18)}
                                            className={`bg-white dark:bg-slate-900 
                        border-slate-300 dark:border-slate-600
                        text-slate-700 dark:text-slate-200
                        hover:bg-slate-100 dark:hover:bg-slate-800 ${taxRate === 18 ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-300 text-indigo-700 dark:text-indigo-300" : ""
                                                }`}
                                        >
                                            18% GST
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setTaxRate(12)}
                                            className={`bg-white dark:bg-slate-900 
                        border-slate-300 dark:border-slate-600
                        text-slate-700 dark:text-slate-200
                        hover:bg-slate-100 dark:hover:bg-slate-800 ${taxRate === 12 ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-300 text-indigo-700 dark:text-indigo-300" : ""
                                                }`}
                                        >
                                            12% GST
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Summary */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Summary Card */}
                        <Card className="border-indigo-200 shadow-xl bg-gradient-to-b from-white to-slate-50">
                            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                                <CardTitle className="text-xl md:text-2xl">Quotation Summary</CardTitle>
                                <CardDescription className="text-indigo-100">
                                    Review your complete project quotation
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="p-4 md:p-6">
                                {/* Progress */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-slate-700">Progress</span>
                                        <span className="text-sm font-bold text-indigo-600">
                                            {Math.round(progress)}%
                                        </span>
                                    </div>
                                    <Progress value={progress} className="h-2 bg-slate-200">
                                        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                                    </Progress>
                                </div>

                                {/* Selected Services */}
                                <div className="space-y-4 mb-6">
                                    <h4 className="font-bold text-slate-900">Selected Services ({selectedCount})</h4>
                                    <AnimatePresence>
                                        {selectedCount > 0 ? (
                                            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                                                {Object.values(selected).map((service, index) => {
                                                    const serviceTotal = getServiceTotal(service);
                                                    const recurringCost = service.isRecurring
                                                        ? (service.billingCycle === 'monthly'
                                                            ? service.recurringPrice * recurringBillingPeriod
                                                            : service.recurringPrice * Math.ceil(recurringBillingPeriod / 12))
                                                        : 0;

                                                    return (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: 20 }}
                                                            className="p-3 bg-slate-50 rounded-lg border border-slate-200"
                                                        >
                                                            <div className="flex justify-between items-start mb-2">
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="font-medium text-slate-900 truncate text-sm">
                                                                        {service.name}
                                                                        {service.quantity > 1 && ` × ${service.quantity}`}
                                                                    </div>
                                                                    <div className="text-xs text-slate-600 flex items-center gap-1 mt-1">
                                                                        <Clock className="w-3 h-3" />
                                                                        {service.customTime}
                                                                        {service.isRecurring && (
                                                                            <Badge className="ml-2 bg-emerald-100 text-emerald-800 text-xs">
                                                                                {service.billingCycle}
                                                                            </Badge>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="font-bold text-indigo-600 ml-2 text-sm">
                                                                    {formatCurrency(serviceTotal + recurringCost)}
                                                                </div>
                                                            </div>

                                                            <div className="text-xs text-slate-600 space-y-1">
                                                                <div className="flex justify-between">
                                                                    <span>Setup:</span>
                                                                    <span>{formatCurrency(service.customPrice)}</span>
                                                                </div>

                                                                {service.hasFigma && service.figmaPages > 0 && (
                                                                    <div className="flex justify-between">
                                                                        <span>Figma Design:</span>
                                                                        <span>
                                                                            {service.figmaPages} pages × {formatCurrency(service.figmaPricePerPage)}
                                                                        </span>
                                                                    </div>
                                                                )}

                                                                {service.isRecurring && (
                                                                    <div className="flex justify-between text-emerald-600">
                                                                        <span>Recurring ({service.billingCycle}):</span>
                                                                        <span className="font-medium">
                                                                            {formatCurrency(recurringCost)} for {recurringBillingPeriod} months
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        ) : (
                                            <div className="text-center py-6 text-slate-500 border border-dashed border-slate-300 rounded-lg bg-gradient-to-br from-white to-slate-50">
                                                <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                                <p className="text-sm text-slate-600">No services selected</p>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Separator className="my-6" />

                                {/* Calculations */}
                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-slate-700">One-Time Services</span>
                                        <span className="font-semibold text-slate-900">{formatCurrency(servicesTotal)}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-slate-700">Recurring Services ({recurringBillingPeriod} months)</span>
                                        <span className="font-semibold text-emerald-600">{formatCurrency(recurringTotal)}</span>
                                    </div>

                                    <div className="flex justify-between border-t pt-4">
                                        <span className="font-medium">Subtotal</span>
                                        <span className="font-bold">{formatCurrency(subtotal)}</span>
                                    </div>

                                    {discount > 0 && (
                                        <div className="flex justify-between text-emerald-600">
                                            <span>Discount ({discount}%)</span>
                                            <span className="font-semibold">-{formatCurrency(discountAmount)}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between">
                                        <span className="text-slate-700">Taxable Amount</span>
                                        <span className="font-medium text-slate-900">{formatCurrency(taxableAmount)}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-slate-700">GST @ {taxRate}%</span>
                                        <span className="font-medium text-slate-900">{formatCurrency(taxAmount)}</span>
                                    </div>

                                    <Separator />

                                    <div className="flex justify-between items-center pt-3 md:pt-4">
                                        <div>
                                            <div className="text-sm text-slate-600">Total Amount</div>
                                            <div className="text-2xl md:text-3xl font-bold text-indigo-600">
                                                {formatCurrency(grandTotal)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Estimate */}
                                    <div className="bg-indigo-50 p-3 md:p-4 rounded-lg border border-indigo-100 mt-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar className="w-4 h-4 text-indigo-600" />
                                            <span className="font-medium text-slate-900">Project Timeline</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-700">Development Duration</span>
                                            <span className="text-lg font-bold text-indigo-600">
                                                {totalWeeks} weeks
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-slate-700">Recurring Period</span>
                                            <span className="text-lg font-bold text-emerald-600">
                                                {recurringBillingPeriod} months
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3 mt-6 md:mt-8">
                                    <Button
                                        onClick={downloadPDF}
                                        disabled={selectedCount === 0 || loading}
                                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 h-11 md:h-12 text-base text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                <Download className="w-5 h-5 mr-2" />
                                                Download Quotation
                                            </>
                                        )}
                                    </Button>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Button
                                            variant="outline"
                                            onClick={copyToClipboard}
                                            disabled={selectedCount === 0}
                                            className="
                                                border-indigo-300 
                                                text-indigo-700 
                                                bg-white 
                                                hover:bg-indigo-50 
                                                text-sm
                                                disabled:bg-slate-100 
                                                disabled:text-slate-400 
                                                disabled:border-slate-200
                                            "
                                        >
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copy Summary
                                        </Button>


                                        <Button
                                            variant="outline"
                                            onClick={resetQuotation}
                                            className="
                                                border-slate-300 
                                                text-slate-700 
                                                bg-white 
                                                hover:bg-slate-50 
                                                text-sm
                                            "
                                        >
                                            Reset All
                                        </Button>

                                    </div>
                                </div>

                                {/* Info Footer */}
                                <div className="mt-6 pt-6 border-t border-slate-200">
                                    <div className="flex items-start gap-2 text-xs text-slate-600">
                                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-indigo-600" />
                                        <p>Includes setup costs and recurring services for {recurringBillingPeriod} months. This quotation is valid for 15 days.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Edit Service Form Component
function EditServiceForm({ service, onSave, onCancel, currency, recurringBillingPeriod, setRecurringBillingPeriod }) {
    const [formData, setFormData] = useState({
        price: service.customPrice,
        time: service.customTime,
        description: service.customDescription || service.description,
        figmaPages: service.figmaPages || 0,
        figmaPricePerPage: service.figmaPricePerPage || 2000,
        isRecurring: service.isRecurring || false,
        billingCycle: service.billingCycle || 'one-time',
        recurringPrice: service.recurringPrice || 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="price" className="text-slate-700 font-medium">Setup Cost ({currency})</Label>
                    <Input
                        id="price"
                        type="number"
                        min="0"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
                        className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500"
                    />
                    <p className="text-xs text-slate-600">
                        Base Price: {currency} {service.basePrice.toLocaleString('en-IN')}
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="time" className="text-slate-700 font-medium">Timeline</Label>
                    <Input
                        id="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        placeholder="e.g., 3-4 weeks, Monthly, Ongoing"
                        className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500"
                    />
                    <p className="text-xs text-slate-600">
                        Base Time: {service.baseTime}
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description" className="text-slate-700 font-medium">Service Description</Label>
                    <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={3}
                        className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500"
                    />
                </div>

                {service.hasFigma && (
                    <div className="space-y-4 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                        <h4 className="font-medium text-slate-900">Figma Design Settings</h4>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="figmaPages" className="text-slate-700 font-medium">Number of Pages</Label>
                                <Input
                                    id="figmaPages"
                                    type="number"
                                    min="0"
                                    value={formData.figmaPages}
                                    onChange={(e) => setFormData({ ...formData, figmaPages: +e.target.value })}
                                    className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="figmaPricePerPage" className="text-slate-700 font-medium">Price per Page ({currency})</Label>
                                <Input
                                    id="figmaPricePerPage"
                                    type="number"
                                    min="0"
                                    value={formData.figmaPricePerPage}
                                    onChange={(e) => setFormData({ ...formData, figmaPricePerPage: +e.target.value })}
                                    className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        <div className="text-sm text-slate-600">
                            <p>Figma Design Total: {currency} {(formData.figmaPages * formData.figmaPricePerPage).toLocaleString('en-IN')}</p>
                            <p>Estimated Timeline: {Math.ceil(formData.figmaPages / 5)} weeks</p>
                        </div>
                    </div>
                )}

                {/* Recurring Service Settings */}
                <div className="space-y-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="isRecurring"
                            checked={formData.isRecurring}
                            onChange={(e) => setFormData({ ...formData, isRecurring: e.target.checked })}
                            className="h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                        />
                        <Label htmlFor="isRecurring" className="font-medium text-slate-900">
                            This is a recurring service
                        </Label>
                    </div>

                    {formData.isRecurring && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="billingCycle" className="text-slate-700 font-medium">Billing Cycle</Label>
                                    <Select
                                        value={formData.billingCycle}
                                        onValueChange={(value) => setFormData({ ...formData, billingCycle: value })}
                                    >
                                        <SelectTrigger className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500">
                                            <SelectValue placeholder="Select billing cycle" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border-slate-200">
                                            <SelectItem value="monthly" className="text-slate-900 hover:bg-slate-100">
                                                Monthly
                                            </SelectItem>
                                            <SelectItem value="yearly" className="text-slate-900 hover:bg-slate-100">
                                                Yearly
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="recurringPrice" className="text-slate-700 font-medium">
                                        Recurring Price ({currency})
                                    </Label>
                                    <Input
                                        id="recurringPrice"
                                        type="number"
                                        min="0"
                                        value={formData.recurringPrice}
                                        onChange={(e) => setFormData({ ...formData, recurringPrice: +e.target.value })}
                                        className="bg-white text-slate-900 border-slate-300 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <div className="text-sm text-slate-600 bg-white p-3 rounded border">
                                <p className="font-medium">Recurring Total:</p>
                                <p>
                                    {formData.billingCycle === 'monthly'
                                        ? `${currency} ${formData.recurringPrice.toLocaleString('en-IN')} per month × ${recurringBillingPeriod} months = ${currency} ${(formData.recurringPrice * recurringBillingPeriod).toLocaleString('en-IN')}`
                                        : `${currency} ${formData.recurringPrice.toLocaleString('en-IN')} per year × ${Math.ceil(recurringBillingPeriod / 12)} years = ${currency} ${(formData.recurringPrice * Math.ceil(recurringBillingPeriod / 12)).toLocaleString('en-IN')}`
                                    }
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <DialogFooter>
                <Button type="button" variant="outline" onClick={onCancel} className="text-slate-700 border-slate-300 hover:bg-slate-50">
                    Cancel
                </Button>
                <Button type="submit" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                </Button>
            </DialogFooter>
        </form>
    );
}


