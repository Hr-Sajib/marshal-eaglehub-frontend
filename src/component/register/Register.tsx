/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { registerUser } from "@/services/auth";
import { UserRole } from "@/types/auth/auth.type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaFacebookF, FaApple, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  role: UserRole;
  isActive: boolean;
  additionalNotes?: string;
  

  // Investor specific
  investorData?: {
    projectTypes: string;
    investmentRange: string;
    dealCriteria: string;
    investmentStage: string;
    sectors: string;
    avgInvestmentSize: string;
    locationPreferences: string;
    portfolioCompanies?: string;
  };
  
  // Founder specific
  founderData?: {
    projectName: string;
    projectDescription: string;
    hasLiveProduct: boolean;
    websiteOrDemoLink: string;
    investmentType: string;
    fundingAmount: string;
    stage: string;
    teamSize: string;
    revenueModel: string;
    traction?: string;
    competitors?: string;
  };
  
  // Influencer specific
  influencerData?: {
    socialMediaProfiles: string;
    followerCount: string;
    areasOfInfluence: string;
    primaryPlatform: string;
  };
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    resetField
  } = useForm<FormData>({
    defaultValues: {
      role: UserRole.USER,
      isActive: true
    }
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  
  const selectedRole = watch("role");

  const onSubmit = async (data: FormData) => {
    try {
      const {  ...userData } = data;
      
      // Prepare the payload based on role
      let payload: any = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
        role: userData.role,
        isActive: userData.isActive,
        additionalNotes: userData.additionalNotes || ""
      };

      // Add role-specific data
      if (userData.role === UserRole.INVESTOR && userData.investorData) {
        payload.investorData = userData.investorData;
      } else if (userData.role === UserRole.FOUNDER && userData.founderData) {
        payload.founderData = userData.founderData;
      } else if (userData.role === UserRole.INFLUENCER && userData.influencerData) {
        payload.influencerData = userData.influencerData;
      }

      const res = await registerUser(payload);
      
      if (res.success) {
        toast.success("Registration successful!");
        router.push("/");
      } else {
        toast.error(res.message || "Registration failed");
      }
    } catch (error: any) {
      toast.error(error?.message || "An error occurred");
    }
  };

  // Reset role-specific fields when role changes
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = e.target.value as FormData["role"];
    if (newRole !== UserRole.INVESTOR) resetField("investorData");
    if (newRole !== UserRole.FOUNDER) resetField("founderData");
    if (newRole !== UserRole.INFLUENCER) resetField("influencerData");
  };

  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl space-y-6 bg-gradient-to-b rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Register for EGEAL AI HUB
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Basic Information Section */}
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-white block mb-1 text-sm">
                  First Name *
                </label>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white block mb-1 text-sm">
                  Last Name *
                </label>
                <input
                  {...register("lastName", { required: "Last name is required" })}
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-white block mb-1 text-sm">
                Email Address *
              </label>
              <input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label className="text-white block mb-1 text-sm">Phone Number *</label>
              <input
                {...register("phone", { required: "Phone number is required" })}
                type="tel"
                placeholder="+1234567890"
                className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Security Information Section */}
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Security Information</h3>
            <div>
              <label className="text-white block mb-1 text-sm">Password *</label>
              <div className="relative">
                <input
                  {...register("password", { 
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label className="text-white block mb-1 text-sm">
                Confirm Password *
              </label>
              <div className="relative">
                <input
                  {...register("confirmPassword", { 
                    required: "Please confirm your password",
                    validate: (value) => 
                      value === watch('password') || "Passwords do not match"
                  })}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Role Selection */}
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Role Information</h3>
            <div>
              <label className="text-white block mb-1 text-sm">Role *</label>
              <select
                {...register("role", { required: "Role is required" })}
                onChange={handleRoleChange}
                className="w-full px-4 py-2 rounded border border-red-600 text-white bg-black focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="user">Regular User</option>
                <option value="single">Single User</option>
                <option value="investor">Investor</option>
                <option value="influencer">Influencer</option>
                <option value="founder">Founder</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>
          </div>

          {/* Investor Specific Fields */}
          {selectedRole === UserRole.INVESTOR && (
            <div className="space-y-4 p-4 border border-gray-700 rounded-lg bg-gray-900/50">
              <h3 className="text-xl font-semibold text-white mb-4">Investor Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white block mb-1 text-sm">Project Types Interested In *</label>
                  <input
                    {...register("investorData.projectTypes", { 
                      required: "Project types are required for investors"
                    })}
                    type="text"
                    placeholder="AI tools, SaaS, FinTech"
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  {errors.investorData?.projectTypes && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.investorData.projectTypes.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="text-white block mb-1 text-sm">Investment Range *</label>
                  <input
                    {...register("investorData.investmentRange", { 
                      required: "Investment range is required for investors"
                    })}
                    type="text"
                    placeholder="$50,000 - $200,000"
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  {errors.investorData?.investmentRange && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.investorData.investmentRange.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-white block mb-1 text-sm">Investment Stage *</label>
                  <select
                    {...register("investorData.investmentStage", { 
                      required: "Investment stage is required"
                    })}
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-black focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select stage</option>
                    <option value="Pre-seed">Pre-seed</option>
                    <option value="Seed">Seed</option>
                    <option value="Series A">Series A</option>
                    <option value="Series B+">Series B+</option>
                  </select>
                  {errors.investorData?.investmentStage && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.investorData.investmentStage.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="text-white block mb-1 text-sm">Average Investment Size</label>
                  <input
                    {...register("investorData.avgInvestmentSize")}
                    type="text"
                    placeholder="$50,000 - $100,000"
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="text-white block mb-1 text-sm">Sectors of Interest *</label>
                <input
                  {...register("investorData.sectors", { 
                    required: "Sectors are required"
                  })}
                  type="text"
                  placeholder="AI, Healthcare, FinTech, etc."
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                {errors.investorData?.sectors && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.investorData.sectors.message}
                  </p>
                )}
              </div>
              
              <div className="mt-4">
                <label className="text-white block mb-1 text-sm">Location Preferences</label>
                <input
                  {...register("investorData.locationPreferences")}
                  type="text"
                  placeholder="North America, Europe, Global, etc."
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              
              <div className="mt-4">
                <label className="text-white block mb-1 text-sm">Deal Criteria *</label>
                <textarea
                  {...register("investorData.dealCriteria", { 
                    required: "Deal criteria are required for investors"
                  })}
                  placeholder="Prefer early-stage startups with strong leadership and MVP traction."
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  rows={3}
                />
                {errors.investorData?.dealCriteria && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.investorData.dealCriteria.message}
                  </p>
                )}
              </div>
              
              <div className="mt-4">
                <label className="text-white block mb-1 text-sm">Portfolio Companies (if any)</label>
                <textarea
                  {...register("investorData.portfolioCompanies")}
                  placeholder="List any notable companies you've invested in"
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  rows={2}
                />
              </div>
            </div>
          )}

          {/* Founder Specific Fields */}
          {selectedRole === UserRole.FOUNDER && (
            <div className="space-y-4 p-4 border border-gray-700 rounded-lg bg-gray-900/50">
              <h3 className="text-xl font-semibold text-white mb-4">Startup Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white block mb-1 text-sm">Project Name *</label>
                  <input
                    {...register("founderData.projectName", { 
                      required: "Project name is required for founders"
                    })}
                    type="text"
                    placeholder="AutoPilot AI"
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  {errors.founderData?.projectName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.founderData.projectName.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="text-white block mb-1 text-sm">Current Stage *</label>
                  <select
                    {...register("founderData.stage", { 
                      required: "Stage is required"
                    })}
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-black focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select stage</option>
                    <option value="Idea">Idea</option>
                    <option value="Prototype">Prototype</option>
                    <option value="MVP">MVP</option>
                    <option value="Early Revenue">Early Revenue</option>
                    <option value="Scaling">Scaling</option>
                  </select>
                  {errors.founderData?.stage && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.founderData.stage.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-4">
                <label className="text-white block mb-1 text-sm">Project Description *</label>
                <textarea
                  {...register("founderData.projectDescription", { 
                    required: "Project description is required for founders"
                  })}
                  placeholder="AI workflow automation for distributed teams."
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  rows={3}
                />
                {errors.founderData?.projectDescription && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.founderData.projectDescription.message}
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hasLiveProduct"
                    {...register("founderData.hasLiveProduct")}
                    className="mr-2"
                  />
                  <label htmlFor="hasLiveProduct" className="text-white text-sm">
                    Has Live Product
                  </label>
                </div>
                
                <div>
                  <label className="text-white block mb-1 text-sm">Team Size</label>
                  <input
                    {...register("founderData.teamSize")}
                    type="text"
                    placeholder="e.g., 5-10 people"
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-white block mb-1 text-sm">Website or Demo Link</label>
                  <input
                    {...register("founderData.websiteOrDemoLink")}
                    type="url"
                    placeholder="https://autopilotai.io/demo"
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                
                <div>
                  <label className="text-white block mb-1 text-sm">Revenue Model</label>
                  <input
                    {...register("founderData.revenueModel")}
                    type="text"
                    placeholder="Subscription, Freemium, etc."
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-white block mb-1 text-sm">Investment Type *</label>
                  <select
                    {...register("founderData.investmentType", { 
                      required: "Investment type is required"
                    })}
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-black focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select type</option>
                    <option value="Equity">Equity</option>
                    <option value="Grant">Grant</option>
                    <option value="Debt">Debt</option>
                    <option value="Convertible Note">Convertible Note</option>
                  </select>
                  {errors.founderData?.investmentType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.founderData.investmentType.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="text-white block mb-1 text-sm">Funding Amount *</label>
                  <input
                    {...register("founderData.fundingAmount", { 
                      required: "Funding amount is required"
                    })}
                    type="text"
                    placeholder="$100,000"
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  {errors.founderData?.fundingAmount && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.founderData.fundingAmount.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-4">
                <label className="text-white block mb-1 text-sm">Traction (Metrics, Users, etc.)</label>
                <textarea
                  {...register("founderData.traction")}
                  placeholder="500+ beta users, $10K MRR, etc."
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  rows={2}
                />
              </div>
              
              <div className="mt-4">
                <label className="text-white block mb-1 text-sm">Competitors</label>
                <textarea
                  {...register("founderData.competitors")}
                  placeholder="List your main competitors and differentiation"
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  rows={2}
                />
              </div>
            </div>
          )}

          {/* Influencer Specific Fields (unchanged from previous implementation) */}
          {selectedRole === UserRole.INFLUENCER && (
            <div className="space-y-4 p-4 border border-gray-700 rounded-lg bg-gray-900/50">
              <h3 className="text-xl font-semibold text-white mb-4">Influencer Information</h3>
              
              <div>
                <label className="text-white block mb-1 text-sm">Social Media Profiles *</label>
                <input
                  {...register("influencerData.socialMediaProfiles", { 
                    required: "Social media profiles are required for influencers"
                  })}
                  type="text"
                  placeholder="YouTube, Twitter, LinkedIn, etc."
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                {errors.influencerData?.socialMediaProfiles && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.influencerData.socialMediaProfiles.message}
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-white block mb-1 text-sm">Follower Count *</label>
                  <input
                    {...register("influencerData.followerCount", { 
                      required: "Follower count is required for influencers"
                    })}
                    type="text"
                    placeholder="100K+"
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  {errors.influencerData?.followerCount && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.influencerData.followerCount.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="text-white block mb-1 text-sm">Primary Platform</label>
                  <input
                    {...register("influencerData.primaryPlatform")}
                    type="text"
                    placeholder="YouTube, Instagram, etc."
                    className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="text-white block mb-1 text-sm">Areas of Influence *</label>
                <textarea
                  {...register("influencerData.areasOfInfluence", { 
                    required: "Areas of influence are required for influencers"
                  })}
                  placeholder="Tech, AI tools, SaaS products"
                  className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  rows={3}
                />
                {errors.influencerData?.areasOfInfluence && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.influencerData.areasOfInfluence.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Additional Notes (shown for all roles) */}
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Additional Information</h3>
            <div>
              <label className="text-white block mb-1 text-sm">Additional Notes</label>
              <textarea
                {...register("additionalNotes")}
                placeholder="Any additional information you'd like to share..."
                className="w-full px-4 py-2 rounded border border-red-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                rows={3}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-200 text-lg"
          >
            Complete Registration
          </button>
        </form>

        <div className="text-center text-white text-xs underline">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Login
          </a>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-black px-3 text-gray-200">
              Or Continue with
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-6 text-3xl">
          <FaFacebookF className="text-[#1877F2] hover:scale-110 transition cursor-pointer" />
          <FaApple className="text-[#fff] hover:scale-110 transition cursor-pointer rounded-full" />
          <FcGoogle className="hover:scale-110 transition cursor-pointer" />
          <FaTwitter className="text-[#1DA1F2] hover:scale-110 transition cursor-pointer" />
        </div>
      </div>
    </div>
  );
}