#include<stdio.h>
#include<conio.h>
void main()
{
    int a,b,c;
    printf("\n enter a : ");
    scanf("%d",&a);
    printf("\n enter b : ");
    scanf("%d",&b);
    printf("\n enter c : ");
    scanf("%d",&c);
    if(a>b && a>c)
    {
        printf("\n A is lagre ");
    }
    else if (b>c)
    {
      printf("\n B is large ");
    }
    else
    {
        printf("\n C is large ");
    }
    
}