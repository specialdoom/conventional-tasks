<script lang="ts">
  import {enhance} from "$app/forms";
  import {parseInline} from "marked";
  import type {PageData, ActionData} from "./$types";

  export let data: PageData;

  export let form: ActionData;
</script>

<div class:cui--tasks-page={true}>
  <div class:cards={true}>
    {#each data.flatTasks as task}
      <!-- eslint-disable -->
      <div class:card={true}>
        <div class:card-body={true}>
          {@html parseInline(task)}
        </div>
      </div>
    {/each}
  </div>
  <div class:actions={true}>
    <form
      method="POST"
      use:enhance
    >
      <input
        name="task"
        value={form?.task || ""}
        placeholder="What's more to do?"
      />
      {#if form?.error}
        <p class="error">{form.error}</p>
      {/if}
    </form>
  </div>
</div>

<style>
  .cui--tasks-page {
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  .error {
    color: #79170a;
  }
  /** TODO: create a card component */
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
    box-sizing: border-box;
    width: 100%;
  }

  .card {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    background: #ffffff;
    border-radius: var(--size-spacing-1, 8px);
    border: 1px solid var(--color-brand-secondary, #000);
    background: var(--color-base-white, #fff);

    /* Brutal-Shadow-1 */
    box-shadow: -2px 2px 0px 0px #000;
  }

  .card-body :global(code) {
    padding: 2px 4px;
    line-height: 1;
    background-color: #000;
    color: #fff;
    font-size: 13px;
    border-radius: 6px;
    font-family: Fira Code;
  }

  /** TODO: create a `Textarea` component */
  input {
    box-sizing: border-box;
    border-radius: var(--size-radius-s, 8px);
    border: 1px solid var(--color-brand-secondary, #000);
    background: var(--color-base-white, #fff);
    border-radius: 8px;
    outline: none;
    padding: 12px;
    width: 100%;
  }
</style>
