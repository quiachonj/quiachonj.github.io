import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot, F as Fragment, d as addAttribute } from '../chunks/astro/server_7mBX0aCo.mjs';
import 'kleur/colors';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_4C-vCgU4.mjs';
import { c as cn, $ as $$Icon, e as data } from '../chunks/Icon_DwKMrDUM.mjs';
import '../chunks/site.config_BgeS3Wrg.mjs';
import { $ as $$Button } from '../chunks/Button_ifdE8pX9.mjs';
import { $ as $$Base } from '../chunks/Base_CrTDXHXv.mjs';
export { renderers } from '../renderers.mjs';

const portrait = new Proxy({"src":"/_astro/portrait.B4aMzyOz.png","width":360,"height":321,"format":"png"}, {
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

const $$Astro$8 = createAstro("http://quiachonj.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    as: Tag = "div",
    class: className = " border border-border px-5 py-3",
    href,
    heading,
    subheading,
    date
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(className, "relative rounded-2xl", href && "transition-all hover:shadow-sm"), "href": href, "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> ${heading || subheading || date ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col gap-y-0.5"></div> <h1 class="text-lg font-medium text-secondary-foreground">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> <h2 class="text-sm text-accent-300">${date}</h2> ` })}` : null} ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/Card.astro", void 0);

const $$Astro$7 = createAstro("http://quiachonj.github.io");
const $$IconWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$IconWrapper;
  const { icon, class: className, classIcon, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    className,
    "shadow-sm p-2 rounded-lg flex items-center justify-center",
    !href && "cursor-default"
  ), "class")}> ${renderComponent($$result, "Icon", $$Icon, { "class": classIcon, "name": icon })} </div>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/IconWrapper.astro", void 0);

const $$Astro$6 = createAstro("http://quiachonj.github.io");
const $$IconText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$IconText;
  const { class: className, title, href, subTitle, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    className,
    "flex flex-row items-center gap-x-2",
    href && "hover:opacity-75 transition-all"
  ), "class")}> ${renderComponent($$result, "IconWrapper", $$IconWrapper, { "icon": icon, "classIcon": "h-5 w-5", "class": "bg-background-tertiary" })} <div class="flex flex-col"> <span class="text-xs uppercase text-accent-200">${title}</span> <span class="font-bold dark:text-white">${subTitle}</span> </div> </div>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/IconText.astro", void 0);

const $$SidebarLeft = createComponent(($$result, $$props, $$slots) => {
  const titles = data.title ?? [];
  const links = [
    { href: data.github, icon: "github", label: "github" },
    { href: data.linkedin, icon: "linkedin", label: "linkedin" },
    { href: `mailto:${data.email}`, icon: "mail", label: "email" }
  ];
  return renderTemplate`${maybeRenderHead()}<aside class="top-5 flex flex-col items-center justify-center pt-16 md:sticky md:col-span-1 md:h-screen md:pl-5"> ${renderComponent($$result, "Image", $$Image, { "src": portrait, "alt": "profile photo", "class": "z-10 h-52 w-auto rounded-3xl bg-accent-200 p-1", "loading": "lazy" })} ${renderComponent($$result, "Card", $$Card, { "class": "mt-[-6rem] w-full max-w-[500px] bg-background-tertiary p-5" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col items-center gap-y-4 pb-10 pt-24"> <h1 class="text-3xl font-bold text-secondary-foreground">${data.name}</h1> ${renderComponent($$result2, "Card", $$Card, { "class": "flex w-full flex-col gap-y-3 bg-background-secondary p-5 text-secondary-foreground" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col space-y-1"> ${titles.map((title) => renderTemplate`<h2 class="text-sm text-secondary-foreground">${title}</h2>`)} </div> <div class="border-t border-border"></div> ${renderComponent($$result3, "IconText", $$IconText, { "title": "Phone", "subTitle": data.phone, "icon": "phone" })} <div class="border-t border-border"></div> ${renderComponent($$result3, "IconText", $$IconText, { "title": "Location", "subTitle": data.location, "icon": "location" })} <div class="border-t border-border"></div> <div class="flex items-center justify-center gap-4 py-1"> ${links.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(label === "email" ? void 0 : "_blank", "target")}${addAttribute(label === "email" ? void 0 : "noopener noreferrer", "rel")}${addAttribute(label, "aria-label")}> ${renderComponent($$result3, "IconWrapper", $$IconWrapper, { "href": href, "icon": icon, "classIcon": "h-5 w-5", "class": "bg-accent-200" })} </a>`)} </div> <div class="border-t border-border"></div> ${renderComponent($$result3, "Button", $$Button, { "as": "a", "title": "Download Resume", "style": "pill", "href": "/cv-download.pdf", "target": "_blank", "rel": "noopener noreferrer", "class": "hover:shadow-background-tertiary/40 flex items-center justify-center gap-x-3 rounded-[5px] bg-accent-200 px-4 py-2 text-lg font-bold text-secondary-foreground transition-all hover:shadow-md dark:shadow-black/50 hover:dark:shadow-white/30" })} ` })} </div> ` })} </aside>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/SidebarLeft.astro", void 0);

const $$Astro$5 = createAstro("http://quiachonj.github.io");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="anchor flex flex-col gap-y-5 py-5"> <div class="flex flex-row items-center text-xl font-semibold text-secondary-foreground"> ${renderComponent($$result, "Icon", $$Icon, { "name": "round", "class": "text-accent-300" })}<h1 class="pl-2 font-bold"${addAttribute(title, "aria-label")}> ${title} </h1> </div> <div class="flex flex-col gap-y-3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/Section.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "About Me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="text-muted-foreground"> ${data.summary} </p> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/About.astro", void 0);

const $$Astro$4 = createAstro("http://quiachonj.github.io");
const $$CertificationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CertificationCard;
  const {
    as: Tag = "div",
    class: className = "border border-border px-5 py-3",
    href,
    issuer,
    name,
    lastTaken
  } = Astro2.props;
  const hasMeta = name || issuer || lastTaken;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(className, "relative rounded-2xl") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> ${hasMeta && renderTemplate`<div class="flex flex-col gap-y-0.5"> ${name && href ? renderTemplate`<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="text-lg font-medium text-blue-500 underline transition-colors hover:text-blue-600"> ${name} </a>` : name && renderTemplate`<h1 class="text-lg font-medium text-secondary-foreground">${name}</h1>`} ${issuer && renderTemplate`<h2 class="text-muted-foreground">${issuer}</h2>`} ${lastTaken && renderTemplate`<h2 class="text-sm text-accent-300">Last Taken: ${lastTaken}</h2>`} </div>`} ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/CertificationCard.astro", void 0);

const $$Certification = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "certifications", "title": "Certifications" }, { "default": ($$result2) => renderTemplate`${data.certifications.map(({ issuer, name, lastTaken, href }) => renderTemplate`${renderComponent($$result2, "CertificationCard", $$CertificationCard, { "class": "flex w-full flex-col gap-x-7 gap-y-1 bg-background-secondary p-5 text-secondary-foreground", "issuer": issuer, "name": name, "lastTaken": lastTaken, "href": href })}`)}` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Certification.astro", void 0);

const $$Astro$3 = createAstro("http://quiachonj.github.io");
const $$EducationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EducationCard;
  const {
    as: Tag = "div",
    class: className = " border border-border px-5 py-3",
    href,
    schoolName,
    degreeType,
    fieldOfStudy,
    location,
    startDate,
    endDate
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(className, "relative rounded-2xl", href && "transition-all hover:shadow-sm"), "href": href, "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> ${schoolName || degreeType || fieldOfStudy || startDate || endDate ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col gap-y-0.5"></div> <h1 class="text-lg font-medium text-secondary-foreground"> ${degreeType} in ${fieldOfStudy} </h1> <h2 class="text-muted-foreground"> ${schoolName} - ${location} </h2> <h2 class="text-sm text-accent-300"> ${startDate} - ${endDate} </h2> ` })}` : null} ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/EducationCard.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "education", "title": "Education" }, { "default": ($$result2) => renderTemplate`${data.education.map((educationType) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "EducationCard", $$EducationCard, { "class": "flex w-full flex-col gap-x-7 gap-y-1 bg-background-secondary p-5 text-secondary-foreground", "schoolName": educationType.schoolName, "degreeType": educationType.degreeType, "fieldOfStudy": educationType.fieldOfStudy, "location": educationType.location, "startDate": educationType.startDate, "endDate": educationType.endDate })} ` })}`)}` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Education.astro", void 0);

const $$Astro$2 = createAstro("http://quiachonj.github.io");
const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExperienceCard;
  const {
    as: Tag = "div",
    class: className = " border border-border px-5 py-3",
    href,
    title,
    company,
    location,
    startDate,
    endDate
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(className, "relative rounded-2xl", href && "transition-all hover:shadow-sm"), "href": href, "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> ${title || company ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col gap-y-0.5"></div> <h1 class="text-lg font-medium text-secondary-foreground">${title}</h1> <h2 class="text-muted-foreground"> ${company} - ${location} </h2> <h2 class="text-sm text-accent-300"> ${startDate} - ${endDate} </h2> <div class="border-t border-border"></div> ` })}` : null} ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/ExperienceCard.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "experience", "title": "Experience" }, { "default": ($$result2) => renderTemplate`${data.experience.map(
    ({ company, title, location, startDate, endDate, description }) => renderTemplate`${renderComponent($$result2, "ExperienceCard", $$ExperienceCard, { "class": "flex w-full flex-col gap-x-7 gap-y-1 bg-background-secondary p-5 text-secondary-foreground", "company": company, "title": title, "location": location, "startDate": startDate, "endDate": endDate }, { "default": ($$result3) => renderTemplate`${description.map((entry) => renderTemplate`${maybeRenderHead()}<div class="mb-4"> <h3 class="text-sm font-semibold text-secondary-foreground">${entry.project}</h3> ${entry.responsibilities?.length ? renderTemplate`<ul class="ml-4 list-disc text-muted-foreground"> ${entry.responsibilities.map((bullet) => renderTemplate`<li>${bullet}</li>`)} </ul>` : null} </div>`)}` })}`
  )}` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Experience.astro", void 0);

const $$Astro$1 = createAstro("http://quiachonj.github.io");
const $$SkillLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 md:gap-x-2 md:gap-y-0 lg:flex-row"> <h2 class="w-2/5 font-medium text-secondary-foreground">${title}</h2> <div class="flex w-3/5 flex-row flex-wrap gap-x-2 gap-y-1"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "as": "button", "title": skill, "style": "pill" })}`)} </div> </div>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/SkillLayout.astro", void 0);

const $$Skill = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "skills", "title": "Skills" }, { "default": ($$result2) => renderTemplate`${Object.keys(data.skills).map((category) => renderTemplate`${renderComponent($$result2, "SkillLayout", $$SkillLayout, { "title": category, "skills": data.skills[category] })}`)}` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Skill.astro", void 0);

const $$Astro = createAstro("http://quiachonj.github.io");
const $$HighlightCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HighlightCard;
  const {
    as: Tag = "div",
    class: className = " border border-border px-5 py-3",
    href,
    title
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(className, "relative rounded-2xl", href && "transition-all hover:shadow-sm"), "href": href, "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> ${title ? renderTemplate`<h1 class="text-lg font-medium text-secondary-foreground">${title}</h1>` : null} ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/HighlightCard.astro", void 0);

const $$Highlights = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "highlights", "title": "Highlights" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-4"> ${data.highlights.map(({ title, description }) => renderTemplate`${renderComponent($$result2, "HighlightCard", $$HighlightCard, { "title": title, "class": "flex w-full flex-col gap-y-2 bg-background-secondary p-5 text-secondary-foreground" }, { "default": ($$result3) => renderTemplate` <ul class="ml-4 list-disc space-y-1 text-muted-foreground"> ${description.map((item) => renderTemplate`<li>${item}</li>`)} </ul> ` })}`)} </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/cv/Highlights.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "meta": { title: "Home" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 gap-5 md:grid-cols-3"> ${renderComponent($$result2, "SidebarLeft", $$SidebarLeft, {})} <div class="md:col-span-2 md:mr-5"> <div class="mt-5 rounded-2xl border border-transparent bg-background-tertiary p-5 md:mt-[5.5rem]"> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Certification", $$Certification, {})} ${renderComponent($$result2, "Highlights", $$Highlights, {})} ${renderComponent($$result2, "Skill", $$Skill, {})} </div> </div> </div> ` })}`;
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
