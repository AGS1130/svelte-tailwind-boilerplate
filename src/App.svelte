<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .App {
    @apply text-center;

    code {
      background: #0002;
      padding: 4px 8px;
      border-radius: 4px;
    }

    p {
      margin: 0.4rem;
    }

    .header {
      background-color: #f9f6f6;
      color: #333;
      font-size: calc(10px + 2vmin);
      @apply min-h-screen flex flex-col justify-center items-center;
    }

    .link {
      color: #ff3e00;
    }

    .logo {
      height: 36vmin;
      pointer-events: none;
      margin-bottom: 3rem;
      animation: App-logo-pulse infinite 1.6s ease-in-out alternate;
    }
  }

  @keyframes App-logo-pulse {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.06);
    }
  }
</style>

<script>
  import { onMount } from 'svelte';
  let count = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="App">
  <header class="header">
    <img src="/logo.svg" class="logo" alt="logo" />
    <p>Edit <code>src/App.svelte</code> and save to reload.</p>
    <p>Page has been open for <code>{count}</code> seconds.</p>
    <p>
      <a class="link" href="https://svelte.dev" target="_blank" rel="noopener noreferrer"> Learn Svelte </a>
    </p>
  </header>
</div>
