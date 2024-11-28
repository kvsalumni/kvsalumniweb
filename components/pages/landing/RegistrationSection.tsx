'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  RegistrationFormData, 
  validateRegistrationForm,
  defaultInterests 
} from './landing-database/registrationData';

const RegistrationSection = () => {
  const [formData, setFormData] = useState<Partial<RegistrationFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof RegistrationFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInterestToggle = (interest: string) => {
    const currentInterests = formData.interests || [];
    const newInterests = currentInterests.includes(interest)
      ? currentInterests.filter(i => i !== interest)
      : [...currentInterests, interest];
    
    setFormData(prev => ({
      ...prev,
      interests: newInterests
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationResult = validateRegistrationForm(formData);
    
    if (validationResult.isValid) {
      // TODO: Implement actual submission logic (e.g., API call)
      setSubmissionStatus('submitting');
      
      // Simulated submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setSubmissionStatus('success');
        // Reset form after successful submission
        setFormData({});
        setErrors({});
      }, 1500);
    } else {
      setErrors(validationResult.errors);
      setSubmissionStatus('error');
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-center">Alumni Registration</CardTitle>
            <CardDescription className="text-center">
              Join our alumni network and stay connected with your school community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName"
                    placeholder="Enter first name" 
                    value={formData.firstName || ''} 
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName"
                    placeholder="Enter last name" 
                    value={formData.lastName || ''} 
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter email address" 
                    value={formData.email || ''} 
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input 
                    id="phoneNumber"
                    type="tel"
                    placeholder="10-digit mobile number" 
                    value={formData.phoneNumber || ''} 
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="passoutYear">Passout Year *</Label>
                  <Input 
                    id="passoutYear"
                    type="number"
                    placeholder="Year of graduation" 
                    value={formData.passoutYear || ''} 
                    onChange={(e) => handleInputChange('passoutYear', parseInt(e.target.value))}
                  />
                  {errors.passoutYear && (
                    <p className="text-red-500 text-sm mt-1">{errors.passoutYear}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="section">School Section *</Label>
                  <Select 
                    value={formData.section} 
                    onValueChange={(value) => handleInputChange('section', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select section" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Science">Science</SelectItem>
                      <SelectItem value="Commerce">Commerce</SelectItem>
                      <SelectItem value="Arts">Arts</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.section && (
                    <p className="text-red-500 text-sm mt-1">{errors.section}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="membershipType">Membership Type *</Label>
                  <Select 
                    value={formData.membershipType} 
                    onValueChange={(value) => handleInputChange('membershipType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select membership" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Normal">Normal</SelectItem>
                      <SelectItem value="Golden">Golden</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.membershipType && (
                    <p className="text-red-500 text-sm mt-1">{errors.membershipType}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input 
                    id="country"
                    placeholder="Enter country" 
                    value={formData.country || ''} 
                    onChange={(e) => handleInputChange('country', e.target.value)}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                  )}
                </div>
              </div>

              <div>
                <Label>Interests</Label>
                <div className="grid md:grid-cols-3 gap-2 mt-2">
                  {defaultInterests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox 
                        id={interest}
                        checked={formData.interests?.includes(interest)}
                        onCheckedChange={() => handleInterestToggle(interest)}
                      />
                      <Label 
                        htmlFor={interest} 
                        className="text-sm font-normal"
                      >
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={submissionStatus === 'submitting'}
                  className="w-full md:w-auto"
                >
                  {submissionStatus === 'submitting' 
                    ? 'Submitting...' 
                    : 'Register Now'}
                </Button>
                {submissionStatus === 'success' && (
                  <p className="text-green-600 mt-2">
                    Registration successful! We'll get back to you soon.
                  </p>
                )}
                {submissionStatus === 'error' && (
                  <p className="text-red-600 mt-2">
                    Please correct the errors and try again.
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationSection;
