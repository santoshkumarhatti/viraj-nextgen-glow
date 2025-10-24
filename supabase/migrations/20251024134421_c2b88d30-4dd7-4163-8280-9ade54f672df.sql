-- Create enquiries table to store form submissions
CREATE TABLE public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  company_name TEXT,
  client_location TEXT,
  service_type TEXT NOT NULL,
  project_purpose TEXT NOT NULL,
  expected_start_time TEXT NOT NULL,
  budget_range TEXT NOT NULL,
  preferred_communication TEXT NOT NULL,
  project_description TEXT NOT NULL,
  reference_links TEXT,
  attachment_url TEXT,
  enquiry_id TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert enquiries (public form)
CREATE POLICY "Anyone can submit enquiries" 
ON public.enquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow viewing enquiries (for admin purposes later)
CREATE POLICY "Anyone can view enquiries" 
ON public.enquiries 
FOR SELECT 
USING (true);

-- Create index for faster lookups by enquiry_id
CREATE INDEX idx_enquiries_enquiry_id ON public.enquiries(enquiry_id);

-- Create index for created_at for sorting
CREATE INDEX idx_enquiries_created_at ON public.enquiries(created_at DESC);