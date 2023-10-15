import {fail, type Actions} from "@sveltejs/kit";
import {validation, db} from "$lib/server/services";

export function load() {
  return {tasks: db.getAll(), flatTasks: db.getAllFlat()};
}

export const actions: Actions = {
  default: async ({request}) => {
    const formdata = await request.formData();
    const task = formdata.get("task") as string;

    const validationResult = await validation.validateTask(task);

    if (validationResult.success) {
      db.createTask(task);
    } else {
      return fail(422, {task, error: validationResult.message});
    }
  }
};
