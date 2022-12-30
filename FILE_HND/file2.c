#include<stdio.h>
#include<conio.h>
int main()
{
    FILE *filePointer ;
    filePointer=fopen("gautam.txt","w");
    int price,gst,sum=0;
    printf("\n enter product price : ");
    scanf("%d",&price);
    printf("\n enter gst : ");
    scanf("%d",&gst);
    printf("\n %d : ",price);
    printf("\n %d : ",gst);
    gst=price*gst/100;
    sum=gst+price;
    printf("\n %d : ",sum);

    fprintf(filePointer,"\n price :  %d ",price);
    fprintf(filePointer,"\n gst : %d",gst);
    fprintf(filePointer,"\n total price : %d ",sum);
    fclose(filePointer);

}