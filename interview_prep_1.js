Write a program to check for balanced parenthesis in a string. For example
the program should print 'true' for exp = "[c(ddd)sdf]{asdfjl}" and false
for exp = "[asdfkj(ooo)iii}"


1. create library for all parenthesis
2. check if it is a closing value or opening value
3. if the value is an opening parenthesis, add it to a new array (append)
4. if the value is not the parenthesis libaray, skip it
5. if the value is an end parenthesis, check if it matches the last one in the
new array that was created
6. if it does not, return 'false'
7. if it does match, remove(pop) that value from the new array


// Answer in Python 
test_string = "(jiwe1[sdf])"
func check_for_balanced_parentheses(str):
  seen_values = []
  for char in str:
    if is_opening(char):
      seen_values.append(char)
    else:
      if is_match(seen_values[-1], char):
        seen_values.pop()
      else:
        return false

    return true

  matches {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  func is_opening(char):
    if char in matches.keys():
      return true
    return false

  func is_match(first_char, second_char):
    if matches[first_char] == second_char:
      return true
    return false
