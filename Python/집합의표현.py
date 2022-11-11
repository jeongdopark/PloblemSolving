import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline
# 0은 합집합, 1은 두 원소가 같은 집합에 포함되어 있는지 확인하는 연산
n, m = map(int, input().split()) # n+1개의 집합, m은 입력으로 주어지는 연산의 개수

parents = []
for i in range(n+1):
    parents.append(i)

answer = []
for i in range(len(parents)):
    parents[i] = i;


def find_parent(x):
    if parents[x] != x:
        parents[x] = find_parent(parents[x])
    return parents[x]

def union_parent(a, b):

    a_parent = find_parent(a)
    b_parent = find_parent(b)
    if a_parent < b_parent:
        parents[b_parent] = a_parent
    else:
        parents[a_parent] = b_parent

for i in range(m):
    a, b, c = map(int, input().split())
    
    if a == 0:  # 합집합
        union_parent(b, c)
    elif a == 1:
        if find_parent(b) != find_parent(c):
            print("NO")
        else:
            print("YES")

