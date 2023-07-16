<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import "./../css/main.css"
</script>

<div>
    <Header/>

    <main>
        <slot />
    </main>

    <Footer/>
</div>