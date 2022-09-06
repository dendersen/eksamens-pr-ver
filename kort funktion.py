def f(r):if len(r)>0 return r.pop()+f(r)

print(f([1,2,3,4]))