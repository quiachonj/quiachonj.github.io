import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { c as createComponent, a as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, g as renderHead, r as renderComponent, F as Fragment, s as spreadAttributes, u as unescapeHTML } from './astro/server_7mBX0aCo.mjs';
import 'kleur/colors';
import { s as siteConfig } from './site.config_H-ENChsp.mjs';
/* empty css                         */
import { getIconData, iconToSVG } from '@iconify/utils';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n	const lightModePref = window.matchMedia('(prefers-color-scheme: light)');\n\n	// Get user preference from local storage or from browser preference\n	function getUserPref() {\n		const storedTheme = localStorage.getItem('theme') ?? undefined;\n		return storedTheme || (lightModePref.matches ? 'light' : 'dark');\n	}\n\n	function setTheme(newTheme) {\n		if (newTheme !== 'light' && newTheme !== 'dark') {\n			return console.log(`Invalid theme value '${newTheme}' received. Expected 'light' or 'dark'.`);\n		}\n\n		localStorage.setItem('theme', newTheme);\n\n		const root = document.documentElement;\n\n		// if current dark theme and new theme is dark, return\n		if (newTheme === 'dark' && root.classList.contains('dark')) {\n			return;\n		} else if (newTheme === 'light' && !root.classList.contains('dark')) {\n			return;\n		}\n\n		root.classList.toggle('dark');\n	}\n\n	// Initial Setup\n	setTheme(getUserPref());\n\n	// View Transitions hook to restore theme\n	document.addEventListener('astro:after-swap', () => setTheme(getUserPref()));\n\n	// Listen for theme-change custom event\n	document.addEventListener('theme-change', (e) => {\n		setTheme(e.detail.theme);\n	});\n\n	// Listen for prefers-color-scheme change\n	lightModePref.addEventListener('change', (e) => setTheme(e.matches ? 'light' : 'dark'));\n<\/script>"], ["<script>\n	const lightModePref = window.matchMedia('(prefers-color-scheme: light)');\n\n	// Get user preference from local storage or from browser preference\n	function getUserPref() {\n		const storedTheme = localStorage.getItem('theme') ?? undefined;\n		return storedTheme || (lightModePref.matches ? 'light' : 'dark');\n	}\n\n	function setTheme(newTheme) {\n		if (newTheme !== 'light' && newTheme !== 'dark') {\n			return console.log(\\`Invalid theme value '\\${newTheme}' received. Expected 'light' or 'dark'.\\`);\n		}\n\n		localStorage.setItem('theme', newTheme);\n\n		const root = document.documentElement;\n\n		// if current dark theme and new theme is dark, return\n		if (newTheme === 'dark' && root.classList.contains('dark')) {\n			return;\n		} else if (newTheme === 'light' && !root.classList.contains('dark')) {\n			return;\n		}\n\n		root.classList.toggle('dark');\n	}\n\n	// Initial Setup\n	setTheme(getUserPref());\n\n	// View Transitions hook to restore theme\n	document.addEventListener('astro:after-swap', () => setTheme(getUserPref()));\n\n	// Listen for theme-change custom event\n	document.addEventListener('theme-change', (e) => {\n		setTheme(e.detail.theme);\n	});\n\n	// Listen for prefers-color-scheme change\n	lightModePref.addEventListener('change', (e) => setTheme(e.matches ? 'light' : 'dark'));\n<\/script>"])));
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/ThemeProvider.astro", void 0);

var data = { name:"Josh Quiachon",
  title:[ "Software Engineer",
    ".Net Full-Stack Developer",
    "Azure Cloud Developer",
    "Solutions Architect",
    "Data Analyst" ],
  email:"josh@quiachonj.us",
  phone:"+1 (646)600-8732",
  linkedin:"https://linkedin.com/in/quiachonj",
  github:"https://github.com/quiachonj",
  location:"New York, NY",
  summary:"I am a senior software engineer specializing in .NET development with hands on experience building enterprise-scale applications across the web, cloud native, and desktop platforms. Skilled in C#, ASP.NET Core, Blazor, Entity Framework Core, SQL Server, and Azure services. Proven track record in modernizing legacy platforms and delivering cloud-native solutions with measurable business outcomes. Skilled at navigating complex project requirements, legacy systems, evolving architectural patterns, and collaborating with stakeholders to align project releases with business goals.\n",
  experience:[ { title:"Independent Azure Consultant",
      company:"Amberlogica",
      location:"Remote, US",
      startDate:"Oct 2024",
      endDate:"Present",
      description:[ { project:"SaaS Home and Healthcare Billing",
          responsibilities:[ "Designed and developed core billing feature on Azure App Services + ASP.NET Core + EF Core, exposing secure REST APIs.",
            "Built initial workflows with Azure SQL, Cosmos DB, Blob Storage, Service Bus, Queue Storage, Functions, and Redis to support scalable, message-driven billing and document automation operations.",
            "Automated deployments and managed CI/CD pipelines with Azure DevOps.",
            "Developed Power BI dashboards for meaningful reporting.",
            "Partnered with stakeholders and product owners to streamline workflows and accelerate delivery cycles." ] } ] },
    { title:"Senior .Net Full Stack Developer",
      company:"United Welfare Fund",
      location:"New Rochel, NY",
      startDate:"Feb 2009",
      endDate:"Nov 2023",
      description:[ { project:"Enterprise Solution Development",
          responsibilities:[ "Modernized mission-critical operations by migrating legacy systems to ASP.NET Core + Blazor WebAssembly on Azure, improving UX and maintainability.",
            "Led the development and design of five core features of the enterprise application.",
            "Built modular UI components and APIs to accelerate feature delivery while ensuring design consistency.",
            "Architected Azure Functions for serverless automation (document processing, annual dividend calculations).",
            "Leveraged Azure Service Bus and Cosmos DB for scalable, fault-tolerant workflows.",
            "Delivered near real-time analytics with Power BI, SSRS, and Data Factory ETL pipelines.",
            "Deployed cloud-native services via Azure App Services, Containers, ensuring elastic scalability." ] },
        { project:"AS400 Legacy Modernization",
          responsibilities:[ "Migrated AS400 RPG code to C# with WPF + EF, migrated DB2 workloads into SQL Server.",
            "Designed WPF MVVM-based desktop framework with lifecycle management, PDF automation, and multi-department workflow optimizations.",
            "Reduced technical debt and cut feature delivery cycles by 70% through componentized frameworks and standardized workflows." ] } ] },
    { title:"Software Development Engineer in Test",
      company:"Microsoft",
      location:"Redmond, WA",
      startDate:"Jan 2008",
      endDate:"Feb 2009",
      description:[ { project:"Microsoft Online test automations",
          responsibilities:[ "Developed a UI test automation framework in C# with Microsoft UI Automation, increasing coverage and reducing regression testing cycles.",
            "Authored and maintained automated test scripts with the Perseus harness to ensure compatibility across builds.",
            "Implemented language-neutral test processes for both globalized and localized product versions, expanding automation reach.",
            "Validated functional consistency on multilingual environments, preventing region-specific defects." ] } ] } ],
  highlights:[ { title:"Legacy System Modernization",
      description:[ "Led the multi-phase migration of mission-critical systems from AS400 and WPF platforms to modern ASP.NET Core, Blazor, and Azure cloud infrastructure, enhancing performance, usability, and long-term maintainability." ] },
    { title:"Enterprise Application Development",
      description:[ "Designed and developed scalable, modular enterprise web applications using Blazor, .NET Core, Telerik UI, and RESTful Web APIs, delivering a modernized and responsive user experience." ] },
    { title:"Desktop & MVVM Framework Design",
      description:[ "Built a custom MVVM framework for WPF applications, handling state management, PDF generation, document scanning, and complex user workflows across multi-department use cases." ] },
    { title:"Cloud-Native Architecture & Deployment",
      description:[ "Implemented Azure-based solutions with App Services, Azure Functions, Containers, Blob Storage, Queue Storage, Azure Service Bus, Azure SQL, and CosmosDB to support scaling and reliable workflow." ] },
    { title:"ETL",
      description:[ "Designed CDC-enabled ETL pipelines with Azure Data Factory and Redis Caching for high-load financial reporting requests." ] },
    { title:"Reporting & BI Automation",
      description:[ "Delivered business insights by integrating SSRS and Power BI with operational data, enabling secure, role-based reporting for audit visibility." ] },
    { title:"DevOps & Codebase Maintenance",
      description:[ "Maintained a clean and scalable codebase through CI/CD pipelines (Azure DevOps), issue tracking via Jira/Zendesk, and continuous refactoring aligned with evolving standards" ] } ],
  education:[ { schoolName:"MIU",
      degreeType:"Master of Science",
      fieldOfStudy:"Computer Science",
      location:"Fairfield, IA",
      startDate:"Apr 2007",
      endDate:"Oct 2009" } ],
  skills:{ "Languages and Scripts":[ "C#",
      "TypeScript",
      "JavaScript",
      "SQL/T-SQL",
      "Python",
      "Java",
      "C++",
      "C" ],
    Frontend:[ "Blazor WebAssembly",
      "Blazor with SignalR",
      "React",
      "Angular",
      "Telerik UI",
      "HTML5",
      "CSS3" ],
    "Backend & APIs":[ "ASP.NET Core",
      "Web API",
      "REST",
      "Entity Framework",
      "EF Core",
      "Dapper" ],
    "Databases & Data Storage":[ "SQL Server",
      "PostgreSQL",
      "Cosmos DB",
      "Redis" ],
    "Reporting and BI":[ "SSRS",
      "SSIS",
      "MS Report Builder",
      "Power BI" ],
    "Azure Cloud":[ "Azure App Services",
      "Functions",
      "Storage",
      "Service Bus",
      "ADF" ],
    "CI/CD & DevOps":[ "Azure DevOps",
      "GitHub",
      "Docker" ],
    "Testing & Tools":[ "xUnit",
      "NUnit",
      "Postman",
      "ReSharper",
      "StyleCop",
      "Jira",
      "Zendesk" ],
    "Desktop Apps":[ "WPF",
      "WinForms",
      "MFC",
      "Win32 API" ] },
  certifications:[ { issuer:"Microsoft",
      name:"Azure Fundamentals (AZ-900)",
      lastTaken:"Sept 2023",
      href:"https://learn.microsoft.com/api/credentials/share/en-us/joshquiachon/489B5DB681919C30?sharingId=70A7C7DC591F337E" } ] };

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="mx-auto mt-24 w-full px-5"> <div class="border-t border-border py-5"> <div class="flex flex-col items-center gap-y-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-y-0"> <div class="text-center md:text-right">© ${year.getFullYear()} ${data.name}</div> </div> </div> </footer>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/layout/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://dev.quiachonj.us");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const { articleDate, description, ogImage, title } = Astro2.props;
  const titleSeparator = "\u2022";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/social-card.png", Astro2.url).href;
  return renderTemplate`<head><meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>${siteTitle}</title><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💼</text></svg>"><!-- <link rel='preload' href='/fonts/Satoshi-Variable.ttf' as='font' type='font/ttf' crossorigin />
	<link
		rel='preload'
		href='/fonts/Satoshi-VariableItalic.ttf'
		as='font'
		type='font/ttf'
		crossorigin
	/>
	<link rel='preload' href='/fonts/ClashDisplay-Variable.ttf' as='font' type='font/ttf' crossorigin /> --><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta${addAttribute(siteTitle, "content")} name="title"><meta${addAttribute(description, "content")} name="description"><meta${addAttribute(siteConfig.author, "content")} name="author"><meta content="" name="theme-color"><meta${addAttribute(articleDate ? "article" : "website", "content")} property="og:type"><meta${addAttribute(title, "content")} property="og:title"><meta${addAttribute(description, "content")} property="og:description"><meta${addAttribute(canonicalURL, "content")} property="og:url"><meta${addAttribute(siteConfig.title, "content")} property="og:site_name"><meta${addAttribute(siteConfig.ogLocale, "content")} property="og:locale"><meta${addAttribute(socialImageURL, "content")} property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta${addAttribute(siteConfig.author, "content")} property="article:author"><meta${addAttribute(articleDate, "content")} property="article:published_time">` })}`}<meta content="summary_large_image" property="twitter:card"><meta${addAttribute(canonicalURL, "content")} property="twitter:url"><meta${addAttribute(title, "content")} property="twitter:title"><meta${addAttribute(description, "content")} property="twitter:description"><meta${addAttribute(socialImageURL, "content")} property="twitter:image"><link href="/sitemap-index.xml" rel="sitemap"><link href="/rss.xml" rel="alternate"${addAttribute(siteConfig.title, "title")} type="application/rss+xml"><meta${addAttribute(Astro2.generator, "content")} name="generator">${renderHead()}</head>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/layout/Head.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1757891950,"icons":{"arc":{"body":"<path fill=\"#FFF\" d=\"M123.632.012c13.836.398 26.332 8.52 32.32 21.089l23.761 49.984.382-.966a59 59 0 0 0 2.315-7.64l.332-1.548c4.004-20.02 23.463-32.977 43.52-29.016a36.98 36.98 0 0 1 29.018 43.526c-5.337 26.652-19.095 51.387-38.829 70.983l-.625.607 8.33 17.514c9.668 20.33-.349 44.903-21.4 51.799l-.95.297-.725.219a36.7 36.7 0 0 1-9.897 1.373 37.01 37.01 0 0 1-33.42-21.102l-6.43-13.518-1.622.402c-8.692 2.054-17.508 3.192-26.328 3.367l-2.405.024c-8.488 0-17.116-.987-25.736-2.9l-1.7-.396-6.177 12.987a36.97 36.97 0 0 1-20.713 18.852l-1.1.382a36.96 36.96 0 0 1-28.96-2.484c-17.56-9.334-24.256-31.186-15.688-49.235l7.67-16.129-.67-.65C17.39 137.46 9.054 125.67 3.524 112.996l-.737-1.733-.106-.281C-4.93 92.058 4.21 70.517 23.122 62.86c14.834-6.005 31.278-1.693 41.39 9.578l.19.218 24.446-51.422A36.86 36.86 0 0 1 121.535.01L122.57 0z\"/><path fill=\"#1A007F\" d=\"m87.118 170.045 21.896-46.068c-16.724-3.552-33.551-13.897-43.068-26.482L43.05 145.63c12.723 10.793 27.999 19.276 44.068 24.414\"/><path fill=\"#4E000A\" d=\"M178.495 96.115c-11 13.483-26.275 23.483-42.62 27.379l21.827 45.93c15.931-5.38 30.827-14.069 43.69-25.206z\"/><path fill=\"#1A007F\" d=\"M43.05 145.631 31.602 169.7c-5.828 12.241-1.449 27.31 10.551 33.689 12.724 6.758 28.379 1.483 34.517-11.38l10.448-21.964A130.6 130.6 0 0 1 43.05 145.63\"/><path fill=\"#FF9396\" d=\"M223.942 43.565a25.137 25.137 0 0 0-29.585 19.723c-2.414 12.07-8.069 23.31-15.862 32.862l22.862 48.137c21.103-18.31 36.688-43.24 42.275-71.137 2.724-13.655-6.104-26.896-19.69-29.585\"/><path fill=\"#002DC8\" d=\"M135.875 123.494c-4.896 1.172-9.896 1.793-14.896 1.793-3.896 0-7.93-.448-11.965-1.31-16.724-3.552-33.551-13.897-43.068-26.482-2.38-3.138-4.31-6.414-5.655-9.759-5.207-12.862-19.862-19.068-32.724-13.896C14.705 79.047 8.5 93.702 13.671 106.563c5.896 14.62 16.31 28.034 29.379 39.068a130.5 130.5 0 0 0 44.033 24.414c11.069 3.551 22.551 5.517 33.862 5.517 12.551 0 24.93-2.173 36.723-6.138z\"/><path fill=\"#FF536A\" d=\"m213.425 169.596-12.068-25.378-22.862-48.103-.034.035s0-.035.034-.035l-33.24-69.93a25.14 25.14 0 0 0-22.69-14.344c-9.69 0-18.517 5.586-22.689 14.345L65.98 97.495c9.517 12.585 26.344 22.93 43.068 26.482l10.965-23.034c1.035-2.173 4.138-2.173 5.173 0l10.724 22.551h.069-.07l21.828 45.93 10.724 22.551a25.1 25.1 0 0 0 22.723 14.345c2.242 0 4.483-.31 6.69-.931 15.138-4.173 22.31-21.586 15.551-35.793\"/>","width":256,"height":219},"cake":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 20h18v-8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3z\"/><path d=\"M3 14.803A2.4 2.4 0 0 0 4 15a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1c.35.007.692-.062 1-.197M12 4l1.465 1.638a2 2 0 1 1-3.015.099z\"/></g>"},"chatgpt":{"body":"<path fill=\"currentColor\" d=\"M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218-28.188-16.218z\"/>","width":256,"height":260},"close":{"body":"<path fill=\"currentColor\" d=\"M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281l1.44 1.439L25 26.438l17.281 17.28 1.438-1.437L26.438 25l17.28-17.281-1.437-1.438L25 23.563Z\"/>","width":50,"height":50},"figma":{"body":"<path fill=\"#0ACF83\" d=\"M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64\"/><path fill=\"#A259FF\" d=\"M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64\"/><path fill=\"#F24E1E\" d=\"M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64\"/><path fill=\"#FF7262\" d=\"M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z\"/><path fill=\"#1ABCFE\" d=\"M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64 28.672-64 64-64 64 28.672 64 64\"/>","width":256,"height":384},"github":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21\"/>"},"linkedin":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 5v5m0-8v.01M12 16v-5\"/><path d=\"M16 16v-3a2 2 0 0 0-4 0\"/></g>"},"location":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0\"/><path d=\"M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0m8-10v2m0 16v2m8-10h2M2 12h2\"/></g>"},"mail":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 21v-6.5a3.5 3.5 0 0 0-7 0V21h18v-6a4 4 0 0 0-4-4H6.5\"/><path d=\"M12 11V3h4l2 2-2 2h-4m-6 8h1\"/></g>"},"menu":{"body":"<path fill=\"currentColor\" d=\"M3 9a1 1 0 1 0 0 2h44a1 1 0 1 0 0-2zm0 15a1 1 0 1 0 0 2h44a1 1 0 1 0 0-2zm0 15a1 1 0 1 0 0 2h44a1 1 0 1 0 0-2z\"/>","width":50,"height":50},"notion":{"body":"<path fill=\"currentColor\" d=\"M3.258 3.117c.42.341.577.315 1.366.262l7.433-.446c.158 0 .027-.157-.026-.183l-1.235-.893c-.236-.184-.551-.394-1.155-.341l-7.198.525c-.262.026-.315.157-.21.262zm.446 1.732v7.821c0 .42.21.578.683.552l8.17-.473c.472-.026.525-.315.525-.656V4.324c0-.34-.131-.525-.42-.499l-8.538.499c-.315.026-.42.184-.42.525m8.065.42c.052.236 0 .472-.237.499l-.394.078v5.775c-.341.183-.657.288-.92.288-.42 0-.525-.131-.84-.525L6.803 7.342v3.911l.815.184s0 .472-.657.472l-1.812.105c-.053-.105 0-.367.184-.42l.472-.13V6.292L5.15 6.24c-.053-.236.078-.577.446-.604l1.944-.13L10.22 9.6V5.978l-.683-.079c-.053-.289.157-.499.42-.525zm-9.93-3.937L9.326.781c.919-.08 1.156-.026 1.733.394l2.39 1.68c.395.288.526.367.526.682v9.212c0 .578-.21.92-.946.971l-8.694.525c-.552.027-.815-.052-1.104-.42l-1.76-2.283c-.315-.42-.446-.735-.446-1.103V2.25c0-.472.21-.866.814-.918\"/>","width":15,"height":15},"obsidian":{"body":"<defs><radialGradient id=\"a\" cx=\"72.819%\" cy=\"96.934%\" r=\"163.793%\" fx=\"72.819%\" fy=\"96.934%\" gradientTransform=\"rotate(-104 11141.322 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".4\"/><stop offset=\"100%\" stop-opacity=\".1\"/></radialGradient><radialGradient id=\"b\" cx=\"52.917%\" cy=\"90.632%\" r=\"190.361%\" fx=\"52.917%\" fy=\"90.632%\" gradientTransform=\"rotate(-82 10746.75 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".6\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".1\"/></radialGradient><radialGradient id=\"c\" cx=\"31.174%\" cy=\"97.138%\" r=\"178.714%\" fx=\"31.174%\" fy=\"97.138%\" gradientTransform=\"rotate(-77 10724.606 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".8\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".4\"/></radialGradient><radialGradient id=\"d\" cx=\"71.813%\" cy=\"99.994%\" r=\"92.086%\" fx=\"71.813%\" fy=\"99.994%\" gradientTransform=\"translate(0 22251839.658)skewY(-90)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".3\"/><stop offset=\"100%\" stop-opacity=\".3\"/></radialGradient><radialGradient id=\"e\" cx=\"117.013%\" cy=\"34.769%\" r=\"328.729%\" fx=\"117.013%\" fy=\"34.769%\" gradientTransform=\"rotate(102 -1004.443 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\"0\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".2\"/></radialGradient><radialGradient id=\"f\" cx=\"-9.431%\" cy=\"8.712%\" r=\"153.492%\" fx=\"-9.431%\" fy=\"8.712%\" gradientTransform=\"rotate(45 1674.397 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".2\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".4\"/></radialGradient><radialGradient id=\"g\" cx=\"103.902%\" cy=\"-22.172%\" r=\"394.771%\" fx=\"103.902%\" fy=\"-22.172%\" gradientTransform=\"rotate(80 3757.522 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".1\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".3\"/></radialGradient><radialGradient id=\"h\" cx=\"99.348%\" cy=\"89.193%\" r=\"203.824%\" fx=\"99.348%\" fy=\"89.193%\" gradientTransform=\"translate(0 -38783246.548)skewY(-90)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".2\"/><stop offset=\"50%\" stop-color=\"#FFF\" stop-opacity=\".2\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\".3\"/></radialGradient></defs><path fill=\"currentColor\" fill-opacity=\".3\" d=\"M209.056 308.305c-2.043 14.93-16.738 26.638-31.432 22.552-20.823-5.658-44.946-14.616-66.634-16.266l-33.317-2.515a22 22 0 0 1-14.144-6.522L6.167 246.778a21.77 21.77 0 0 1-4.244-24.124s35.36-77.478 36.775-81.485c1.257-4.008 6.13-39.211 8.958-58.07a22 22 0 0 1 7.072-12.965L122.462 9.47a22 22 0 0 1 31.903 2.672l57.048 71.978a23.18 23.18 0 0 1 4.872 14.38c0 13.594 1.179 41.646 8.8 59.72a236.8 236.8 0 0 0 27.974 45.732 11 11 0 0 1 .786 12.258c-4.95 8.408-14.851 24.595-28.76 45.26a111.7 111.7 0 0 0-16.108 46.834z\"/><path fill=\"#6C31E3\" d=\"M209.606 305.79c-2.043 15.009-16.737 26.717-31.432 22.71-20.744-5.737-44.79-14.695-66.555-16.345L78.38 309.64a21.92 21.92 0 0 1-14.144-6.6L6.874 244.106a21.92 21.92 0 0 1-4.243-24.36s35.438-77.792 36.774-81.878c1.336-4.007 6.13-39.289 8.958-58.305a22 22 0 0 1 7.072-13.044L123.17 5.621a22 22 0 0 1 31.902 2.75l56.97 72.292a23.34 23.34 0 0 1 4.871 14.38c0 13.673 1.18 41.804 8.723 59.955a238 238 0 0 0 27.974 45.969 11 11 0 0 1 .864 12.336c-5.03 8.487-14.851 24.674-28.838 45.497a112.6 112.6 0 0 0-16.03 46.99\"/><path fill=\"url(#a)\" d=\"M70.365 307.44c26.638-53.983 25.93-92.722 14.537-120.225-10.372-25.459-29.781-41.489-45.025-51.468a19.2 19.2 0 0 1-1.415 4.243L2.631 219.747a21.92 21.92 0 0 0 4.321 24.36l57.284 58.933a23.8 23.8 0 0 0 6.129 4.4\"/><path fill=\"url(#b)\" d=\"M142.814 197.902a86 86 0 0 1 21.06 4.793c21.844 8.172 41.724 26.56 58.147 61.999 1.179-2.043 2.357-4.008 3.615-5.894a960 960 0 0 0 28.838-45.497 11 11 0 0 0-.786-12.336 238 238 0 0 1-28.052-45.969c-7.544-18.073-8.644-46.282-8.723-59.955 0-5.186-1.65-10.294-4.871-14.38l-56.97-72.292-.943-1.178c4.165 13.75 3.93 24.752 1.336 34.731-2.357 9.272-6.757 17.68-11.394 26.56-1.571 2.986-3.143 6.05-4.636 9.193a110 110 0 0 0-12.415 45.576c-.786 19.016 3.064 42.825 15.716 74.65z\"/><path fill=\"url(#c)\" d=\"M142.736 197.902c-12.652-31.824-16.502-55.633-15.716-74.65.786-18.858 6.286-33.002 12.415-45.575l4.715-9.193c4.558-8.88 8.88-17.288 11.315-26.56a61.7 61.7 0 0 0-1.336-34.731c-8.136-8.94-21.96-9.642-30.96-1.572L55.436 66.519a22 22 0 0 0-7.072 13.044l-8.25 54.69c0 .55-.158 1.022-.236 1.572 15.244 9.901 34.574 25.931 45.025 51.312 2.043 5.029 3.772 10.294 5.029 16.03a157.2 157.2 0 0 1 52.805-5.343z\"/><path fill=\"url(#d)\" d=\"M178.253 328.5c14.616 4.007 29.31-7.701 31.353-22.789a120.2 120.2 0 0 1 12.494-41.017c-16.502-35.44-36.382-53.827-58.148-61.999-23.18-8.643-48.404-5.736-74.021.472 5.736 26.01 2.357 60.034-19.487 104.273 2.436 1.257 5.186 1.965 7.936 2.2l34.496 2.593c18.701 1.336 46.597 11.001 65.377 16.266\"/><path fill=\"url(#e)\" d=\"M127.177 122.074c-.864 18.859 1.493 40.39 14.144 72.135l-3.929-.393c-11.394-33.081-13.908-50.054-13.044-69.149.786-19.094 6.994-33.789 13.123-46.361 1.571-3.143 5.186-9.037 6.758-12.023 4.557-8.879 7.622-13.515 10.215-21.609 3.772-11.315 2.986-16.658 2.514-22.001 2.908 19.251-8.172 35.988-16.501 53.04a113.9 113.9 0 0 0-13.358 46.361z\"/><path fill=\"url(#f)\" d=\"M88.674 188.551c1.571 3.458 2.907 6.287 3.85 10.608l-3.379.786c-1.336-5.029-2.357-8.643-4.322-12.965-11.472-26.953-29.86-40.861-44.79-51.076 18.074 9.744 36.697 25.066 48.64 52.647\"/><path fill=\"url(#g)\" d=\"M92.681 202.617c6.286 29.467-.786 66.948-21.609 103.409 17.445-36.146 25.931-70.8 18.859-102.938l2.75-.55z\"/><path fill=\"url(#h)\" d=\"M164.659 199.867c34.181 12.808 47.383 40.86 57.205 64.355-12.18-24.516-29.074-51.626-58.462-61.684-22.317-7.7-41.175-6.758-73.471.55l-.707-3.143c34.26-7.858 52.176-8.8 75.435 0z\"/>","width":256,"height":332},"phone":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2m10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6\"/>"},"round":{"body":"<path fill=\"currentColor\" d=\"M50 14c-19.87 0-36 16.13-36 36s16.13 36 36 36 36-16.13 36-36-16.13-36-36-36m0 2c18.79 0 34 15.21 34 34S68.79 84 50 84 16 68.79 16 50s15.21-34 34-34m0 5c-13.367 0-24.63 9.048-27.982 21.36a.5.5 0 0 0 .964.263C26.22 30.74 37.085 22 50 22c7.56 0 14.414 2.993 19.451 7.86a.5.5 0 1 0 .695-.72A28.9 28.9 0 0 0 50 21m21.664 9.994a.5.5 0 0 0-.365.83q.411.483.803.983a.5.5 0 1 0 .789-.614q-.405-.519-.83-1.017a.5.5 0 0 0-.397-.182m2.256 3a.5.5 0 0 0-.42.78 28 28 0 0 1 1.166 1.964.5.5 0 1 0 .88-.476 29 29 0 0 0-1.206-2.035.5.5 0 0 0-.42-.233m2.146 4a.5.5 0 0 0-.439.707A27.9 27.9 0 0 1 78 50c0 15.47-12.53 28-28 28S22 65.47 22 50q.001-1.747.209-3.44a.5.5 0 1 0-.992-.12A29 29 0 0 0 21 50c0 16.01 12.99 29 29 29s29-12.99 29-29a28.9 28.9 0 0 0-2.457-11.701.5.5 0 0 0-.477-.305\"/>","width":100,"height":100},"rss":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9\"/>"},"twitter":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.8 13.8 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z\"/>"},"vscode":{"body":"<defs><linearGradient id=\"c\" x1=\"50%\" x2=\"50%\" y1=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#FFF\"/><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\"0\"/></linearGradient><path id=\"a\" d=\"M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.94 15.94 0 0 0-9.025-14.363l-52.5-25.263a15.88 15.88 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.85 15.85 0 0 0 5.464 3.571m10.464-183.649-76.262 57.889 76.262 57.888z\"/></defs><mask id=\"b\" fill=\"#fff\"><use href=\"#a\"/></mask><path fill=\"#0065A9\" d=\"M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.94 15.94 0 0 0-9.024-14.36\" mask=\"url(#b)\"/><path fill=\"#007ACC\" d=\"m246.135 226.816-52.542 25.298a15.89 15.89 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.94 15.94 0 0 1-9.024 14.36\" mask=\"url(#b)\"/><path fill=\"#1F9CF0\" d=\"M193.428 252.134a15.89 15.89 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.89 15.89 0 0 1 18.125-3.084l52.533 25.263a15.94 15.94 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363z\" mask=\"url(#b)\"/><path fill=\"url(#c)\" fill-opacity=\".25\" d=\"M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.5-25.263a15.94 15.94 0 0 0 9.026-14.363V41.197a15.94 15.94 0 0 0-9.025-14.363L193.477 1.57a15.88 15.88 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.506 91.695a15.9 15.9 0 0 0 5.465 3.571m10.464-183.65-76.262 57.89 76.262 57.888z\" mask=\"url(#b)\"/>","width":256,"height":254}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro("https://dev.quiachonj.us");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/node_modules/astro-icon/components/Icon.astro", void 0);

export { $$Icon as $, $$Head as a, $$ThemeProvider as b, cn as c, $$Footer as d, data as e };
