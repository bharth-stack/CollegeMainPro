from django.db import models

# Create your models here.

class MeetUp(models.Model):
    meetup_title = models.CharField(max_length=100)
    meetup_img = models.ImageField(upload_to='images/')
    address = models.TextField()
    description = models.TextField()

    def __str__(self):
        return self.meetup_title
    
