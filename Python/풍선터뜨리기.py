from collections import deque

N = int(input());
array = deque(map(int, input().split(' ')));    # 입력값, 풍선 안에 적혀 있는 번호
balloon = deque();  # 풍선 번호 배열
answer = [];       # 터진 풍선 순서를 담을 배열

for i in range(1, N+1):     # 풍선 배열 요소 넣어주기
    balloon.append(i);

answer.append(balloon.popleft());   # 처음에 1번 풍선을 터뜨리고 시작한다
count = array.popleft();            # 1번 풍선 안에 있는 번호 count에 할당 

while(len(array) != 0):     # 입력으로 받은 배열 길이 0보다 클 때까지
    if(count > 0):          # 양수일 경우 오른쪽으로 이동
        counting = 1
        while(True):        # 이동 횟수와 count와 일치할 때까지 while
            if(count == counting):
                answer.append(balloon.popleft());   # 풍선 제거하고 answer에 넣어준다.
                temp = array.popleft();             # 제거한 풍선 안에 있는 번호를 temp에 할당
                break
            array.append(array.popleft());  # 오른쪽으로 이동
            balloon.append(balloon.popleft());
            counting += 1;
         
    else:               # 음수일 경우 왼쪽으로 이동
        counting = 0
        while(True):
            if(count == counting):
                answer.append(balloon.popleft());  
                temp = array.popleft();
                break
            array.appendleft(array.pop());  # 왼쪽으로 이동
            balloon.appendleft(balloon.pop());
            counting -= 1;
            
    count = temp;       # 제거된 풍선 안에 있던 숫자 temp를 count에 할당
    
for i in range(len(answer)):
    print(answer[i], end = " ");

