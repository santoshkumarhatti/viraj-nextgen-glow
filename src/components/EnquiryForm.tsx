import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  companyName: z.string().max(200).optional(),
  clientLocation: z.string().max(200).optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  projectPurpose: z.string().min(1, "Please select a project purpose"),
  expectedStartTime: z.string().min(1, "Please select expected start time"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  preferredCommunication: z.string().min(1, "Please select preferred communication method"),
  projectDescription: z.string().min(20, "Project description must be at least 20 characters").max(2000),
  referenceLinks: z.string().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface EnquiryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnquiryForm = ({ open, onOpenChange }: EnquiryFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Generate unique enquiry ID
      const enquiryId = `ENQ-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      
      const { error } = await supabase.from("enquiries").insert({
        full_name: data.fullName,
        email: data.email,
        phone_number: data.phoneNumber,
        company_name: data.companyName || null,
        client_location: data.clientLocation || null,
        service_type: data.serviceType,
        project_purpose: data.projectPurpose,
        expected_start_time: data.expectedStartTime,
        budget_range: data.budgetRange,
        preferred_communication: data.preferredCommunication,
        project_description: data.projectDescription,
        reference_links: data.referenceLinks || null,
        enquiry_id: enquiryId,
      });

      if (error) throw error;

      toast({
        title: "Thank You!",
        description: "Your enquiry has been submitted. Our team will contact you shortly.",
        duration: 5000,
      });

      reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast({
        title: "Error",
        description: "Failed to submit enquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold">Submit Your Enquiry</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
          {/* Personal / Business Information */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Personal / Business Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                {...register("fullName")}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-sm text-destructive">{errors.fullName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number *</Label>
                <Input
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  placeholder="+1 234 567 8900"
                />
                {errors.phoneNumber && (
                  <p className="text-sm text-destructive">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company / Organization Name</Label>
              <Input
                id="companyName"
                {...register("companyName")}
                placeholder="Your company name (optional)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientLocation">Client Location</Label>
              <Input
                id="clientLocation"
                {...register("clientLocation")}
                placeholder="City, State, Country"
              />
            </div>
          </div>

          {/* Service & Project Details */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Service & Project Details</h3>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Type of Service Needed *</Label>
              <Select onValueChange={(value) => setValue("serviceType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="mobile-app">Mobile App</SelectItem>
                  <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                  <SelectItem value="cloud-setup">Cloud Setup</SelectItem>
                  <SelectItem value="devops">DevOps</SelectItem>
                  <SelectItem value="ai-ml">AI/ML Solutions</SelectItem>
                  <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.serviceType && (
                <p className="text-sm text-destructive">{errors.serviceType.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="projectPurpose">Purpose of the Project *</Label>
                <Select onValueChange={(value) => setValue("projectPurpose", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-project">New Project</SelectItem>
                    <SelectItem value="upgrade">Upgrade Existing</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="consultation">Consultation Only</SelectItem>
                  </SelectContent>
                </Select>
                {errors.projectPurpose && (
                  <p className="text-sm text-destructive">{errors.projectPurpose.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="expectedStartTime">Expected Start Time *</Label>
                <Select onValueChange={(value) => setValue("expectedStartTime", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="next-3-months">Next 3 Months</SelectItem>
                    <SelectItem value="not-sure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
                {errors.expectedStartTime && (
                  <p className="text-sm text-destructive">{errors.expectedStartTime.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="budgetRange">Budget Range *</Label>
                <Select onValueChange={(value) => setValue("budgetRange", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10k-50k">₹10K - ₹50K</SelectItem>
                    <SelectItem value="50k-1l">₹50K - ₹1L</SelectItem>
                    <SelectItem value="1l-5l">₹1L - ₹5L</SelectItem>
                    <SelectItem value="above-5l">Above ₹5L</SelectItem>
                    <SelectItem value="not-decided">Not Decided</SelectItem>
                  </SelectContent>
                </Select>
                {errors.budgetRange && (
                  <p className="text-sm text-destructive">{errors.budgetRange.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredCommunication">Preferred Communication *</Label>
                <Select onValueChange={(value) => setValue("preferredCommunication", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                  </SelectContent>
                </Select>
                {errors.preferredCommunication && (
                  <p className="text-sm text-destructive">{errors.preferredCommunication.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Requirements */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Detailed Requirements</h3>

            <div className="space-y-2">
              <Label htmlFor="projectDescription">Project Description *</Label>
              <Textarea
                id="projectDescription"
                {...register("projectDescription")}
                placeholder="Describe your project requirements in detail..."
                rows={5}
              />
              {errors.projectDescription && (
                <p className="text-sm text-destructive">{errors.projectDescription.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="referenceLinks">Reference Website / App Links</Label>
              <Input
                id="referenceLinks"
                {...register("referenceLinks")}
                placeholder="https://example.com (optional)"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Enquiry"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryForm;