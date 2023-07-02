class Laptop:
    def __init__(self,name,price,color,memory) -> None:
        self.name=name
        self.price=price
        self.color=color
        self.memory=memory
        pass
    def run(self):
        return f'Runnung Laptiop{self.brand}'
    def code(self):
        return f'Codding Laptop'

myLaptop=Laptop(price=1234,color='blue',memory=123,name="Asus")
print(myLaptop)

print(f'My Laptop Name is {myLaptop.name}')