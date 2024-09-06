// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import BlogPosts from "./BlogPosts";
// import BeatLoader from "react-spinners/BeatLoader";

// const override = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "Center",
//   height: "50vh",
// };

//   // const fetchData = async () => {
//   //   try {
//   //     const res = await axios.get("https://fakestoreapi.com/products",{
//   //       cache: "force-cache"
//   //     });

//   //     const response = res.data;
//   //     console.log(response);

//   //     setBlogData(response);
//   //   } 
    
//   //   catch (err) {
//   //     console.log(err);
//   //   } 
//   //   finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // fetchData();

// const Blogs =  () => {
//   const router = useRouter();

//   const [blogData, setBlogData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   console.log(blogData);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("https://fakestoreapi.com/products");

//         const response = res.data;
//         // console.log(response);

//         setBlogData(response);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [blogData]);

//   return (
//     <>
//       <p className="text-3xl sm:text-5xl mt-8 mb-10  text-center font-mono">
//         The Products Blog
//       </p>

//       {loading && (
//         <BeatLoader
//           color="#454562"
//           loading={loading}
//           size={20}
//           aria-label="Loading Spinner"
//           data-testid="loader"
//           cssOverride={override}
//         />
//       )}

//       <div className="px-8 flex items-center justify-center flex-wrap gap-5  ">
//         {blogData.map((data) => {
//           return (
//             <div
//               className="mb-20"
//               onClick={() => router.push(`/blogs/${data.title}`)}
//             >
//               <BlogPosts key={data.id} data={data} />
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Blogs;
