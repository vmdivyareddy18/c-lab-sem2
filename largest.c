/* largest.c - simple program to print the largest of three integers (teaching/demo) */
#include <stdio.h>

int main()
{
    int a, b, c;

    printf("Enter three numbers (separated by spaces) and press Enter:\n");
    scanf("%d %d %d", &a, &b, &c);
    if (a >= b && a >= c)
        printf("Largest number is %d", a);
    else if (b >= a && b >= c)
        printf("Largest number is %d", b);
    else
        printf("Largest number is %d", c);
    {
        printf{"/n"}
    }
    return 0;
}
