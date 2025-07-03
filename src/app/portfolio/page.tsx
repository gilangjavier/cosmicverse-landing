"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-silver to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-cosmic-stellar hover:text-cosmic-purple transition-colors mb-6">
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-cosmic-dark mb-6">
            Portfolio & <span className="cosmic-gradient bg-clip-text text-transparent">Case Studies</span>
          </h1>
          <p className="text-xl text-cosmic-gray leading-relaxed">
            Real-world solutions delivering measurable business impact across DevOps, AI Engineering, and Software Architecture
          </p>
        </motion.div>
      </header>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Project Info */}
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className={`${study.categoryColor} text-white font-medium`}>
                        {study.category}
                      </Badge>
                      <span className="text-cosmic-gray text-sm">{study.client}</span>
                    </div>
                    
                    <CardTitle className="text-2xl md:text-3xl text-cosmic-dark mb-4 hover:text-cosmic-stellar transition-colors">
                      {study.title}
                    </CardTitle>
                    
                    <CardDescription className="text-cosmic-gray text-base leading-relaxed mb-6">
                      <strong>Challenge:</strong> {study.challenge}
                    </CardDescription>
                    
                    <CardDescription className="text-cosmic-gray text-base leading-relaxed mb-6">
                      <strong>Solution:</strong> {study.solution}
                    </CardDescription>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cosmic-dark mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Link href={`/portfolio/${study.id}`}>
                      <Button variant="cosmic" className="group">
                        View Detailed Case Study
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Results */}
                  <div className="bg-gradient-to-br from-cosmic-stellar to-cosmic-purple p-8 text-white">
                    <h3 className="text-lg font-semibold mb-6">Key Results</h3>
                    <div className="space-y-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Primary Metric */}
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-1">{study.primaryMetric.value}</div>
                        <div className="text-sm opacity-90">{study.primaryMetric.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="stellar-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Success Story?
            </h2>
            <p className="text-xl text-cosmic-silver mb-8">
              Transform your technical challenges into competitive advantages with proven methodologies and quantifiable results.
            </p>
            <Button variant="cta" size="xl">
              Schedule Your Strategic Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const caseStudies = [
  {
    id: "ci-cd-pipeline",
    category: "DevOps Transformation",
    categoryColor: "bg-blue-600",
    title: "Enterprise CI/CD Pipeline Transformation",
    client: "Fortune 500 Financial Services Company",
    challenge: "Client had manual deployment processes taking 3-4 hours with 30% failure rate, preventing rapid feature delivery and creating compliance risks.",
    solution: "Designed and implemented automated CI/CD pipeline using GitLab CI, Docker containers, and Kubernetes orchestration with automated testing, security scanning, and compliance checks.",
    technologies: ["GitLab CI/CD", "Docker", "Kubernetes", "Terraform", "Helm", "SonarQube", "OWASP ZAP", "AWS EKS", "Prometheus", "Grafana"],
    results: [
      "Deployment time reduced from 4 hours to 15 minutes (93% improvement)",
      "Deployment success rate increased to 99.5%",
      "5x increase in deployment frequency",
      "Zero security incidents post-implementation",
      "$2M annual savings in developer productivity"
    ],
    primaryMetric: {
      value: "93%",
      description: "Deployment Time Reduction"
    }
  },
  {
    id: "ml-pipeline",
    category: "AI Engineering",
    categoryColor: "bg-purple-600",
    title: "Real-time ML Pipeline for Predictive Analytics",
    client: "E-commerce Platform (50M+ users)",
    challenge: "Client needed real-time product recommendations but existing batch processing caused 24-hour delays, resulting in 15% lower conversion rates.",
    solution: "Built end-to-end ML pipeline with real-time feature engineering, model serving, and A/B testing framework to deliver personalized recommendations within 100ms response time.",
    technologies: ["Apache Kafka", "Apache Spark", "MLflow", "Kubernetes", "Redis", "TensorFlow Serving", "Apache Airflow", "Prometheus", "AWS SageMaker"],
    results: [
      "Response time reduced from 24 hours to <100ms",
      "28% increase in conversion rates",
      "35% improvement in user engagement",
      "$5M additional revenue in first quarter",
      "99.9% pipeline uptime achieved"
    ],
    primaryMetric: {
      value: "$5M",
      description: "Additional Revenue Generated"
    }
  },
  {
    id: "ai-agent",
    category: "AI Engineering",
    categoryColor: "bg-purple-600",
    title: "Intelligent Customer Service AI Agent",
    client: "SaaS Platform (10,000+ business customers)",
    challenge: "Customer support team overwhelmed with 500+ daily tickets, 80% being repetitive questions, causing 24-hour response delays.",
    solution: "Developed multi-modal AI agent using GPT-4 and custom knowledge base, integrated with existing CRM and support systems to handle tier-1 inquiries automatically with human escalation protocols.",
    technologies: ["OpenAI GPT-4", "LangChain", "Vector Database (Pinecone)", "FastAPI", "Redis", "PostgreSQL", "React", "WebSockets"],
    results: [
      "85% of tier-1 inquiries resolved automatically",
      "Average response time reduced to 30 seconds",
      "Customer satisfaction increased by 40%",
      "Support team productivity increased 3x",
      "$800K annual cost savings achieved"
    ],
    primaryMetric: {
      value: "85%",
      description: "Automated Resolution Rate"
    }
  },
  {
    id: "chatbot-agent",
    category: "AI Engineering",
    categoryColor: "bg-purple-600",
    title: "Multilingual Sales Chatbot for Global Expansion",
    client: "B2B Manufacturing Company",
    challenge: "Company expanding to 15 new markets but lacked 24/7 multilingual sales support, missing 60% of international inquiries due to timezone differences.",
    solution: "Built intelligent chatbot with NLP capabilities, multilingual support (12 languages), lead qualification, and seamless handoff to human sales teams during business hours.",
    technologies: ["Rasa NLU", "spaCy", "Google Translate API", "Node.js", "MongoDB", "Socket.io", "React", "Stripe API", "Salesforce Integration"],
    results: [
      "24/7 availability across all timezones",
      "70% lead qualification accuracy",
      "45% increase in qualified international leads",
      "$2.3M additional pipeline generated",
      "90% user satisfaction score"
    ],
    primaryMetric: {
      value: "$2.3M",
      description: "Additional Pipeline Generated"
    }
  },
  {
    id: "erp-system",
    category: "Software Architecture",
    categoryColor: "bg-orange-600",
    title: "Custom ERP System for Supply Chain Management",
    client: "Mid-size Manufacturing Company (500+ employees)",
    challenge: "Legacy ERP system couldn't handle growing business complexity, causing inventory discrepancies, delayed orders, and manual reporting consuming 40 hours weekly.",
    solution: "Developed custom cloud-native ERP with real-time inventory tracking, automated reporting, supplier integration, and mobile access for warehouse operations.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS ECS", "Terraform", "GitHub Actions", "Stripe", "QuickBooks API"],
    results: [
      "99.5% inventory accuracy achieved",
      "Order processing time reduced by 60%",
      "Manual reporting eliminated (40 hours/week saved)",
      "$500K annual operational cost savings",
      "Mobile access for 100+ warehouse workers"
    ],
    primaryMetric: {
      value: "99.5%",
      description: "Inventory Accuracy"
    }
  },
  {
    id: "website-development",
    category: "Software Architecture",
    categoryColor: "bg-orange-600",
    title: "High-Performance Professional Services Website",
    client: "Management Consulting Firm",
    challenge: "Outdated website with poor mobile experience, slow loading times (8+ seconds), and low conversion rates (0.8%) limiting business growth.",
    solution: "Built modern, responsive website with optimized performance, compelling content strategy, integrated CRM, and conversion optimization resulting in significant business impact.",
    technologies: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Cloudflare Pages", "HubSpot CRM", "Google Analytics 4", "Hotjar"],
    results: [
      "Page load time reduced to <2 seconds (400% improvement)",
      "Mobile performance score: 98/100",
      "Conversion rate increased to 3.2% (300% improvement)",
      "250% increase in qualified leads",
      "$1.2M additional revenue attributed to website"
    ],
    primaryMetric: {
      value: "300%",
      description: "Conversion Rate Improvement"
    }
  }
]; 