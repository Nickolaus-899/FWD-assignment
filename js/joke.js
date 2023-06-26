const button = document.getElementById("button-for-api")
const titleElement = document.getElementById("title")
const imgElement = document.getElementById("image")
const dateElement = document.getElementById("date")

const email = 'n.petukhov@innopolis.university'

button.addEventListener("click", async () => {
    const params1 = new URLSearchParams()
    params1.append('email', email)

    const id = await fetch(`https://fwd.innopolis.university/api/hw2?` + params1.toString())
        .then(r => r.json());


    const params2 = new URLSearchParams()
    params2.append('id', id)

    const res = await fetch('https://fwd.innopolis.university/api/comic?' + params2.toString())
    const data = await res.json()

    console.log(data)
    const { month, year, day, safe_title, img, alt } = data

    titleElement.textContent = safe_title
    dateElement.textContent = "Date: " + day + ":" + month + ":" + year

    imgElement.src = img
    imgElement.alt = alt
})