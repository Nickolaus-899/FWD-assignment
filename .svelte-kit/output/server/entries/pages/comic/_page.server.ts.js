import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
const csr = false;
const myEmail = "n.petukhov@innopolis.university";
dayjs.extend(relativeTime);
async function load() {
  const params1 = new URLSearchParams();
  params1.append("email", myEmail);
  const id = await fetch(`https://fwd.innopolis.university/api/hw2?` + params1.toString()).then(
    (r) => r.json()
  );
  const params2 = new URLSearchParams();
  params2.append("id", id);
  const res = await fetch(
    "https://fwd.innopolis.university/api/comic?" + params2.toString()
  );
  const data = await res.json();
  const { month, year, day, safe_title, img, alt } = data;
  return {
    joke: {
      titleElement: safe_title,
      imgSrc: img,
      imgAlt: alt,
      dateElement: "Date: " + day + ":" + month + ":" + year,
      releasedElement: "Released: " + dayjs(new Date(year, month, day)).fromNow()
    }
  };
}
export {
  csr,
  load
};
