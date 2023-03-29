#include<stdio.h>
int main(){



int n,i,j;
int array[16];

printf("Enter the value of N");
scanf("%d",&n);
printf("Enter the array elements");
for(i=0;i<n;i++)
{
scanf("%d",&array[i]);

}

printf("the array elements");
for(i=0;i<n;i++)
{
printf("%d",array[i]);

}

    return 0;
}