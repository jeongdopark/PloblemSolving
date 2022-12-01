from collections import deque

N = int(input());
array = deque(map(int, input().split(' ')));
number = deque();

for i in range(1, N+1):
    number.append(i);

jump = array.popleft();
counter = 0;
answer = [];
answer.append(number.popleft());

while len(array) != 0:
    if(jump > 0):
        counter += 1;
        if(counter == jump):
            counter = 0;
            jump = array.popleft();
            answer.append(number.popleft());
        else:
            array.append(array.popleft());
            number.append(number.popleft());
    else:
        counter -= 1;
        if(counter == jump):
            counter = 0;
            jump = array.pop();
            answer.append(number.pop());
        else:
            array.appendleft(array.pop());
            number.appendleft(number.pop());

for i in answer:
    print(i, end = " ")