import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "أكاديميك",
    short_name: "أكاديميك",
    description: "منصة تعليمية مجانية لمساعدة طلاب الدراسات العليا في العراق على اجتياز امتحانات الكفاءة",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0b0f19",
    theme_color: "#1e3a8a",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/images/academiq-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/academiq-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
