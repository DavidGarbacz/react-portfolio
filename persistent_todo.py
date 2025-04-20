# persistent_todo.py

FILENAME = "tasks.txt"

def load_tasks():
    """Read tasks from FILENAME, return a list of stripped lines."""
    try:
        with open(FILENAME, "r", encoding="utf-8") as f:
            return [line.strip() for line in f if line.strip()]
    except FileNotFoundError:
        return []

def save_tasks(tasks):
    """Write each task on its own line into FILENAME."""
    with open(FILENAME, "w", encoding="utf-8") as f:
        for task in tasks:
            f.write(task + "\n")

def show_tasks(tasks):
    """Print the current tasks list."""
    print("\n🗒️ Your To‑Do List:")
    if not tasks:
        print("  (no tasks yet)")
    else:
        for i, t in enumerate(tasks, 1):
            print(f"  {i}. {t}")

def add_task(tasks):
    task = input("Enter new task: ")
    tasks.append(task)
    print(f"✅ Added: {task}")

def remove_task(tasks):
    idx = input("Enter task number to remove: ")
    if idx.isdigit() and 1 <= int(idx) <= len(tasks):
        removed = tasks.pop(int(idx) - 1)
        print(f"❌ Removed: {removed}")
    else:
        print("⚠️ Invalid number.")

def main():
    tasks = load_tasks()
    while True:
        show_tasks(tasks)
        print("\nOptions: 1) Add  2) Remove  3) Quit")
        choice = input("Choose 1, 2, or 3: ")

        if choice == "1":
            add_task(tasks)
        elif choice == "2":
            remove_task(tasks)
        elif choice == "3":
            save_tasks(tasks)
            print("👋 Goodbye! Tasks saved.")
            break
        else:
            print("⚠️ Please choose 1, 2, or 3.")

if __name__ == "__main__":
    main()
