<script>

</script>

<div class="socials">
  <button
    class="github-button"
    on:click={() => window.open('https://github.com/BelgianNoise', '_blank')}
  >
    <span>Github</span>
    <img src="./github.png" alt="github logo">
  </button>
  <button
    class="linkedin-button"
    on:click={() => window.open('https://www.linkedin.com/in/arthur-joppart-728a7817a/', '_blank')}
  >
    <span>LinkedIn</span>
    <img src="./linkedin.png" alt="linkedin logo">
  </button>
</div>

<style>
  .socials {
    display: flex;
    gap: 20px;
    justify-content: start;
    padding: 10px 20px;
  }
  .socials > button {
    flex: 1;
  }
  .github-button {
    color: #111;
    background-color: #f5f5f5;
  }
  .linkedin-button {
    background-color: #0066C8;
  }
  .socials button span {
    flex: 1;
    font-weight: bold;
  }
  .socials button img {
    height: 30px;
    min-height: 30px;
  }
</style>
