class People:
    def __init__(self,name,age,dob):
        self.name=name
        self.age=age
        self.dob=dob
    def getDetails(self):
        print(f"Name is {self.name}")


p1=People("Rahul",23,'23/13/45')
print(p1.name)


class Vehicle:
    def __init__(self,name,type) -> None:
        self.myname=name
        self.mytype=type
        pass
    
v1=Vehicle("Corolla",'Pickup')
print(v1.mytype)

class Dog:
    def __init__(self,name,age) -> None:
        self.myName=name
        self.myAge=age
    
    def bark(self):
        print("Woof")
d1=Dog('Frankie',12)
d1.bark()