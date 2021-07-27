#include<stdio.h>

int main(){
    int num1, num2, num3, num4;
    int res = maxOfFour(75,4,3,65);
    printf("%d",res);
    return 0;
}

int maxOfFour(int num1, int num2, int num3, int num4){
    int numbers[4] = {num1, num2, num3, num4};
    int max = numbers[0];
    for(int i=0; i<4; i++){
        if(max < numbers[i]){
            max = numbers[i];
        }
    }
    return max;
}