#Matematikadagi barcha amal va funksiyalarni o'z ichiga olgan modul. Funksiyalar nomlari hammasi uzbek tilida berilgan.
def yigindi(a, b):
    return a + b
def ayirma(a, b):
    return a - b
def kopaytirish(a, b):
    return a * b
def bolish(a, b):
    if b == 0:
        return "Nolga bo'lish mumkin emas"
    return a / b
def daraja(a, b):
    return a ** b
def ildiz(a, b):
    if a < 0 and b % 2 == 0:
        return "Musbat ildizni olish mumkin emas"
    return a ** (1 / b)
