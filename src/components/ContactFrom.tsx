'use client';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/mashrufahmed',
      color: 'hover:text-gray-300 hover:bg-gray-700',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/mashrufahmed',
      color: 'hover:text-blue-400 hover:bg-blue-500/10',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/mashrufahmed',
      color: 'hover:text-sky-400 hover:bg-sky-500/10',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:mashruf@example.com',
      color: 'hover:text-red-400 hover:bg-red-500/10',
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 123 456 789',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mashruf@example.com',
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);

      // Reset form after showing success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 bg-gray-900/95 backdrop-blur-sm border-gray-700">
        <DrawerHeader className="text-center mb-6 sm:mb-8">
          <DrawerTitle className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            {"Let's Work Together"}
          </DrawerTitle>
          <DrawerDescription className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            I'm always interested in hearing about new opportunities and
            exciting projects. Let's build something amazing together!
          </DrawerDescription>
        </DrawerHeader>

        <div className="w-full grid grid-cols-1 overflow-scroll md:grid-cols-2 gap-10 md:gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                Get In Touch
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Feel free to reach out if you have any questions, want to
                collaborate, or just want to say hello. I'd love to hear from
                you!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium text-sm sm:text-base">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {isSubmitted ? (
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700 text-center">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className={`bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={`bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className={`bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 ${
                      errors.subject ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className={`bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 resize-none transition-all duration-300 ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
