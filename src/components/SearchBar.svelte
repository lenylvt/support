<script>

import { Search } from 'lucide-svelte';
</script>

<form class="searchbar_container" action="/search" data-sveltekit-reload>
	<Search size="20" color="#FFF"/>
	<input type="search" name="q" placeholder="Qu’elle est ton problème ?">
</form>

<style>
	.searchbar_container {
      display: flex;
      padding: 10px;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      border-radius: 1000px;
      border: 1px solid rgba(255, 255, 255, 0.20);
      background: rgba(255, 255, 255, 0.20);
      z-index: 10;
	}
	input {
			border: none;
			background: none;
			color: #FFF;
			font-size: 16px;
			font-weight: 450;
			line-height: 95%;
			letter-spacing: -0.1px;
			width: 100%;
	}
  input::placeholder {
      color: #FFFFFFB2;
      opacity: 1;
  }
	input::-webkit-search-cancel-button {
      filter: invert(100%) sepia(100%) saturate(500%) hue-rotate(90deg);
  }
	input:focus {
			outline: none;
	}
</style>