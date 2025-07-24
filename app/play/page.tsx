"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function PlayPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const title = searchParams.get("title") || "";
  const video = searchParams.get("video") || "";

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      <button
        className="absolute top-4 left-4 px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 z-10"
        onClick={() => router.back()}
      >
        Back
      </button>
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center drop-shadow-lg">{title}</h1>
        <video
          src={video}
          controls
          autoPlay
          className="w-full h-[60vw] max-h-[70vh] bg-black rounded shadow-lg"
          style={{ background: "#000" }}
        />
      </div>
    </div>
  );
} 