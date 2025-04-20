# contacts.py

# Start with an empty dictionary
contacts = {}

while True:
    # Display menu
    print("\n📇 Contact Manager")
    print("1) Add contact")
    print("2) View contact")
    print("3) Delete contact")
    print("4) List all contacts")
    print("5) Quit")

    choice = input("Choose an option (1–5): ")

    if choice == "1":
        name = input("Enter name: ")
        phone = input("Enter phone number: ")
        contacts[name] = phone
        print(f"✅ Added {name} → {phone}")

    elif choice == "2":
        name = input("Enter name to view: ")
        if name in contacts:
            print(f"{name}: {contacts[name]}")
        else:
            print("❌ Contact not found.")

    elif choice == "3":
        name = input("Enter name to delete: ")
        if name in contacts:
            del contacts[name]
            print(f"🗑️ Deleted {name}")
        else:
            print("❌ Contact not found.")

    elif choice == "4":
        if contacts:
            print("\nYour contacts:")
            for name, phone in contacts.items():
                print(f" • {name}: {phone}")
        else:
            print("(No contacts yet.)")

    elif choice == "5":
        print("👋 Goodbye!")
        break

    else:
        print("⚠️ Invalid option—please choose 1, 2, 3, 4, or 5.")
