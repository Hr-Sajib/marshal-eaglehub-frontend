// "use client";
// import { useGetGiveawaysQuery } from '@/redux/api/Giveaway/giveawayApi';
// import { useAddParticipantMutation } from '@/redux/api/Participant/participantApiSlice';
// import { useState } from 'react';

// export default function AddParticipant() {
//   const [formData, setFormData] = useState({
//     giveawayId: '',
//     socialUsername: '',
//     videoLink: '',
//     proofs: [{ ruleTitle: '', imageUrl: '' }]
//   });

//   const { data: giveaways = [], isLoading } = useGetGiveawaysQuery();
//   const [addParticipant] = useAddParticipantMutation();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleProofChange = (index, e) => {
//     const { name, value } = e.target;
//     const newProofs = [...formData.proofs];
//     newProofs[index][name] = value;
//     setFormData(prev => ({ ...prev, proofs: newProofs }));
//   };

//   const addProof = () => {
//     setFormData(prev => ({
//       ...prev,
//       proofs: [...prev.proofs, { ruleTitle: '', imageUrl: '' }]
//     }));
//   };

//   const removeProof = (index) => {
//     if (formData.proofs.length <= 1) return;
//     const newProofs = [...formData.proofs];
//     newProofs.splice(index, 1);
//     setFormData(prev => ({ ...prev, proofs: newProofs }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addParticipant(formData).unwrap();
//       alert('Participant added successfully!');
//       // Reset form
//       setFormData({
//         giveawayId: '',
//         socialUsername: '',
//         videoLink: '',
//         proofs: [{ ruleTitle: '', imageUrl: '' }]
//       });
//     } catch (err) {
//       alert(`Error: ${err.data?.message || 'Failed to add participant'}`);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-center mb-6">Add New Participant</h2>
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="giveawayId" className="block text-sm font-medium text-gray-700 mb-1">
//             Giveaway
//           </label>
//           <select
//             id="giveawayId"
//             name="giveawayId"
//             value={formData.giveawayId}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select a giveaway</option>
//             {isLoading ? (
//               <option disabled>Loading giveaways...</option>
//             ) : (
//               giveaways.map(giveaway => (
//                 <option key={giveaway._id} value={giveaway._id}>
//                   {giveaway.title} ({giveaway._id})
//                 </option>
//               ))
//             )}
//           </select>
//         </div>

//         <div>
//           <label htmlFor="socialUsername" className="block text-sm font-medium text-gray-700 mb-1">
//             Social Media Username
//           </label>
//           <input
//             type="text"
//             id="socialUsername"
//             name="socialUsername"
//             value={formData.socialUsername}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter username"
//           />
//         </div>

//         <div>
//           <label htmlFor="videoLink" className="block text-sm font-medium text-gray-700 mb-1">
//             Video Link (Optional)
//           </label>
//           <input
//             type="url"
//             id="videoLink"
//             name="videoLink"
//             value={formData.videoLink}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="https://youtube.com/watch?v=..."
//           />
//         </div>

//         <div className="space-y-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Proofs of Completion
//           </label>

//           {formData.proofs.map((proof, index) => (
//             <div key={index} className="bg-gray-50 p-4 rounded-md space-y-3">
//               <div>
//                 <label htmlFor={`ruleTitle-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
//                   Rule Title
//                 </label>
//                 <input
//                   type="text"
//                   id={`ruleTitle-${index}`}
//                   name="ruleTitle"
//                   value={proof.ruleTitle}
//                   onChange={(e) => handleProofChange(index, e)}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Follow our Instagram page"
//                 />
//               </div>

//               <div>
//                 <label htmlFor={`imageUrl-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
//                   Image URL
//                 </label>
//                 <input
//                   type="url"
//                   id={`imageUrl-${index}`}
//                   name="imageUrl"
//                   value={proof.imageUrl}
//                   onChange={(e) => handleProofChange(index, e)}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="https://example.com/proof.jpg"
//                 />
//               </div>

//               {formData.proofs.length > 1 && (
//                 <button
//                   type="button"
//                   onClick={() => removeProof(index)}
//                   className="text-red-600 text-sm font-medium hover:text-red-800 flex items-center"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                   </svg>
//                   Remove Proof
//                 </button>
//               )}
//             </div>
//           ))}

//           <button
//             type="button"
//             onClick={addProof}
//             className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//             </svg>
//             Add Another Proof
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//         >
//           Submit Participant
//         </button>
//       </form>
//     </div>
//   );
// }