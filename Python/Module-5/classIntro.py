class Phone:
    price=1233
    name='samsung'
myPhone=Phone()
print(myPhone.price)

class Person:
    name='Rahul'
    type='human'
    
    def call(self):
        return 'call done'
    def message(self,first,second):
        text=f'{first} message {second} message'
        return text
m_phone=Person()
print(m_phone.call())
print(m_phone.message("Hello", "Python"))


class calculator:
    name='Ac Casino'
    def sum(self,a,b):
        return a+b
    def substract(self,a,b):
        return a-b
    
my_calculator=calculator()
calcName=my_calculator.name
print(calcName)
sumOfCalculator=my_calculator.sum(1,3)
print(sumOfCalculator)