import heapq


T = int(input());

# 문자 I는 정수 n을 배열에 삽입하는 연산이다.
# 문자 D는 1일 경우 최댓값을 삭제하는 연산, -1일 경우 최솟값을 삭제하는 연산
# 배열이 비어있는 경우 D연산은 무시한다. 
out = [];
for _ in range(T):
    visited = [False] * 1000001
    N = int(input());
    min_heap = [];
    max_heap = [];
    count = 0;

    for i in range(N):
        data = list(map(str, input().split(' ')))
        order = data[0]
        number = int(data[1].strip());
        if(order == 'I'):
            heapq.heappush(max_heap, [-number, i])
            heapq.heappush(min_heap, [number, i])
            visited[i] = True    # 방문

        if(order == 'D'):
            if(number == -1):   # 최솟값 삭제
                while(min_heap and not visited[min_heap[0][1]]):
                    heapq.heappop(min_heap)
                if(min_heap):
                    visited[min_heap[0][1]] = False # 삭제
                    heapq.heappop(min_heap)

            else:   # 최댓값 삭제
                while(max_heap and not visited[max_heap[0][1]]):
                    heapq.heappop(max_heap)
                if(max_heap):
                    visited[max_heap[0][1]] = False
                    heapq.heappop(max_heap)
    
    while max_heap and not visited[max_heap[0][1]]:
        heapq.heappop(max_heap)
    while min_heap and not visited[min_heap[0][1]]:
        heapq.heappop(min_heap)

    if(max_heap and min_heap):
        out.append(f'{-max_heap[0][0]} {min_heap[0][0]}');
    else:
        out.append("EMPTY")

print('\n'.join(out));