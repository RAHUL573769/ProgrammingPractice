#include <stdio.h>
#define size 5
int stack[size];
int top = -1;

int isFull()
{

    if (top == size - 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void pushAnElement(int value)
{

    if (isFull() == 1)
    {
        printf("Stack is Full");
    }
    else
    {
        top++;
        stack[top] = value;
    }
}

int peek()
{
    return stack[top];
}
int main()
{

    pushAnElement(10);
    pushAnElement(20);
    pushAnElement(30);
    printf("%d", peek());
    return 0;
}
