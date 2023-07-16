import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="header" id="#header"><h1 class="header-title" data-svelte-h="svelte-1u5pp4h">Nickolay Petukhov</h1> <p class="header-subtitle" data-svelte-h="svelte-1s9upq2">UI student</p> <a href="${escape(base, true) + "/"}"><svg class="house" fill="#FFFFFFFF" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.765 285.765"><path d="m285.765,136.93l-142.883-111.255-60.666,47.237v-25.016h-30v48.375l-52.216,40.659 18.432,23.67 18.95-14.756v114.246h211v-114.247l18.951,14.756 18.432-23.669zm-155.883,88.585v-43h26v43h-26zm88.5,4.575h-32.5v-77.575h-86v77.575h-32.5v-107.606l75.5-58.788 75.5,58.788v107.606z"></path></svg></a></div>`;
});
const git = "/FWD/_app/immutable/assets/git.7ae90b30.png";
const tgIcon = "/FWD/_app/immutable/assets/telegram.82d9bf32.png";
const email = "/FWD/_app/immutable/assets/email.2b9eea88.svg";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="footer"><div class="container"><div class="footer-row"><div class="footer-info footer-col" data-svelte-h="svelte-tfcy5i"><div class="footer-name">Nickolai Petukhov</div> <p>IT student, 19 y.o.</p> <div class="hidden">Nickoläus</div></div> <div class="footer-links footer-col"><p data-svelte-h="svelte-1at3g99">Some links:</p> <div class="footer-links-row"><a href="https://github.com/Nickolaus-899/FWD"><img${add_attribute("src", git, 0)} alt="git"></a> <a href="https://t.me/Nickolaus_SDR"><img${add_attribute("src", tgIcon, 0)} alt="telegram"></a> <a href="mailto:n.petukhov@innopolis.university"><img${add_attribute("src", email, 0)} alt="email"></a></div></div> <div class="footer-contacts footer-col" data-svelte-h="svelte-1bupzmd"><a href="https://t.me/Nickolaus_SDR" class="footer-button">Contact me</a> <p>89539994473</p></div></div></div></div>`;
});
const main = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1bvgjs4_START -->${$$result.title = `<title>Portfolio</title>`, ""}<meta name="author" content="Nickolaus Petukhov"><meta name="description" content="My Portfolio"><!-- HEAD_svelte-1bvgjs4_END -->`, ""} <div>${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
