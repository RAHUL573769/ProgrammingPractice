#include <stdio.h>
#include <stdlib.h>

struct node
{

    int data;
    struct node *next;
};
struct node *first;
struct node *middle;
struct node *last;

void traversal(struct node *p)
{

    while (p != NULL)
    {
        printf("The value is %d \n", p->data);
        p = p->next;
    }
}
int main()
{

    first = malloc(sizeof(struct node));
    middle = malloc(sizeof(struct node));
    last = malloc(sizeof(struct node));
    first->data = 16;
    first->next = middle;
    middle->data = 45;
    middle->next = last;
    last->data = 13;
    last->next = NULL;

    traversal(first);
    return 0;
}