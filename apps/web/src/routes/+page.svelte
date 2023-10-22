<script lang="ts">
  import Input from "@specialdoom/conventional-ui/input/Input.svelte";
  import Checkbox from "@specialdoom/conventional-ui/checkbox/Checkbox.svelte";
  import Accordion from "@specialdoom/conventional-ui/accordion/Accordion.svelte";
  import {enhance} from "$app/forms";
  import {parseInline} from "marked";
  import type {PageData, ActionData} from "./$types";

  export let data: PageData;

  export let form: ActionData;

  $: completed = data.tasks.filter((task: any) => task.completed);

  $: incompleted = data.tasks.filter((task: any) => !task.completed);
</script>

<div class:cui--tasks-page={true}>
  <div
    class:cards={true}
    style:padding="0 16px"
  >
    {#each incompleted as task}
      <!-- eslint-disable -->
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
            <Checkbox />
          </form>
          <div class:card-title={true}>
            {@html parseInline(`${task.type}: ${task.message}`)}
          </div>
        </div>
      </div>
    {/each}
  </div>
  {#if completed.length > 0}
    <div class:completed={true}>
      <Accordion>
        <div class:cards={true}>
          {#each completed as task}
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
                  <Checkbox checked />
                </form>
                <div class:card-title={true}>
                  {@html parseInline(`~~${task.type}: ${task.message}~~`)}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </Accordion>
    </div>
  {/if}
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
