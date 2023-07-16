import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const enigma = "/FWD/_app/immutable/assets/enigma2.0a782045.jpg";
const Enigma = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<title data-svelte-h="svelte-1t7yvmz">Enigma</title> <div class="project"><div class="container"><h1 class="project-header" data-svelte-h="svelte-j09z9i">Model of Enigma Machine</h1> <div class="project-img"><img${add_attribute("src", enigma, 0)} alt=""></div> <div class="project-description"><p data-svelte-h="svelte-1xq6an1">Model of Enigma machine in C++ language. It uses German language for interface.</p> <div class="enigma-link"><a href="https://github.com/Nickolaus-899/Enigma" class="footer-button enigma-button" data-svelte-h="svelte-sh65rd">Link to the Project</a> <a href="${escape(base, true) + "/"}" class="footer-button enigma-button">Back</a></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-13ywdnu_START -->${$$result.title = `<title>Enigma</title>`, ""}<meta name="author" content="Nickolaus Petukhov"><meta name="description" content="Here is my project: Enigma machine"><!-- HEAD_svelte-13ywdnu_END -->`, ""} ${validate_component(Enigma, "Enigma").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
