<script lang="ts">
  import { onMount } from 'svelte';
  import { initThemeToggle } from '../scripts/theme';
  import { initSearch } from '../scripts/search'

  onMount(() => {
    initSearch();
    initThemeToggle();
  });
</script>
  
  <div class="header">
    <input class="search-bar" type="text" id="searchInput" placeholder="Поиск...">
    <button id="themeToggle">🌙</button>
  </div>
