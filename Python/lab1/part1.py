# Accept first name and last name from user and Print the full name in reverse order
firstName = input("Enter your first name: ")
lastName = input("Enter your last name: ")

print(lastName + " " + firstName)

# Accept an integer n from user and Compute the value of n+nn+nnn
n = int(input("Enter an integer: "))
nn = (n * 10 + n)
nnn = (n * 100 + n * 10 + n)
result = n + nn + nnn

print("Result:", result)

# Python program to print the following here document
print('''a string that you "don't" have to escape
This is a ....... multi-line
heredoc string --------> example''')

# Calculate the volume of the sphere
import math

radius = 6
volume = (4/3) * math.pi * (radius ** 3)

print("The volume of the sphere with radius", radius, "is:", volume)

# Get the base and height of the triangle and Calculate the area
base = float(input("Enter the base of the triangle: "))
height = float(input("Enter the height of the triangle: "))
area = (1/2) * base * height

print("The area of the triangle is:", area)

# Construct the pattern using nested for loops
num_rows = 5
for i in range(num_rows):
    for j in range(i):
        print("*", end="")
    print("")

for i in range(num_rows, 0, -1):
    for j in range(i):
        print("*", end="")
    print("")

# Get the word from the user and reverse it
word = input("Enter a word: ")
print("The reversed word is:", word[::-1])

# Loop through the numbers from 0 to 6
for i in range(7):
    if i == 3 or i == 6:
        continue
    print(i)

# get the Fibonacci series between 0 to 50
a, b = 0, 1

while b < 50:
    print(b)
    a, b = b, a + b

# program that accepts a string and calculate the number of digits andletters
string = input("Enter a string: ")
lettersNum = 0
digitsNum = 0
for char in string:
    if char.isalpha():
        lettersNum += 1
    elif char.isdigit():
        digitsNum += 1

print("Number of letters is:",lettersNum)
print("Number of digits is:",digitsNum)










