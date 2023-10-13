const db: string[] = [];

function getAll() {
  return db;
}

function createTask(task: string) {
  db.push(task);
}

export default function database(): Readonly<any> {
  return Object.freeze({
    getAll,
    createTask
  });
}
