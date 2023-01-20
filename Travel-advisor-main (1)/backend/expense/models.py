from django.db import models

# Create your models here.

class Expense(models.Model):
    title = models.CharField(max_length=100, default='title')
    amount = models.CharField(max_length=100, default='1')
    date = models.DateField()

    def __str__(self):
        return self.title
    
    