<script lang='ts'>
  import '../app.css';
  import { writable } from 'svelte/store';
  import Profile from '../components/profile.svelte';
  import Project from '../components/project.svelte';
  import Socials from '../components/socials.svelte';
  import type { Project as ProjectType } from '../models/project';
  import { ProjectAikidoGithub, ProjectBingo, ProjectColruytPriceHistory, ProjectColruytProductScraper, ProjectContentRequest, ProjectDLUtils, ProjectFietsApp, ProjectGoChiSQLiteJWTStarter, ProjectMyPortfolio, ProjectWaarStreamen, ProjectYabat } from './projects';
  import { fly } from 'svelte/transition';
  import { ContributionCSS, ContributionHandlersjs } from './contributions';

  const projects: ProjectType[] = [
    ProjectYabat,
    ProjectContentRequest,
    ProjectDLUtils,
    ProjectColruytProductScraper,
    ProjectColruytPriceHistory,
    ProjectGoChiSQLiteJWTStarter,
    ProjectBingo,
    ProjectFietsApp,
    ProjectAikidoGithub,
    ProjectWaarStreamen,
    ProjectMyPortfolio,
  ];

  const contributions: ProjectType[] = [
    ContributionCSS,
    ContributionHandlersjs,
  ];

  const navState = writable<'projects' | 'contributions' | 'busy'>('projects');
  const setNavState = (state: 'projects' | 'contributions' | 'busy') => {
    if ($navState === state) return;
    navState.set('busy');
    setTimeout(() => navState.set(state), 100);
  };

  let innerWidth: number;
  $: smallWindow = innerWidth < 700;
</script>

<svelte:window bind:innerWidth />

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
      in:fly={smallWindow ? { x: '-100%', duration: 100 } : { x: '100%', duration: 100 }}
      out:fly={smallWindow ? { x: '-100%', duration: 100 } : { x: '100%', duration: 100 }}
    >
      {#each projects as project}
        <Project {project} />
      {/each}
    </div>
  {:else if $navState === 'contributions'}
    <div
      in:fly={{ x: '100%', duration: 100 }}
      out:fly={{ x: '100%', duration: 100 }}
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
    overflow-x: hidden;
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
    border: 0px solid #f5f5f5;
    transition: all .1s ease-in-out;
  }
  .nav > button.selected {
    border-bottom-width: 1px;
    color: inherit;
  }

  @media only screen and (min-width: 700px) {
    #sticky {
      position: relative;
      background: transparent;
      padding-top: 200px;
      width: 400px;
      float: left;
      overflow: hidden;
    }
    .content {
      width: calc(100% - 400px - 2*20px);
      overflow-y: scroll;
      height: calc(100vh - 20px);
    }
    .nav {
      flex-direction: column;
      justify-content: center;
      width: 100%;
      max-width: 200px;
      margin: auto;
      margin-top: 20px;
    }
    .nav > button.selected {
      border-left-width: 1px;
      border-bottom: none;
      color: inherit;
    }
  }
</style>
