"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Calendar, MessageSquare, Clock, CheckCircle, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    urgency: "standard"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Let's <span className="cosmic-gradient bg-clip-text text-transparent">Transform</span> Your Technology
          </h1>
          <p className="text-xl text-cosmic-gray leading-relaxed">
            Ready to bridge the gap between innovation and reliability? Start your transformation journey today.
          </p>
        </motion.div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Card className="h-fit bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-cosmic-dark">Get In Touch</CardTitle>
                <CardDescription className="text-cosmic-gray">
                  Multiple ways to start our conversation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-cosmic-silver/50 transition-colors"
                  >
                    <div className={`p-3 rounded-lg ${method.color}`}>
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cosmic-dark">{method.label}</h3>
                      <p className="text-cosmic-gray text-sm mb-2">{method.description}</p>
                      <a 
                        href={method.href} 
                        className="text-cosmic-stellar hover:text-cosmic-purple font-medium text-sm transition-colors"
                      >
                        {method.action}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-br from-cosmic-stellar to-cosmic-purple text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6" />
                    <h3 className="text-lg font-semibold">Response Time</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Standard Inquiries:</span>
                      <span className="font-semibold">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Urgent Projects:</span>
                      <span className="font-semibold">4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency Support:</span>
                      <span className="font-semibold">1 hour</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-cosmic-dark">Strategic Consultation Request</CardTitle>
                <CardDescription className="text-cosmic-gray">
                  Tell us about your project and we&apos;ll design a solution that delivers measurable results
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-cosmic-dark mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cosmic-gray/20 rounded-lg focus:ring-2 focus:ring-cosmic-stellar focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-cosmic-dark mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cosmic-gray/20 rounded-lg focus:ring-2 focus:ring-cosmic-stellar focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-cosmic-dark mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cosmic-gray/20 rounded-lg focus:ring-2 focus:ring-cosmic-stellar focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-cosmic-dark mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cosmic-gray/20 rounded-lg focus:ring-2 focus:ring-cosmic-stellar focus:border-transparent transition-colors"
                        >
                          <option value="">Select project type</option>
                          <option value="devops">DevOps Transformation</option>
                          <option value="ai">AI Engineering Solutions</option>
                          <option value="software">Software Architecture</option>
                          <option value="combination">Multi-disciplinary Project</option>
                          <option value="consultation">Strategic Consultation</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-cosmic-dark mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cosmic-gray/20 rounded-lg focus:ring-2 focus:ring-cosmic-stellar focus:border-transparent transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-plus">$100,000+</option>
                          <option value="discuss">Prefer to discuss</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-cosmic-dark mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cosmic-gray/20 rounded-lg focus:ring-2 focus:ring-cosmic-stellar focus:border-transparent transition-colors"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (within 2 weeks)</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="1-3-months">1-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-months-plus">6+ months</option>
                          <option value="planning">Planning phase</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-cosmic-dark mb-2">
                          Priority Level
                        </label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cosmic-gray/20 rounded-lg focus:ring-2 focus:ring-cosmic-stellar focus:border-transparent transition-colors"
                        >
                          <option value="standard">Standard</option>
                          <option value="high">High Priority</option>
                          <option value="urgent">Urgent</option>
                          <option value="emergency">Emergency</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-cosmic-dark mb-2">
                        Project Description *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cosmic-gray/20 rounded-lg focus:ring-2 focus:ring-cosmic-stellar focus:border-transparent transition-colors resize-none"
                        placeholder="Please describe your project, current challenges, and desired outcomes. The more details you provide, the better I can tailor my response to your needs."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cosmic" 
                      size="xl" 
                      className="w-full group" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Request...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Consultation Request
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-cosmic-dark mb-4">
                      Request Submitted Successfully!
                    </h3>
                    <p className="text-cosmic-gray mb-6">
                      Thank you for your interest in working together. I&apos;ll review your request and respond within {" "}
                      {formData.urgency === "emergency" ? "1 hour" : 
                       formData.urgency === "urgent" ? "4 hours" : "24 hours"}.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      Submit Another Request
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* What to Expect */}
      <section className="bg-cosmic-silver/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-cosmic-dark mb-6">
              What Happens Next?
            </h2>
            <p className="text-xl text-cosmic-gray">
              Your roadmap to technology transformation success
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 cosmic-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-cosmic-dark mb-3">{step.title}</h3>
                    <p className="text-cosmic-gray mb-4">{step.description}</p>
                    <Badge variant="tech">{step.timeframe}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    description: "For detailed project discussions",
    action: "gillvision0@gmail.com",
    href: "mailto:gillvision0@gmail.com",
    color: "bg-blue-600"
  },
  {
    icon: Calendar,
    label: "Schedule Call",
    description: "Book a strategic consultation",
    action: "Schedule 30-min call",
    href: "#",
    color: "bg-purple-600"
  },
  {
    icon: MessageSquare,
    label: "LinkedIn",
    description: "Connect for quick discussions",
    action: "linkedin.com/in/gilangjaver7",
    href: "https://linkedin.com/in/gilangjaver7",
    color: "bg-blue-700"
  }
];

const nextSteps = [
  {
    title: "Initial Response",
    description: "I'll review your request and respond with initial thoughts and clarifying questions within the promised timeframe.",
    timeframe: "24 hours"
  },
  {
    title: "Discovery Call",
    description: "We'll schedule a strategic consultation to dive deep into your challenges and explore potential solutions.",
    timeframe: "Week 1"
  },
  {
    title: "Proposal & Roadmap",
    description: "I'll provide a detailed proposal with clear deliverables, timeline, and expected outcomes for your project.",
    timeframe: "Week 2"
  }
]; 