
import heapq
import sys
input = sys.stdin.readline;

N = int(input());

heap = []

for i in range(N):
    number = list(map(int, input().split(' ')));
    for num in number:
        if(len(heap) == N):
            if(heap[0] < num):
                heapq.heappop(heap)
                heapq.heappush(heap, num)    
        else:
            heapq.heappush(heap, num)   

print(heap[0])