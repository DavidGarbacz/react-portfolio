while True:
    user_input = input("Enter two numbers separated by space (or type 'exit' to quit): ")
    if user_input.lower() == "exit":
        print("Goodbye!")
        break

    parts = user_input.split()
    if len(parts) != 2:
        print("❗ Please enter exactly two numbers or 'exit'.")
        continue

    try:
        a, b = map(float, parts)
    except ValueError:
        print("❗ Those aren’t valid numbers. Try again.")
        continue

    print(
        f"Sum: {a + b}, "
        f"Difference: {a - b}, "
        f"Product: {a * b}, "
        f"Quotient: {a / b}"
    )
