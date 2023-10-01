<script lang="ts">
  import {parseInline} from "marked";

  let todos: string[] = [];

  function onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    todos = [value, ...todos];
  }
</script>

<div>
  {#each todos as todo}
    <!-- eslint-disable -->
    <p>{@html parseInline(todo)}</p>
  {/each}
</div>

<input
  type="text"
  on:change={onInputChange}
/><button>+</button>
