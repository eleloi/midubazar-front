<script lang="ts">
  import type { Product } from "@/types"
  import {onMount} from "svelte"

  export let product: Product

  let currentImage = 0

  function setCol2Height() {
    const col1 = document.querySelector("#main-image")
    const col2 = document.querySelector("#col-2")
    const height = col1?.clientHeight
    console.log(height)
    col2?.setAttribute("style", `height: ${height}px`)

  }

  function switchImages(e: MouseEvent) {
    const target = e.target as HTMLImageElement
    const src = target.src
    const index = product.images.indexOf(src)
    target.src = product.images[currentImage]
    currentImage = index
  }

  onMount(() => {
    setCol2Height()
    window.addEventListener("resize", () => {
      setCol2Height()
    })

  })
</script>


<div class="container">
  <div role="group" id="col-1">
    <img
      id="main-image"
      class="main-image"
      src={product.images[currentImage]}
      alt={product.title}
    />
  </div>

  <div role="group" id="col-2" class="col-2">
    {#each product.images.slice(1) as image}
      <buton
        on:click={switchImages}
        role="img"><img src={image} alt={product.title} /></buton
      >
    {/each}
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-items: center;
    padding: 0rem 2rem;
  }

  img {
    border-radius: 50%;
    object-fit: cover;
    padding: 1rem 1rem;
    aspect-ratio: 1/1;
  }

  .col-2 {
    overflow-y: auto;
  }
</style>
