export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I emphasize client partnership, promoting clear and continuous communication. ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My Tech Stack",
      description: "I constantly work on Updating...",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "A Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Chess-AI Model for PVE Chess",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "GEN-AI Resume Processor",
      des: "Processes resume pdf's and extract them into databases and required csv's in a click.",
      img: "/Parser.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/VirgoTheLord/Gen-AI-Resume-Processor",
    },
    {
      id: 2,
      title: "Personalized Devfolio",
      des: "A minimalistic and modern portfolio that you are currently visting.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/VirgoTheLord/Best-Dev-Portfolio",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/VirgoTheLord/Gen-AI-Resume-Processor",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/VirgoTheLord/Gen-AI-Resume-Processor",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Yeah, He do be working fine. I mean, not as much as me, but ok. Work wise, He gets shit done. Worth a shot (P.S Please recruit this guy, i get commission.)",
      name: "Blessen Eby",
      title: "Director of Rizz",
    },
    {
      quote:
        "Elixir K.., sorry, going out of line. Decent Payyan, Get him a job. He needs the money to go out with us regularly. Boy too busy nowadays.",
      name: "David Mojish",
      title: "Director of React(He the Boss, ngl)",
    },
    {
      quote:
        "Onnum Parayanilla. Set Payyan. Please Recruit Instantly.",
      name: "Rithik Rajan Baby",
      title: "Director of... you guessed it.. PussyKuttan and Gang",
    },
    {
      quote:
        "See, He does ok work. I guess giving him a chance wont hurt. Also, provide me one as well because of course, I am his mentor. You get the assignment, yeah? ",
      name: "Abhiram Sabu",
      title: "Director of ShortKings, no offence as usual",
    },
    {
      quote:
        "Alwin is a really good guy. If there is anyone around that I would recommend for a job, It will be him. I cannot think of any person more capable than him around. I certify all these with complete dishonesty.",
      name: "Gokul Krishna",
      title: "Director of Perfectio",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "GEN-AI and Prompt Engineering Intern",
      desc: "Assisted in creating a Resume Processor, by implementing an llm. ",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web App Dev - Bus Pass",
      desc: "Designed and developed Web app for providing a Bus Pass for infrequent bus users. ",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Chess-AI Model: Hobby Dev",
      desc: "Developing a Chess-AI model for a PVE- Chess game experience.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Image Generation: Pic to Pic/ Text to Pic",
      desc: "Currently trying to develop an Image generation model that can work both disciplines.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];