/**
 * @param { Array<number> } numbers
 * @return { {min: number, max: number, avg: number } }
 */
function findMinMaxAndAvg(numbers) {
    let i;
    let j;
    let n = 0;
    let sum=0;
    let avg1;
    let em;
    let min;
    let max;

    for( i = 0; i <= numbers.length;i++ )
    {
        for( j = 0; j <= numbers.length-1;j++)
        {
            if(numbers[j] >  numbers[j+1])
            {
                em = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = em;
            }
        }
        
    }
    for(i = 0; i <= numbers.length-1;i++)
    {
        sum = sum + numbers[i];
        n++;
    }
    avg1 = Math.round(sum/n);

    let obj = { 
        min : numbers[0],
        max : numbers[numbers.length-1],
        avg : avg1,
    }; 
    
    return obj;
    
}

findMinMaxAndAvg([5, 2, 1, 4, 8, -1, 0])

module.exports = findMinMaxAndAvg
