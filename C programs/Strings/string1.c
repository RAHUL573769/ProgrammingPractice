#include<stdio.h> 

int main()
{
   //Edit below this line
char word[50]="Hello World";
// char word2[12]={"H","E","L","L","O","","W","O","R","L","D","\0"};
char word2[11]={'H','E','L','L','O','W','O','R','L','D','\0'};
printf("%s",&word[5]);

printf("%s",word);
    return 0; 
}