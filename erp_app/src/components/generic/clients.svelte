<script>
    import Carousel from "./Carousel.svelte";

    const images = [
        {path: "src/lib/images/clients/jagnabdhu.png", id: "client1"},
        {path: "src/lib/images/clients/nehwe.png", id: "client2"},
        {path: "src/lib/images/clients/cms.png", id: "client3"},
        {path: "src/lib/images/clients/erp.png", id: "client4"},
        {path: "src/lib/images/clients/go scholarly.png", id: "client5"},
        {path: "src/lib/images/clients/stupicks.png", id: "client6"},
        {path: "src/lib/images/clients/srisriholistick.png", id: "client7"}
    ];
</script>

<Carousel {images} --imageWidth="60px" --imageSpacing="20px" />
