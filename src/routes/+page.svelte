<script lang='ts'>
  import '../app.css';
  import { writable } from 'svelte/store';
  import Profile from '../components/profile.svelte';
  import Project from '../components/project.svelte';
  import Socials from '../components/socials.svelte';
  import type { Project as ProjectType } from '../models/project';
  import { ProjectColruytProductScraper, ProjectContentRequest, ProjectWaarStreamen, ProjectYabat } from './projects';
  import { fly } from 'svelte/transition';
  import { ContributionCSS, ContributionHandlersjs } from './contributions';

  const projects: ProjectType[] = [
    ProjectYabat,
    ProjectContentRequest,
    ProjectColruytProductScraper,
    ProjectWaarStreamen,
  ];

  const contributions: ProjectType[] = [
    ContributionCSS,
    ContributionHandlersjs,
  ];

  const navState = writable<'projects' | 'contributions' | 'busy'>('projects');
  const setNavState = (state: 'projects' | 'contributions' | 'busy') => {
    navState.set('busy');
    setTimeout(() => navState.set(state), 110);
  };
</script>

<div id="sticky">
  <Profile />
  <Socials />

  <div class="nav">
    <button
      class:selected={$navState === 'projects'}
      on:click={() => setNavState('projects')}
    >
      Projecten
    </button>
    <button
      class:selected={$navState === 'contributions'}
      on:click={() => setNavState('contributions')}
    >
      Contributions
    </button>
  </div>
</div>


<div class="content">
  {#if $navState === 'projects'}
    <div
      in:fly={{ x: -1000, duration: 100 }}
      out:fly={{ x: -1000, duration: 100 }}
    >
      {#each projects as project}
        <Project {project} />
      {/each}
    </div>
  {:else if $navState === 'contributions'}
    <div
      in:fly={{ x: 1000, duration: 100 }}
      out:fly={{ x: 1000, duration: 100 }}
    >
      {#each contributions as project}
        <Project {project} />
      {/each}
    </div>
  {/if}
</div>

<style>
  #sticky {
    position: sticky;
    top: 0;
    z-index: 1;
    background: linear-gradient(170deg, rgba(50,50,50,1) 15%, rgba(34,34,34,1) 30%, #090909 70%);
  }
  .content {
    padding: 0 20px 30px 20px;
    display: flex;
    flex-direction: column;
  }

  .nav {
    display: flex;
    justify-content: space-between;
  }
  .nav > button {
    flex: 1;
    text-align: center;
    margin: 0;
    padding: 16px 5px;
    color: #aaa;
    border-radius: 0;
    font-size: 20px;
  }
  .nav > button.selected {
    border-bottom: 1px solid #f5f5f5;
    color: inherit;
  }
</style>
