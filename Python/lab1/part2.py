# create a function that returns a list where all similar adjacentelements have been reduced to a single element
def remove_adjacent_duplicates(numbers):
    modifiedList = []
    for num in numbers:
        if not modifiedList or num != modifiedList[-1]:
            modifiedList.append(num)
    return modifiedList
list = [1,2,3,3]
modifiedList = remove_adjacent_duplicates(list)
print(modifiedList)

# dividing a string into two halves and combine
def front_and_back(str):
    length = len(str)
    if length % 2 == 0:
        return str[:length//2], str[length//2:]
    else:
        return str[:length//2+1], str[length//2+1:]

def combine_strings(a, b):
    a_front, a_back = front_and_back(a)
    b_front, b_back = front_and_back(b)
    return (a_front + b_front) + (a_back + b_back)

a = "1234"
b = "abcde"
str = combine_strings(a,b)
print(str)

# function that takes a sequence of numbers and determines whether all the numbers are different from each other
def are_all_unique(numbers):
    flag = True
    length = len(numbers)
    numbers.sort()  
    for i in range(1, length):  
        for j in range(0, i):  
            if numbers[i] == numbers[i-1]:
                flag = False
    return flag  

list1 = [1,2,3]
list2 = [1,2,2,3,3]
result1 = are_all_unique(list1)
result2 = are_all_unique(list2)
print(result1)
print(result2)

# Given unordered list, sort it using algorithm bubble sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

arr = [64, 25, 55, 22, 11, 5]
sorted_arr = bubble_sort(arr)
print(sorted_arr)

# Guess game
import random

def guess_game():
    print("Welcome to the guessing game!")
    number = random.randint(1, 100)
    tries_left = 10
    guessed_numbers = []

    while tries_left > 0:
        guess = input("Guess a number between 1 and 100: ")
        if not guess.isdigit():
            print("Please enter a valid number.")
            continue

        guess = int(guess)
        if guess < 1 or guess > 100:
            print("Your guess is out of range. Please try again.")
            continue

        if guess in guessed_numbers:
            print("You already guessed that number. Try a different one.")
            continue

        guessed_numbers.append(guess)
        tries_left -= 1

        if guess == number:
            print("Congratulations, you guessed the number!")
            play_again = input("Do you want to play again? (y/n)")
            if play_again.lower() == 'y':
                guess_game()
            else:
                print("Thanks for playing!")
            return

        elif guess < number:
            print("Your guess is too low.")
        else:
            print("Your guess is too high.")

    print("Sorry, you ran out of tries. The number was", number)
    play_again = input("Do you want to play again? (y/n)")
    if play_again.lower() == 'y':
        guess_game()
    else:
        print("Thanks for playing!")

guess_game()

