/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[],
    },
    env : {
        stripe_public_key : process.env.STRIPE_PUBLIC_KEY
    },
};

export default nextConfig;
