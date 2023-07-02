<script lang="ts">
  export let images: string[] = [];
  let currentImage = 0;

  const handlePrev = () => {
    if (currentImage === 0) {
      currentImage = images.length - 1;
    } else {
      currentImage--;
    }
  };

  const handleNext = () => {
    if (currentImage === images.length - 1) {
      currentImage = 0;
    } else {
      currentImage++;
    }
  };
</script>

{#if images.length > 0}
  <div id="carousel-container">
    <div
      id="carousel-items-container"
      style="transform: translateX(calc(-100% * {currentImage}))"
    >
      {#each images as image}
        <img src={image} alt="screenshot of the project">
      {/each}
    </div>
    {#if images.length > 1}
      <button
        id="button-prev"
        on:click={handlePrev}
      >
        <img src="./caret.svg" alt="arrow left">
      </button>
      <button
        id="button-next"
        on:click={handleNext}
      >
        <img src="./caret.svg" alt="arrow right">
      </button>
    {/if}
  </div>
{/if}

<style>
  #carousel-container {
    position: relative;
    overflow: hidden;
  }
  #carousel-items-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0;
    transition: transform 0.2s ease-in-out;
  }
  #carousel-container img {
    border-radius: 10px;
    width: 100%;
  }
  #button-prev, #button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
  #button-prev {
    left: 5px;
    transform: rotate(-90deg);
  }
  #button-next {
    right: 5px;
    transform: rotate(90deg);
  }
</style>
