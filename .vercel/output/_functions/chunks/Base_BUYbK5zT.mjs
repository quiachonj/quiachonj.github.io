import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, f as renderScript, a as renderTemplate, e as renderSlot } from './astro/server_7mBX0aCo.mjs';
import 'kleur/colors';
import { c as cn, $ as $$Icon, a as $$Head, b as $$ThemeProvider, d as $$Footer } from './Icon_BRP9CsAV.mjs';
import { s as siteConfig } from './site.config_CIXcMLnL.mjs';

const $$Astro$1 = createAstro("https:dev.quiachonj.us");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { class: className } = Astro2.props;
  const navItems = [
    { href: "#", label: "About Me" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#highlights", label: "Highlights" },
    { href: "#skills", label: "Skills" },
    { href: "/blog", label: "Blog" }
  ];
  const desktopNavItems = [
    { href: "#", label: "About Me" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#highlights", label: "Highlights" },
    { href: "#skills", label: "Skills" },
    { href: "/blog", label: "Blog" }
  ];
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(cn(className, "lg:max-w-7xl w-full md:fixed z-20 md:px-5"), "class")}> <nav class="grid grid-cols-1 md:grid-cols-3" aria-label="global" x-data="{ open: false }"> <div class="col-span-1 flex items-start justify-between"> <a href="/" aria-label="josh-quiachon" class="flex-none text-2xl font-semibold uppercase">
josh<span class="text-accent-300">quia</span>chon
</a> <div class="flex items-center gap-2"> <button id="toggleDarkMode" class="rounded-md border border-border bg-background-tertiary p-1.5 transition-all hover:bg-accent-300 md:mr-5"> <span class="sr-only">Dark Theme</span> <svg class="h-[1.2rem] w-[1.2rem] transition-all hover:text-white dark:hidden dark:-rotate-90 dark:scale-0" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15..."></path> </svg> <svg class="hidden h-[1.2rem] w-[1.2rem] text-white transition-all dark:block dark:rotate-0 dark:scale-100" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27..."></path> </svg> </button> <button id="toggleMobileMenu" class="top-5 rounded-md border border-border bg-background-tertiary p-1.5 shadow-xl transition-all hover:bg-accent-300 dark:shadow-black/50 md:hidden" x-on:click="open = !open"> <span class="sr-only">Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "menu", "x-show": "!open", "class": "h-[1.2rem] w-[1.2rem] transition-all dark:text-white" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "x-show": "open", "class": "h-[1.2rem] w-[1.2rem] transition-all dark:text-white" })} </button> </div> </div> <nav id="mobile_menu" x-collapse x-show="open" x-transition class="mt-1.5 flex flex-col items-center gap-4 rounded-xl bg-background-tertiary p-5 text-secondary-foreground shadow-xl dark:shadow-black/50 md:hidden"> ${navItems.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(label, "aria-label")} class="text-[1.05rem] font-medium hover:text-accent-300"> ${label} </a>`)} </nav> <div class="z-10 col-span-2 mb-5 hidden flex-row justify-between rounded-2xl border border-transparent bg-background-tertiary p-5 text-secondary-foreground shadow-xl dark:shadow-black/50 md:flex"> ${desktopNavItems.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(label, "aria-label")} class="text-[1.05rem] font-medium hover:text-accent-300"> ${label} </a>`)} </div> </nav> </header> ${renderScript($$result, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/layout/Header.astro", void 0);

const $$Astro = createAstro("https:dev.quiachonj.us");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    meta: { articleDate, description = siteConfig.description, ogImage, title }
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(siteConfig.lang, "lang")} class="h-full scroll-smooth"> ${renderComponent($$result, "Head", $$Head, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title })}${maybeRenderHead()}<body class="flex h-full justify-center bg-background bg-[url('/black.svg')] bg-cover bg-fixed dark:bg-[url('/black.svg')]"> ${renderComponent($$result, "ThemeProvider", $$ThemeProvider, {})} <main class="flex w-screen flex-col items-center px-5 pt-5 font-satoshi leading-relaxed md:px-0 lg:max-w-7xl"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} <div class="w-full text-primary-foreground"> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </main> </body></html>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/layouts/Base.astro", void 0);

export { $$Base as $ };
