#Tuples are another kind of sequence that functions like a list.
# - they have elements which are indexed starting at 0
# Unlike a list, once you create a tuple, you can't change it.
# Both tuples and lists are mutable data types.
# Tuples are more efficient than lists. Dont have to be structural
# In temporary variables we prefer tuples over lists.

string = "Hello"
string[0] = "h"  # This will raise a TypeError since strings are immutable

tuple = (1, 2, 3)
tuple[0] = 4  # This will raise a TypeError since tuples are immutable

list = [1, 2, 3]
list[0] = 4  # This is valid, and the list will become [4, 2, 3]

c = {'a': 14211, 'b': 23, 'c': 31}
print (sorted( [ (v,k) for k,v in c items()] ))