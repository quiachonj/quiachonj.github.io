import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, f as renderScript, a as renderTemplate, e as renderSlot } from './astro/server_7mBX0aCo.mjs';
import 'kleur/colors';
import { c as cn, $ as $$Icon, a as $$Head, b as $$ThemeProvider, d as $$Footer } from './Icon_C1x6HXfp.mjs';
import { s as siteConfig } from './site.config_qp5nQVpy.mjs';

const $$Astro$1 = createAstro("https://astro-resume-01.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(cn(className, "lg:max-w-7xl w-full md:fixed z-20 md:px-5"), "class")}> <nav class="grid grid-cols-1 md:grid-cols-3" aria-label="global" x-data="{ open: false }"> <div class="col-span-1 flex flex-row items-start justify-between"> <a class="flex-none text-2xl font-semibold uppercase" href="/" aria-label="astroresume01">astro<span class="text-accent-300">resume</span>01</a> <div> <button id="toggleDarkMode" class="hover:bg-accent-300 bg-background-tertiary rounded-md border border-border p-1.5 transition-all md:mr-5"> <span class="sr-only">Dark Theme</span> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:text-white dark:hidden dark:-rotate-90 dark:scale-0"><path fill="currentColor" d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15m0 1q-1.671 0-2.836-1.164T8 12q0-1.671 1.164-2.836T12 8q1.671 0 2.836 1.164T16 12q0 1.671-1.164 2.836T12 16m-7-3.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.744l2.111 2.134zM18.72 19.438l-2.117-2.14l.652-.702l2.16 2.098zM16.596 6.746l2.098-2.16l.744.695l-2.134 2.111zM4.562 18.72l2.14-2.117l.663.652l-2.078 2.179zM12 12"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="hidden h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-white transition-all dark:block dark:rotate-0 dark:scale-100"><path fill="currentColor" d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20"></path></svg> </button> <button id="toggleMobileMenu" class="hover:bg-accent-300 bg-background-tertiary top-5 rounded-md border border-border p-1.5 shadow-xl transition-all dark:shadow-black/50 md:hidden" x-on:click="open = !open"> <span class="sr-only">Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "menu", "x-show": "!open", "class": "h-[1.2rem] w-[1.2rem] transition-all dark:text-white" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "x-show": "open", "class": "h-[1.2rem] w-[1.2rem] transition-all dark:text-white" })} </button> </div> </div> <nav id="mobile_menu" x-collapse x-show="open" x-transition class="bg-background-tertiary text-secondary-foreground mt-1.5 p-5 flex flex-grow flex-col items-center justify-between gap-4 rounded-xl md:hidden  shadow-xl dark:shadow-black/50"> <a href="#" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="About">About
</a> <a href="#experience" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Experience">Experience
</a> <a href="#education" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Education">Education
</a> <a href="#projects" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Projects">Projects
</a> <a href="#skills" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Skills">Skills
</a> <a href="#tools" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Tools">Tools
</a> <a href="/blog" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Blog">Blog
</a> </nav> <div class="bg-background-tertiary z-10 col-span-2 mb-5 hidden flex-row justify-between rounded-2xl border border-transparent p-5 text-secondary-foreground shadow-xl dark:shadow-black/50 md:flex"> <a href="#" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Nav Menu Item">About
</a> <a href="#experience" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Experience">Experience
</a> <a href="#education" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Education">Education
</a> <a href="#projects" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Projects">Projects
</a> <a href="#skills" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Skills">Skills
</a> <a href="#tools" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Tools">Tools
</a> <a href="/blog" class="hover:text-accent-300 flex-none text-[1.05rem] font-medium" aria-label="Blog">Blog
</a> </div> </nav> </header> ${renderScript($$result, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/layout/Header.astro", void 0);

const $$Astro = createAstro("https://astro-resume-01.vercel.app");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    meta: { articleDate, description = siteConfig.description, ogImage, title }
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(siteConfig.lang, "lang")} class="h-full scroll-smooth"> ${renderComponent($$result, "Head", $$Head, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title })}${maybeRenderHead()}<body class="flex h-full justify-center bg-background bg-[url('/blurry-gradient-haikei.svg')] bg-cover bg-fixed dark:bg-[url('/blurry-gradient-haikei-dark.svg')]"> ${renderComponent($$result, "ThemeProvider", $$ThemeProvider, {})} <main class="flex w-screen flex-col items-center px-5 pt-5 font-satoshi leading-relaxed md:px-0 lg:max-w-7xl"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} <a href="https://3474070726452.gumroad.com/l/astro-resume-01" class="z-100 fixed bottom-10 mt-16 inline-flex flex-row items-center gap-x-3 rounded-3xl border border-input bg-secondary px-10 py-2 text-sm text-primary shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="border-accent-300 bg-accent-300 absolute inline-flex h-2 w-2 animate-ping rounded-full border opacity-75"></span> <span class="bg-accent-300 relative inline-flex h-2 w-2 rounded-full"></span> </span> <p class="text-lg font-bold">Get template 🚀</p> </a> <div class="w-full text-primary-foreground"> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </main> </body></html>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/layouts/Base.astro", void 0);

export { $$Base as $ };
