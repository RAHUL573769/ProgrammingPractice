class Animal:
    def __init__(self) -> None:
        print("I am Animal")
        pass
    def who_am_i(self):
        print("I am an aial")
    
class Dog(Animal):
    def __init__(self) -> None:
        Animal.__init__(self)
        print("Dog Created")
    
myAnimal=Animal()

myDog=Dog()
myDog.who_am_i()

class Person:
    def __init__(self,name) -> None:
        self.name=name
        pass
    def myEat(self):
        return print(self.name + "eats rice")
class Rahul(Person):
    def __init__(self, name) -> None:
        Person.__init__(self,name)
        print("Dog Created")

myPerson=Rahul(name='Rahul')
myPerson.myEat()



class Animal:
    def __init__(self,type) -> None:
        self.type=type
        pass
class Dog(Animal):
    def __init__(self, type,name) -> None:
        self.name=name
        Animal.__init__(self,type)
    def mySound(self):
        return print(self.type +self.name+'Can Make Sound')

myDog1=Animal(type='Dog')
felix=Dog(name='felix',type='Dog')
felix.mySound()