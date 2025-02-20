// "use client";

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// const CommunityBoard: React.FC = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       title: "Looking for a Web Developer",
//       content: "We need a React developer for a short-term project.",
//       author: "John Doe",
//     },
//     {
//       id: 2,
//       title: "Offering Math Tutoring",
//       content: "Experienced tutor available for online math lessons.",
//       author: "Jane Smith",
//     },
//   ]);

//   const [newPost, setNewPost] = useState({
//     title: "",
//     content: "",
//     author: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setNewPost({ ...newPost, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!newPost.title || !newPost.content || !newPost.author) return;
//     setPosts([...posts, { id: posts.length + 1, ...newPost }]);
//     setNewPost({ title: "", content: "", author: "" });
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 space-y-6">
//       <h2 className="text-2xl font-bold">Community Board</h2>

//       {/* Form for new post */}
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4 bg-gray-100 p-4 rounded-lg"
//       >
//         <Input
//           name="title"
//           placeholder="Post Title"
//           value={newPost.title}
//           onChange={handleChange}
//           className="border p-2 w-full rounded-md"
//         />
//         <Textarea
//           name="content"
//           placeholder="Post Content"
//           value={newPost.content}
//           onChange={handleChange}
//           className="border p-2 w-full rounded-md"
//         />
//         <Input
//           name="author"
//           placeholder="Your Name"
//           value={newPost.author}
//           onChange={handleChange}
//           className="border p-2 w-full rounded-md"
//         />
//         <Button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded-md"
//         >
//           Post
//         </Button>
//       </form>

//       {/* Display posts */}
//       <div className="space-y-4">
//         {posts.map((post) => (
//           <Card key={post.id} className="border p-4 rounded-lg shadow">
//             <CardContent>
//               <h3 className="text-lg font-semibold">{post.title}</h3>
//               <p className="text-gray-700 mt-2">{post.content}</p>
//               <span className="text-sm text-gray-500 mt-2 block">
//                 - {post.author}
//               </span>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommunityBoard;
