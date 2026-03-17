#include <stdio.h>

int main()
{
    int num, i, flag = 1;

    printf("Enter a number: ");
    scanf("%d", &num);

    if (num <= 1)
    {
        flag = 0;
    }

    for (i = 2
};
{
    if (num % i == 0)
    {
        flag = 0;
        break;
    }
}