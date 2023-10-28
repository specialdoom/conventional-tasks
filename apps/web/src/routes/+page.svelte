<script lang="ts">
  import Input from "@specialdoom/conventional-ui/Input.svelte";
  import Checkbox from "@specialdoom/conventional-ui/Checkbox.svelte";
  import Collapsible from "@specialdoom/conventional-ui/Collapsible.svelte";
  import {enhance} from "$app/forms";
  import {parseInline} from "marked";
  import type {PageData, ActionData} from "./$types.js";

  export let data: PageData;

  export let form: ActionData;

  $: completed = data.tasks.filter((task: any) => task.completed);

  $: incompleted = data.tasks.filter((task: any) => !task.completed);
</script>

<div class:cui--tasks-page={true}>
  <!-- eslint-disable -->
  <div class="cards-container">
    {#if incompleted.length > 0}
      <div class:cards={true}>
        {#each incompleted as task, i (i)}
          <div class:card={true}>
            <div class:card-body={true}>
              <form
                method="POST"
                action="?/update"
                use:enhance
              >
                <input
                  type="hidden"
                  name="id"
                  value={task.id}
                />
                <input
                  type="hidden"
                  name="checked"
                  value="checked"
                />
                <Checkbox
                  name="task-check"
                  count={completed.length === 0 ? i : i + completed.length}
                />
              </form>
              {@html parseInline(`${task.type}: ${task.message}`)}
            </div>
          </div>
        {/each}
      </div>
    {/if}
    {#if completed.length > 0}
      <div class:completed={true}>
        <Collapsible label="Completed">
          <div class:cards={true}>
            {#each completed as task, i (i)}
              <div class:card={true}>
                <div class:card-body={true}>
                  <form
                    method="POST"
                    action="?/update"
                    use:enhance
                  >
                    <input
                      type="hidden"
                      name="id"
                      value={task.id}
                    />
                    <Checkbox
                      name="task-check"
                      checked
                      count={i}
                    />
                  </form>
                  {@html parseInline(`~~${task.type}: ${task.message}~~`)}
                </div>
              </div>
            {/each}
          </div>
        </Collapsible>
      </div>
    {/if}
  </div>
  <div class:actions={true}>
    <form
      method="POST"
      action="?/create"
      use:enhance
    >
      <Input
        name="task"
        value={form?.task || ""}
        placeholder="What's more to do? e.g. type: markdown"
        autofocus
      />
      {#if form?.error}
        <p class="error">{form.error}</p>
      {/if}
    </form>
  </div>
</div>

<style>
  .cui--tasks-page {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    overflow: auto;
  }

  .actions {
    height: 58px;
    position: fixed;
    bottom: 0;
    padding: 8px;
    width: 100%;
    background: #fffbf4;
  }

  .cards-container {
    height: 100%;
    padding: 8px 16px;
  }
  .completed {
    flex: 1;
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
    box-sizing: border-box;
    padding: 12px 16px;
    background: #ffffff;
    border-radius: var(--size-spacing-1, 8px);
    border: 1px solid var(--color-brand-secondary, #000);
    background: var(--color-base-white, #fff);

    /* Brutal-Shadow-1 */
    box-shadow: -2px 2px 0px 0px #000;
    height: 48px;
  }

  .card-body {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 16px;
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
</style>
