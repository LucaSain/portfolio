export default function Navbar() {
  const links = [
    { title: "/", link: "/" },
    { title: "Blog", link: "/blog" },
    { title: "Courses", link: "/courses" },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/in/sainenco-luchian-ba879b271",
    },
    { title: "Github", link: "https://github.com/LucaSain" },
  ];

  return (
    <div className="flex w-max max-w-screen-sm justify-center rounded-xl p-2 shadow-xl backdrop-blur-lg dark:text-white text-black">
      {links.map((link) => {
        return (
          <a
            key={link.title}
            href={link.link}
            className="btn btn-ghost btn-sm sm:btn-md"
          >
            {link.title}
          </a>
        );
      })}
    </div>
  );
}
