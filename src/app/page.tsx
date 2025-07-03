"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Server, Brain, Code, CheckCircle, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cosmic-silver to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          CosmicVerse
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="#services" className="text-cosmic-gray hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/portfolio" className="text-cosmic-gray hover:text-blue-600 transition-colors">Portfolio</Link>
          <Link href="/about" className="text-cosmic-gray hover:text-blue-600 transition-colors">About</Link>
          <Link href="/contact" className="text-cosmic-gray hover:text-blue-600 transition-colors">Contact</Link>
        </div>

        <Link href="/contact">
          <Button variant="cosmic" size="lg">
            Schedule Consultation
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-cosmic-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevOps</span> •{" "}
            <span className="text-purple-600">AI Engineering</span> •{" "}
            <span className="text-blue-600">Software Architecture</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-cosmic-gray mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transforming complex technical challenges into competitive advantages 
            for forward-thinking organizations
          </motion.p>
          
          {/* Value Propositions */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 text-cosmic-dark">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="font-semibold">40% infrastructure cost reduction</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-cosmic-dark">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="font-semibold">Production-ready AI systems</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-cosmic-dark">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="font-semibold">10x scalable architectures</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/contact">
              <Button variant="cta" size="xl" className="group">
                Schedule Strategic Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="xl">
                Explore Case Studies
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-dark mb-6">
            Multi-Disciplinary Expertise
          </h2>
          <p className="text-xl text-cosmic-gray max-w-3xl mx-auto">
            Bridging the gap between cutting-edge innovation and reliable business operations
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-cosmic-dark group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-cosmic-gray">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cosmic-gray">
                        <Zap className="w-4 h-4 text-orange-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-cosmic-dark">{service.result}</span>
                    <p className="text-sm text-cosmic-gray mt-1">{service.resultDescription}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join forward-thinking organizations that have achieved remarkable results 
              through strategic technology transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="cta" size="xl">
                  Start Your Transformation
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-blue-900">
                  Learn About My Approach
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl font-bold mb-4">
            CosmicVerse
          </div>
          <p className="text-gray-300 mb-6">
            Multi-disciplinary technology consultant • DevOps • AI Engineering • Software Architecture
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/gilangjaver7" className="text-gray-300 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:hello@cosmicverse.cloud" className="text-gray-300 hover:text-white transition-colors">
              Email
            </a>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Consultation
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm">
            © 2024 CosmicVerse. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

const services = [
  {
    title: "DevOps Transformation",
    description: "Intelligent infrastructure optimization that reduces costs while improving reliability and deployment velocity.",
    icon: Server,
    iconBg: "bg-gradient-to-br from-blue-600 to-blue-700",
    features: [
      "Cloud migration and optimization",
      "CI/CD pipeline implementation", 
      "Infrastructure as Code",
      "Cost optimization strategies",
      "Zero-downtime deployments"
    ],
    result: "40%",
    resultDescription: "Average cost reduction achieved"
  },
  {
    title: "AI Engineering Solutions", 
    description: "End-to-end AI implementation from data architecture to production deployment, ensuring measurable business impact.",
    icon: Brain,
    iconBg: "bg-purple-600",
    features: [
      "ML model development",
      "Data pipeline architecture",
      "MLOps implementation",
      "AI integration consulting", 
      "Real-time inference systems"
    ],
    result: "6 Months",
    resultDescription: "Typical ROI achievement timeline"
  },
  {
    title: "Software Architecture",
    description: "Strategic architecture guidance that transforms legacy systems into scalable, maintainable platforms for growth.",
    icon: Code,
    iconBg: "bg-orange-600",
    features: [
      "System design and review",
      "Technical debt reduction",
      "Performance optimization",
      "Code quality improvement",
      "Scalability planning"
    ],
    result: "3x",
    resultDescription: "Faster feature delivery achieved"
  }
];
