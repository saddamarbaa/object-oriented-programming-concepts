# Object Oriented Programming
# Class and Object in Python

# Robot class

class Robot:
    
    # instance attribute
    def __init__(self, name, color, weight):

        self.name = name
        self.color = color
        self.weight = weight
        
    # instance method
    def introduce_self(self):
        print("My name is : " + self.name)

# instantiate the object 1
# Create an object of Robot
robot1 = Robot("Sadam", "blue", 30)

# call our instance methods
robot1.introduce_self()

# instantiate the object 2
# Create another object of Robot
robot2 = Robot("Ali", "red", 33)

# call our instance methods
robot2.introduce_self()


# person class

class Person:
    
    # instance attribute
    def __init__(self, name, personality, is_siting):
   
        self.name = name
        self.persoality = personality
        self.is_siting = is_siting
        
        
    # instance methods
    
    def sit_down(self):
        self.is_siting = True;
    
    def stand_up(self):
        self.is_siting = False; 
        
        
# instantiate the object 1
person1 = Person("John", "Aggressive", False)

# instantiate the object 2
person2 = Person("Hanan", "Talkative", True)

