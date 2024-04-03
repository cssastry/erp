<script>
    import Carousel from "./Carousel.svelte";

    const images = [
        { path: "src/lib/images/technology/image 30.svg", id: "tech1" },
        { path: "src/lib/images/technology/image 29.svg", id: "tech2" },
        { path: "src/lib/images/technology/image 28.svg", id: "tech3" },
        { path: "src/lib/images/technology/image 27.svg", id: "tech4" },
        { path: "src/lib/images/technology/image 26.svg", id: "tech5" },
        { path: "src/lib/images/technology/image 25.svg", id: "tech6" },
        { path: "src/lib/images/technology/image 24.svg", id: "tech7" },
        { path: "src/lib/images/technology/image 23.svg", id: "tech8" },
        { path: "src/lib/images/technology/image 22.svg", id: "tech9" },
        { path: "src/lib/images/technology/image 21.svg", id: "tech10" },
        { path: "src/lib/images/technology/image 20.svg", id: "tech11" },
        { path: "src/lib/images/technology/image 19.svg", id: "tech12" },
        { path: "src/lib/images/technology/image 18.svg", id: "tech13" },
        { path: "src/lib/images/technology/image 17.svg", id: "tech14" },
        { path: "src/lib/images/technology/image 16.svg", id: "tech15" },
        { path: "src/lib/images/technology/image 15.svg", id: "tech16" },
        { path: "src/lib/images/technology/image 14.svg", id: "tech17" },
        { path: "src/lib/images/technology/image 13.svg", id: "tech18" },
        { path: "src/lib/images/technology/image 12.svg", id: "tech19" },
        { path: "src/lib/images/technology/image 11.svg", id: "tech20" },
        { path: "src/lib/images/technology/image 10.svg", id: "tech21" },
        { path: "src/lib/images/technology/image 9.svg", id: "tech22" },
        { path: "src/lib/images/technology/image 8.svg", id: "tech23" },
        { path: "src/lib/images/technology/image 7.svg", id: "tech24" },
        { path: "src/lib/images/technology/image 6.svg", id: "tech25" },
        { path: "src/lib/images/technology/image 5.svg", id: "tech26" },
        { path: "src/lib/images/technology/image 4.svg", id: "tech27" },
        { path: "src/lib/images/technology/image 3.svg", id: "tech28" },
        { path: "src/lib/images/technology/image 2svelte.svg", id: "tech29" },
    ];
</script>

<Carousel {images} --imageWidth="60px" --imageSpacing="20px" />
