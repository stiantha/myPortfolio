# Python Object-Oriented Definitions and Terminology

# Class: A blueprint for creating objects. It defines the attributes and methods that the objects will have.
class MyClass:
    pass

# Object: An instance of a class. It represents a specific entity and can have its own state and behavior.
my_object = MyClass()

# Attribute: A variable associated with a class or object. It holds data specific to the class or object.
class MyClass:
    my_attribute = 10

# Method: A function defined inside a class. It performs some action or provides functionality to the class or object.
class MyClass:
    def my_method(self):
        print("Hello, World!")

# Constructor: A special method used to initialize an object. It is called automatically when an object is created.
class MyClass:
    def __init__(self):
        print("Constructor called")

# Instance Variable: A variable specific to an instance of a class. Each instance can have different values for instance variables.
class MyClass:
    def __init__(self, x):
        self.my_variable = x

# Inheritance: The process of creating a new class from an existing class. The new class inherits the attributes and methods of the existing class.
class ParentClass:
    pass

class ChildClass(ParentClass):
    pass

# Polymorphism: The ability of an object to take on many forms. It allows objects of different classes to be used interchangeably.
class Animal:
    def sound(self):
        pass

class Dog(Animal):
    def sound(self):
        print("Woof!")

class Cat(Animal):
    def sound(self):
        print("Meow!")

# Encapsulation: The bundling of data and methods together within a class. It allows data to be hidden and accessed only through methods.
class MyClass:
    def __init__(self):
        self.__private_data = 10

    def get_private_data(self):
        return self.__private_data

# Abstraction: The process of hiding complex implementation details and providing a simplified interface for using functionality.
from abc import ABC, abstractmethod

class AbstractClass(ABC):
    @abstractmethod
    def my_method(self):
        pass

class ConcreteClass(AbstractClass):
    def my_method(self):
        print("Implementation of my_method")

# Static Method: A method that belongs to the class rather than an instance of the class. It can be called without creating an object.
class MyClass:
    @staticmethod
    def my_static_method():
        print("Static method called")

# Class Variable: A variable shared by all instances of a class. It is defined within the class but outside any method.
class MyClass:
    class_variable = 5