
# eng ko'p qatnashgan harf va necha marta takrorlanganligini chiqarish

from collections import Counter
text=input("textni kiriting: ")
arr= Counter(text)
i=0
print(arr.most_common(1))