const users = [
    {
        email: "abc@gmail.com",
        password: "123456"
    },
    {
        email: "sawan@gmail.com",
        password: "sawa123@"
    },
    {
        email: "raman@email.com",
        password: "1ab456"
    },
    {
        email: "cyz@gmail.com",
        password: "12@56"
    },
]

export const getUserByEmail = (email) => {
   const found =  users.find((user) => user.email === email)
   return found;
}   


export const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Sign In",
      href: "/login",
    },
  ];
 export const navLinks2 = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Profile",
      href: "/profile",
    },
  ];