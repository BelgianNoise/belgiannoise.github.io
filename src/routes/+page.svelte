<script lang='ts'>
  import Profile from '../components/profile.svelte';
  import Project from '../components/project.svelte';
  import Socials from '../components/socials.svelte';
  import type { Project as ProjectType } from '../models/project';
  import { ProjectContentRequest, ProjectYabat } from './projects';

  const projects: ProjectType[] = [
    ProjectYabat,
    ProjectContentRequest,
  ];
</script>

<Profile />
<Socials />

<div class="content">
  <h1>Mijn projecten</h1>
  {#each projects as project}
    <Project {project} />
  {/each}
</div>

<style>
  .content {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
  } 
  .content h1 {
    margin-bottom: 0;
  }
</style>
