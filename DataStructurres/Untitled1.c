#include<stdio.h>
#include<conio.h>

int main(){


int array[100],n,i;
printf("Enter now many elements\n");
scanf("%d",&n);

for(i=0;i<n;i++){

    scanf("%d",&array[i]);
}
printf("The elements of array are\n");
for(i=0;i<n;i++){

    printf("%d\n",array[i]);
}




return 0;
}




