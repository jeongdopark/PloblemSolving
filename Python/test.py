from collections import deque

N = int(input());
array = deque(map(int, input().split(' ')));
balloon = deque();
answer = [];

for i in range(1, N+1):
    balloon.append(i);

answer.append(balloon.popleft());
count = array.popleft();

while(len(array) != 0):

    if(count > 0):
        counting = 1
        while(True):
            if(count == counting):
                answer.append(balloon.popleft());
                temp = array.popleft();
                break
            array.append(array.popleft());
            balloon.append(balloon.popleft());
            counting += 1;

            
    else:
        counting = 0
        while(True):
            if(count == counting):
                answer.append(balloon.popleft());
                temp = array.popleft();
                break
            array.appendleft(array.pop());
            balloon.appendleft(balloon.pop());
            counting -= 1;

    count = temp;
    
for i in range(len(answer)):
    print(answer[i], end = " ");
