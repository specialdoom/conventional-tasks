import lint from "@commitlint/lint";
import load from "@commitlint/load";

const CONFIG = {
  extends: ["@commitlint/config-conventional"]
};

export default function validation(): Readonly<ValidationService> {
  return Object.freeze({
    validateTask
  });
}

/**
 * Validates a task.
 *
 * @param task
 * The task to validate.
 *
 * @returns
 * 'true' if the task is valid, `false` otherwise.
 *
 * @throws
 * Error if the task validation fails.
 */
export async function validateTask(task: string): Promise<Validation> {
  try {
    console.log("Validation in progress...");
    if (task === "") {
      return {
        success: false,
        message: "Task cannot be empty!"
      };
    }

    const opts = await load(CONFIG);
    const result = await lint(task, opts.rules, opts);

    if (result.valid) {
      console.log("Validation successful!");
      return {
        success: true
      };
    } else {
      console.log("Validation failed!");
      return {
        success: false,
        message: result.errors.at(0)?.message || "Validation failed!"
      };
    }
  } catch (e) {
    console.error("Task validation failed!");
    throw new Error("Task validation failed!");
  }
}

/** Validation service interface. */
export interface ValidationService {
  /** Method to use to validate a task. */
  validateTask(task: string): Promise<Validation>;
}

type Validation = ValidationOk | ValidatonFailure | ValidationWarning;

interface ValidationBase {
  success: boolean;
  message?: string;
}

interface ValidationOk extends ValidationBase {
  success: true;
}
interface ValidatonFailure extends ValidationBase {
  success: false;
  message: string;
}
interface ValidationWarning extends ValidationBase {
  success: true;
  message: string;
}
