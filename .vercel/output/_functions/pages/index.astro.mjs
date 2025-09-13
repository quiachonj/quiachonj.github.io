import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot, d as addAttribute, F as Fragment } from '../chunks/astro/server_7mBX0aCo.mjs';
import 'kleur/colors';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DcwwsiGP.mjs';
import { c as cn, $ as $$Icon } from '../chunks/Icon_C1x6HXfp.mjs';
import '../chunks/site.config_qp5nQVpy.mjs';
import 'clsx';
import { s as sortMdByDate, g as getAllPosts } from '../chunks/post_ugGMhQAO.mjs';
import { $ as $$PostPreview } from '../chunks/PostPreview_DGrCNk0U.mjs';
import { $ as $$Button } from '../chunks/Button_FccLSfLS.mjs';
import { $ as $$Base } from '../chunks/Base_DMuK2IHb.mjs';
export { renderers } from '../renderers.mjs';

const portrait = new Proxy({"src":"/_astro/portrait.2Yf7ZPk9.png","width":3840,"height":3840,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/assets/portrait.png";
							}
							
							return target[name];
						}
					});

const portrait$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: portrait
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://astro-resume-01.vercel.app");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    as: Tag = "div",
    class: className = " border border-border px-5 py-3",
    href,
    heading,
    subheading,
    date
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "relative rounded-2xl",
    href && "transition-all hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> ${heading || subheading || date ? renderTemplate`<div class="flex flex-col gap-y-0.5"></div><h1 class="text-lg font-medium text-secondary-foreground ">${heading}</h1>
		<h2 class="text-muted-foreground">${subheading}</h2>
		<h2 class="text-sm text-accent-300">${date}</h2>` : null} ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/Card.astro", void 0);

const $$Astro$6 = createAstro("https://astro-resume-01.vercel.app");
const $$IconWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$IconWrapper;
  const { icon, class: className, classIcon, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    className,
    "shadow-sm p-2 rounded-lg flex items-center justify-center",
    !href && "cursor-default"
  ), "class")}>${renderComponent($$result, "Icon", $$Icon, { "class": classIcon, "name": icon })}</div>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/IconWrapper.astro", void 0);

const $$Astro$5 = createAstro("https://astro-resume-01.vercel.app");
const $$IconText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$IconText;
  const { class: className, title, href, subTitle, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    className,
    "flex flex-row items-center gap-x-2",
    href && "hover:opacity-75 transition-all"
  ), "class")}> ${renderComponent($$result, "IconWrapper", $$IconWrapper, { "icon": icon, "classIcon": "h-5 w-5", "class": "bg-background-tertiary" })} <div class="flex flex-col"> <span class="text-xs uppercase text-accent-200">${title}</span> <span class="font-bold dark:text-white">${subTitle}</span> </div> </div>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/IconText.astro", void 0);

var data = { name:"Lorem ipsum dolor",
  position:"Position",
  email:"email@mail.com",
  phone:"+49 12345 12345",
  linkedin:"https://linkedin.com/",
  github:"https://github.com/",
  twitter:"https://twitter.com/",
  location:"Berlin, Germany",
  birthday:"10th July 1980",
  summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque quia omnis consectetur, voluptas praesentium veniam blanditiis ratione asperiores accusantium laborum odit commodi quis deserunt incidunt et dolor iure ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n",
  experience:[ { title:"Lorem Ipsum",
      company:"amet consectetur adipisicing",
      location:"Berlin, Germany",
      dateRange:"June 2021 - Jan 2024",
      description:[ "Lorem, ipsum dolor sit amet consectetur adipisicing elit!",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit!" ] },
    { title:"Lorem Ipsum",
      company:"amet consectetur adipisicing",
      location:"Berlin, Germany",
      dateRange:"June 2021 - Jan 2024",
      description:[ "Lorem, ipsum dolor sit amet consectetur adipisicing elit!",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit!" ] } ],
  education:[ { title:"Lorem Ipsum",
      company:"amet consectetur adipisicing",
      location:"Berlin, Germany",
      dateRange:"June 2021 - Jan 2024",
      description:[ "Lorem, ipsum dolor sit amet consectetur adipisicing elit!",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit!" ] },
    { title:"Lorem Ipsum",
      company:"amet consectetur adipisicing",
      location:"Berlin, Germany",
      dateRange:"June 2021 - Jan 2024",
      description:[ "Lorem, ipsum dolor sit amet consectetur adipisicing elit!",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit!" ] } ],
  projects:[ { title:"Lorem Ipsum",
      description:"amet consectetur adipisicing",
      href:"https://google.de",
      imagePath:"/src/assets/coming-soon.png" },
    { title:"Lorem Ipsum",
      description:"amet consectetur adipisicing",
      href:"https://google.de",
      imagePath:"/src/assets/coming-soon.png" } ],
  skills:{ Infrastructure:[ "Terraform",
      "Packer" ],
    Blockchain:[ "Bitcoin",
      "Ethereum" ],
    "Configuration Management":[ "Ansible",
      "Chef",
      "Helm" ],
    "Virtualization & Containers":[ "Docker",
      "Portainer",
      "Kubernetes" ],
    "CI/CD & SCM":[ "GitHub Actions",
      "Gitlab CI/CD",
      "Jenkins",
      "git" ],
    "Web & App Servers":[ "Apache",
      "Tomcat",
      "nginx" ],
    Frameworks:[ "Express",
      "React",
      "Django",
      "Ionic" ],
    "Database Servers":[ "PostgreSQL",
      "MongoDB",
      "Oracle" ],
    "ETL & Integration":[ "SSIS",
      "Informatica" ],
    Languages:[ "JavaScript",
      "Python",
      "Ruby",
      "Rust" ],
    "Scripting & Shell":[ "Bash",
      "Python",
      "PowerShell" ],
    "Cloud Providers":[ "AWS",
      "Azure",
      "GCP" ],
    "Operating Systems":[ "Ubuntu",
      "Redhat",
      "Debian" ],
    Networking:[ "TCP/IP",
      "DNS",
      "DHCP",
      "VPN",
      "VLAN",
      "BGP" ] },
  certifications:[ { issuer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta magni consequuntur corrupti.",
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
      issued:"Jun 2023",
      href:"https://google.de" },
    { issuer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta magni consequuntur corrupti.",
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
      issued:"Jun 2023",
      href:"https://google.de" },
    { issuer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta magni consequuntur corrupti.",
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
      issued:"Jun 2023",
      href:"https://google.de" },
    { issuer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta magni consequuntur corrupti.",
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
      issued:"Jun 2023",
      href:"https://google.de" } ] };

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="top-5 flex flex-col items-center justify-center pt-16 md:sticky md:col-span-1 md:h-screen md:pl-5"> ${renderComponent($$result, "Image", $$Image, { "src": portrait, "alt": "profile photo", "class": "bg-accent-200 z-10 h-56 w-auto rounded-3xl p-1", "loading": "lazy" })} ${renderComponent($$result, "Card", $$Card, { "class": "bg-background-tertiary mt-[-6rem] w-full max-w-[400px] p-5" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col items-center gap-y-4 pb-10 pt-24"> <h1 class="text-3xl font-bold text-secondary-foreground">${data.name}</h1> <h2 class="text-xl text-secondary-foreground">${data.position}</h2> <div class="flex flex-row gap-x-4 pb-3 pt-1"> <a${addAttribute(data.github, "href")} target="_blank" aria-label="github">${renderComponent($$result2, "IconWrapper", $$IconWrapper, { "href": "https://github.com", "icon": "github", "classIcon": "h-5 w-5", "class": "bg-accent-200" })}</a> <a${addAttribute(data.linkedin, "href")} target="_blank" aria-label="linkedin">${renderComponent($$result2, "IconWrapper", $$IconWrapper, { "href": "https://linkedin.com", "icon": "linkedin", "classIcon": "h-5 w-5", "class": "bg-accent-200" })}</a> <a${addAttribute(data.twitter, "href")} target="_blank" aria-label="twitter">${renderComponent($$result2, "IconWrapper", $$IconWrapper, { "href": "https://twitter.com", "icon": "twitter", "classIcon": "h-5 w-5", "class": "bg-accent-200" })}</a> <a href="/rss.xml" target="_blank" aria-label="rss">${renderComponent($$result2, "IconWrapper", $$IconWrapper, { "href": "/rss.xml", "icon": "rss", "classIcon": "h-5 w-5", "class": "bg-accent-200" })}</a> </div> ${renderComponent($$result2, "Card", $$Card, { "class": "bg-background-secondary flex w-full flex-col gap-x-7 gap-y-1 p-5 text-secondary-foreground" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "IconText", $$IconText, { "title": "Phone", "subTitle": data.phone, "icon": "phone" })} <div class="border-t border-border"></div> ${renderComponent($$result3, "IconText", $$IconText, { "title": "Email", "subTitle": data.email, "icon": "mail" })} <div class="border-t border-border"></div> ${renderComponent($$result3, "IconText", $$IconText, { "title": "Location", "subTitle": data.location, "icon": "location" })} <div class="border-t border-border"></div> ${renderComponent($$result3, "IconText", $$IconText, { "title": "Birthday", "subTitle": data.birthday, "icon": "cake" })} ` })} </div> <a href="/cv-download.pdf" target="_blank" class="bg-accent-200 hover:shadow-background-tertiary/40 flex flex-row items-center justify-center gap-x-3 rounded-3xl px-4 py-2 text-sm transition-all hover:shadow-md dark:shadow-black/50 hover:dark:shadow-white/30"> <!-- <span class="relative flex items-center justify-center">
					<span
						class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"
					></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
				</span> --> <p class="text-lg font-bold">Download CV</p> </a> ` })} </aside>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/Sidebar.astro", void 0);

const $$Astro$4 = createAstro("https://astro-resume-01.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="anchor flex flex-col gap-y-5 py-5"> <div class="text-xl font-semibold text-secondary-foreground flex flex-row items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "round", "class": "text-accent-300" })}<h1 class=" pl-2 font-bold"${addAttribute(title, "aria-label")}>${title}</h1> </div> <div class="flex flex-col gap-y-3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/Section.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "About me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="text-muted-foreground"> ${data.summary} </p> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/About.astro", void 0);

const $$Certification = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Certifications" }, { "default": ($$result2) => renderTemplate`${data.certifications.map(
    (cert) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "bg-background-secondary flex w-full flex-col gap-x-7 gap-y-1 p-5 text-secondary-foreground", "as": "a", "heading": cert.issuer, "subheading": cert.name, "date": cert.issued, "altText": "Lorem, ipsum dolor sit", "href": cert.href })}`
  )}` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Certification.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "education", "title": "Education" }, { "default": ($$result2) => renderTemplate`${data.education.map((role) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "flex w-full flex-col gap-x-7 gap-y-1 bg-background-secondary p-5 text-secondary-foreground", "heading": role.company, "subheading": role.title, "date": role.dateRange }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<ul class="ml-4 list-disc text-muted-foreground"> ${role.description.map((bullet) => renderTemplate`<li>${bullet}</li>`)} </ul> ` })} ` })}`)}` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Education.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "experience", "title": "Experience" }, { "default": ($$result2) => renderTemplate`${data.experience.map((role) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "flex w-full flex-col gap-x-7 gap-y-1 bg-background-secondary p-5 text-secondary-foreground", "heading": role.company, "subheading": role.title, "date": role.dateRange }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<ul class="ml-4 list-disc text-muted-foreground"> ${role.description.map((bullet) => renderTemplate`<li>${bullet}</li>`)} </ul> ` })} ` })}`)}` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Experience.astro", void 0);

const $$Astro$3 = createAstro("https://astro-resume-01.vercel.app");
const $$Posts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Posts;
  const { posts } = Astro2.props;
  const MAX_POSTS = 5;
  const allPostsByDate = sortMdByDate(posts).slice(0, MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Posts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="flex flex-col gap-y-2"> ${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row"> ${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Posts.astro", void 0);

const $$Astro$2 = createAstro("https://astro-resume-01.vercel.app");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    as: Tag = "a",
    class: className,
    href,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/coming-soon.png": () => import('../chunks/coming-soon_-0J7UhqN.mjs'),"/src/assets/portrait.png": () => Promise.resolve().then(() => portrait$1),"/src/assets/portrait_male.png": () => import('../chunks/portrait_male_DqUilbU-.mjs')});
  if (!images[imagePath])
    throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground ",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": "h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover", "loading": "lazy", "quality": "mid" })} ${maybeRenderHead()}<div class="flex flex-col gap-y-0.5 px-5 py-4"> <h1 class="text-lg font-medium text-secondary-foreground ">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/ProjectCard.astro", void 0);

const $$Project = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "projects", "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-y-3 sm:flex-row sm:gap-x-3 sm:gap-y-0"> ${data.projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "href": project.href, "heading": project.title, "subheading": project.description, "imagePath": project.imagePath, "altText": "Example", "class": "w-full sm:w-1/2" })}`)} </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Project.astro", void 0);

const $$Astro$1 = createAstro("https://astro-resume-01.vercel.app");
const $$SkillLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 lg:flex-row md:gap-x-5 md:gap-y-0"> <h2 class="w-2/5 font-medium text-secondary-foreground ">${title}</h2> <div class="flex w-3/5 flex-row flex-wrap gap-x-4 gap-y-2"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "as": "button", "title": skill, "style": "pill" })}`)} </div> </div>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/SkillLayout.astro", void 0);

const $$Skill = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "skills", "title": "Skills" }, { "default": ($$result2) => renderTemplate`${Object.keys(data.skills).map(
    (category) => renderTemplate`${renderComponent($$result2, "SkillLayout", $$SkillLayout, { "title": category, "skills": data.skills[category] })}`
  )}` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Skill.astro", void 0);

const $$Astro = createAstro("https://astro-resume-01.vercel.app");
const $$Tools = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tools;
  const { title, tools } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "class": "bg-background-secondary flex w-full flex-col gap-x-7 gap-y-1 p-5 text-secondary-foreground" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="px-2 text-lg font-medium text-secondary-foreground">${title}</h2> <div class="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 sm:gap-y-4"> ${tools.map((tool) => renderTemplate`<a class="group"${addAttribute(tool.href, "href")}${addAttribute(tool.name, "id")} target="_blank"> <div class="flex flex-row items-center gap-x-4 px-2 py-0.5 transition-all group-hover:bg-background-tertiary rounded-lg"> ${renderComponent($$result2, "IconWrapper", $$IconWrapper, { "icon": tool.iconPath, "class": "bg-background-tertiary h-10 w-10 transition-all group-hover:shadow-none " })} <div class="flex flex-col"> <h3 class="font-medium text-secondary-foreground">${tool.name}</h3> <p class="text-muted-foreground">${tool.description}</p> </div> </div> </a>`)} </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/Tools.astro", void 0);

const $$Tool = createComponent(($$result, $$props, $$slots) => {
  const DESIGN = [
    {
      name: "Figma",
      description: "Design Tool",
      href: "https://www.figma.com/",
      iconPath: "figma",
      iconBgColour: "#000001"
    }
  ];
  const PRODUCTIVITY = [
    {
      name: "Arc",
      description: "Browser",
      href: "https://arc.net/",
      iconPath: "arc",
      iconBgColour: "#414350"
    },
    {
      name: "Notion",
      description: "Note Taking",
      href: "https://www.notion.so/product",
      iconPath: "notion",
      iconBgColour: "#EFEFEE"
    },
    {
      name: "Obsidian",
      description: "Long-form Writing",
      href: "https://obsidian.md/",
      iconPath: "obsidian",
      iconBgColour: "#7A3EE8"
    }
  ];
  const DEVELOPMENT = [
    {
      name: "VS Code",
      description: "IDE",
      href: "https://code.visualstudio.com/",
      iconPath: "vscode",
      iconBgColour: "#2C2C32"
    },
    {
      name: "ChatGPT",
      description: "AI",
      href: "https://chat.openai.com/",
      iconPath: "chatgpt",
      iconBgColour: "#06A67F"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "tools", "title": "Tools" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="text-muted-foreground">Tools and software I use to build whatever I like</p> ${renderComponent($$result2, "ToolSection", $$Tools, { "title": "Development", "tools": DEVELOPMENT })} ${renderComponent($$result2, "ToolSection", $$Tools, { "title": "Design", "tools": DESIGN })} ${renderComponent($$result2, "ToolSection", $$Tools, { "title": "Productivity", "tools": PRODUCTIVITY })} ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Tool.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "meta": { title: "Home" } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 gap-5 md:grid-cols-3"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div class="md:col-span-2 md:mr-5"> <div class="bg-background-tertiary mt-5 rounded-2xl border border-transparent p-5 md:mt-[5.5rem]"> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Project", $$Project, {})} ${renderComponent($$result2, "Certification", $$Certification, {})} ${renderComponent($$result2, "Skill", $$Skill, {})} ${renderComponent($$result2, "Tool", $$Tool, {})} ${allPosts.length > 0 && renderTemplate`${renderComponent($$result2, "Posts", $$Posts, { "posts": allPosts })}`} </div> </div> </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/pages/index.astro", void 0);

const $$file = "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
