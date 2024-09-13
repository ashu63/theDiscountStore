"use client"
export default function Cancel() {
    return (
        <div className="h-[85vh] flex flex-col items-center justify-center gap-4 p-5">
           <img className="h-60 md:h-72 object-contain mb-8" src="https://cdn-icons-png.flaticon.com/512/4029/4029896.png" alt="" />
           <h2 className="text-red-600 font-semibold text-4xl"> Payment Failed !</h2>
           <p className="text-gray-700 text-center max-w-xl ">You have cancel the payment or something wrong happend ! </p>
           <button onClick = {() => router.push("/")} className="mt-6 bg-red-700/70 w-64 p-2 rounded-sm hover:bg-red-700/80 transition-all duration-200 text-white hover:border-none">
                Back to Home
              </button>
        </div>
    )
}