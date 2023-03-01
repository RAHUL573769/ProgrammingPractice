#include<stdio.h>
int main(){

struct car{
char name[5];
float price;
};

struct car car1={"Rolex",3797};
printf("Nmae of Car:%s\n",car1.name);
printf("Price  of Car:%f\n",car1.price);
return 0;
}
