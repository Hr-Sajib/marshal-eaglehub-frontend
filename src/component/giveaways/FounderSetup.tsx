/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useCreateGiveawayMutation } from "@/redux/api/Giveaway/giveawayApi";
import { GiveawayFormData } from "@/types/giveaway/giveaway";
import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";


type DatePickerOnChange = (date: Date | null) => void;


export default function FounderSetup() {
  const [createGiveaway, { isLoading }] = useCreateGiveawayMutation();
  const [formData, setFormData] = useState<GiveawayFormData>({
    title: "",
    priceMoney: 0,
    description: "",
    rules: [],
    deadline: "",
    newRule: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addRule = (): void => {
    if (formData.newRule.trim()) {
      setFormData((prev) => ({
        ...prev,
        rules: [...prev.rules, prev.newRule.trim()],
        newRule: "",
      }));
    }
  };

  const removeRule = (index: number): void => {
    setFormData((prev) => ({
      ...prev,
      rules: prev.rules.filter((_, i) => i !== index),
    }));
  };

  const handleDateChange: DatePickerOnChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      deadline: date ? date.toISOString() : "",
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (formData.rules.length === 0) {
      toast.error("Please add at least one rule");
      return;
    }

    if (!formData.deadline) {
      toast.error("Please select a deadline");
      return;
    }

    try {
      const response = await createGiveaway({
        priceMoney: Number(formData.priceMoney),
        title: formData.title,
        description: formData.description,
        rules: formData.rules,
        deadline: formData.deadline,
      }).unwrap();

      if (response.success) {
        toast.success(response?.message || "Giveaway created successfully!");
        setFormData({
          title: "",
          priceMoney: 0,
          description: "",
          rules: [],
          deadline: "",
          newRule: "",
        });
      }
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error?.data?.message || "Error creating giveaway");
    }
  };

  return (
    <div className="text-white p-8 rounded-lg py-32 md:mx-32">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-[35px] font-semibold mb-2">
          Founder Setup Area
        </h1>
        <p className="text-[22px]">
          Setup your Giveaway, create a prize, and define rules
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="block text-white font-medium text-sm"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Giveaway title"
              className="w-full bg-transparent border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:outline-none px-3 py-2 rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="deadline"
              className="block text-white font-medium text-sm"
            >
              Deadline (Date & Time)
            </label>
            <DatePicker
              selected={formData.deadline ? new Date(formData.deadline) : null}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
              placeholderText="Select date and time"
              className="w-full bg-transparent border-2 border-red-600 text-white focus:border-red-500 focus:outline-none px-3 py-2 rounded-md"
              required
              id="deadline"
              name="deadline"
              wrapperClassName="w-full"
              popperClassName="!bg-gray-800 !border-red-600 !text-white"
              customInput={
                <input className="w-full bg-transparent border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:outline-none px-3 py-2 rounded-md" />
              }
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-white font-medium text-sm mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Giveaway description"
            className="w-full bg-transparent border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:outline-none px-3 py-2 rounded-md h-32"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="mb-6">
            <label className="block text-white font-medium text-sm mb-2">
              Rules
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                name="newRule"
                value={formData.newRule}
                onChange={handleChange}
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addRule())
                }
                placeholder="Add a new rule"
                className="flex-1 bg-transparent border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:outline-none px-3 py-2 rounded-md"
              />
              <button
                type="button"
                onClick={addRule}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                disabled={!formData.newRule.trim()}
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {formData.rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-800 rounded-full px-3 py-1"
                >
                  <span className="mr-2">{rule}</span>
                  <button
                    type="button"
                    onClick={() => removeRule(index)}
                    className="text-red-500 hover:text-red-400"
                    aria-label={`Remove rule ${rule}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

           <div className="space-y-2">
            <label
              htmlFor="priceMoney"
              className="block text-white font-medium text-sm"
            >
              Price Money
            </label>
            <input
              id="priceMoney"
              name="priceMoney"
              type="number"
              value={formData.priceMoney}
              onChange={handleChange}
              placeholder="Giveaway Price Money"
              className="w-full bg-transparent border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:outline-none px-3 py-2 rounded-md"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              formData.rules.length === 0 || isLoading || !formData.deadline
            }
          >
            {isLoading ? "Creating..." : "Create Giveaway"}
          </button>
        </div>
      </form>
    </div>
  );
}
