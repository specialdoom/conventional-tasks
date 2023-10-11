import {fail, type Actions} from "@sveltejs/kit";
import {validation} from "$lib/server/services";

let todos: string[] = [];

export function load() {
  return {todos};
}

export const actions: Actions = {
  default: async ({request}) => {
    const formdata = await request.formData();
    const task = formdata.get("task") as string;

    const validationResult = await validation.validateTask(task);

    if (validationResult.success) {
      todos = [task, ...todos];
    } else {
      return fail(400, {task, error: validationResult.message});
    }
  }
};
