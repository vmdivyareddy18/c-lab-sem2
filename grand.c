#include <stdio.h>

struct Student
{
    char name[50];
    int marks;
};

int main()
{
    int n, i;
    struct Student s[100];

    printf("Enter number of students: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("Enter name and marks: ");
        scanf("%s %d", s[i].name, &s[i].marks);
    }

    printf("\nStudent Grades:\n");
    for (i = 0; i < n; i++)
    {
        printf("%s - ", s[i].name);

        if (s[i].marks >= 90)
            printf("A\n");
        else if (s[i