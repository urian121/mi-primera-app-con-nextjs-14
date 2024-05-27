/** @type {import('next').NextConfig} */
const nextConfig = {
  //  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"],

    loader: "default",
    path: "/_next/image",
    // Para permitir múltiples dominios remotos
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: ["source.unsplash.com", "fakestoreapi.com"],
    //     pathname: "**",
    //   },
    // ],
    // En lugar de remotePatterns, puedes usar la propiedad `domains` con Next.js 12+
    domains: ["source.unsplash.com", "fakestoreapi.com"],
  },
};

export default nextConfig;
