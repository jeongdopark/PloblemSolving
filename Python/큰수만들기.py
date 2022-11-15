def solution(number, k):
    stack = []
    
    for num in number:
        while k > 0 and len(stack) > 0 and stack[-1] < num:
            stack.pop()
            k -= 1

        stack.append(num)
    
    while k > 0:
        stack.pop()
        k -= 1

    return ''.join(stack)

print(solution(number="1231234", k=3))