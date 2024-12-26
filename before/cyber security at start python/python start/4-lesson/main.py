1

# from time import sleep

# counter = 0

# while True:
#     counter = counter + 1
#     sleep(1)
#     print(counter)

# 2

import random

# Generate a random number between 1 and 10
random_number = random.randint(1, 10)

# Initialize the counter and maximum attempts
attempt = 1
max_attempt = 5

# Get the initial guess from the user
guess = int(input("Input your guess (1...10): "))

# Loop until the guess is correct or maximum attempts are reached
while guess != random_number:
    if attempt == max_attempt:
        print("You expired your attempts")
        break
    print("Your guess is incorrect")
    guess = int(input("Input your guess (1...10): "))
    attempt += 1

if guess == random_number:
    print(f"You win in {attempt} attempts")


# 3

# n = int(input("n: "))

# counter = 1 # start
# factorial =

# while counter <= n:
#     factorial *= counter
#     counter += 1 # STEP

# print(factorial)
