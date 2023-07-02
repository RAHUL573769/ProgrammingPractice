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


class Device:
    def __init__(self,name,price,color) -> None:
        self.name=name
        self.price=price
        self.color=color
    def run(self):
        return f'Running {self.name}'
class Camera(Device):
    def __init__(self,pixel,name,price,color) -> None:
        self.pixel=pixel
        super().__init__(name,price,color)

myCamera=Camera(color='Blue',name='Oppo',pixel=123,price=12)
myCamera.name='Rahul'
print(myCamera.name)
        
