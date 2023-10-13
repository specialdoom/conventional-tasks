<script lang="ts">
  import {enhance} from "$app/forms";
  import {parseInline} from "marked";
  import type {PageData, ActionData} from "./$types";

  export let data: PageData;

  export let form: ActionData;
</script>

<div class:cui--tasks-page={true}>
  <div class:cards={true}>
    {#each data.tasks as task}
      <!-- eslint-disable -->
      <div class:card={true}>
        <div class:card-header={true}></div>
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
    padding: 12px;
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
    font-size: 13px;
  }

  .card-header {
    display: inline-flex;
    justify-content: space-between;
  }

  .card-body :global(code) {
    padding: 2px 4px;
    font-size: 0.9em;
    line-height: 1;
    background-color: rgba(99, 110, 123, 0.4);
    border-radius: 6px;
  }

  /** TODO: create a `Textarea` component */
  input {
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #7784ee;
    border-radius: 8px;
    outline: none;
    padding: 12px;
    width: 100%;
  }

  input:focus {
    box-shadow: 0px 5px 15px rgba(119, 132, 238, 0.3);
  }
</style>
