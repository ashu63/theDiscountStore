/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["storage.googleapis.com"],
    },
    env : {
        stripe_public_key : process.env.STRIPE_PUBLIC_KEY
    },
};

export default nextConfig;
