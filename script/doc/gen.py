number = int(input())
i = 0

while i < number:
  i+=i+1
  if (i % 3 == 0) & (i % 4 == 0):
    print(i)

p = input()