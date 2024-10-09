<script lang="ts">
  import type { Tag as TagType } from '../models/tag';

  // This component solely exists to separate the styleing of the tags
  export let tag: TagType;
</script>

<span class={tag.toString().toLowerCase()}>
  {tag}
</span>

<style>
  span {
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 20px;
    border: 1px solid #aaa;
    background-color: rgba(150, 150, 150, 0.2);
  }
  .firebase {
    color: #FFA611;
    border-color: #FFA611;
    background-color: rgba(255, 166, 17, 0.2);
  }
  .xstate {
    color: #aaa;
    border-color: #aaa;
    background-color: rgba(150, 150, 150, 0.2);
  }
  .lit {
    color: #00FFFF;
    border-color: #00FFFF;
    background-color: rgba(0, 255, 255, 0.2);
  }
  .chartjs {
    color: #FF6384;
    border-color: #FF6384;
    background-color: rgba(255, 99, 132, 0.2);
  }
  .typescript {
    color: #007ACC;
    border-color: #007ACC;
    background-color: rgba(0, 122, 204, 0.2);
  }
  .javascript {
    color: #F0DB4F;
    border-color: #F0DB4F;
    background-color: rgba(240, 219, 79, 0.2);
  }
  .react {
    color: #61DBFB;
    border-color: #61DBFB;
    background-color: rgba(97, 219, 251, 0.2);
  }
  .redux {
    color: #764ABC;
    border-color: #764ABC;
    background-color: rgba(118, 74, 188, 0.2);
  }
  .node {
    color: #68A063;
    border-color: #68A063;
    background-color: rgba(104, 160, 99, 0.2);
  }
  .postgresql {
    color: #336791;
    border-color: #336791;
    background-color: rgba(51, 103, 145, 0.2);
  }
  .nestjs {
    color: #E0234E;
    border-color: #E0234E;
    background-color: rgba(224, 35, 78, 0.2);
  }
  .vite {
    color: #646CFF;
    border-color: #646CFF;
    background-color: rgba(100, 108, 255, 0.2);
  }
  .html {
    color: #E34F26;
    border-color: #E34F26;
    background-color: rgba(227, 79, 38, 0.2);
  }
  .svelte {
    color: #FF3E00;
    border-color: #FF3E00;
    background-color: rgba(255, 62, 0, 0.2);
  }
  .go {
    color: #00ADD8;
    border-color: #00ADD8;
    background-color: rgba(0, 173, 216, 0.2);
  }
  .css {
    color: #1572B6;
    border-color: #1572B6;
    background-color: rgba(21, 114, 182, 0.2);
  }
  .gcp {
    color: #4285F4;
    border-color: #4285F4;
    background-color: rgba(66, 133, 244, 0.2);
  }
  .githubactions {
    color: #aaa;
    border-color: #aaa;
    background-color: rgba(150, 150, 150, 0.2);
  }
  .vercel {
    color: #888;
    border-color: #888;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .redis {
    color: #D82C20;
    border-color: #D82C20;
    background-color: rgba(216, 44, 32, 0.2);
  }
  .ssr {
    color: #FF3E00;
    border-color: #FF3E00;
    background-color: rgba(255, 62, 0, 0.2);
  }
  .vue {
    color: #41B883;
    border-color: #41B883;
    background-color: rgba(65, 184, 131, 0.2);
  }
  .nextjs {
    color: #888;
    border-color: #888;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .clerk {
    color: #8D3EFF;
    border-color: #8D3EFF;
    background-color: #1f025629;
  }
  .drizzle-orm {
    color: #C5F74F;
    border-color: #C5F74F;
    background-color: rgba(197, 247, 79, 0.2);
  }

  .chrome {
    color: #FF3E00;
    border-color: #FF3E00;
    background-color: rgba(255, 62, 0, 0.2);
  }

  .python {
    color: #3776AB;
    border-color: #3776AB;
    background-color: rgba(55, 118, 171, 0.2);
  }

  .drm {
    color: #FF3E00;
    border-color: #FF3E00;
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>