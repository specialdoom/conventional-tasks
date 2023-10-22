let db: Task[] = [];

function getAll() {
  return db;
}

function getById(id: number): Task | undefined {
  return db.find((t) => t.id === id);
}

function createTask(task: string) {
  const [type, message] = task.split(":");
  const _type = type as Type;

  db.push({
    id: db.length + 1,
    type: _type,
    message: message.trim(),
    completed: false
  });
}

function updateTask(id: number, task: Task) {
  db = db.map((t) => {
    if (t.id === id) {
      return task;
    }

    return t;
  });
}

export default function database(): Readonly<any> {
  return Object.freeze({
    getAll,
    createTask,
    updateTask,
    getById
  });
}

interface Task {
  id: number;
  type: Type;
  message: string;
  completed: boolean;
}

type Type = "feat" | "test" | "fix";
