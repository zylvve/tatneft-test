export function averageByChunks(arr: number[], chunkSize: number) {
    const averages: number[] = [];
    
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        const average = chunk.reduce((sum, val) => sum + val, 0) / chunk.length;
        averages.push(average);
    }

    return averages;
}
