def highest_product(liste):
    if not isNumbers(liste):
        raise ValueError("The list can only contain integers")
    # liste.sort()
    i = 0
    while i < len(liste):
        for n in range(len(liste)-1):
            if liste[n] > liste[n+1]:
                temp_n = liste[n]
                liste[n] = liste[n+1]
                liste[n+1] = temp_n
        i += 1
    print(liste)
    return max(liste[0]*liste[1]*liste[-1],liste[-1]*liste[-2]*liste[-3])

def isNumbers(liste):
    number = True
    for i in liste:
        if not type(i) == int:
            number = False
    return number

print(highest_product([1, 10, 2, 6, 5, 3])) # example // 300
print(highest_product([1,2,-3,-4]))         # negative integers // 24
print(highest_product(["hei"]))             # non-integer // error
