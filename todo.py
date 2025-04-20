# todo.py

# 1. Start with an empty list
tasks = []

# 2. Loop forever until the user quits
while True:
    # 3. Show current tasks
    print("\n🗒️  Your To‑Do List:")
    if not tasks:
        print("  (no tasks yet)")
    else:
        for i, t in enumerate(tasks, start=1):
            print(f"  {i}. {t}")

    # 4. Show menu options
    print("""
Options:
  1) Add a task
  2) Remove a task
  3) Quit
""")
    choice = input("Choose an option (1, 2, or 3): ")

    # 5. Handle each choice
    if choice == "1":
        new_task = input("Enter the new task: ")
        tasks.append(new_task)
        print(f"✅ Added: {new_task}")

    elif choice == "2":
        idx = input("Enter the number of the task to remove: ")
        if idx.isdigit() and 1 <= int(idx) <= len(tasks):
            removed = tasks.pop(int(idx) - 1)
            print(f"❌ Removed: {removed}")
        else:
            print("⚠️  Invalid task number.")

    elif choice == "3":
        print("👋 Goodbye!")
        break

    else:
        print("⚠️  Invalid option—please choose 1, 2, or 3.")
