"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, BookOpen, Code, Users, TrendingUp, Calendar, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
            About <span className="cosmic-gradient bg-clip-text text-transparent">Gilang Javier</span>
          </h1>
          <p className="text-xl text-cosmic-gray leading-relaxed">
            Multi-disciplinary technology consultant bridging innovation and reliability
          </p>
        </motion.div>
      </header>

      {/* Professional Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-cosmic-dark mb-6">
              Where Technology Meets Business Impact
            </h2>
            <div className="space-y-6 text-cosmic-gray leading-relaxed">
              <p>
                As a multi-disciplinary technology consultant, I bridge the critical gap between 
                cutting-edge innovation and reliable business operations. My unique combination of 
                DevOps engineering, AI development, and software architecture expertise enables me 
                to solve complex technical challenges that traditional single-discipline consultants 
                cannot address effectively.
              </p>
              <p>
                With over 8 years of hands-on experience, I&apos;ve helped enterprises reduce 
                infrastructure costs by up to 40% while simultaneously implementing AI systems 
                that generate measurable ROI. My approach combines deep technical expertise with 
                strategic business thinking, ensuring every solution drives competitive advantage.
              </p>
              <p>
                I&apos;ve architected systems serving millions of users, implemented ML pipelines 
                processing terabytes of data daily, and designed DevOps workflows enabling 
                multiple daily deployments with confidence. My commitment extends beyond project 
                completion – I partner with organizations for their long-term technological success.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cosmic-stellar to-cosmic-purple p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cosmic-silver" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-cosmic-silver" />
                  <span>8+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-cosmic-silver" />
                  <span>50+ Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-cosmic-silver" />
                  <span>$20M+ Cost Savings Generated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cosmic-silver" />
                  <Link href="https://linkedin.com/in/gilangjaver7" className="hover:underline">
                    linkedin.com/in/gilangjaver7
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-dark mb-6">
            Core Expertise
          </h2>
          <p className="text-xl text-cosmic-gray max-w-3xl mx-auto">
            Deep technical knowledge across three critical technology domains
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${area.color} flex items-center justify-center`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-cosmic-dark">{area.title}</CardTitle>
                  <CardDescription className="text-cosmic-gray">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-cosmic-dark mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.skills.map((skill, idx) => (
                          <Badge key={idx} variant="tech" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cosmic-dark mb-2">Experience:</h4>
                      <p className="text-sm text-cosmic-gray">{area.experience}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="bg-cosmic-silver/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-cosmic-dark mb-6">
              Certifications & Education
            </h2>
            <p className="text-xl text-cosmic-gray">
              Continuous learning and industry-recognized expertise
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${cert.color} flex items-center justify-center`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-cosmic-dark mb-2">{cert.name}</h3>
                    <p className="text-sm text-cosmic-gray mb-2">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs">
                      {cert.year}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cosmic-dark mb-6">
            My Approach
          </h2>
          <p className="text-xl text-cosmic-gray max-w-3xl mx-auto">
            A proven methodology that delivers consistent results across all engagement types
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodology.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto cosmic-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-cosmic-gray/20 transform translate-x-8"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-cosmic-dark mb-3">{phase.title}</h3>
              <p className="text-cosmic-gray">{phase.description}</p>
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
              Let's Transform Your Technology Together
            </h2>
            <p className="text-xl text-cosmic-silver mb-8">
              Ready to bridge the gap between innovation and reliability in your organization?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl">
                Schedule Strategic Consultation
              </Button>
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-cosmic-dark">
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const expertiseAreas = [
  {
    title: "DevOps Engineering",
    description: "Infrastructure automation, cloud migration, and deployment optimization",
    icon: Code,
    color: "bg-blue-600",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "GitLab", "Jenkins", "Monitoring"],
    experience: "8+ years designing and implementing scalable infrastructure solutions for enterprise and startup environments."
  },
  {
    title: "AI Engineering", 
    description: "Machine learning pipelines, model deployment, and intelligent system integration",
    icon: TrendingUp,
    color: "bg-purple-600",
    skills: ["Python", "TensorFlow", "PyTorch", "MLflow", "Kafka", "Spark", "Vector DBs", "LLMs"],
    experience: "5+ years developing production-ready AI systems from data architecture to model serving and monitoring."
  },
  {
    title: "Software Architecture",
    description: "System design, code quality improvement, and scalability planning",
    icon: BookOpen,
    color: "bg-orange-600",
    skills: ["Microservices", "APIs", "Databases", "Node.js", "React", "System Design", "Performance", "Security"],
    experience: "8+ years architecting scalable software systems serving millions of users across various industries."
  }
];

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    color: "bg-yellow-500"
  },
  {
    name: "Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2023",
    color: "bg-blue-600"
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    year: "2022",
    color: "bg-green-500"
  },
  {
    name: "Machine Learning Engineer",
    issuer: "Coursera",
    year: "2022",
    color: "bg-purple-600"
  }
];

const methodology = [
  {
    title: "Discovery",
    description: "Deep dive into current systems, challenges, and business objectives to understand the complete context."
  },
  {
    title: "Strategy",
    description: "Design comprehensive solution architecture with clear roadmap, timelines, and success metrics."
  },
  {
    title: "Implementation",
    description: "Execute with agile methodology, continuous communication, and regular milestone delivery."
  },
  {
    title: "Optimization",
    description: "Monitor performance, gather feedback, and refine systems for maximum business impact."
  }
]; 