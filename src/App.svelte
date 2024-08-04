<script lang="ts">
  import Header from './components/Header.svelte';
  import SearchResults from './components/SearchResults.svelte';
  import Table from './components/Table.svelte';
</script>

<Header />
<SearchResults />
<Table jsonFilePath="Table.json" />
