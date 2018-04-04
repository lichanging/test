
numn=0
numy=0
numy2=0
发大水发个方法很快
for line in open('F:/News_pic_label_train.txt', 'r').readlines():
	arr=line.split('\t')
	if arr[1]=='0':
		numn+=1
	elif arr[1]=='1':
		numy+=1
	else:
		numy2+=1
print numn*1.0/(numy+numn+numy2)
print numy*1.0/(numy+numn+numy2)
print numy2*1.0/(numy+numn+numy2)
	
	