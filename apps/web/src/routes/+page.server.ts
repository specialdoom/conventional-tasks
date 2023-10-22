import {fail, type Actions} from "@sveltejs/kit";
import {validation, db} from "$lib/server/services";

export function load() {
  return {tasks: db.getAll()};
}

export const actions: Actions = {
  create: async ({request}) => {
    const formdata = await request.formData();
    const task = formdata.get("task") as string;

    const validationResult = await validation.validateTask(task);

    if (validationResult.success) {
      db.createTask(task);
    } else {
      return fail(422, {task, error: validationResult.message});
    }
  },

  update: async ({request}) => {
    const formdata = await request.formData();
    const id = formdata.get("id") as string;
    const checked = formdata.get("checked") ? true : false;
    const task = db.getById(parseInt(id));

    if (!task) {
      return fail(404);
    }

    task.completed = checked;
    db.updateTask(task);
  }
};
