"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllOngoingGiveawayQuery } from "@/redux/api/Giveaway/giveawayApi";
import { useAddParticipantMutation } from "@/redux/api/Participant/participantApiSlice";
import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import Container from "../shared/Container";
import { IGiveaway } from "@/types/giveaway/giveaway";

interface Proof {
  ruleTitle: string;
  imageUrl: string;
}

interface ParticipantFormData {
  giveawayId: string;
  socialUsername: string;
  videoLink: string;
  proofs: Proof[];
}

export default function AddParticipantForm() {
  const [formData, setFormData] = useState<Omit<ParticipantFormData, 'proofs'>>({
    giveawayId: "",
    socialUsername: "",
    videoLink: "",
  });

  const [proofs, setProofs] = useState<Proof[]>([]);
  const [addParticipant, { isLoading }] = useAddParticipantMutation();
  const { data } = useGetAllOngoingGiveawayQuery();
  const giveaways = data?.data as IGiveaway[] || [];

  const handleGiveawaySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const giveawayId = e.target.value;
    setFormData(prev => ({
      ...prev,
      giveawayId,
      socialUsername: "",
      videoLink: ""
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProofTitleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newProofs = [...proofs];
    newProofs[index].ruleTitle = e.target.value;
    setProofs(newProofs);
  };

  const handleProofChange = async (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formDataToSend = new FormData();
    formDataToSend.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();
      console.log("Image upload result:", result?.data);

      if (!response.ok || !result.data?.url) {
        throw new Error("Image upload failed");
      }

      const imageUrl = result.data.url;
      const newProofs = [...proofs];
      newProofs[index].imageUrl = imageUrl;
      setProofs(newProofs);

      toast.success("Proof uploaded!");
    } catch (error) {
      toast.error("Failed to upload image");
      console.error("Upload error:", error);
    }
  };

  const addNewProofField = () => {
    setProofs([...proofs, { ruleTitle: "", imageUrl: "" }]);
  };

  const removeProof = (index: number) => {
    const newProofs = [...proofs];
    newProofs.splice(index, 1);
    setProofs(newProofs);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.giveawayId) {
      toast.error("Please select a giveaway");
      return;
    }

    if (proofs.some(proof => !proof.imageUrl || !proof.ruleTitle)) {
      toast.error("Please provide all required proofs and their titles");
      return;
    }

    try {
      const submissionData = {
        ...formData,
        proofs
      };

      console.log("Submitting participant data:", submissionData);
      const response = await addParticipant(submissionData).unwrap();

      console.log("Response from API:", response);
      if (response.success) {
        toast.success("Successfully joined the giveaway!");
        setFormData({
          giveawayId: formData.giveawayId,
          socialUsername: "",
          videoLink: "",
        });
        setProofs([]);
      } else {
        toast.error(response.message || "Failed to join giveaway");
      }
    } catch (error: any) {
      toast.error(error.data?.message || "Failed to join giveaway");
      console.error("Submission error:", error);
    }
  };

  return (
    <Container>
      <div className="p-6 my-20 max-w-3xl mx-auto bg-[#000000] border border-red-700 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">🎉 Join a Giveaway</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white font-semibold mb-1">
              Select Giveaway *
            </label>
            <select
              value={formData.giveawayId}
              onChange={handleGiveawaySelect}
              className="w-full border border-red-600 text-white bg-[#000000] p-3 rounded-md"
              required
            >
              <option value="">-- Select a giveaway --</option>
              {giveaways?.map((giveaway: any) => (
                <option key={giveaway._id} value={giveaway._id}>
                  {giveaway.title} (Prize: ${giveaway.priceMoney})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white font-semibold mb-1">
              Social Media Username *
            </label>
            <input
              type="text"
              name="socialUsername"
              value={formData.socialUsername}
              onChange={handleInputChange}
              className="w-full border border-red-600 text-white p-3 rounded-md"
              placeholder="@yourhandle"
              required
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-1">
              Video Link (Optional)
            </label>
            <input
              type="url"
              name="videoLink"
              value={formData.videoLink}
              onChange={handleInputChange}
              className="w-full border border-red-600 text-white p-3 rounded-md"
              placeholder="https://example.com/video"
            />
          </div>

          {proofs.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">
                📸 Required Proofs
              </h3>

              {proofs.map((proof, index) => (
                <div
                  key={`proof-${index}`}
                  className="border border-red-600 p-4 rounded-md bg-gray-900"
                >
                  <div className="mb-3">
                    <label className="block text-white font-medium mb-1">
                      Requirement Title:
                    </label>
                    <input
                      type="text"
                      value={proof.ruleTitle}
                      onChange={(e) => handleProofTitleChange(index, e)}
                      className="w-full bg-gray-800 border border-gray-600 text-white p-2 rounded-md"
                      placeholder="Enter proof requirement"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-1">
                      Upload Proof Image:
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleProofChange(index, e)}
                      className="w-full bg-gray-800 border border-gray-600 text-white p-2 rounded-md"
                      required
                    />
                    {proof.imageUrl && (
                      <div className="mt-2 text-green-400 text-sm">
                        ✓ Image uploaded successfully
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeProof(index)}
                    className="mt-2 text-red-400 text-sm hover:text-red-300"
                  >
                    Remove this proof
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addNewProofField}
                className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md"
              >
                <span>+</span> Add Additional Proof
              </button>
            </div>
          )}

          {proofs.length === 0 && (
            <button
              type="button"
              onClick={addNewProofField}
              className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md"
            >
              <span>+</span> Add First Proof
            </button>
          )}

          <button
            type="submit"
            disabled={isLoading || proofs.length === 0}
            className="w-full py-3 px-4 bg-red-700 text-white rounded-md hover:bg-red-800 disabled:bg-red-800 font-semibold"
          >
            {isLoading ? "Submitting..." : "Join Giveaway"}
          </button>
        </form>
      </div>
    </Container>
  );
}