const db: string[] = [];
const flat_db: Task[] = [];

function getAll() {
  return db;
}

function getAllFlat() {
  return flat_db;
}

function createTask(task: string) {
  const [type, message] = task.split(":");
  flat_db.push(task);
  db.push({type, message});
}

export default function database(): Readonly<any> {
  return Object.freeze({
    getAll,
    getAllFlat,
    createTask
  });
}

interface Task {
  type: "feat" | "test" | "fix";
  message: string;
}
