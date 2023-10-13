<script lang="ts"></script>

<div class="cui--layout">
  <aside class="cui--side">Sidebar</aside>
  <main class="cui--content">
    <slot />
  </main>
</div>

<style>
  .cui--layout {
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    height: 100vh;
    background: #eaeef6;
  }

  .cui--layout > * {
    grid-column: col-start / span 12;
  }

  .cui--content {
    grid-column: col-start 3 / span 12;
  }

  .cui--side {
    grid-column: col-start / span 2;
  }

  @media (max-width: 500px) {
    .cui--layout {
      grid-template-columns: repeat(4, [col-start] 1fr);
    }

    .cui--layout > * {
      grid-column: col-start / span 4;
    }

    .cui--side {
      grid-row: 1 / 1;
    }

    .cui--content {
      grid-row: 2 / 8;
    }
  }

  @media (max-width: 700px) {
    .cui--layout {
      grid-template-columns: repeat(8, [col-start] 1fr);
    }

    .cui--content {
      grid-column: col-start 3 / span 8;
    }

    .cui--side {
      grid-column: col-start / span 2;
    }
  }
</style>
