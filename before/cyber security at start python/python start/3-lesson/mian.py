# number = int(input(':  '))

# if number % 2 == 0:
#     print('juft')
# # elif number % 2 == 1:
# #     print('toq')
# else: 
#     print('toq')

# if number % 3 == 0 and number % 5 == 0:
#     print('Biz-Buz')
# elif number % 3 == 0:
#     print('Biz')
# elif number % 5 == 0:
#     print('Buz')
# else:
#     print(number)


# if number % 3 == 0 or number % 5 == 0:
#     print(True)
# else: 
#     print(False)

# if number % 3 == 0 or number == 21:
#     print(True)
# else: 
#     print(False)

# age = int(input('age:  '))

# if 0 <= age <= 16:
#     print('Bola')
# elif  10 <= age <= 16:
#     print("o'smir")
# elif 17 <= age <= 25:
#     print('Yosh')
# elif 26 <=  age <= 40:
#     print("O'rta Yosh")
# elif  41 <= age <= 99:
#     print("Penseniyer")
# else: 
#     print('Hato kiritingiz')


m = int(input('money:  '))

if m > 100:
    print("Yetkaib Berish Narxi Bepul")
elif 50 <= m <= 99:
    print("Yetkaib Berish Narxi 10 so'm")
elif 1 <= m <= 49:
    print("Yetkaib Berish Narxi 20 so'm")
else: 
    print("Bunday nar yo'q")