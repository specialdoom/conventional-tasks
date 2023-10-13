import type {ValidationService} from "./validation.js";
import getValidation from "./validation.js";
import getDatabase from "./database.js";

export let validation: ValidationService;

export let db: any;

export function initServices() {
  validation = getValidation();
  db = getDatabase();
}
