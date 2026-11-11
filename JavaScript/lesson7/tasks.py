arr=[65,95,65,625,65,98,985,567,98,54,654,987,897,65,4856,7]
sum=0
for i in arr:
    if len(str(i))==2 and type(i)==int:
        sum+=int(i)

print(sum)