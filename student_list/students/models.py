from django.db import models


class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField(default=100)

    def __str__(self):
        return self.first_name + " " + self.last_name + " " + str(self.age)