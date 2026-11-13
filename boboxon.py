#Matematikadagi barcha amal va funksiyalarni o'z ichiga olgan modul. Funksiyalar nomlari hammasi uzbek tilida berilgan.
def yigindi(a, b):
    """Yig'indini hisoblash. Birinchi kiritilan sonni ikkinchi kiritilgan songa qo'shadi."""
    return a + b
def ayirma(a, b):
    """Ayirmani hisoblash. Birinchi kiritilan sonni ikkinchi kiritilgan sondan ayiradi."""
    return a - b
def kopaytirish(a, b):
    """Kopaytirishni hisoblash. Birinchi kiritilan sonni ikkinchi kiritilgan songa ko'paytiradi."""
    return a * b
def bolish(a, b):
    """Bo'lishni hisoblash. Birinchi kiritilan sonni ikkinchi kiritilgan songa bo'ladi."""
    if b == 0:
        return "Nolga bo'lish mumkin emas"
    return a / b
def daraja(a, b):
    """Darajaga ko'tarishni hisoblash. Birinchi kiritilan sonni ikkinchi kiritilgan songa darajaga ko'taradi."""
    return a ** b
def ildiz(a, b):
    """Ildizni hisoblash. Birinchi kiritilan sonni ikkinchi kiritilgan songa ildizga ko'taradi."""
    if a < 0 and b % 2 == 0:
        return "Musbat ildizni olish mumkin emas"
    return a ** (1 / b)
def logarifm(a, b):
    """Logarifmni hisoblash. Birinchi kiritilan sonni ikkinchi kiritilgan songa logarifmga ko'taradi."""
    import math
    if a <= 0 or b <= 0 or b == 1:
        return "Logarifmni hisoblash uchun sonlar musbat bo'lishi kerak va logarifm bazasi 1 bo'lmasligi kerak"
    return math.log(a, b)
def faktorial(a):
    """Faktorialni hisoblash. Kiritilgan sonning faktorialini hisoblaydi."""
    if a < 0:
        return "Manfiy sonning faktoriali mavjud emas"
    if a == 0 or a == 1:
        return 1
    fakt = 1
    for i in range(2, a + 1):
        fakt *= i
    return fakt
def kombinatsiya(n, r):
    """Kombinatsiyani hisoblash. n elementdan r elementni tanlash kombinatsiyasini hisoblaydi."""
    if r > n or n < 0 or r < 0:
        return "Kombinatsiya uchun n va r musbat bo'lishi kerak va r n dan katta bo'lmasligi kerak"
    return faktorial(n) // (faktorial(r) * faktorial(n - r))
def permutatsiya(n, r):
    """Permutatsiyani hisoblash. n elementdan r elementni tanlash permutatsiyasini hisoblaydi."""
    if r > n or n < 0 or r < 0:
        return "Permutatsiya uchun n va r musbat bo'lishi kerak va r n dan katta bo'lmasligi kerak"
    return faktorial(n) // faktorial(n - r)
def modul(a, b):
    """Modulni hisoblash. Birinchi kiritilan sonni ikkinchi kiritilgan songa bo'lgandagi qoldiqni hisoblaydi."""
    if b == 0:
        return "Nolga bo'lish mumkin emas"
    return a % b
def kvadrat(a):
    """Kvadratni hisoblash. Kiritilgan sonning kvadratini hisoblaydi."""
    return a ** 2
def kub(a):
    """Kubni hisoblash. Kiritilgan sonning kubini hisoblaydi."""
    return a ** 3
def modul(a):
    """Modulni hisoblash. Kiritilgan sonning modulini hisoblaydi."""
    return abs(a)
def sinus(a):
    """Sinusni hisoblash. Kiritilgan burchakning sinusini hisoblaydi (graduslarda)."""
    import math
    return math.sin(math.radians(a))
def kosinus(a):
    """Kosinusni hisoblash. Kiritilgan burchakning kosinusini hisoblaydi (graduslarda)."""
    import math
    return math.cos(math.radians(a))
def tangens(a):
    """Tangensni hisoblash. Kiritilgan burchakning tangensini hisoblaydi (graduslarda)."""
    import math
    return math.tan(math.radians(a))
def kotangens(a):
    """Kotangensni hisoblash. Kiritilgan burchakning kotangensini hisoblaydi (graduslarda)."""
    import math
    if a % 180 == 0:
        return "Kotangensni hisoblash mumkin emas"
    return 1 / math.tan(math.radians(a))
def arksinus(a):
    """Arksinusni hisoblash. Kiritilgan sonning arksinusini hisoblaydi (graduslarda)."""
    import math
    if a < -1 or a > 1:
        return "Arksinusni hisoblash uchun son -1 va 1 orasida bo'lishi kerak"
    return math.degrees(math.asin(a))
def arkkosinus(a):
    """Arkkosinusni hisoblash. Kiritilgan sonning arkkosinusini hisoblaydi (graduslarda)."""
    import math
    if a < -1 or a > 1:
        return "Arkkosinusni hisoblash uchun son -1 va 1 orasida bo'lishi kerak"
    return math.degrees(math.acos(a))
def arktangens(a):
    """Arktangensni hisoblash. Kiritilgan sonning arktangensini hisoblaydi (graduslarda)."""
    import math
    return math.degrees(math.atan(a))
def arkkotangens(a):
    """Arkkotangensni hisoblash. Kiritilgan sonning arkkotangensini hisoblaydi (graduslarda)."""
    import math
    if a == 0:
        return 90
    return math.degrees(math.atan(1 / a))
def asinx(a):
    """Asinxni hisoblash. Kiritilgan sonning asinxini hisoblaydi (graduslarda)."""
    import math
    if a < -1 or a > 1:
        return "Asinxni hisoblash uchun son -1 va 1 orasida bo'lishi kerak"
    return math.degrees(math.asin(a))
def diskriminant(a, b, c):
    """Diskriminantni hisoblash. Kvadrat tenglamaning diskriminantini hisoblaydi."""
    return b ** 2 - 4 * a * c
def ildizlar(a, b, c):
    """Kvadrat tenglamaning ildizlarini hisoblash. Kvadrat tenglamaning ildizlarini hisoblaydi."""
    d = b ** 2 - 4 * a * c
    if d < 0:
        return "Ildizlar mavjud emas"
    elif d == 0:
        return -b / (2 * a)
    else:
        x1 = (-b + d ** 0.5) / (2 * a)
        x2 = (-b - d ** 0.5) / (2 * a)
        return x1, x2
def arifmetik_orta(*args):
    """Arifmetik o'rtani hisoblash. Kiritilgan sonlarning arifmetik o'rtasini hisoblaydi."""
    if len(args) == 0:
        return "Hech qanday son kiritilmadi"
    return sum(args) / len(args)
def geometrik_orta(*args):
    """Geometrik o'rtani hisoblash. Kiritilgan sonlarning geometrik o'rtasini hisoblaydi."""
    import math
    if len(args) == 0:
        return "Hech qanday son kiritilmadi"
    product = 1
    for num in args:
        if num < 0:
            return "Geometrik o'rtani hisoblash uchun barcha sonlar musbat bo'lishi kerak"
        product *= num
    return product ** (1 / len(args))
def harmonik_orta(*args):
    """Harmonik o'rtani hisoblash. Kiritilgan sonlarning harmonik o'rtasini hisoblaydi."""
    if len(args) == 0:
        return "Hech qanday son kiritilmadi"
    reciprocal_sum = 0
    for num in args:
        if num == 0:
            return "Harmonik o'rtani hisoblash uchun nol bo'lmasligi kerak"
        reciprocal_sum += 1 / num
    return len(args) / reciprocal_sum


# --------------------------------------------Dars-------------------------------------
