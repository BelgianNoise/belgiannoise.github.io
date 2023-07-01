<script lang="ts">
  import type { Project } from '../models/project';
  import Tag from './tag.svelte';

  export let project: Project;
</script>

<div class="container">
  <h2>{project.title}</h2>
  {#if project.images.length > 0}
    <img src={project.images[0]} alt="screenshot of the project">
  {/if}
  {#if project.link}
    <div class="link-container">
      <img src="./link.svg" alt="link icon">
      <a href={project.link} target="_blank">{project.link}</a>
    </div>
  {/if}
  {#if project.tags.length > 0}
    <div class="tags">
      {#each project.tags as tag}
        <Tag {tag} />
      {/each}
    </div>
  {/if}
  {#if project.description}
    <p class="description">{project.description}</p>
  {/if}
  {#if project.github}
    <a href={project.github} target="_blank" rel="noreferrer noopener">
      Voor meer info, bekijk op Github ->
    </a>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .container h2 {
    margin-bottom: 0;
    padding: 0 10px;
    border-bottom: 1px solid #aaa;
  }
  .container img {
    border-radius: 10px;
    width: 100%;
    height: auto;
  }
  .container .description {
    color: #a8a8a8;
  }
  .link-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .link-container img {
    width: 20px;
  }
  .link-container a {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .container .tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
</style>
