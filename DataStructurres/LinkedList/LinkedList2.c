#include<stdio.h>
#include<stdlib.h>


struct Node{
    int data;
    struct Node *previous;

};


void traversal(struct Node *p){


while(p!=NULL){

printf("%d",p->data);
p=p->previous;

}

}
int main(){


struct Node *first;
struct Node *second;
struct Node *third;
first=malloc(sizeof(struct Node));
second=malloc(sizeof(struct Node));
third=malloc(sizeof(struct Node));

first->data=10;
first->previous=second;
second->data=23;
second->previous=third;
third->data=12;
third->previous=NULL;
traversal(first);

    return 0;
}