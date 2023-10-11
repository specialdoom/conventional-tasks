import type {ValidationService} from "./validation";
import getValidation from "./validation";

export let validation: ValidationService;

export function initServices() {
  validation = getValidation();
}
